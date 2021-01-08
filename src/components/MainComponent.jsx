import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
function MainComponent(props) {
    return (
        <div>
            <Header />
                <Switch location={props.location}>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/user' component={UserPage} />
                    <Redirect to="/home" />
                </Switch>
            {/* <Footer /> */}
        </div>
    );
}

export default MainComponent
