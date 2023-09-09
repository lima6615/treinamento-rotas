import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import HomeBody from './routes/Home/HomeBody';
import Promotion from './routes/Home/Promotion';
import Enrollment from './routes/Home/Enrollment';

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path='home' element={<HomeBody />} />
          <Route path='promotion' element={<Promotion />} />
          <Route path='enrollment' element={<Enrollment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
