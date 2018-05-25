import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, signIn } from '../actions';

class Nav extends Component {
    renderLinks() {
        const { auth, signOut, signIn } = this.props;
        const btnStyle = {
            width: '131px'
        }

        if (auth) {
            return (
                <Fragment>
                    <li>
                        <Link to='/movie-quote' className="">Movie Quote</Link>
                    </li>
                    <li>
                        <Link to="/secret-doc">Secret Docs</Link>
                    </li>
                    <li>
                        <button onClick={signOut} className="btn">Sign Out</button>
                    </li>
                </Fragment>
            )
        }
        return (
            <Fragment>
                <li>
                    <Link to='/sign-in' className="">Sign In</Link>
                </li>
                <li>
                    <Link to='/sign-up' className="">Sign Up</Link>
                </li>
            </Fragment>
        )

    }
    renderSignIn() {
        const { auth, changeAuth } = this.props;
        if (auth) {
            return <button className="blue" onClick={() => changeAuth(false)}>Sign Out</button>
        } else {
            return <button className="lavender" onClick={() => changeAuth(true)}>Sign In</button>
        }
    }

    render() {
        return (
            <nav style={{
                padding: '1vh',
                backgroundColor: 'teal',
                display: 'table',
                verticalAlign: 'center'
            }} className="center">
                <div className="nav-wrapper">
                    <Link to="/">CIA Data</Link>
                    <ul className="right">
                        <li>
                            <Link to="/" className="lighten-1">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="lighten-2">About</Link>
                        </li>
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, { signOut })(Nav);