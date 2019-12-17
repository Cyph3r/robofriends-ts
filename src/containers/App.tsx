import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";

import { setSearchField, requestRobots } from "../actions";
//import { robots } from "./robots"; // No longer used - this was for file data import previously.
// TODO: implement redux state

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};
class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    if (isPending) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className="tc">
        <h1 className="title f-subheadline">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
