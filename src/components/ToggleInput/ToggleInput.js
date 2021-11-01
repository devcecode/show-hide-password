import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import { ToggleInputStyled, InputContainer, Input, IconContainer } from './style/toggleinput'
function ToggleInput() {

  const [ state, setState ] = useState(true)

  const handleInputClick = e => {
    setState(!state)
  }

  return (
    <ToggleInputStyled>
      <InputContainer>
        <Input type={state ? 'password' : 'text'} placeholder="Please Enter your password"/>
        <IconContainer onClick={handleInputClick}>
          
          {
            state ? (
              <FontAwesomeIcon icon={faEye}/>
            ) : (
              <FontAwesomeIcon icon={faEyeSlash}/>
            )
          }
        </IconContainer>
      </InputContainer>
    </ToggleInputStyled>
  )
}

export default ToggleInput
