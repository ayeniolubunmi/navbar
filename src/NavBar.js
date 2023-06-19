import React, { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import {FaBars} from 'react-icons/fa'
import {links, social} from './data'

export default function NavBar() {
    const [showLink, setShowLink] = useState(false)
    const linkContainerRef = useRef(null);
    const linksRef = useRef(null)

    useEffect(() => {
       const linkHeight = linksRef.current.getBoundingClientRect().height;
       if(showLink){
        linkContainerRef.current.style.height=`${linkHeight}px`
       }else{
        linkContainerRef.current.style.height = '0px';
       }
    }, [showLink])

  return (
    <nav>
        <div className='nav-center'>
            <div className='nav-header'>
                <img src={logo} alt="" className='logo'/>
                <button type="" className='nav-toggle' onClick={()=>setShowLink(!showLink)}>
                    <FaBars/>
                </button>
            </div>
            <div className='links-container show-container'>
                <ul className='links'>
                    {links.map((link)=>{
                        const {id, url, text}=link;
                        return <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    })}
                </ul>
            </div>
            <ul className='social-icons'>
                {social.map((socialIcon)=>{
                    const {id,url, icon} = socialIcon;
                    return <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                })}
            </ul>
        </div>
    </nav>
  )
}
