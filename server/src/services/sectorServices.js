const { SectorModel } = require("../models/sectorModel");

//functions that interact with the mongodb sector model
const createSector = async (sector) => {
    const newSector = await SectorModel.create(sector);
    return newSector;
};

const getSectors = async () => {
    const sectors = await SectorModel.find();
    return sectors;
};

const getSectorById = async (id) => {
    const sector = await SectorModel.findById(id);
    return sector;
};

const findASectorAndUpdate = async (id, payload) => {
    const updatedSector = await SectorModel.findByIdAndUpdate(id, payload);
    return updatedSector;
};

module.exports = {
    createSector,
    getSectorById,
    getSectors,
    findASectorAndUpdate
};