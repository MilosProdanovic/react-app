import React, { Component, Fragment } from "react";
import "./App.scss";
import uuid from "react-uuid";

import { Header } from "./components/Header/Header";
import { Cards } from "./components/Cards/Cards";
import { Popup } from "./components/Popup/Popup";

class App extends Component {

  state = {
    popup: false,

    data: [
      {
        name: "Pit",
        lastName: "Sampras",
        age: 19,
        id: uuid()
      },
      {
        name: "Andrea",
        lastName: "Agasi",
        age: 20,
        id: uuid()
      },
      {
        name: "Boba",
        lastName: "Zivojinovic",
        age: 22,
        id: uuid()
      },
    ],

    filteredData: []
 
 	};

  addUser = user => {
    let users = [...this.state.data, user];

    this.setState({
      data: users,
      filteredData: users
    });
  };

  sortItems = () => {
    const list = this.state.filteredData;
    const sorted = list;
    this.state.direction === true
      ? list.sort((a, b) => (a.name > b.name ? 1 : -1)) : list.sort((a, b) => (a.name < b.name ? 1 : -1));
    this.setState({
      filteredData: sorted,
      direction: !this.state.direction
    });
  };

  componentDidMount() {
    this.setState({
      filteredData: this.state.data
    });
  }

  filterData(searchResults) {
    this.setState({
      filteredData: searchResults
    });
  }

  showPopup = () => {
    this.setState({
      popup: true
    });
  };

  closePopup = () => {
    this.setState({
      popup: false
    });
  };
  
  render() {
    const { data, filteredData, popup } = this.state;

    return (
      <Fragment>
        <Header
          black
          search
          data={data}
          onDataFilter={searchResults => this.filterData(searchResults)}
          sortItems={this.sortItems}
        />

        <Cards
          data={filteredData}
          showPopup={this.showPopup}
          id={this.id}
        />

        {popup && <Popup addUser={this.addUser} closePopup={this.closePopup} />}
      </Fragment>
    );
  }
}

export default App;
