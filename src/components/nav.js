import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from '../actions';

class Nav extends Component {
    renderLinks() {
        const { auth, changeAuth } = this.props;
        const btnStyle = {
            width: '131px'
        }
        if (auth) {
            return (
                <Fragment>
                    <li>
                        <Link to="/secret-doc">Secret Docs</Link>
                    </li>
                    <li>
                        <Link to="/operative-list">Operative List</Link>
                    </li>
                    <li>
                        <button style={btnStyle} className="btn red darken-2" onClick={() => changeAuth(false)}>
                            Sign Out
                        </button>
                    </li>
                </Fragment>
            )
        }
        return (
            <li>
                <button className="btn lavender" onClick={() => changeAuth(true)}>Sign In</button>
            </li>
        )

    }
    renderSignIn() {
        const { auth, changeAuth } = this.props;
        if (auth) {
            return <button className="btn blue" onClick={() => changeAuth(false)}>Sign Out</button>
        } else {
            return <button className="btn lavender" onClick={() => changeAuth(true)}>Sign In</button>
        }
    }

    render() {
        return (
            <nav style={{ padding: '1vh' }}>
                <div className="nav-wrapper">
                    <Link to="/">CIA Data</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
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

export default connect(mapStateToProps, { changeAuth })(Nav);