import React, {lazy, Suspense} from 'react'
import './App.css'
import store from './store/index'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './customhook/privateRoute'

function App() {
  const Home = lazy(() => import('./views/Home'))
  const MainPage = lazy(() => import('./views/MainPage'))
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path = "/">
              <Suspense fallback={<div>Loading...</div>}>
                <Home/>
              </Suspense>
            </Route>
            <PrivateRoute path = "/mainPage"> 
              <Suspense fallback={<div>Loading...</div>}>
                <MainPage/>
              </Suspense>
            </PrivateRoute>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
