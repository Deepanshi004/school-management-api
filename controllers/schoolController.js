const db = require('../db');

exports.addSchool = async (req,res) => {
    const{ name, address, latitude, longitude } = req.body;

    if(!name || address || latitude || longitude){
        return res.status(400).json({ error: 'Alll fields are required' });
    }
    try{
        const [result] = await db.execute(
            'insert into schools (name, address, latitude, longitude) values(?,?,?,?)',
            [name,address,latitude,longitude]
        );
        res.status(201).json({error: 'School addeed successfully', id:result.insertId});
    }
    catch(error){
        res.status(500).json({error: 'database eroor', details: error.message })
    }
};

function getDistance(lat1, log1, lat2, log2){
    const toRad = deg => (deg * Math.PI) /180;
    const R = 6371;
    const dLat = toRad(lat2-lat1);
    const dLon = toRad(log2-log1);
    const a = 
    Math.sin(dLat /2 ) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2))*
    Math.sin(dLon /2 ) * Math.sin(dLon / 2);
    const c = 2* Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R = c;
}

exports.listSchools= async(req,res) => {
    const userLat = parseFloat(req.query.latitude);
    const userLon = parseFloat(req.query.longitude);

    if (isNaN(userLat) || isNaN(userLon)) {
        return res.status(400).json({error: "Invalid latitude or longitude"});
    }

    try{
        const [schools] = await db.query('select * from schools');
        const sorted = schools.map(schools =>({
            ...school,
            distance: getDistance(userLat,userLon, school.latitude, school.longitude)
        })).sort((a,b) => a.distance - b.distance);

        res.status(200).json(sorted);
    }
    catch(error){
        res.status(500).json({error: 'Database error', details: error.message});
    }

};
