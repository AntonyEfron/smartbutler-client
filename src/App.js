import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import NavigationBar from "./components/CoustomerComponents/NavigationBar/NavigationBar";
// import DishCategoryBar from "./components/CoustomerComponents/NavigationBar/DishCategoryBar/DishCategoryBar";
import CostomerHome from "./Pages/CostomerHomepage";


function App() {

const Layout = ()=>{
  return(
    <div className="app">
       <Outlet/>
    </div>
  )    
}

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<CostomerHome/>
      },
      {
        path:'/kitchen',
        element:<CostomerHome/>
      }
    ]
  }
])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
