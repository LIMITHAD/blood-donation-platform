const express = require("express");
const router = express.Router();

const {
  createRequest,
  getRequests,
  getMatchingUsers,
  acceptRequest   // ✅ ADD THIS
} = require("../controllers/requestController");

// Create new blood request
router.post("/", createRequest);

// Get all requests
router.get("/", getRequests);

// Get matching users
router.get("/match", getMatchingUsers);

// Accept request
router.put("/:id/accept", acceptRequest);

module.exports = router;
