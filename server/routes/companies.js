module.exports = (express) => {
  var router = express.Router();

  router.post('/', async (req, res) => {
    const { name } = req.body;
    if (!name) {
      res.sendStatus(400);
      return;
    }

    let fields;
    try {
      fields = await req.sql.query('INSERT INTO companies (name) VALUES (?) ', [ name ]);
    } catch (e) {
      res.sendStatus(500);
      return;
    }

    res.status(200).json({ id: fields.insertId, name });
  });

  router.get('/', async (req, res) => {
    let rows;
    try {
        rows = await req.sql.query('SELECT * FROM companies');
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
      rows = await req.sql.query('SELECT * FROM companies WHERE id = ?', [ userId ]);
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

  return router;
}