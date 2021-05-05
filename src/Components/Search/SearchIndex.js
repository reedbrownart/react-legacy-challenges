import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      search: ""
    }
  }

  searchFunction(event) {
    this.setState({ search: event.target.value })
  }

  render() {
    return (
      <div>
        <Input
          placeholder='Search Here'
          value={this.state.search}
          onChange={(event) => this.searchFunction(event)} />
        <h3>Results:</h3>
        <DisplayResults 
          things = {this.state.things.filter(thing => thing.includes(this.state.search))} 
          search = {this.state.search}/>
        {/* 
        
        ONE LINE MESSY VERSION, LESS READABLE
        
        {this.state.things.filter(thing => thing.includes(this.state.search)).map(thing => <li>{thing}</li>)}
        
        */}
      </div>
    )
  }
}

class DisplayResults extends Component {
  render() {
    return (
      <div>
        {this.props.things.map(
          thing => {
            return <li>{thing}</li>
          })}
      </div>
    )
  }
}

export default SearchIndex;