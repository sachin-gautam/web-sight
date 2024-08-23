import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ImageSearch from './components/ImageSearch';
import './custom.css';
import './index.css';


// Temporary About Page Component
function About() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-700">About Page</h1>
        </div>
    );
}

// Temporary Start Searching Page Component
function StartSearching() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <ImageSearch />
        </div>
    );
}

function App() {
    return (
        <Router>
            <div className="App bg-custom-bg">
                {/* Navbar Component */}
                <Navbar />
                
                {/* Main Content */}
                <Routes>
                    <Route path="/" element={<StartSearching />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/search" element={<StartSearching />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
