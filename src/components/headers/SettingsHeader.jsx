import React from "react";
import { Link } from "react-router-dom";
import { SHeader, SButton } from "../styles/Header.style";

const SettingsHeader = () => {
  return (
    <SHeader>
      <Link to="/">
        <SButton>Home</SButton>
      </Link>
    </SHeader>
  );
};

export default SettingsHeader;
