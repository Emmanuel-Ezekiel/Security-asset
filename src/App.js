import './App.css';
import Home from "./pages/home"
import Navigation from './components/navigation';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (

    <div>
       <Navigation/>
        <Routes>
         <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        </Routes>
    </div>
   
  );
}

export default App;
