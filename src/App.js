// App.js
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import './styles.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);

  const toggleMode = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div className={`App ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
      <Router>
        <Navbar toggleMode={toggleMode} mode={mode} />
        <LoadingBar color='#0000FF' progress={progress} />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} country="us" pageSize={12} category="general" key="general" mode={mode} />} />
          <Route path="/business" element={<News setProgress={setProgress} country="us" pageSize={12} category="business" key="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} country="us" pageSize={12} category="entertainment" key="entertainment" />} />
          <Route path="/health" element={<News setProgress={setProgress} country="us" pageSize={12} category="health" key="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} country="us" pageSize={12} category="science" key="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} country="us" pageSize={12} category="sports" key="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} country="us" pageSize={12} category="technology" key="technology" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;