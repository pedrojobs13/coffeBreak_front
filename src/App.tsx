import {RouterProvider} from "@tanstack/react-router";
import {router} from "./app/router";
import {Toaster} from "sonner";
import {AuthProvider} from "@/features/auth/context/AuthProvider.tsx";

function App() {
  return <>
    <AuthProvider>
      <RouterProvider router={router}/>
      <Toaster richColors position="top-right"/>
    </AuthProvider>
  </>;
}

export default App;
