import { styled } from "styled-components"
import { BoxBaseProps } from "./BoxBaseProps"

export const BoxBase = styled.div<BoxBaseProps>`
width: ${(props) => props.$width};
height:${(props) => props.$height};
background-color: ${(props) => props.$backgroundColor};
display: ${(props) => props.$display};
align-items: ${(props) => props.$alignItems};
justify-content: ${(props) => props.$justifyContent};
margin: ${(props) => props.$margin};
padding: ${(props) => props.$padding};
border: ${(props) => props.$border};
`
