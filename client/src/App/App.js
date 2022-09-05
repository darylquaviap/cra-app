import React from 'react';
// import Header from '../Components/NavBar/index';
import Home from '../Pages/Home/index';
import Intro from '../Pages/Intro/index';
import Footer from '../Components/footer/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
    return(
        <Router>
            {/* <Header />      Not being used at this time */}
            <Routes>
                <Route 
                    exact path="/"
                    element={<Intro />}
                />
                <Route 
                    exact path="/countries"
                    element={<Home />}
                />
            </Routes>
            <Footer />
        </Router>
    )
};

export default App;
