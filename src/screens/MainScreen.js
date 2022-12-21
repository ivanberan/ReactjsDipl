import styled from "styled-components";
import PokeCard from "../components/PokeCard";
import React from "react";

const MainScreen = (props) => {
  let max = 0;
  let min = 10000;
  return (
    <StyledMainScreen>
      {props.data &&
        Object.entries(props.data).map(([key, value]) => {
          return <PokeCard key={key} data={value} />;
        })}
    </StyledMainScreen>
  );
};
export default MainScreen;
const StyledMainScreen = styled.div`
  margin: auto;
  width: 70%;
`;
