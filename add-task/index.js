var cont = 0;
var lista = [];

module.exports = async function (context, req) {
	cont =++ cont;
	
    context.log('Adding a task to the planner');

    const task = req.body;
	task.id = cont;
	
	lista.push(task);
    // Implement the response
    const responseMessage = { response: task};

    context.res = {
        status: 201,
        body: responseMessage
    };
}