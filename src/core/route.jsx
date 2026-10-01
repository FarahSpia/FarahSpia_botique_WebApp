import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Landing } from "../pages/Home/Landing";
import { NotFound } from "../pages/NotFound";




const router = createBrowserRouter([
 {
    element:<MainLayout/>,
    children:[
      {path:"/", element:<Landing/>}
   ]
 },
 {
    element:<NotFound/>,
    path:"*"
 }
]);

export default router;
