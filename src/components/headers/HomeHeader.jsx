import React from "react";
import { Link } from "react-router-dom";
import { SHeader, SearchBar, SButton } from "../styles/Header.style";

const HomeHeader = (props) => {
  return (
    <SHeader>
      <SearchBar
        onChange={props.onChange}
        type="text"
        value={props.value}
        placeholder="Search by name"
      />
      <Link to="/settings">
        <SButton>Settings</SButton>
      </Link>
    </SHeader>
  );
};

export default HomeHeader;
