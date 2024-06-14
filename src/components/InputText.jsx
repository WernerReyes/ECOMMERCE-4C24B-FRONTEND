import clsx from "clsx";
import { forwardRef } from "react";

export const InputText = forwardRef(
  (
    { type, name, label, placeholder, containerClassName, className, error, ...props },
    ref
  ) => {
    return (
      <>
        <div className={clsx("form-floating px-1 mb-3", containerClassName)}>
          <input
            {...props}
            ref={ref}
            type={type}
            className={clsx(
              error ? "is-invalid" : "",
              "form-control",
              className
            )}
            id={name}
            name={name}
            placeholder={placeholder}
          />
          <label htmlFor={name}>{label}</label>
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
      </>
    );
  }
);
