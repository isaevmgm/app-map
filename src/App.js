import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import {NavLink, Route, Switch} from 'react-router-dom';
import Features from "./Features";



function App() {

  return (
    <div className="main">
        <div className="maindiv">
            <div className="menu">
                <NavLink to="/">
                    <li className="lihome">Home</li>
                </NavLink>
                <NavLink to="/features">
                    <li className="gray">Features</li>
                </NavLink>
                <NavLink to="/contact">
                    <li className="gray">Contact</li>
                </NavLink>


                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/features">
                        <Features />
                    </Route>
                    <Route path="/contact">
                        <ContactPage />
                    </Route>
                </Switch>
            </div>
        </div>
    </div>
  );
}

export default App;
