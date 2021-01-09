import React, { useState, useEffect } from 'react'
import { fpost,fget } from "./apiCalls";
import Loader from 'react-loader-spinner';
import Devices from "../images/Devices.svg"
import Manage from "../images/Manage.svg"
import Pagination from "./Pagination"
import Error from "./Error"
function DevicePage() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [totalItems, setTotalItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState(null)
    const fetchDevices = (pageNumber=0) => {
        fget({
            url: `enterprise/${process.env.REACT_APP_BASE_ENTERPRISE}/device?offset=${pageNumber}`,
        })
        .then((res) => res.data)
        .then(
            (result) => {
                setTotalItems(result);
                setIsLoaded(true);
        },
            (error) => {
                setIsLoaded(true);
                setError(error);
        });
    }

    useEffect(() => {
        fetchDevices();
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
        let totalPages = Math.ceil(totalItems.count / 20);
        let nextPage = totalItems.next;
        let previousPage = totalItems.previous;
        let paginate = (pageNumber) => {
            setCurrentPage(pageNumber);
            fetchDevices(pageNumber);
        };
        return (
            <div className="container">
                <h3 className="display-4 pink" >Devices</h3>
                <hr/>
                <div className="row">
                    <div className="col">
                        <div className="card-deck">
                            <div className="card">
                                <img src={Devices} className="card-img-top" alt="..." style={{maxHeight: "28vh"}}/>
                                <div className="card-body">
                                    <h3 className="card-title pink text-center">All devices</h3>
                                    <hr/>
                                    <div>
                                        <ul className="list-group text-center" >{ totalItems.results ?
                                            totalItems.results.map( device => {
                                                return (
                                                    device.is_active && <li onClick={
                                                            () => 
                                                            {
                                                                setSelectedItem(device);
                                                            }
                                                    } className="list-group-item ">{device.device_name}</li>
                                                )                                
                                            }) :
                                            <li className="list-group-item">None</li>
                                        }</ul>
                                    </div>
                                </div>

                                {/* <div class="card-footer">
                                    <Pagination
                                        paginate={paginate}
                                        totalPages={totalPages}
                                        nextPage={nextPage}
                                        previousPage={previousPage}
                                        currentPage={currentPage}
                                    />
                                </div> */}
                            </div>
                            <div className="card">
                                <img src={Manage} className="card-img-top" alt="..." style={{maxHeight: "28vh"}}/>
                                <div className="card-body">
                                    <h3 className="card-title pink text-center">Manage device</h3>
                                    <hr/>
                                    {
                                        selectedItem === null ? 
                                            <p className="card-text text-center"> Click on a device to manage</p> 
                                        :
                                            <>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0">Device name</h6>
                                                    </div>
                                                    <div className="col-sm-8 text-secondary">
                                                        {selectedItem.device_name}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0">Alias</h6>
                                                    </div>
                                                    <div className="col-sm-8 text-secondary">
                                                        {selectedItem.alias_name}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0">Android version</h6>
                                                    </div>
                                                    <div className="col-sm-8 text-secondary">
                                                        {selectedItem.softwareInfo.androidVersion}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0">Security patch</h6>
                                                    </div>
                                                    <div className="col-sm-8 text-secondary">
                                                        {selectedItem.softwareInfo.securityPatchLevel}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0">Brand</h6>
                                                    </div>
                                                    <div className="col-sm-8 text-secondary">
                                                        {selectedItem.hardwareInfo.brand}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0">Model</h6>
                                                    </div>
                                                    <div className="col-sm-8 text-secondary">
                                                        {selectedItem.hardwareInfo.model}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0">Serial number</h6>
                                                    </div>
                                                    <div className="col-sm-8 text-secondary">
                                                        {selectedItem.hardwareInfo.serialNumber}
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <h6 className="mb-0">IMEI</h6>
                                                    </div>
                                                    <div className="col-sm-8 text-secondary">
                                                        {selectedItem.networkInfo.imei1}
                                                    </div>
                                                </div>
                                            </>
                                    }
                                </div>
                                {/* <div class="card-footer">
                                    <small class="text-muted"></small>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DevicePage
