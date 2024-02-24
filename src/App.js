import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import './styles.css';

import NewsItems from './Components/NewsItems';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

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

        <LoadingBar
          color='#0000FF'
          progress={progress}
        />
        <Switch>

          <Route exact path="/"><News setProgress={setProgress} country="In" pageSize={12} category="general" key="general" mode={mode}/></Route>
          <Route exact path="/business"><News setProgress={setProgress} country="us" pageSize={12} category="business" key="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} country="us" pageSize={12} category="entertainment" key="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} country="us" pageSize={12} category="health" key="health"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} country="us" pageSize={12} category="science" key="science"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} country="In" pageSize={12} category="sports" key="sports"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} country="us" pageSize={12} category="technology" key="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
}


export default App