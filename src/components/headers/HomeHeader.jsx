/**
 * Handles the user input in the search bar
 * @typedef {function} onChange
 * @param {onChange} e - The observable input event.
 * @listens onChange
 */

/**
 * @typedef {Object} Props
 * @property {onChange} onChange InputElement.prototype.onChange('change', listener)
 * @property {string} value  Input change event target value
 */

/**
 * Header for Home Page
 *
 * @type {import('react').FunctionComponentElement<Props>}
 */

/**
 * Returns Header for Home Page with Seacrh Bar and Link to Settings Page
 *
 * @returns {JSX.Element}
 */

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
