var React = require('react');
var ReactDOM = require('react-dom');


var MyComponent = React.createClass({
    render: function(){
        return(
            <h1>Hello Component!</h1>

        );
    }
});

ReactDOM.render(<MyComponent />, document.getElementById('component-wrapper'));