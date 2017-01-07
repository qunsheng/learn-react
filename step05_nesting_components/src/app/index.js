var React = require('react');
var ReactDOM = require('react-dom');

// Module requires
var TodoItem = require('./todoItem');


var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
        }
    }, //getInitialState
    render: function(){
        var todos = this.state.todos;
        todos = todos.map( function(item, index){
            return(
                <TodoItem item={item} key={index}/>
            )
        })

        return(
            <div id="todo-list">
                <p> The busiest people have the most leisure......</p>
                <ul>
                    {todos}
                </ul>

            </div>

        );
    }
});


ReactDOM.render(<TodoComponent />, document.getElementById('component-wrapper'));