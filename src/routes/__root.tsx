import { Outlet } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
