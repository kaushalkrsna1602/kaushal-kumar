import React from 'react'
import logo from "../assets/logo.png"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
                <img src={logo} className='mx-2' width={100} height={100} alt='Logo'/>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/kaushal-kumar-00a015232/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'>
                    <FaLinkedin />
            </a>
            <a href='https://github.com/kaushalkrsna1602'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'>
                    <FaGithub />
            </a>
            <a href='https://www.instagram.com/kaushalkrsna/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Instagram'>
                    <FaInstagram />
            </a>
            <a href='https://x.com/Kaushalkrsna'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'>
                    <FaSquareXTwitter />
            </a>

        </div>

    </nav>
  )
}

export default Navbar