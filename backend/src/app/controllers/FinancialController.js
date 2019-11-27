import Financial from '../models/Financial';

class FinancialController {
  
  async index(req, res) {
    const financial = await Financial.findAll({
      where: { status: true },
      attributes: ['id', 
                    'appointments_id',
                    'total_value',
                    'discount_percentage',
                    'discount_value',
                    'observation',
                    'status',
                    'created_at',
                    'updated_at'
                  ], 
    });

    return res.json(financial);
  }

  async store(req, res) {
    const {
      appointments_id,
      total_value,
      discount_percentage,
      discount_value,
      observation,
      status,
      created_at,
      updated_at,
    } = req.body;

    const financial = await Financial.create({
      appointments_id,
      total_value,
      discount_percentage,
      discount_value,
      observation,
      status,
      created_at,
      updated_at,
    });

    return res.json(financial);
  }

  async update(req, res) {
    const {
      appointments_id,
      total_value,
      discount_percentage,
      discount_value,
      observation,
      created_at,
      updated_at,
    } = req.body;

    const financial = await Financial.update(
      {
        appointments_id,
        total_value,
        discount_percentage,
        discount_value,
        observation,
        created_at,
        updated_at,
      },
      { where: { id: req.params.id } }
    );

    return res.json({
        appointments_id,
        total_value,
        discount_percentage,
        discount_value,
        observation,
        created_at,
        updated_at,
    });
  }
  
  async delete(req, res) {
    const financial = await Financial.findByPk(req.params.id);

    financial.status = false;

    await financial.save();

    return res.json(financial);
  }
}

export default new FinancialController();
