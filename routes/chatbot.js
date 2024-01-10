const chatbot = require("../chatbot/chatbot");

module.exports = (app) => {
  app.post("/chatbot", async (req, res) => {
    const { userQuery, userId } = req.body;
    const resultQuery = await chatbot.clientQueryChatbot(userQuery, userId);
    // console.log(resultQuery);

    const resObj = {
      intentName: resultQuery.intent.displayName,
      userQuery: resultQuery.queryText,
      chatbotResponse: resultQuery.fulfillmentText,
    };
    res.send(resObj);
  });
};
