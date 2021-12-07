import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import "../style/common.css";

import Artist from "../container/artist/index";
import Navbar from "../container/Navbar";

function App() {
    return (
        <div className="container mx-auto">
            <Router>
                <Routes>
                    <Route path="/" exact component={Index}/>
                    <Route path="/artist" component={Artist}/>
                </Routes>
            </Router>
        </div>
    );
}

const Index = () => (
    <Navbar/>
);

export default App;
