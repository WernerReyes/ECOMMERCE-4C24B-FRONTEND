import React from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { InputText } from "../../components";
import { publicRoutes } from "../../routes";
import { Link } from "react-router-dom";

const { LOGIN } = publicRoutes;

export const RegisterPage = () => {
  return (
    <AuthLayout
     large="1000px"
    >
      <form className="container-fluid w-100"
    //   style={{ maxWidth: "300px" }}
      >
        <div className="row">
        <InputText
          containerClassName="mb-3 col-lg-6"
          type="name"
          placeholder="name"
          name={"name"}
          label={"Name"}
        />
        <InputText
         containerClassName="mb-3 col-lg-6"
          type="lastname"
          placeholder="Lastname"
          name={"lastname"}
          label={"Lastname"}
        />
        </div>
        <div className="row">
        <InputText
          className="form-control mb-3 col-6"
          type="email"
          placeholder="Email"
          name={"email"}
          label={"Email"}
        />
        <InputText
          className="form-control mb-3 col-6"
          type="password"
          placeholder="Password"
          name={"password"}
          label={"Password"}
        />
        </div>

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
            <span>Register</span>
        </button>
      </form>
      <div className="d-flex justify-content-center align-items-center w-100 mt-4">
        <span className="text-secondary">Already have an account?</span>
        <Link to={LOGIN} className="ms-2 text-primary">
            Login
        </Link>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
