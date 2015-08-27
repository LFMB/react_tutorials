var APP = React.createClass({
	render:function(){
		return(
			React.DOM.div(null, "Hello")
		)
	}
});
React.renderComponent(APP(null ), document.body)