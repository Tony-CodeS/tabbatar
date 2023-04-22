import Home from './pages/home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="book" element={<Book />}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
