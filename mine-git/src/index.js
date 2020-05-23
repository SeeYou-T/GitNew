import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Switch,Route} from "react-router-dom"
import {mainRouter} from "./router"

ReactDOM.render(
    <Router>
      <Switch>
          {
            mainRouter.map(item=>{
              return <Route path={item.path} component={item.component}></Route>
            })
          }
      </Switch>
    </Router>
  ,
  document.getElementById('root')
);


