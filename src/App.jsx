import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/css/index.css'

// import Login
import Index from './pages/Index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routing ID */}
        <Route path="/" exact element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
