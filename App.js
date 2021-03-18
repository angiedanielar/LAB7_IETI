var App = module.exports = {
    list: [],
    push: function(task) {
        App.list.push(task);
    },
    get: function() {
        return App.list;
    }
}