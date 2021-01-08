import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NotFound404 from "../images/404.svg"

export class NotFound extends Component {
    render() {
        return (
            <div class="d-flex justify-content-center align-items-center container" style={{textAlign:"center"}}>
                <div class="row">
                    <div class="col-md-12">
                        <div class="error-template">
                            <img src={NotFound404} width="300" height="200" className="mb-3 " alt="login"/>
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div class="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <br></br>
                            <div class="error-actions">
                                <Link to="/" style={{textDecoration: "none"}}><button className="btn btn-lg btn-secondary btn-block text-uppercase"><i class="fa fa-home"></i> Take Me Home</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;