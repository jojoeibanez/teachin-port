import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Resume from "./Resume/Resume"
import MasterPage from "./webApp/MasterPage";
import HomePage from "./webApp/components/HomePage";
import Information from "./webApp/components/Information"
import DashBoard from "./webApp/components/DashBoard"
import Contact from "./webApp/components/Contact"
import Hotel from "./Hotel/Hotel";


export default function Router() {
    return (
        <>
            <BrowserRouter>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Resume" exact component={Resume} />

                    <Route path="/Hotel" exact component={Hotel} />

                    <Route path="/Webapp/MasterPage" exact component={MasterPage} />
                    <Route path="/Webapp/HomePage" component={HomePage} />
                    <Route path="/Webapp/Information" component={Information} />
                    <Route path="/Webapp/DashBoard" component={DashBoard} />
                    <Route path="/Webapp/Contact" component={Contact} />

                </Switch>
            </BrowserRouter>
        </>
    )
}