import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";

//import { robots } from "./robots";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = event => {
        this.setState({ searchField: event.target.value });
    };

    render() {
        const { robots, searchField } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if (!robots.length) {
            return <h3>Loading...</h3>;
        }
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                {
                    //<Scroll>
                }
                <ErrorBoundary>
                    <CardList robots={filteredRobots} />
                </ErrorBoundary>
                {
                    //</Scroll>
                }
            </div>
        );
    }
}

export default App;
