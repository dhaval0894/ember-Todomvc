import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	classNameBindings: ['editing'],
    editing: false,
    actions: {
        editTodo() {
            this.toggleProperty('editing');
        },
        submitTodo() {
	        let todo = this.get('todo');
	        if (todo.get('title') === "") {
	            this.sendAction('deleteTodo', todo);
	        } else {
	            this.sendAction('updateTodo', this.get('todo'));
	        }
	        this.set('editing', false);
    	},
    	deleteTodo() {
	        let todo = this.get('todo');
	        if (confirm("Want to delete?")) {
             	this.sendAction('deleteTodo', todo);
          	}   
    	}

    }
});
