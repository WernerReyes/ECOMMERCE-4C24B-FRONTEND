import { lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { RouterWithNotFound } from "./RouterWithNotFound";
import { publicRoutes } from "../routes";
import { useMessageStore, useWindowSize } from "../hooks";
import { showMessage } from "../utilities";
import { Toaster } from "sonner";

const LoginPage = lazy(() => import("../auth/pages/LoginPage"));

const RegisterPage = lazy(() => import("../auth/pages/RegisterPage"));

const ShopPage = lazy(() => import("../shop/pages/ShopPage"));

const CartPage = lazy(() => import("../cart/pages/CartPage"));

const HomePage = lazy(() => import("../home/pages/HomePage"));

const DetailProductPage = lazy(() => import("../detail-product/pages/DetailProductPage"));

const {
  LOGIN,
  REGISTER,
  HOME,
  SHOP,
  DETAILPRODUCT,
  BLOG,
  CONTACT,
  PERFIL,
  CAR,
} = publicRoutes;


export const AppRouter = () => {
  const { isMobile } = useWindowSize();
  const { messages, type, startClearMessages } = useMessageStore();

  useEffect(() => {
    if (!messages.length) return;
    showMessage(type, messages);
    startClearMessages();
  }, [messages]);

  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        // theme={isDark ? "dark" : "light"}
        richColors
        expand={!isMobile}
        pauseWhenPageIsHidden
        visibleToasts={6}
        duration={5000}
        closeButton
      />
      <RouterWithNotFound>
        <Route path="/" element={<Navigate to={LOGIN} />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={REGISTER} element={<RegisterPage />} />

        <Route path={HOME} element={<HomePage />} />
        <Route path={SHOP} element={<ShopPage />} />
        <Route path={DETAILPRODUCT} element={<DetailProductPage />} />
        <Route path={BLOG} element={<ShopPage />} />
        <Route path={PERFIL} element={<LoginPage />} />
        <Route path={CAR} element={<CartPage />} />
      </RouterWithNotFound>
    </BrowserRouter>
  );
};
