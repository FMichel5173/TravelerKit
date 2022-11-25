const express = require("express");

const router = express.Router();

const Reverso = require("reverso-api");

const reverso = new Reverso();

const translate = (req, res) => {
  reverso.getTranslation(
    req.query.q,
    req.query.source,
    req.query.target,
    (err, response) => {
      if (err) {
        console.error(err.message);
        res.sendStatus(500);
      } else {
        res.json(response);
      }
    }
  );
};

router.get("/translate", translate);

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
