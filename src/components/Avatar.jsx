import { useState } from "react";
import { useAuthStore } from "../hooks";
import { Link } from "react-router-dom";
import { publicRoutes } from "../routes";

const { HISTORY } = publicRoutes;

export const Avatar = ({ user }) => {
  const { startLogout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const firstLetter = (name) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="dropdown-user">
      <div onClick={toggleDropdown} className="avatar">
        <span className="font-weight-bold">
          {firstLetter(user.name)}
          {firstLetter(user.lastname)}
        </span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu-user">
          <li className="dropdown-item-user">
            <Link className="text-decoration-none" to={HISTORY}>Historial compras</Link>
          </li>
          <li onClick={startLogout} className="dropdown-item-user">
            Cerrar Sesión
          </li>
        </ul>
      )}
    </div>
  );
};

const firstLetter = (name) => {
  return name.charAt(0).toUpperCase();
};
