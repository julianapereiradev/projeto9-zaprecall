import React from 'react'
import styled from 'styled-components'

const StyledButtonBackground = styled.button`
background: blue;
color: #FFFFFF
`

export default function App() {

  return (
    <div>
      <h3>Hello World!</h3>
      <StyledButtonBackground>Teste cores</StyledButtonBackground>
    </div>
  )
}
