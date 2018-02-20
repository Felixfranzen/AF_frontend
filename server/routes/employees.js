module.exports = (express) => {
  var router = express.Router();

  router.post('/', async (req, res) => {
    const { name, company_id } = req.body;
    if (!name) {
      res.sendStatus(400);
      return;
    }

    let fields;
    try {
      fields = await req.sql.query('INSERT INTO employees (name, company_id) VALUES (?, ?) ', [ name, company_id ]);
    } catch (e) {
      res.sendStatus(500);
      return;
    }

    res.status(200).json({ insert_id: fields.insertId });

  });

  router.get('/', async (req, res) => {
    const companyId = req.query.company_id;
    const filter = req.query.filter;
    let rows;
    try {
      if (companyId) {
        rows = await req.sql.query('SELECT * FROM employees WHERE company_id = ?', [ companyId ]);
      } else if (filter === 'unassigned'){
        rows = await req.sql.query('SELECT * FROM employees WHERE company_id IS NULL');
      } else {
        rows = await req.sql.query('SELECT * FROM employees');
      }
    } catch (e) {
      res.sendStatus(500);
      return;
    }

    if (!rows.length){
      res.sendStatus(204);
      return;
    }
    res.status(200).json(rows);
  });

  router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    let rows;
    try {
      rows = await req.sql.query('SELECT * FROM employees WHERE id = ?', [ userId ]);
    } catch (e) {
      res.sendStatus(500);
      return;
    }

    if (!rows.length){
      res.sendStatus(404);
      return;
    }

    res.status(200).json(rows);
  });

  router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const { name, company_id } = req.body;
    if (!name){
      res.sendStatus(400);
      return;
    }

    try {
      fields = await req.sql.query('UPDATE employees SET ? WHERE id = ?', [{ name, company_id }, userId ]);
    } catch (e) {
      res.sendStatus(500);
      return;
    }

    res.status(200).json({
      id: parseInt(userId),
      name,
      company_id: parseInt(company_id)
    });


  });

  return router;
}