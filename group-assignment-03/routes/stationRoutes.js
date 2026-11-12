
const express = require("express");
const router = express.Router();

const db = require("../database/db");
const searchStations = require("../controllers/stationSearch");
const { validateStation } = require("../controllers/stationValidation");

// Search stations by cuisine
router.get("/", validateStation, searchStations(db));

module.exports = router;
