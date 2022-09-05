import styled from "styled-components";
import { IStylingProps } from "./StyledInterface";
import { colors } from "./mixins";

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props: IStylingProps) => props.dir || "row"};
  align-items: ${(props: IStylingProps) => props.align || "center"};
  text-align: ${(props: IStylingProps) => props.textAlign || "center"};
  justify-content: ${(props: IStylingProps) => props.justify || "center"};
  flex-wrap: ${(props: IStylingProps) => props.wrap || "nowrap"};
  width: ${(props: IStylingProps) => props.width || "100%"};
  height: ${(props: IStylingProps) => props.height || "100%"};
  gap: ${(props: IStylingProps) => props.gap || "0"};
  margin: ${(props: IStylingProps) => props.margin || "0"};
  padding: ${(props: IStylingProps) => props.padding || "0"};
  background-color: ${(props: IStylingProps) => props.background || "none"};
  color: ${(props: IStylingProps) => props.color || "white"};
`;

export const AppWrapper = styled.div`
  background-image: linear-gradient(${colors.rhymeblue}, ${colors.rhymepink});
  margin: 0;
  padding: 0;
  color: white;
  min-height: 100vh;
`;
