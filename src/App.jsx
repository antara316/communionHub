
import './App.css'
import EventPage from './Pages/EventPage.jsx'
import Footer from './Pages/Footer.jsx'
import Header from './Pages/Header.jsx'
import Home from './Pages/Home.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'


function App () {

  const router = createBrowserRouter([
          {
            path:"/",
            element:<Home></Home>
          },
          {
            path:"/Event",
            element:<EventPage></EventPage>
          },
      ])
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
