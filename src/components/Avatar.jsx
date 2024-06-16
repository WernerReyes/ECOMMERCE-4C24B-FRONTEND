export const Avatar = ({ user }) => {
  return (
    <div
      className="d-inline-flex align-items-center justify-content-center rounded-circle"
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#f8f9fa", // Equivalente a bg-gray-100
        overflow: "hidden",
      }}
    >
      <span
        className="font-weight-bold"
        style={{ color: "#6c757d" }} // Equivalente a text-gray-600
      >
        {firstLetter(user.name)}{firstLetter(user.lastname)}
      </span>
    </div>
  );
};

const firstLetter = (name) => {
  return name.charAt(0).toUpperCase();
};
