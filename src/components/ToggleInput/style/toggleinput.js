import styled from "styled-components"

export const ToggleInputStyled = styled.div``

export const InputContainer    = styled.div`
position: relative;
display: inline-block;
`

export const Input             = styled.input`
padding: 1em;
font-size: 1em;
line-height: 1em;
outline: none;
border: none;
border-bottom: 1px solid #dddddd;
width: 100%;

&:focus {
  border-color: #aaaaaa;
}
`

export const IconContainer                 = styled.div`
position: absolute;
top: 0;
right: 0;
width: 60px;
height: 100%;
cursor: pointer;
user-select: none;

display: flex;
justify-content: center;
align-items: center;
`