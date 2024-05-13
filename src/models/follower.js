const mongoose = require('mongoose');

const followerSchema = new mongoose.Schema({
    follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  me_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'follow_back'],
    required: true,
    default: 'pending'
  },
  is_follow_back: {
    type: Boolean,
    required: true,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

const Follower = mongoose.models.Follower || mongoose.model("Follower", followerSchema);

module.exports = Follower;