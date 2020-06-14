/**
 * @typedef {Object} Props
 * @property {Object} user User full details fetched from the api
 * @property {string} user.email The email of the user
 * @property {Object} user.name The name of the user
 * @property {string} user.name.first The first name of the user
 * @property {string} user.name.last The last name of the user
 * @property {Object} login Login details of the user including the username
 * @property {string} user.login.username The username of the user
 * @property {Object} user.picture Profile pictures of the user
 * @property {string} user.picture.thumbnail The thumbnail format of user's picture
 * @property {Object} user.location The location details of the user
 * @property {Object} user.dob Date of birth details of the user
 * @property {Object} user.registered The registration details of the user
 * @property {string} user.gender The gender details of the user
 * @property {Object} user.id The identification details of the user
 * @property {string} user.nat The nationality details of the user
 */

/**
 * Grid row showing User's data
 *
 * @type {import('react').FunctionComponentElement<Props>}
 */

/**
 * Returns User List Row with User's data
 *
 * @returns {JSX.Element}
 */

import React, { lazy, useState, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import Grid from "styled-components-grid";
import { SDetailsButton } from "../../styles/UserListItem.style";
import { ModalProvider } from "styled-react-modal";

/**
 * Lazy Loading of User Location Details Modal
 *
 * @type {import('../modal/DetailsModal')}
 */
const DetailsModal = lazy(() => import("../modal/DetailsModal"));

const UserListItem = ({ user }) => {
  /**
   * @constant
   * @type {boolean} showModal : initial vallue false
   * @function setShowModal : triggers the visibility of the Users Details Modal
   * @param {boolean}
   */
  const [showModal, setShowModal] = useState(false);

  /**
   * media breakpoints for responsive design of the Grid Elements that is passed to the ThemeProvider
   *
   * @type {Object} theme
   * @property {number} xs breakpoint for the smallest mobile devices
   * @property {number} sm breakpoint for standard mobile devices
   * @property {number} md breakpoint for medium sized devices /tablets/
   * @property {number} lg breakpoint for large sized devices
   * @property {number} xl breakpoint for extralarge screens with min-width of 1200 px
   */

  const theme = {
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Grid style={{ marginBottom: 8, borderBottom: "1px solid lightgrey" }}>
          <Grid.Unit size={{ lg: 1 / 12 }}>
            <img src={user.picture.thumbnail} alt="profile photo" />
          </Grid.Unit>
          <Grid.Unit size={{ lg: 1 / 6 }}>{user.name.first}</Grid.Unit>
          <Grid.Unit size={{ lg: 1 / 6 }}>{user.name.last}</Grid.Unit>
          <Grid.Unit size={{ lg: 1 / 4 }}>{user.login.username}</Grid.Unit>
          <Grid.Unit size={{ lg: 1 / 4 }}>{user.email}</Grid.Unit>
          <Grid.Unit size={{ lg: 1 / 12 }}>
            <SDetailsButton onClick={() => setShowModal(true)}>
              Details
            </SDetailsButton>
          </Grid.Unit>
        </Grid>
        {showModal && (
          <Suspense fallback={<div>Loading...</div>}>
            <DetailsModal
              isOpen={showModal}
              onClose={() => setShowModal(null)}
              location={user.location}
              cell={user.cell}
              phone={user.phone}
            />
          </Suspense>
        )}
      </ModalProvider>
    </ThemeProvider>
  );
};

export default UserListItem;
