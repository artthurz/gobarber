import Peoples from '../models/Peoples';

class PeoplesController {
  async index(req, res) {
    const peoples = await Peoples.findAll({
      peoples: ['id', 'name', 'birth_date', 'fone', 'email'],
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
    
    return res.json(peoples);
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
    
    // console.log(req.params.id);

    // await Peoples.delete({},{ where: { id: req.params.id } });

    return res.json({success: true, mensagem: "Sem funcionalidade"});
  }
}

export default new PeoplesController();
