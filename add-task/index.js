var cont = 0;

var app = require("../App");

module.exports = async function (context, req) {
	cont =++ cont;

    const task = req.body;
	task.id = cont;
	
	app.push(task);
	
    // Implement the response
    const responseMessage = { response: task};

    context.res = {
        status: 201,
        body: responseMessage
    };
}