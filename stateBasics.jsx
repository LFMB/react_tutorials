var App = React.createClass({

	//funtion returns an object
	getInitialState:function(){
		return{
			txt: 'See me change',
			id: 0
		}
	},
	//custom function 
	update: function(e){
		//comes from an input field
		this.setState({txt: e.target.value});
	},
	render:function(){
		// give an event handler
		return(
			<div>
				<input type="text" onChange={this.update} />
				<p>The following text is updated whenever there is an onchange event in the about input field</p>
				<h1>{this.state.txt}</h1>
			</div>
		);
	}
});

React.render(<App txt="this is the txt prop" />, document.body);