var App = React.createClass({
	render:function(){
		return(
			// render method can only output one UI element at a time - you need to wrap everything into a parent node
			<div>
				<b>BOLD</b>
				<h1>Hello World</h1>
			</div>
		);
	}
});

React.render(<App />, document.body);