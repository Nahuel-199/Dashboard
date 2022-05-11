import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from "./pages/list/List";
import List2 from "./pages/list/List2";
import New from './pages/new/New';
import Single from './pages/single/Single';
import { userInputs, productInputs } from './formSource';
import "./style/dark.scss";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';

function App() {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Single />} />
        <Route path='gastos'>
          <Route index element={<List2 />} />
          <Route path="nuevo" element={<New inputs={userInputs} />} title="Agregar nuevo gasto" />
        </Route>
        <Route path='integrantes'>
          <Route index element={<List />} />
          <Route path="nuevo" element={<New inputs={productInputs} title="Add New Product" />} />
        </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
