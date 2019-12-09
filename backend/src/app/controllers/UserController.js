import * as Yup from 'yup';
import User from '../models/User';
import File from '../models/File';
import Audit from '../models/Audit';

class UserController {
  async index(req, res) {
    const users = await User.findAll({
      where: { status: true },
      users: ['id', 'name', 'login', 'admin', 'status'],
    });

    return res.json(users);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      login: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    const avatar_id = '1';

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { login: req.body.login } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, login, admin, role_id } = await User.create({
      ...req.body,
      avatar_id,
    });

    const auditUser = {
      user_id: req.userID,
      date_action: new Date(),
      operation: 'Insert',
      table_action: 'Users',
      text_action: `ID: ${id}, Name: ${name}, Login: ${login}, Role_id: ${role_id}, Admin: ${admin}, Avatar_id: ${avatar_id}`,
    };
    await Audit.create(auditUser);

    return res.json({
      id,
      name,
      login,
      admin,
      avatar_id,
      role_id,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      login: Yup.string(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { login, oldPassword } = req.body;

    const user = await User.findByPk(req.userID);

    if (login !== user.login) {
      const userExists = await User.findOne({
        where: { login },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.cheackPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    await user.update(req.body);

    const { id, name, avatar } = await User.findByPk(req.userID, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    const auditUser = {
      user_id: req.userID,
      date_action: new Date(),
      operation: 'Update',
      table_action: 'Users',
      text_action: `ID: ${id}, Name: ${name}, Login: ${login}, Avatar: ${avatar}`,
    };
    await Audit.create(auditUser);

    return res.json({
      id,
      name,
      login,
      avatar,
    });
  }

  async updateAdm(req, res) {
    const { name, login, role_id } = req.body;

    console.log(req.body);

    const userExists = await User.findOne({
      where: { login },
    });

    console.log(req.params.id, userExists.id);

    if (req.params.id != userExists.id) {
      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    const user = await User.update(
      { name, login, role_id },
      { where: { id: req.params.id } }
    );

    const auditUser = {
      user_id: req.userID,
      date_action: new Date(),
      operation: 'Update',
      table_action: 'Users',
      text_action: `ID: ${req.params.id}, Name: ${name}, Login: ${login}, Role_id: ${role_id}`,
    };
    await Audit.create(auditUser);

    return res.json({
      name,
      login,
      role_id,
    });
  }

  async delete(req, res) {
    const users = await User.findByPk(req.params.id);

    users.status = false;

    await users.save();

    return res.json(users);
  }
}

export default new UserController();
