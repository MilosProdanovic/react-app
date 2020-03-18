import React from "react";
import "./Header.scss";
import logo from "../../img/logo.png";
import { Search } from "../Search/Search";

const Header = ({ black, search, onPrint, data, onDataFilter, sortItems }) => {
  const renderSearch = () => {
    if (search) {
      return <Search data={data} onDataFilter={onDataFilter} />;
    }

    return null;
  };

  return (
    <header className={`header ${black ? `black` : ``}`}>
      <a href="#"><img src={logo} className="logo" /></a>
      {renderSearch()}
    </header>
  );
};

export { Header };
