const mongoose = require('mongoose');

const sectorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sectors: {
        type: String,
        required: true
    },
    term: {
        type: Boolean,
        required: true
    },
});

const SectorModel = mongoose.model("sector", sectorSchema);

module.exports = {SectorModel};