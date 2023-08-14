import React from 'react';





const Header: React.FC = () => {
  return (
    <header className='bg-blue-500 py-4'>
        <nav className='max-w-3x1 mx-auto'>
            <ul className='flex justify-center space-x-4'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}


export default Header;