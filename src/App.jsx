import Layout from "./components/shared/layout"
import Dashboard from "./components/Dashboard"
import Products from "./components/Products"
import { BrowserRouter , Routes, Route } from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="login" element={<div>this is the login page</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
