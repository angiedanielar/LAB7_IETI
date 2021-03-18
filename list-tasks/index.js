var app = require("../App");

module.exports = async function (context, req) {
	
    // Implement the response
    const responseMessage = { response: app.get()};

    context.res = {
        status: 200,
        body: responseMessage
    };
}