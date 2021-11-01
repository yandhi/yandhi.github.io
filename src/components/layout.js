import * as React from 'react'
import { Link } from 'gatsby'
import {
    sections, 
    container,
    pages,
    title,
    heading,
    navLinks,
    navLinkItem,
    navLinkText } from './layout.module.css'

const activePage = {
    color: 'white',
    background: 'rgb(128, 61, 83)'
}

const Layout = ({ pageTitle, children}) => {
    return (
        <ul className={sections}>
            <title>{pageTitle}</title>
            <div className={pages}>
            <h1 className={title}>jackson</h1>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText} activeStyle={activePage}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/langs" className={navLinkText} activeStyle={activePage}>Languages</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText} activeStyle={activePage}>About Me</Link></li>
                </ul>
            </nav>
            </div>
            <div className={container}>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
            </div>
        </ul>
    )
}

export default Layout 