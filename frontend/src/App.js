import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Contact from './pages/Contact';
import Video from './pages/Video';
import Accueil from './pages/Accueil';
import GalleryPhoto from './pages/GalleryPhoto';
import AuthPage from './pages/Auth';
import Events from './pages/Events';

import EventPage from './pages/Event';
import MainNavigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { BrowserRouter as Router, Route,Redirect,Switch } from 'react-router-dom';




class App extends Component {

  state = {
    token:null,
    userId:null
  };

  login =(token,userId,tokenExpiration) =>{
    this.setState({
      token: token,
      userId: userId,
      tokenExpiration:tokenExpiration
    });
  };

  logout =() =>{
    this.setState({
      token: null,
      userId: null
    });
  };

  render() {
    return (

      <Router>



        <div className="baron">



          <AuthContext.Provider value={{token: this.state.token,userId: this.state.userId, login: this.login, logout: this.logout}}>
          {this.state.token ? <MainNavigation/> : <Header />}
          <Switch>
          <Route exact path="/react-baron" component={Accueil} />
          <Route path="/Mp3" component={Video} />
          <Route path="/GalleryPhoto" component={GalleryPhoto} />
          <Route path="/Events" component={Events} />
            {!this.state.token &&
              <Route path="/auth" component={AuthPage} />}
            {this.state.token &&
            (<Route path="/eventpage" component={EventPage} />)}
            {this.state.token &&
            <Redirect path="/auth"  to="/eventpage" exact />
            }

          <Route path="/Contact" component={Contact} />
          </Switch>
          </AuthContext.Provider>

          {/* <PageAccueil /> */}


        </div>
      </Router>
    );
  }
}

export default App;
