/**
 * Settings Page
 *
 * @type {import('react').FunctionComponentElement<{}>}
 */

/**
 * Settings Page with Link to Home Page and buttons for users nationalities selection
 *
 * @returns {JSX.Element}
 */

import React from "react";
import { useHistory } from "react-router-dom";
import SettingsHeader from "./headers/SettingsHeader";
import { useDispatch } from "react-redux";
import { saveNationality } from "./actions/users";
import { SLayout } from "./styles/Layout.style";
import { SButtonsDiv, SNatButton, SInfo } from "./styles/Settings.style";

const Settings = () => {
  /**
   * The array is used to create the buttons with the respective nationality
   * @constant : nationalities array with values and labels
   * @type {Array<{label: string, value: string | number}>}
   */
  const nationalities = [
    { value: "gb", label: "Great Britain" },
    { value: "ch", label: "Switzerland" },
    { value: "es", label: "Spain" },
    { value: "fr", label: "France" },
  ];

  /**
   * @function : initializing method used to dispatch actions and trigger state changes to the store
   */
  const dispatch = useDispatch();

  /**
   * @function : initialize the history object, used for go back routing to Home Page without page reload
   */
  const history = useHistory();

  /**
   * @function : selectNationality executed upon clicking a button
   * @param {string} n : the value of selected users nationality
   */

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
