import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Todos from "./pages/todos";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/logout"
          element={<Logout/>}
        />
      </Routes>
      <Route
        path="/todos"
        element={<Todos/>}
      />
    </BrowserRouter>
  )
}

export default App;