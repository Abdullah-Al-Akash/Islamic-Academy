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
import Login from './components/Login/Login';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

// Context API:
export const TrainerContext = createContext('trainer');

function App() {
  const trainer = 'Trainer';
  return (
    <div className="App">
      {/* Setup Routing */}
      <AuthProvider>
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
              <PrivateRoute path="/course/:courseId">
                <Admit />
              </PrivateRoute>
              <Route path="/scholars">
                <Scholars />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              {/* For 404 Error */}
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </TrainerContext.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
