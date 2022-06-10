import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'
import { useSelector } from 'react-redux'
import Logo from './../../images/logo.png'


const Header = () => {
    const { theme } = useSelector(state => state)
    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle">

                <Link to="/" className="logo">
                    <h1 className="navbar-brand text-uppercase p-0 m-0"
                        onClick={() => window.scrollTo({ top: 0 })}>
                        <img src={Logo} alt="avatar"
                            style={{ filter: `${theme ? 'invert(1)' : 'invert(0)'}`, height: '60px' }} />
                    </h1>
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>
    )
}

export default Header