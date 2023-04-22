import { useState, useEffect } from 'react';
import Home from './pages/home/home';

import Loading from './pages/home/Loading';
import './App.css';


function App() {
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => setloading(false), 4000)
  }, [])
  return<> {loading === false?(
    <div>
  <div >
  <Home/>
  </div>
      
    </div>
  ) : (
   <Loading/>
  )} </>
}


export default App;
