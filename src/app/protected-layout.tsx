import {Outlet, useNavigate} from "@tanstack/react-router";
import {useAuth} from "@/features/auth/hooks/useAuth.ts";
import {useEffect} from "react";

export function ProtectedLayout() {
  const {isAuthenticated} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({to: "/", replace: true});
    }
  }, [isAuthenticated, navigate]);
  return <Outlet/>
}