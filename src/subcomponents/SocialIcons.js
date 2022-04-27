import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Github, Twitter, YouTube } from '../data/AllSvg'

const SocialIcons = () => {
  return (
    <div>
        <div>
            <Link to=''>
                <Github width={25} height={25} fill='currnetColor'/>
            </Link>
        </div>
        <div>
            <Link to=''>
                <Twitter width={25} height={25} fill='currnetColor'/>
            </Link>
        </div>
        <div>
            <Link to=''>
                <Facebook width={25} height={25} fill='currnetColor'/>
            </Link>
        </div>
        <div>
            <Link to=''>
                <YouTube width={25} height={25} fill='currnetColor'/>
            </Link>
        </div>
    </div>
  )
}

export default SocialIcons