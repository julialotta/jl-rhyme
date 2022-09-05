import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";
import { colors } from "./mixins";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: IStylingProps) =>
    props.background || colors.rhymeblue};
  border: none;
  width: ${(props: IStylingProps) => props.width || "200px"};
  height: ${(props: IStylingProps) => props.height || "40px"};
  margin: ${(props: IStylingProps) => props.margin || "0"};
  padding: ${(props: IStylingProps) => props.padding || "0"};
  color: ${(props: IStylingProps) => props.color || "white"};
  border-radius: ${(props: IStylingProps) => props.borderRadius || "10px"};
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
