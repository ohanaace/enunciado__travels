import connection from "../database/database.js";

const getInfoDB = async (page) => {
   return await connection.query(`
    select p."fullName", 
        COUNT(p) as "viagens"  
        from passengers as p
        JOIN passenger_travels 
            ON passenger_travels."passengerId" = p.id
        JOIN travels 
            ON travels.id = passenger_travels."travelId"
        WHERE p."fullName" like '%Brooke%'
        GROUP BY p."fullName" 
        ORDER BY "viagens" desc
        ;`);
};

const userTravelRepository = { getInfoDB };

export default userTravelRepository;