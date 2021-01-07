import React, { useState, useEffect } from 'react'
import { fpost,fget } from "./apiCalls";
import Loader from 'react-loader-spinner'

function UserPage() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const fetchEnterprise = () => {
        fget({
            url: `enterprise/${process.env.REACT_APP_BASE_ENTERPRISE}/`,
          })
            .then((res) => res.data)
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    console.log(result)
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
            }
        );
    } 
    
    useEffect(() => {
        fetchEnterprise();
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
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
    } else {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>User page</h1>
                        {/* {items.id} */}
                    </div>
                </div>
            </div>
        );
    }

}

export default UserPage
