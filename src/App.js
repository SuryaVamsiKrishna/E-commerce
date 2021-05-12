import logo from './logo.svg';
import {Router, Switch, Route} from 'react-router-dom'
import './App.css';
import { createBrowserHistory } from 'history';

import Ecom from './components/Ecom/Ecom.js';
import Product from './components/Ecom/Product.js';
import Home from './components/Ecom/Home.js';
import Navbar from "./components/Ecom/Navbar";


function App() {
  const history = createBrowserHistory();

  return (
    
  <Router history={history}>
    <Navbar/>
      {/* <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app"> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ecom" component={Ecom} />
          <Route exact path="/ecom/:id" component={Product} />
          {/* <Route path='/orderhistory' component={OrderHisotyScreen} /> */}
        </Switch>
      
    </Router>
  );
}

export default App;
