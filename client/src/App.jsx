import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { Route,Routes,useNavigate, Navigate } from'react-router-dom';
import './app.scss'

const App = () => {
  const user = true;
  const navigate = useNavigate();

  if (!user) {
    navigate('/register');
  }

return (
    <Routes>
      <Route
        exact
        path="/"
        element={user ? <Home /> : <Register navigate={navigate} />}
      />
      <Route path="/register" element={user ? <Navigate to="/" /> : <Register navigate={navigate} />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      {user && (
        <>
          <Route path="/movies" element={<Home type="movies" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch" element={<Watch />} />
        </>
      )}
    </Routes>
  );
};

export default App;