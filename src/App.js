import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
const Nav = React.lazy(() => (import('./components/Nav')))
const Home = React.lazy(() => (import('./components/Home')))
const About = React.lazy(() => (import('./components/About')))

const Loading = () =>{
  return(
    <div>Loading Nav...</div>
  )
}

const LoadingPage = () =>{
  return(
    <div>Loading Pages...</div>
  )
}

function App() {
  return (
    <div className="App">
      <React.Suspense fallback = {<Loading/>}>
        <Nav/>
      </React.Suspense>

    <React.Suspense fallback={<LoadingPage/>}>
      <Router>
        <Route exact path="/home"> <Home/> </Route>
        <Route exact path="/about"> <About/> </Route>
      </Router>
    </React.Suspense>
    </div>
  );
}

export default App;
