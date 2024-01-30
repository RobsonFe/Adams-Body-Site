// eslint-disable-next-line 
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Navbar from './pages/navbar/Navbar';
import Home from './pages/Home/Home';
import Projetos from './components/Projetos/Projetos'
import Artista from './components/Artista/Artista';
import Contato from './components/Contato/Contato';
import NotFound from './pages/notfound/NotFound';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header />
       <Navbar />
       <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/projetos' element={<Projetos />} />
        <Route path='/artista' element={<Artista />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='*' element={< NotFound />} />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
