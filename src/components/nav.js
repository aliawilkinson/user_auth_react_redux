import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/">CIA Data</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/secret-doc">Secret Docs</Link>
                        </li>
                        <li>
                            <Link to="/operative-list">Operative List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;