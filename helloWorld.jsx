<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Hello World</title>
	<script src="http://fb.me/react-0.12.2.js"></script>
	<script src="http://fb.me/JSXTransformer-0.12.2.js"></script>
</head>
<body>

// JSX method
<script type="text/jsx">
	 var App = React.createClass({
	 	render: function(){
	 		return <h3>Hello World</h3>
	 	}
	 });
</script>

React.render(<App />, document.body);

// method 2
<script>
	/*
	var App = React.createClass({
		render:function(){
			return React.DOM.h1(null, "Hi there")
		}
	});
*/
</script>

React.render(App(), document.body);

// method 3
<script>
/*
var App = React.createClass({
	render: function(){
		return React.createElement("h1", null, "Yo")
	}
});

React.render(React.createElement(App), document.body);
*/
</script>



</body>
</html>