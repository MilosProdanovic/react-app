import React from "react";
import "./Header.scss";
import logo from "../../img/logo.png";
import { Search } from "../Search/Search";
import sortIcon from "../../img/sort.png";

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
      <div>
        {renderSearch()}
        <img src={sortIcon} className="sort" alt="sort" onClick={sortItems} />
      </div>
    </header>
  );
};

export { Header };
