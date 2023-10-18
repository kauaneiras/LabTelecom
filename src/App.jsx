import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import DocentesPage from './pages/docentes'; import DiscentesPage from './pages/discentes';
import ResetCSS from './style/ResetCSS';

export default function App() {
  return (
    <>
      <ResetCSS/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><h1>OK</h1></>}/>
          <Route path='/docentes' element={<DocentesPage/>}/>
          <Route path='/discentes' element={<DiscentesPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};
