import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './App.css';
import Maincart from './components/Maincart';
import Summary from './components/Summary';
import Thank from './components/Thank';


function App() {



  return (
    <div className="App">


        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Maincart />} />
            <Route path='/cart/checkout' element={<Summary />} />
            <Route path='/thankyou' element={<Thank />} />

          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
