import mongoose from "mongoose";

const conversationSchema = mongoose.Schema(
  {
    members: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
  {
    timestemp: true,
  }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
