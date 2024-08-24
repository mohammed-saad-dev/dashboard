import Login  from "./pages/Login"
import Admin from "./pages/Admin"
import Register from "./pages/Register"
import HomePage from "./pages/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "signin",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "admin",
    element: <Admin />,
  } 
];
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element },index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>    </>
  )
}

export default App
