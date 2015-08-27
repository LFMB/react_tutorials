//this is a component
var App = React.createClass({
	getInitialState: function(){
		return{
			txt: 'Change me via the input field'
		}
	},
	update: function(e){
		this.setState({txt: e.target.value});
	},
	render:function(){
		//txt and update are props
		// txt prop comes from App component
		//update prop calles the custom update method
		return(
			<div>
				<Widget txt={this.state.txt} update={this.update} />
			</div>
		);		
	}
});

//this is also a component
// Widget doesn't have any state - just properties 
var Widget = React.createClass({
	render: function(){
		return(
			<div>
				<input type="text" onChange={this.props.update} />
				<br />
				<p>Like magic?</p>
				<b>{this.props.txt}</b>
			</div>
		);
	}
});

React.render(<App txt="this is the txt prop" />, document.body);