const mongoose = require("mongoose");

const bloodRequestSchema = new mongoose.Schema(
  {
    bloodGroup: { type: String, required: true },
    city: { type: String, required: true },
    hospital: String,
    urgency: String,
    note: String,

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    acceptedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },

    status: {
      type: String,
      enum: ["open", "accepted"],
      default: "open"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("BloodRequest", bloodRequestSchema);
