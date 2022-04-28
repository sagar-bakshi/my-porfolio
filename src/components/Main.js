import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import { YinYang } from '../data/AllSvg'
import LogoComponent from '../subcomponents/LogoComponent'
import PowerBotton from '../subcomponents/PowerBotton'
import SocialIcons from '../subcomponents/SocialIcons'

const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow:hidden;
    position: relative;
    h2,h3,h4,h5,h6{
      font-family:'Karla', sans-serif ;
      font-weight:500;
    }
    
`
const Container = styled.div`

    padding:2rem;

`
const Contact = styled(Link)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`
const BLOG = styled(Link)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;
`


const WORK = styled(Link)`
color: ${props => props.click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(Link)`
color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(Link)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`

    position: absolute;
    top: ${props => props.click ? '85%' :'50%'};
    left: ${props => props.click ? '92%' :'50%' };
    transform: translate(-50%,-50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;

    &>:first-child{
        animation: ${rotate} infinite 1.5s linear;
    }
    &>:last-child{
        display: ${props => props.click ? 'none' :'inline-block'  };
        padding-top: 1rem;
    }

`




const Main = () => {
    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    console.log(click);


  return (
    <MainContainer>.
        <Container>
            <PowerBotton/>
            <LogoComponent/>
            <SocialIcons/>
            <Center>
                <YinYang onClick={()=>handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                <span>Click Me.</span>
            </Center>
            <Contact target='_blank' to={{pathname:"sagarbakshi@outlook.com"}}>
                <h4>
                    Mail Me..
                </h4>
            </Contact>
            <BLOG to='/blog' target='_blank'>
                <h4>
                    Blog
                </h4>
            </BLOG>
            <WORK to='/work' target='_blank'>
                <h4>
                    Work
                </h4>
            </WORK>
            <BottomBar>
                <ABOUT to='/about' target='_blank'>
                    <h4>
                        About
                    </h4>
                </ABOUT>
                <SKILLS to='/skills' target='_blank'>
                    <h4>
                        Skills
                    </h4>
                </SKILLS>
            </BottomBar>
        </Container>        
    </MainContainer>
  )
}


export default Main;