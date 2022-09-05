import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";
import { colors } from "./mixins";
import { Link } from "react-router-dom";

export const StyledP = styled.p`
  margin: ${(props: IStylingProps) => props.margin || "0"};
  padding: ${(props: IStylingProps) => props.padding || "0"};
  color: ${(props: IStylingProps) => props.color || "white"};
  font-size: ${(props: IStylingProps) => props.fontSize || "default"};
`;

export const StyledH5 = styled.h5`
  margin: ${(props: IStylingProps) => props.margin || "0"};
  padding: ${(props: IStylingProps) => props.padding || "0"};
  color: ${(props: IStylingProps) => props.color || "white"};
  font-size: ${(props: IStylingProps) => props.fontSize || "default"};
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
export const StyledLink = styled(Link)`
  margin: ${(props: IStylingProps) => props.margin || "0"};
  padding: ${(props: IStylingProps) => props.padding || "0"};
  color: ${(props: IStylingProps) => props.color || "white"};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  button {
    text-decoration: none;
  }
`;
