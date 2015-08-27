
var App = React.createClass({
	// default properties - each key name of property
	getDefaultProps:function(){
		return{
			txt: 'this is a default prop',
			cat: 0
		}
	},
	propTypes:{
		//these specifications are optional
		//expecting it to be a string 
		txt: React.PropTypes.string,
		cat: React.PropTypes.number.isRequired
	},
	render: function(){
		var txt = this.props.txt
		return(
			<div>
				<b>BOLD</b>
				<h1>{this.props.txt}</h1>
			</div>
		);
	}
});

// the component	
React.render(<App cat={5}  />, document.body);


/*
var App = React.createClass({
	

	propTypes:{
		
		txt: React.PropTypes.string,
		cat: React.PropTypes.number.isRequired
	},
	render: function(){
		var txt = this.props.txt
		return(
			<div>
				<b>Bold</b>
				<h1>{txt}</h1>
			</div>
		);
	}
});


React.render(<App cat={5} txt="this is the props value" />, document.body);
*/