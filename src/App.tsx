import {RouterProvider} from "@tanstack/react-router";
import {router} from "./app/router";
import {Toaster} from "sonner";

function App() {
  return <>
    <RouterProvider router={router}/>
    <Toaster richColors position="top-right"/>
  </>;
}

export default App;
