import React, { Component } from "react";
import { connect } from "react-redux";
//import logo from './logo.svg';
import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";

import { setSearchField } from "../actions";
//import { robots } from "./robots"; // No longer used - this was for file data import previously.

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value))
    };
};
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if (!robots.length) {
            return <h3>Loading...</h3>;
        }
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
