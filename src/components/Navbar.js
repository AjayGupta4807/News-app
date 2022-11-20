import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsMonkey</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <li> <Link className="nav-link active" aria-current="page" to="/">Home</Link></li> </li>
                                    <li> <Link className="nav-link" to="/business">business </Link></li>
                                    <li> <Link className="nav-link" to="/entertainment">entertainment </Link></li>
                                    <li> <Link className="nav-link" to="/general">general</Link></li>
                                    <li> <Link className="nav-link" to="/science">science</Link></li>
                                    <li> <Link className="nav-link" to="/sports">sports</Link> </li>
                                    <li> <Link className="nav-link" to="/technology">technology</Link></li>
                                
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                        <li><a className="dropdown-item" href="/">Another action</a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                                    </ul>
                                </li> */}
                                {/* <li className="nav-item">
                                    <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
                                </li> */}
                            </ul>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
