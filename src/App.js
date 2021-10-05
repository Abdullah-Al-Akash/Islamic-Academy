import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
import Scholars from './components/Scholars/Scholars';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { createContext } from 'react';
import Admit from './components/Admit/Admit';

// Context API:
export const TrainerContext = createContext('trainer');

function App() {
  const trainer = 'Trainer';
  return (
    <div className="App">
      {/* Setup Routing */}
      <TrainerContext.Provider value={trainer}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/course/:courseId">
              <Admit />
            </Route>
            <Route path="/scholars">
              <Scholars />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
              {/* For 404 Error */}
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </TrainerContext.Provider>
    </div>
  );
}

export default App;
