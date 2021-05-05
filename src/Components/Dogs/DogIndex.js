import React, { Component } from 'react';

class DogIndex extends Component {

    constructor(props) {
        super(props)
        this.state = {
            url: ""
        }
    }

    fetchDog = () => {
        //e.preventDefault();
        console.log('fetching a dog for ya sir')
        fetch("https://random.dog/woof.json")
        .then(res => res.json())
        .then(dog => {
            this.setState({
                url: dog.url
            })
        })
        .catch(console.log)
    }

    componentDidMount() {
        this.fetchDog();
    }

    render() {
        return (
            <div>
                <img src = {this.state.url} alt="dog"></img>
                <button onClick = {this.fetchDog}>New Dog</button>
            </div>
        )
    }
}

export default DogIndex;