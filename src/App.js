import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import singleRoom from './pages/singleRoom';
import  Error from './pages/Error';

import './App.css';
import { Route ,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
<React.Fragment>
  <Navbar />
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/rooms/" component={Rooms} />
  <Route exact path="/rooms/:slug" component={singleRoom} />
  <Route component={Error} />
  }
  </Switch>
</React.Fragment>
  );
}

export default App;
