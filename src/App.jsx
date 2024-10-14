import "./App.css";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import ProductsPage from "./components/ProductsPage";
import ProductDetail from "./components/ProductDetail";
import AboutUs from "./components/AboutUs";
import Infrastructure from "./components/Infrastructure";
import ServiceDetail from "./components/ServiceDetail";
import CylinderDetail from "./components/CylinderDetail";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/product",
      element: <ProductsPage />, // The Products list page
    },
    {
      path: "/product/:id", // The individual product detail page
      element: <ProductDetail />,
    },
    {
      path: "/product/service/:service", // Use this for services
      element: <ServiceDetail/>,
    },
    {
      path: "/product/cylinder/:cylinder_Id", // Use this for services
      element: <CylinderDetail/>,
    },
    {
      path:"/about",
      element: <AboutUs/>
    },
    {
      path:"/infrastructure",
      element: <Infrastructure/>
    }
  ]);
  return (
    <div className="w-full h-auto">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
