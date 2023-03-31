import './App.scss';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
// import Header from './components/Header/Header';
// import TopCards from './components/TopCards/TopCards';

function App() {
  return (
    <BrowserRouter >
    {/* <Header />
    <TopCards /> */}
    <Routes >
    <Route path="/" element={<HomePage />}></Route> 
    </Routes>

   </BrowserRouter>
  );
}

export default App;
