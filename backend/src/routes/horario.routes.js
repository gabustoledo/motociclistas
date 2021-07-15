const Router = require("express");
const router = Router();

const horarioCtrl = require("../controllers/horario.controller");

// Create
router.post("/", horarioCtrl.create);

// Get all users
router.get("/", horarioCtrl.getHorarios);

// Get one user
router.get("/:id", horarioCtrl.getHorario);

// Update user
router.put("/:id", horarioCtrl.updateHorario);

// Delete user
router.delete("/:id", horarioCtrl.deleteHorario);

module.exports = router;