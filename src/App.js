import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useGlobalContext } from './context';
import Background from './components/Background/Background';
import Home from './pages/Home/Home';
import AllArts from './pages/AllArts/AllArts';
import Collections from './pages/Collection/Collection';
import Artists from './pages/Artists/Artists';
import Image from './pages/Image/Image';

import './App.css';

function App() {

  const { closeSubmenu } = useGlobalContext()

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('submenu')) {
      closeSubmenu()
    }
  }

  return (
    <div className="App" onClick={handleSubmenu}>
      <BrowserRouter>
        <Background />
        <Header />
        <Routes>

          <Route
            path='/'
            element={<Home />}></Route>

          <Route
            path='/allarts'
            element={<AllArts />}></Route>

          <Route
            path='/collections'
            element={<Collections />}></Route>

          <Route
            path='/artists'
            element={<Artists />}></Route>

          <Route
            path='/:id'
            element={<Image />}></Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
