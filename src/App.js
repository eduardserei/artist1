import './App.scss';
import { Switch, Route } from 'react-router-dom';

import MobileNav from "./components/mobile-nav/mobile-nav.component";
import SideNav from "./components/side-nav/side-nav.component";
import MainComponent from "./components/main/main.component";
import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";

function App() {
  return (
    <>
      <MobileNav />
      <SideNav />
      <Switch>
        <Route exact={true} path='/' component={MainComponent}/>
        <Route exact={true} path='/about' component={About}/>
        <Route exact={true} path='/contact' component={Contact}/>
      </Switch>
    </>
  );
}

export default App;
