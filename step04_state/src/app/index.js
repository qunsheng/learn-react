var React = require('react');
var ReactDOM = require('react-dom');


var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
            age: 30
        }
    }, //getInitialState
    render: function(){
        var ager = setTimeout(function() {
            this.setState({
                age:35
            });

        }.bind(this), 5000);

        var todos = this.state.todos;
        todos = todos.map( function(item, index){
            return(
                <li> {item} </li>
            )
        })

        return(
            <div id="todo-list">
                <p> The busiest people have the most leisure...</p>
                <p> {this.state.age} </p>
                <ul>
                    {todos}
                </ul>

            </div>

        );
    }
});


ReactDOM.render(<TodoComponent />, document.getElementById('component-wrapper'));