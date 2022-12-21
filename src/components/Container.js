import StyedCard from "./Shared/StyledCard";
const Container = ({children}) => {
  return (
    <StyedCard>
      {children}
    </StyedCard>
  );
};
export default Container;

