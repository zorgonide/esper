import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import DevicePage from "./DevicePage";
import GroupsPage from "./GroupsPage";
import NotFound from "./NotFound";

function MainComponent(props) {
    return (
        <div>
            <Header />
                <Switch location={props.location}>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/user' component={UserPage} />
                    <Route exact path='/devices' component={DevicePage} />
                    <Route exact path='/groups' component={GroupsPage} />
                    <Route path="*" component={NotFound} />
                </Switch>
            {/* <Footer /> */}
        </div>
    );
}

export default MainComponent
