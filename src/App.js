import React from "react"
import Layout from "./components/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Login from "./components/Login/Login"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/burgerBuilder" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
