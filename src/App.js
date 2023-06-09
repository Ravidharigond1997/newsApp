import React, { useState } from "react";
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress , setProgress] = useState(0)
  let pageSize = 5;
  let apiKey = '196273d7273a408191d13bc3c7497871';

  const useProgress = (progress) =>{
    setProgress({progress: progress})
  }

    return (
      <div>
       <Router>
        <NavBar/> 
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
        <Route exact path="/" element={<News useProgress={useProgress} apiKey={apiKey}  key='general' pageSize={5} country='in' category="general"/>}></Route>
        <Route exact path="/business" element={<News useProgress={useProgress} apiKey={apiKey} key='business' pageSize={5} country='in' category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News useProgress={useProgress} apiKey={apiKey} key='entertainment' pageSize={5} country='in' category="entertainment"/>}></Route>
        <Route exact path="/general" element={<News useProgress={useProgress} apiKey={apiKey} key='general' pageSize={5} country='in' category="general"/>}></Route>
        <Route exact path="/health" element={<News useProgress={useProgress} apiKey={apiKey} key='health' pageSize={5} country='in' category="health"/>}></Route>
        <Route exact path="/science" element={<News useProgress={useProgress} apiKey={apiKey} key='science' pageSize={5} country='in' category="science"/>}></Route> 
        <Route exact path="/sports" element={<News useProgress={useProgress} apiKey={apiKey} key='sports' pageSize={5} country='in' category="sports"/>}></Route> 
        <Route exact path="/technology" element={<News useProgress={useProgress} apiKey={apiKey} key='technology' pageSize={5} country='in' category="technology"/>}></Route> 
        </Routes>
      </Router>
      </div>
    )
}

export default App;