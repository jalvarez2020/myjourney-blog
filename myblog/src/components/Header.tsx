import React from 'react';





const Header: React.FC = () => {
  return (
    <header>
        <nav>
            <ul >
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