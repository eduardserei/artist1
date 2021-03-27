import './App.scss';
import { Switch, Route, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import MobileNav from "./components/mobile-nav/mobile-nav.component";
import SideNav from "./components/side-nav/side-nav.component";
import Home from "./components/home/home.component";
import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import React from 'react';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      mobileSize: window.innerWidth < 767,
    }
  }

  componentDidMount(){
      window.addEventListener('resize', (ev) => {
        const mobileSizeCheck = ev.target.innerWidth < 767; 
        this.setState({mobileSize: mobileSizeCheck});
      })
    }
    
    render(){
      const { mobileSize } = this.state;
      
      return (
      <>
        <MobileNav />
        <SideNav  />
        <Route render={(routeProp) => {
          
          return (
          <TransitionGroup className="trans-group" enter={!mobileSize} exit={!mobileSize} appear={!mobileSize}>
            <CSSTransition 
            key={routeProp.location.key}
            timeout={mobileSize ? 0 : 1000}
            classNames="transition">
              <Switch location={routeProp.location}>
                <Route exact={true} path='/' component={Home} />
                <Route exact={true} path='/about' component={About} />
                <Route exact={true} path='/contact' component={Contact} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>)
        }} />
      </>
    );
  }
  
}

export default withRouter(App);


