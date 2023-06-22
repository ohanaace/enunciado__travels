import userTravelRepository from "../repositories/user-travels.repository.js";

const getTravelInfo = async (page) => {
    if(parseInt(page) <= 0 || isNaN(page)){
        throw new Error("Invalid page value");
    }
    const result = await userTravelRepository.getInfoDB(page);
    if (result.rowCount > 100) {
        throw new Error("Too many results");
    }
    return result.rows
};

const userTravelService = { getTravelInfo };

export default userTravelService