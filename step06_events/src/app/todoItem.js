var React = require('react');

//Create TodoItem component
var TodoItem = React.createClass({
    render: function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name" >{this.props.item}</span>
                    <span className="item-remove" onClick={this.handleDelete}> x </span>
                </div>
            </li>
        );
    },
    
    //Custom functions
    handleDelete: function(){
        // console.log(" handle delete...");
        this.props.onDelete(this.props.item);     
    }
});


module.exports = TodoItem;
