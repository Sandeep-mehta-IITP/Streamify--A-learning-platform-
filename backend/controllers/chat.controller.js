import { generateStreamToken } from "../lib/stream.js";

const getStreamToken = async (req, res) => {
  try {
    const token = generateStreamToken(req.user.id);
    res.status(200).json({ token });
  } catch (error) {
    console.log("error in get stream token controller", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { getStreamToken };
