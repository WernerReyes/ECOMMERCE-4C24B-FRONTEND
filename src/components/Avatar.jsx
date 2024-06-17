export const Avatar = ({ user }) => {
  return (
    <div
      className="d-inline-flex align-items-center justify-content-center rounded-circle"
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "#f8f9fa", 
        overflow: "hidden",
      }}
    >
      <span
        className="font-weight-bold"
        style={{ color: "#6c757d" }} 
      >
        {firstLetter(user.name)}{firstLetter(user.lastname)}
      </span>
    </div>
  );
};

const firstLetter = (name) => {
  return name.charAt(0).toUpperCase();
};
