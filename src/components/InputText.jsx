import clsx from "clsx";

export const InputText = ({
  type,
  name,
  label,
  placeholder,
  containerClassName,
  className,
}) => {
  return (
    <div className={clsx("form-floating px-1", containerClassName)}>
      <input
        type={type}
        className={clsx("form-control", className)}
        id={name}
        name={name}
        placeholder={placeholder}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
