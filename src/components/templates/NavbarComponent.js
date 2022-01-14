import React from "react"
import {Link} from "react-router-dom";


export default function NavbarComponent(){
    return (
        <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Postinga</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <i className="fa fa-home"></i>
                            Home
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-envelope-o">
                                <span className="badge badge-danger">11</span>
                            </i>
                            Link
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">
                            <i className="fa fa-envelope-o">
                                <span className="badge badge-warning">11</span>
                            </i>
                            Disabled
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-envelope-o">
                                <span className="badge badge-primary">11</span>
                            </i>
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-bell">
                                <span className="badge badge-info">11</span>
                            </i>
                            Test
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="fa fa-globe">
                                <span className="badge badge-success">11</span>
                            </i>
                            Test
                        </a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}