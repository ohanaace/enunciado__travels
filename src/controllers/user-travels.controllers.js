import userTravelService from "../services/user-travels.services.js";

const getTravelInfo = async (req, res) => {
    const { page } = req.query;
    try {
        const response = await userTravelService.getTravelInfo(page);
        res.json(response);
    } catch (error) {
        if (error.message === "Too many results") return res.status(500).json({ error: "Too many results" });
        if (error.message === "Invalid page value") return res.status(400).json({ error: "Invalid page value" })
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const userTravelController = { getTravelInfo };

export default userTravelController;