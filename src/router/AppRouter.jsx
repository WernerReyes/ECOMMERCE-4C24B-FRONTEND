import { lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { RouterWithNotFound } from "./RouterWithNotFound";
import { publicRoutes } from "../routes";
import { useAuthStore, useMessageStore, useWindowSize } from "../hooks";
import { showMessage } from "../utilities";
import { Toaster } from "sonner";
import { authStatus } from "../store";


const LoginPage = lazy(() => import("../auth/pages/LoginPage"));
const RegisterPage = lazy(() => import("../auth/pages/RegisterPage"));
const ShopPage = lazy(() => import("../shop/pages/ShopPage"));
const CartPage = lazy(() => import("../cart/pages/CartPage"));
const HomePage = lazy(() => import("../home/pages/HomePage"));

const CheckoutPage = lazy(() => import("../checkout/pages/CheckoutPage"));

const DetailProductPage = lazy(() => import("../detail-product/pages/DetailProductPage"));
const AboutPage = lazy(() => import("../abautUs/AboutPage"));

const HistoryPage = lazy(() => import("../historial/HistoryPage"));




const {
  LOGIN,
  REGISTER,
  HOME,
  SHOP,
  DETAILPRODUCT,
  ABOUT,
  PERFIL,
  CAR,
  HISTORY,
  CHECKOUT,

} = publicRoutes;

export const AppRouter = () => {
  const { isMobile } = useWindowSize();
  const { startRevalidateToken, status } = useAuthStore();
  const { messages, type, startClearMessages } = useMessageStore();

  useEffect(() => {
    startRevalidateToken();
  }, []);

  useEffect(() => {
    if (!messages.length) return;
    showMessage(type, messages);
    startClearMessages();
  }, [messages]);

  if (status === authStatus.CHECKING) return <h1>Cargando...</h1>;

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
        <Route path={`${DETAILPRODUCT}/:productId`} element={<DetailProductPage />} />
        <Route path={ABOUT} element={<AboutPage />} />
        <Route path={PERFIL} element={<LoginPage />} />
        <Route path={CAR} element={<CartPage />} />


        <Route path={HISTORY} element={<HistoryPage />} />
        <Route path={CHECKOUT} element={<CheckoutPage />} />

      </RouterWithNotFound>
    </BrowserRouter>
  );
};




