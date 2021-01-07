import React from 'react'
import HomePic from "../images/home1.svg";
import { HideUntilLoaded } from 'react-animation';
import Loader from 'react-loader-spinner'

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
                            <h5 class="card-title">Welcome</h5>
                            <p class="card-text">to Esper console experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
