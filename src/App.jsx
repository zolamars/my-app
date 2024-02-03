import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Todos from "./pages/todos";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({})

function App() {
  return(
    <QueryClientProvider client={queryClient} >
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
          <Route
            path="/todos"
            element={<Todos/>}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;