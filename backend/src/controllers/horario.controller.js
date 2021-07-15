const Horario = require("../models/Horario");

const horarioCtrl = {};

// Create and save user.
horarioCtrl.create = async (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create user
  const newHorario = new Horario(req.body);

  // Save user
  const createdHorario = await newHorario.save();

  res.status(200).send(createdHorario)
};

// Get all users.
horarioCtrl.getHorarios = (req, res) => {
  Horario.find().
	then((data) => {
		res.status(200).send(data)
	})
};

// Get one user by id.
horarioCtrl.getHorario = (req, res) => {
  const id = req.params.id;

  Horario.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving User with id=" + id });
    });
};

// Update a user by id.
horarioCtrl.updateHorario = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Horario.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`,
        });
      } else {
        res.status(204).send({ message: "User was updated successfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    });
};

// Delete a user by id.
horarioCtrl.deleteHorario = (req, res) => {
  const id = req.params.id;

  Horario.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      } else {
        res.status(204).send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};

// Export all function controller.
module.exports = horarioCtrl;