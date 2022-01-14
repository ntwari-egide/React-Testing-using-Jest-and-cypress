import React from "react"
import NavbarComponent from "./templates/NavbarComponent";
import FooterComponent from "./templates/FooterComponent";
import WelcomeComponent from "./postComponents/WelcomeComponent";
import {BrowserRouter as Router,Route} from "react-router-dom";
import CreatePostComponent from "./postComponents/CreatePostComponent";
import EditPostComponent from "./postComponents/EditPostComponent";
import UsersComponent from "./UserComponents/UsersComponent";
export default function RootComponent(){
    return (
        <Router>
            <div>
                <NavbarComponent />
                <Route exact path="/" component={WelcomeComponent} />
                <Route exact path="/create-post" component={CreatePostComponent} />
                <Route path="/edit-post" component={EditPostComponent}/>
                <Route path="/users" component={UsersComponent} />
                <FooterComponent />
            </div>
        </Router>
    )
}