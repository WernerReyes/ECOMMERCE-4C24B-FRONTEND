import { lazy } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { RouterWithNotFound } from "./RouterWithNotFound";
import { publicRoutes } from "../routes";

const LoginPage = lazy(() => import("../auth/pages/LoginPage"));

const RegisterPage = lazy(() => import("../auth/pages/RegisterPage"));

const { LOGIN, REGISTER } = publicRoutes;

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RouterWithNotFound>
        <Route path="/" element={<Navigate to={LOGIN} />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={REGISTER} element={<RegisterPage />} />
      </RouterWithNotFound>
    </BrowserRouter>
  );
};
