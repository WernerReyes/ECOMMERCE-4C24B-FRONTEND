import { Route, Routes } from "react-router-dom";

export const RouterWithNotFound = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<h1>Pagina no disponible</h1>} />
    </Routes>
  );
};
