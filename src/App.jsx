import {} from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import Homepage from "./pages/Home/Home"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
