import db from "../config/db.js";
import { getDistance } from "../utils/distance.js";

export const addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (
    !name?.trim() ||
    !address?.trim() ||
    latitude == undefined ||
    longitude == undefined
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({
      message: "Coordinates must be numbers",
    });
  }

  try {
    const query =
      "INSERT INTO schools (name,address,latitude,longitude) VALUES (?,?,?,?)";

    const [result] = await db.execute(query, [
      name,
      address,
      latitude,
      longitude,
    ]);

    res.status(201).json({
      success: true,
      message: "School added successfully",
      data: {
        id: result.insertId,
        name,
        address,
        latitude,
        longitude,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Database Error",
    });
  }
};

export const listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (latitude === undefined || longitude === undefined) {
    return res.status(400).json({
      success: false,
      message: "User location required",
    });
  }

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({
      success: false,
      message: "Invalid coordinates",
    });
  }

  try {
    const [results] = await db.execute("SELECT * FROM schools");

    const sortedSchools = results.map((school) => {
      const distance = getDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude,
      );

      return { ...school, distance };
    });

    sortedSchools.sort((a, b) => a.distance - b.distance);

    res.status(200).json({
      success: true,
      message: "Schools fetched successfully",
      data: sortedSchools,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Database Error",
    });
  }
};
