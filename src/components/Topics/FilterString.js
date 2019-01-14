import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            names: ['Savannah', 'Sam', 'Amy', 'Colby', 'Conner', 'Sarah', 'Ray', 'Zoe', 'Jordan', 'Meg', 'Noelle' ],
            userInput: '',
            filteredNames: []
        }
    }
    handleChange(value){
        this.setState({userInput: value})
    }
    filterNames(userInput){
        var names = this.state.names;
        var filteredNames = [];

        for(var i=0; i < name.length; i++){
            if(names[i].includes(userInput)){
                filteredNames.push(names[i])
            }
        }
        this.setState({ filteredNames: filteredNames });
    }
    render(){
        return( //what are the class names doing in this?
            <div className="puzzleBox filterStringPB">
                <h4>FilterString</h4>
                <span className="puzzleText">Names: {JSON.stringify(this.state.names, null, 10)}</span> 
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button  className="confirmationButton" onClick={() => this.filterNames (this.state.userInput)}>Filter Names</button>
                <span className="resultsBox filterStringRB"> FilteredNames: {JSON.stringify(this.state.names, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;