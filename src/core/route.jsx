import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Landing } from "../pages/Home/Landing";


const router = createBrowserRouter([
 {
    element:<MainLayout/>,
    children:[
      {path:"/", element:<Landing/>}
   ]
 }
]);

export default router;
