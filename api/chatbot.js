// In api/chatbot.js (or any other filename)
// This code uses Node.js and Axios library to make HTTP requests

const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const userMessage = req.query.msg;
    const apiUrl = 'http://api.brainshop.ai/get?bid=181113&key=RaxcqPK29y8eEeSA&uid=1&msg=' + encodeURIComponent(userMessage);

    const response = await axios.get(apiUrl);
    const chatbotResponse = response.data.cnt;

    res.status(200).json({ response: chatbotResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
