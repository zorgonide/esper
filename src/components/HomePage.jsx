import React from 'react'
import HomePic from "../images/home1.svg";
import { HideUntilLoaded } from 'react-animation';
import Loader from 'react-loader-spinner'
import {Link} from "react-router-dom"
function Homepage() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-5 ">
                    <br/>
                    <div className="card text-center border" >
                        <HideUntilLoaded
                            animationIn="popIn"
                            imageToLoad={HomePic}
                            Spinner={() => <Loader type="Rings" color="#a573ff" height={100} width={100} />}
                            >
                            <img class="card-img-top" src={HomePic} alt="Error"/>
                        </HideUntilLoaded>
                        <div class="card-body">
                            <h5 class="card-title display-3">Welcome</h5>
                            <p class="card-text pink">to Esper console experience</p>
                        </div>
                        <div class="card-body">
                            <Link to="/user" className="card-link btn btn-default pink">Profile</Link>
                            <Link to="/devices" className="card-link btn btn-default pink">Devices</Link>
                            <Link to="/groups" className="card-link btn btn-default pink">Groups</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
