var React = require('react');
var ReactDOM = require('react-dom');


var MyComponent = React.createClass({
    render: function(){
        return(
            <div>
                <h1> {this.props.msg}</h1>
                <p> <strong> Cheese name: </strong> {this.props.cheese.name} </p>
                <p> <strong> Cheese smell factor: </strong> {this.props.cheese.smellFactor} </p>
                <p> <strong> Cheese price: </strong> {this.props.cheese.price} </p>

            </div>

        );
    }
});

var myCheese = {name: 'Cammembert', smellFactor: 'Extreme pong', price: '3.50'};

ReactDOM.render(<MyComponent msg="I like sheese" cheese={myCheese} />, document.getElementById('component-wrapper'));