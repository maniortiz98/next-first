import { HomeFillIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
    {path: '/about', text: 'about'},
    {path: '/contact', text: 'Contacto'},
    {path: '/pricing', text: 'Precio'},
]

export const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        
        <Link  href="/" className='flex items-center'>
            <HomeFillIcon size={15} className='mr-2' /> 
            Home
         </Link>
        
        <div className='flex flex-1'></div>
        {
            navItems.map(navItems =>(
            <ActiveLink key={navItems.path}  {...navItems} ></ActiveLink>
            ))
        }
    </nav>
  )
}
