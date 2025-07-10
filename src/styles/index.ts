import styled from "styled-components";
import variables from "./variables";

export const title = styled.h2`
    font-size: 15px;
    color: ${variables.titleColor};
`

export const text = styled.p`
    font-size: 13px;
    color: ${variables.textColor};
`

export const textSmall = styled(text)`
    font-size: 12px;
    color: ${variables.secondaryColor}
`

export const textBig = styled(text)`
    font-size: 14px;
    color: ${variables.secondaryColor}
`

export const label = styled(text)`
    font-size: 14px;
`

export const labelBig = styled(text) `
    font-size: 15px;
`

