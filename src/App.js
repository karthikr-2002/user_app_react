import logo from './logo.svg';
import './App.css';
import Adduser from './components/Adduser';
import Searchuser from './components/Searchuser';
import Deleteuser from './components/Deleteuser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewall from './components/Viewall';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Adduser />} />
        <Route path="/search" element={<Searchuser />} />
        <Route path="/delete" element={<Deleteuser />} />
        <Route path="/view" element={<Viewall />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
