/*

var App = React.createClass{(
	render: function(){
		return <Button> I <Heart /> React</Button>
	}
)};
var Button = React.createClass({
	render:function(){
		return <button>{this.props.children}</button>
	}
});

var Heart = React.createClass({
	render:function(){
		return <span className="glyphicon glyphicon-heart"></span>
	}
});

React.render(<App />, document.body);

*/

var App = React.createClass({
	render: function(){
		return <Button> <Heart /> React</Button>
	}
});

var Button = React.createClass({
	render: function(){
		return	<button>{this.props.children}</button>
	}
});

// nested component 
var Heart = React.createClass({
	render: function(){
		return <span className="glyphicon glyphicon-heart"></span>
	}
});


React.render(<App />, document.body);