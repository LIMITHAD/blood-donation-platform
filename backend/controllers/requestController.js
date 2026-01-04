const BloodRequest = require("../models/BloodRequest");
const User = require("../models/User");

// CREATE BLOOD REQUEST
const createRequest = async (req, res) => {
  try {
    const request = await BloodRequest.create(req.body);
    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: "Failed to create request" });
  }
};

// GET ALL REQUESTS (VISIBLE TO ALL LOGGED USERS)
const getRequests = async (req, res) => {
  try {
    const requests = await BloodRequest.find()
      .populate("createdBy", "name phone city")
      .populate("acceptedBy", "name phone")
      .sort({ createdAt: -1 });

    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch requests" });
  }
};


// FIND MATCHING USERS (SIMPLE LOGIC)
const getMatchingUsers = async (req, res) => {
  try {
    const { bloodGroup, city } = req.query;

    const users = await User.find({
      bloodGroup,
      city
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to find matching users" });
  }
};
const acceptRequest = async (req, res) => {
  try {
    const { id } = req.params;   // ✅ FIX HERE
    const { userId } = req.body;

    const request = await BloodRequest.findById(id);

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    if (request.status === "accepted") {
      return res.status(400).json({ message: "Request already accepted" });
    }

    request.acceptedBy = userId;
    request.status = "accepted";

    await request.save();

    res.json(request);
  } catch (error) {
    res.status(500).json({ message: "Failed to accept request" });
  }
};

module.exports = {
  createRequest,
  getRequests,
  getMatchingUsers,
  acceptRequest
};


