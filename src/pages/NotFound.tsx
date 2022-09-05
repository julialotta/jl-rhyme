import { StyledButton } from "../components/Style/StyledButton";
import { StyledLink } from "../components/Style/TextElements";

export const NotFound = () => {
  return (
    <div>
      <StyledLink to={"/"}>
        <StyledButton>Tillbaka</StyledButton>
      </StyledLink>
      <h1>Something went wrong</h1>
    </div>
  );
};
