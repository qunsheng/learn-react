var React = require('react');

//Create TodoItem component
var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name" >{this.props.item}</span>
                </div>
            </li>
        );
    }
});


module.exports = TodoItem;
