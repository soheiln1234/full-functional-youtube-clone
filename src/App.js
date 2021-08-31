import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

import "./_app.scss";
import { Redirect } from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <React.Fragment>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </React.Fragment>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route path="/search">
          <h1>Search</h1>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
