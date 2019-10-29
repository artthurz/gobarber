import Peoples from '../models/People';

class PeoplesController {
  async index(req, res) {
    const peoples = await Peoples.findAll({
      attributes: ['id', 'name', 'birth_date', 'fone', 'email'],
    });

    return res.json(peoples);
  }

  async store(req, res) {
    const { users_id, name, birth_date, fone, cpf, rg, provider, email, created_at, updated_at } = req.body;

    const peoples = await Peoples.create({
      users_id,
      name,
      birth_date,
      fone,
      cpf,
      rg,
      provider,
      email,
      created_at,
      updated_at
    });
    
    return res.json(Peoples);
  }

  async update(req, res) {
    const { users_id, name, birth_date, fone, cpf, rg, provider, email, created_at, updated_at  } = req.body;

    const peoples = await Peoples.update(
      {
        users_id,
        name,
        birth_date,
        fone,
        cpf,
        rg,
        provider,
        email,
        created_at,
        updated_at
      },
      { where: { id: req.params.id } }
    );

    return res.json({
      users_id,
      name,
      birth_date,
      fone,
      cpf,
      rg,
      provider,
      email,
      created_at,
      updated_at
    });
  }

  async delete(req, res) {
    const people = await Peoples.findByPk(req.params.id, {});

    await people.delete();

    return res.json({success: true});
  }
}

export default new PeoplesController();
