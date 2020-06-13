import React, { lazy, useState, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import Grid from "styled-components-grid";
import { SDetailsButton } from "../styles/UserListItem.style";
import { ModalProvider } from "styled-react-modal";

const DetailsModal = lazy(() => import("../modal/DetailsModal"));

const UserListItem = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
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
