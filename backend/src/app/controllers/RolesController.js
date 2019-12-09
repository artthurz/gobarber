import * as Yup from 'yup';
import Role from '../models/Role';

class RolesController {
  async index(req, res) {
    const roles = await Role.findAll();

    return res.json(roles);
  }

  async store(req, res) {
    const role = await Role.create({
      ...req.body,
    });

    return res.json({
      role,
    });
  }

  async update(req, res) {
    const dados = req.body;

    const role = await Role.update(dados, { where: { id: req.params.id } });

    return res.json(role);
  }
}

export default new RolesController();
