import React from "react";
import { useHistory } from "react-router-dom";
import SettingsHeader from "./headers/SettingsHeader";
import { useDispatch } from "react-redux";
import { saveNationality } from "./actions/users";
import { SLayout } from "./styles/Layout.style";
import { SButtonsDiv, SNatButton, SInfo } from "./styles/Settings.style";

const Settings = () => {
  const nationalities = [
    { value: "gb", label: "Great Britain" },
    { value: "ch", label: "Switzerland" },
    { value: "es", label: "Spain" },
    { value: "fr", label: "France" },
  ];

  const dispatch = useDispatch();
  const history = useHistory();

  const selectNationality = (n) => {
    dispatch(saveNationality(n));
    history.goBack();
  };

  return (
    <>
      <SettingsHeader />
      <SLayout>
        <h1>Settings Page</h1>
        <SInfo>Here you can select the users natanionality</SInfo>
        <SButtonsDiv>
          {nationalities.map((nat) => (
            <SNatButton
              key={nat.value}
              onClick={() => selectNationality(nat.value)}
            >
              {nat.label}
            </SNatButton>
          ))}
        </SButtonsDiv>
      </SLayout>
    </>
  );
};

export default Settings;
