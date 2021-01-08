import React, { useState, useEffect } from 'react'
import { fpost,fget } from "./apiCalls";
import Loader from 'react-loader-spinner';
import "../css/profile.css";
import { HideUntilLoaded } from 'react-animation';
import Error from "./Error"

function UserPage() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);

    const fetchEnterprise = () => {
        fget({
            url: `enterprise/${process.env.REACT_APP_BASE_ENTERPRISE}/`,
        })
        .then((res) => res.data)
        .then(
            (result) => {
                setItem(result);
                setIsLoaded(true);
        },
            (error) => {
                setIsLoaded(true);
                setError(error);
        });
    } 
    
    useEffect(() => {
        fetchEnterprise();
    }, [])

    if (error) {
        return <Error error={error.message}/>;
    } 
    else if (!isLoaded) {
        return (
            <div
                style={{
                width: "100%",
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                }}
            >
                <Loader type="Rings" color="#a573ff" height={100} width={100} />
            </div>
        )
    } 
    else {
        return (
            <>
                <div className="container">
                    <div className="">
                        <h3 className="display-4 pink" >Profile</h3>
                        <hr/>
                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <HideUntilLoaded
                                                animationIn="popIn"
                                                imageToLoad="https://bootdey.com/img/Content/avatar/avatar7.png"
                                                Spinner={() => <Loader type="Rings" color="#a573ff" height={100} width={100} />}
                                                >
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"/>
                                            </HideUntilLoaded>
                                            <div className="mt-3">
                                                <h4 className="pink">{item.name}</h4>
                                                <p className="text-secondary mb-1">{item.short_code}</p>
                                                <p className="text-muted font-size-sm">{item.display_name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-3">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0">{item.is_active ? <span style={{color:"#a573ff"}} className="fa fa-lg fa-check-circle-o"></span> : <span className="fa fa-lg fa-times-circle" style={{color:"#a573ff"}}></span>}</h6>
                                        <span className="text-secondary">Active</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title" style={{color:"#a573ff"}}>Details</h5>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Enterprise ID</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {item.id}
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {item.details.contact_email}
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Phone</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {item.details.contact_number}
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Contact Person</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {item.details.contact_person}
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Address</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {item.details.registered_address}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default UserPage
