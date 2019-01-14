import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super()
        this.state = {
            employees : [{
                name: 'Savannah',
                age: 19,
                husband: 'Sam'

            }, 
            {
                name: 'Sam',
                school: 'BYU',
                age: 22
            },
            {
                name: 'Amy',
                title: 'Mom'
            }
        ],
            userInput : "",
            filteredEmployees : []
        }
    }
    handleChange(value){
        this.setState({userInput: value})
    }
    filterEmployees(prop) {
        var employees = this.state.employees;
        var filteredEmployees = [];
        
        for ( var i = 0; i < employees.length; i++ ) {
          if ( employees[i].hasOwnProperty(prop) ) {
            filteredEmployees.push(employees[i]);
          }
        }
    
        this.setState({ filteredEmployees: filteredEmployees });
      }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleBox">Original: {JSON.stringify(this.state.employees, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange (e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterEmployees(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}</span>
            </div>
        )
    }
}
export default FilterObject;