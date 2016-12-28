const router = require('express').Router();
// still need to add middleware for buildings here and require it
const {getAllBuildings, getBuildingById} = require('../models/buildings');
const {getApartmentById, getAllApartments} = require('../models/apartments');
// still need to add middleware for apartments here and require it
const sendJSONresp = (req, res) => res.json(res.rows);
const sendOKresp = (req, res) => res.status(204).send();

// BUILDINGS ROUTES
// ALWAYS the most specific route at the top
router.route('/buildings/:id')
  .get(getBuildingById, sendJSONresp);

router.route('/buildings')
  .get(getAllBuildings, sendJSONresp);

// APARTMENTS ROUTES
router.route('/apartments/:id')
  .get(getApartmentById, sendJSONresp);

router.route('/apartments')
  .get(getAllApartments, sendJSONresp);


module.exports = router;
