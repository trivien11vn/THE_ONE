import { Route, Routes } from 'react-router-dom';
import path from './utils/path';
import Public from './pages/public/Public';
import { VisaHome } from './pages/public';

function App() {
  return (
    <div className="w-screen h-screen relative">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<VisaHome />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
