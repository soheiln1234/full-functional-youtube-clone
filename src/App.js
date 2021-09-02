import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import WatchScreen from "./screens/WatchScreen/WatchScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import SubscriptionsScreen from "./screens/SubscriptionsScreen/SunscriptionsScreen";

import "./_app.scss";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ChannelScreen from "./screens/ChannelScreen/ChannelScreen";

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
  const { accessToken, loading } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/login");
    }
  }, [accessToken, loading, history]);

  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>
      <Route path="/login">
        <LoginScreen />
      </Route>
      <Route path="/search/:query">
        <Layout>
          <SearchScreen />
        </Layout>
      </Route>
      <Route path="/watch/:id">
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>
      <Route path="/feed/subscriptions">
        <Layout>
          <SubscriptionsScreen />
        </Layout>
      </Route>
      <Route path="/channel/:channelId">
        <Layout>
          <ChannelScreen />
        </Layout>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
