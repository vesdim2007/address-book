import styled from "styled-components";

export const SHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 20px 50px;
  z-index: 10;
  flex-direction: row;
  justify-content: space-between;
  background-color: #333333;
  position: fixed;
  top: 0;
`;

export const SearchBar = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 5px;
  outline: none;
`;

export const SButton = styled.button`
  color: #ffffff;
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
