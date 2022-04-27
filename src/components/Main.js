import React from 'react'
import styled from 'styled-components'
import LogoComponent from '../subcomponents/LogoComponent'
import PowerBotton from '../subcomponents/PowerBotton'
import SocialIcons from '../subcomponents/SocialIcons'

const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width:100vw;
    height:100vh;
    overflow:hidden;

    position: 'relative',
    h2,h3,h4,h5,h6{
        font-family: 'Karla',sans-serif;
        font-weight: 500;
       

    }
    
`
const Container = styled.div`

    padding:2rem;


`

export default function Main() {
  return (
    <MainContainer>.
        <Container>
            <PowerBotton/>
            <LogoComponent/>
            <SocialIcons/>
        </Container>
        
    </MainContainer>
  )
}
