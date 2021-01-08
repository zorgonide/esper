import React from 'react'
import Pic from '../images/Error2.svg'
import { HideUntilLoaded } from 'react-animation';
import Loader from 'react-loader-spinner'
//Standard error component

function Error({error}) {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center" style={{height: "80vh"}}>
                    <div className="col-12 col-sm-5 align-self-center">
                        <div className="card text-center border">
                            <HideUntilLoaded
                                animationIn="popIn"
                                imageToLoad={Pic}
                                Spinner={() => <Loader type="Rings" color="#88C0D0" height={100} width={100} />}
                                >
                                <img class="card-img-top" src={Pic} alt="Error"/>
                            </HideUntilLoaded>
                            <div class="card-body">
                                <h5 class="card-title">Error</h5>
                                <p class="card-text">{error}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error