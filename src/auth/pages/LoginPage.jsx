import React from "react";
import { InputText } from "../../components";
import { AuthLayout } from "../layout/AuthLayout";
import { Link } from "react-router-dom";
import { publicRoutes } from "../../routes";

const { REGISTER } = publicRoutes;

const LoginPage = () => {
  return (
    <AuthLayout>
      <form className="w-100" style={{ maxWidth: "320px" }}>
        <InputText
          className="form-control mb-3"
          type="email"
          placeholder="Email"
          name={"email"}
          label={"Email"}
        />
        <InputText
          className="form-control mb-3"
          type="password"
          placeholder="Password"
          name={"password"}
          label={"Password"}
        />

        <button
          style={{
            backgroundColor: "var(--primary)",
          }}
          className="btn btn-success w-100 d-flex align-items-center justify-content-center py-3"
        >
          <svg
            className="me-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <path d="M20 8v6M23 11h-6" />
          </svg>
          <span>Sign In</span>
        </button>
      </form>
      <div className="d-flex justify-content-center align-items-center w-100 mt-4">
        <span className="text-secondary">Don't have an account?</span>
        <Link to={REGISTER} className="ms-2 text-primary">
          Register
        </Link>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
