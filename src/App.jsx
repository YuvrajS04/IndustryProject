import './App.scss';
import {BrowserRouter, Routes, Route } from "react-dom"

function App() {
  return (
    <BrowserRouter >
    <Header />
    <Routes >
    <Route path="/" element={<HomePage />}></Route> 
    </Routes>

   </BrowserRouter>
  );
}

export default App;
