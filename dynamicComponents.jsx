var PersonTable = React.createClass({
	getInitialState:function(){
		return{
			data:[
				{id: 1,  fname: "Simon",  lname: "Bailey"},
                {id: 2,  fname: "Thomas", lname: "Burleson"},
                {id: 3,  fname: "Will",   lname: "Button"},
                {id: 4,  fname: "Ben",    lname: "Clinkinbeard"},
                {id: 5,  fname: "Kent",   lname: "Dodds"},
                {id: 6,  fname: "Trevor", lname: "Ewen"},
                {id: 7,  fname: "Aaron",  lname: "Frost"},
                {id: 8,  fname: "Joel",   lname: "Hooks"},
                {id: 9,  fname: "Jafar",  lname: "Husain"},
                {id: 10, fname: "Tim",    lname: "Kindberg"},
                {id: 11, fname: "John",   lname: "Lindquist"},
                {id: 12, fname: "Joe",    lname: "Maddalone"},
                {id: 13, fname: "Tyler",  lname: "McGinnis"},
                {id: 14, fname: "Scott",  lname: "Moss"},
                {id: 15, fname: "Robert", lname: "Penner"},
                {id: 16, fname: "Keith",  lname: "Peters"},
                {id: 17, fname: "Lukas",  lname: "Ruebbelke"},
                {id: 18, fname: "Brett",  lname: "Shollenberger"}
			]
		}
	},
	render:function(){
		// key only needs to be unique among siblings
		var rows = this.state.data.map(function(person){
			return <PersonRow data={person} key={person.id}/>
		})
		return <table>{rows}</table>
	}
});
var PersonRow = React.createClass({
	render:function(){
		return(
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.fname}</td>
				<td>{this.props.data.lname}</td>
			</tr>
		)
	}
});

React.render(<PersonTable />, document.body);