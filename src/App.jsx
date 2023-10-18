import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import DocentesPage from './pages/docentes'; import DiscentesPage from './pages/discentes'; import InitialPage from './pages/initial';
import ResetCSS from './style/ResetCSS';

export default function App() {
  return (
    <>
      <ResetCSS/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InitialPage/>}/>
          <Route path='/docentes' element={<DocentesPage/>}/>
          <Route path='/discentes' element={<DiscentesPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};
