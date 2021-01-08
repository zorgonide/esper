import React, { useState, useEffect } from 'react'
import { fpost,fget } from "./apiCalls";
import Loader from 'react-loader-spinner';
import Groups from "../images/Groups.svg"
import Manage from "../images/ManageGroup.svg"
import Pagination from "./Pagination"
import Error from "./Error"
function GroupsPage() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [totalItems, setTotalItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState(null)
    const fetchGroups = (pageNumber=0) => {
        fget({
            url: `enterprise/${process.env.REACT_APP_BASE_ENTERPRISE}/devicegroup?offset=${pageNumber}`,
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
        fetchGroups();
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
            setCurrentPage(pageNumber + 20);
            fetchGroups(pageNumber + 20);
        };
        return (
            <div className="container">
                <h3 className="display-4 pink" >Groups</h3>
                <hr/>
                <div className="row">
                    <div className="col">
                        <div className="card-deck">
                            <div className="card">
                                <img src={Groups} className="card-img-top" alt="..." style={{maxHeight: "28vh"}}/>
                                <div className="card-body">
                                    <h3 className="card-title pink text-center">All groups</h3>
                                    <hr/>
                                    <div>
                                        <ul className="list-group text-center" >{ totalItems.results ?
                                            totalItems.results.map( group => {
                                                return (
                                                    <li onClick={
                                                            () => 
                                                            {
                                                                setSelectedItem(group);
                                                            }
                                                    } className="list-group-item ">{group.name}</li>
                                                )                                
                                            }) :
                                            <li className="list-group-item">No groups found</li>
                                        }</ul>
                                    </div>
                                </div>

                                <div class="card-footer">
                                    <Pagination
                                        paginate={paginate}
                                        totalPages={totalPages}
                                        nextPage={nextPage}
                                        previousPage={previousPage}
                                        currentPage={currentPage}
                                    />
                                </div>
                            </div>
                            <div className="card">
                                <img src={Manage} className="card-img-top" alt="..." style={{maxHeight: "28vh"}}/>
                                <div className="card-body">
                                    <h3 className="card-title pink text-center">Manage group</h3>
                                    <hr/>
                                    {
                                        selectedItem === null ? 
                                            <p className="card-text text-center"> Click on a group to manage</p> 
                                        :
                                        <>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <h6 className="mb-0">Group name</h6>
                                                </div>
                                                <div className="col-sm-8 text-secondary">
                                                    {selectedItem.name}
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <h6 className="mb-0">ID</h6>
                                                </div>
                                                <div className="col-sm-8 text-secondary">
                                                    {selectedItem.id}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <h6 className="mb-0">Devices</h6>
                                                </div>
                                                <div className="col-sm-8 text-secondary">
                                                    {selectedItem.device_count}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <h6 className="mb-0">Created on</h6>
                                                </div>
                                                <div className="col-sm-8 text-secondary">
                                                    <p >
                                                        {new Date(selectedItem.created_on).toLocaleDateString("en-IN", {
                                                        year: "numeric",
                                                        month: "short",
                                                        day: "numeric",
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                        second: "numeric",
                                                        hour12: false,
                                                        })}
                                                    </p>
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

export default GroupsPage;
