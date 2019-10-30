import Services from '../models/Services';

class ServicesController {
  async index(req, res) {
    const services = await Services.findAll({
<<<<<<< HEAD
      where: { canceled_at: null },
=======
>>>>>>> 92011715f34b9c5c39d5641d9b2fbd9c04f9f710
      attributes: ['id', 'name', 'description', 'price', 'duration', 'active'],
    });

    return res.json(services);
  }

  async store(req, res) {
    const { name, description, price, duration, active } = req.body;

    const services = await Services.create({
      name,
      description,
      price,
      duration,
      active,
    });

    return res.json(services);
  }

  async update(req, res) {
    const { name, description, price, duration, active } = req.body;

    const services = await Services.update(
      {
        name,
        description,
        price,
        duration,
        active,
      },
      { where: { id: req.params.id } }
    );

    return res.json({
      name,
      description,
      price,
      duration,
      active,
    });
  }
<<<<<<< HEAD

  async delete(req, res) {
    const services = await Services.findByPk(req.params.id);

    services.canceled_at = new Date();

    await services.save();

    return res.json(services);
  }
=======
>>>>>>> 92011715f34b9c5c39d5641d9b2fbd9c04f9f710
}

export default new ServicesController();
