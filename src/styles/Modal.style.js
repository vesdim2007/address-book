import styled from "styled-components";
import Modal from "styled-react-modal";

export const SModal = Modal.styled`
width: 300px;
height: 350px;
top: 150px;
bottom: auto;
position: absolute;
background-color: lightgrey;
display: flex;
flex-direction: column;
justify-content: flex-start;
border: none;
border-radius: 5px;
outline: none;
padding: 10px 20px;
`;

export const SModalContent = styled.div({
  display: "flex",
  flexDirection: "row",
  marginTop: 20,
  justifyContent: "space-arround",
});

export const SModalColumn = styled.div({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const SModalData = styled.p`
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  text-align: left;
`;
