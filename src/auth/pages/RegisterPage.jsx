import React from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { InputText } from "../../components";
import { publicRoutes } from "../../routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { registerValidation } from "../validations";
import { useAuthStore } from "../../hooks";

const { LOGIN } = publicRoutes;

export const RegisterPage = () => {
  const { startRegister } = useAuthStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerValidation),
  });

  const handleRegister = async (data) => startRegister(data);

  

  return (
    <AuthLayout large="1000px">
      <form
        className="container-fluid w-100"
        onSubmit={handleSubmit(handleRegister)}
      >
        <div className="row">
          <Controller
            name="first_name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputText
                {...field}
                containerClassName="mb-3 col-lg-6"
                type="text"
                placeholder="name"
                label="Name"
                error={errors[field.name]?.message}
              />
            )}
          />

          <Controller
            name="last_name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputText
                {...field}
                containerClassName="mb-3 col-lg-6"
                type="text"
                placeholder="Lastname"
                label="Lastname"
                error={errors[field.name]?.message}
              />
            )}
          />
        </div>
        <div className="row">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputText
                {...field}
                containerClassName="mb-3 col-lg-6"
                type="email"
                placeholder="Email"
                label="Email"
                error={errors[field.name]?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputText
                {...field}
                containerClassName="mb-3 col-lg-6"
                type="password"
                placeholder="Password"
                label="Password"
                error={errors[field.name]?.message}
              />
            )}
          />
        </div>

        <button
          style={{
            backgroundColor: "var(--primary)",
          }}
          className="btn btn-success w-100 d-flex align-items-center justify-content-center py-3"
          type="submit"
          disabled={Object.keys(errors).length > 0}
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
