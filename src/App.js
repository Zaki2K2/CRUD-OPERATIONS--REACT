import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Components/Create'
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/Read" element={<Read />} />
        <Route path="/update/:id/:Name/:Email" element={<Update />} />   
           </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

