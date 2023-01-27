import React from "react";
import styled from "styled-components";
import axios from "axios";

const Main = () => {
  return (
    <StyledMain>
      <div>로고</div>
      <div>교수 리스트</div>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  display: flex;
  box-shadow: rgba(142, 142, 142, 0.5) 0px 1px 2px 0px,
    rgba(142, 142, 142, 0.5) 0px 2px 6px 2px;
  width: 80vw;
  margin-top: 20px;
  min-height: 800px;
  padding: 15px;
  flex-direction: column;
  align-items: center;
`;
