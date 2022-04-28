import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, YouTube } from '../data/AllSvg'

const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position:fixed;
    bottom:1rem;
    left: 2rem;
    z-index:3;

    &>:not(:last-child){
        margin: 0.5rem 0;
    }
`

const Line = styled.span`
    width: 2px;
    height: 8rem;
    background-color:${props => props.theme.text}
`

const SocialIcons = (props) => {
  return (
    <Icons>
        <div>
            <Link to='' target='_blank' style={{color:'inherit'}}>
                <Github width={25} height={25} fill='currnetColor'/>
            </Link>
        </div>
        <div>
            <Link to='' target='_blank' style={{color:'inherit'}}>
                <Twitter width={25} height={25} fill='currnetColor'/>
            </Link>
        </div>
        <div>
            <Link to='' target='_blank' style={{color:'inherit'}}>
                <Facebook width={25} height={25} fill='currnetColor'/>
            </Link>
        </div>
        <div>
            <Link to='' target='_blank' style={{color:'inherit'}}>
                <YouTube width={25} height={25} fill='currnetColor'/>
            </Link>
        </div>
        <Line/>
    </Icons>
    
  )
}

export default SocialIcons