/** @jsx React.DOM */
var APP = React.createClass({
	render:function(){
		return(
			<div>Hello</div>
		)
	}
});
React.renderComponent(<APP />, document.body)