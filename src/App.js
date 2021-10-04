import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Components/Services/Services';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import { useEffect, useState } from 'react';
import Contact from './Components/Contact/Contact';

function App() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./services.JSON')
      .then(res => res.json())
      .then(data => setServices(data))
  }, []);
  return (
    // router 
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home services={services}></Home>
        </Route>
        <Route path="/home">
          <Home services={services}></Home>
        </Route>
        <Route path="/services">
          <Services services={services}></Services>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  )
}

export default App;
