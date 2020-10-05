import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Navigation from "./Navigation";
import AboutUs from "./AboutUs";
import NotMatch from "./NotMatch";
import Footer from "./Footer";
import List from "./List";

import "../styles/App.sass";

export interface Team {
  name: string;
  abbreviation: string;
  division: string;
}

export interface IData {
  data: any[];
}

const App = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await fetch("https://www.balldontlie.io/api/v1/teams");
    const result = await response.json();
    setData(result.data.filter((item, index) => index < 15));
    // console.log(result.data);
    // console.log(result.data[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation />
        <section>
          <Switch>
            {/* Define all routes */}
            <Route path="/aboutus" exact>
              <AboutUs />
            </Route>
            <Route path="/" exact>
              <List data={data} records={1} />
              {/* <p>{data[0].city}</p> */}
            </Route>
            <Route path="/1" exact>
              <List data={data} records={1} />
            </Route>
            <Route path="/2" exact>
              <List data={data} records={2} />
            </Route>
            <Route path="/3" exact>
              <List data={data} records={3} />
            </Route>
            <Route path="/*" exact>
              <NotMatch />
            </Route>
          </Switch>
        </section>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
