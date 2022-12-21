import styled from "styled-components";
import Conent from "./Content";
const Card = (props) => {
  const { data } = props;
  return (
    <StyedCard>
      <Conent data={data}></Conent>
    </StyedCard>
  );
};
export default Card;

const StyedCard = styled.div`
  position: relative;
  width: 70%;
  margin: auto;
  margin-top: 50px;
  background-color: white;
  border-radius: 25px;
  border: 2px solid #290938;
  padding: 50px;
`;
