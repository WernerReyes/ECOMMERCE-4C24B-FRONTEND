import clsx from "clsx";
import { useWindowSize } from "../../hooks";

export const AuthLayout = ({ children, large = "800px" }) => {
  const { width, lg } = useWindowSize();
  return (
    <div
      style={{
        width: clsx(width >= lg ? large : "400px"),
      }}
      className="d-flex justify-content-center align-items-center text-dark"
    >
      <div className="d-flex flex-wrap container m-0 p-0 shadow rounded-3">
        <div className="col-12 col-lg-6 p-4">
          <div className="text-center">
            <img src="/images/logo.png" width={100} className="img-fluid" alt="Logo" />
          </div>
          <div className="mt-4 d-flex flex-column align-items-center">
            <button className="btn btn-light w-100 max-w-xs d-flex align-items-center justify-content-center shadow-sm rounded py-3 mb-3">
              <div className="bg-white p-2 rounded-circle">
                <svg
                  className="w-4"
                  viewBox="0 0 533.5 544.3"
                  width="24"
                  height="24"
                >
                  <path
                    d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                    fill="#4285f4"
                  />
                  <path
                    d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                    fill="#34a853"
                  />
                  <path
                    d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                    fill="#fbbc04"
                  />
                  <path
                    d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                    fill="#ea4335"
                  />
                </svg>
              </div>
              <span className="ms-3">Sign In with Google</span>
            </button>
            <div className="d-flex justify-content-center align-items-center w-100 my-4">
              <hr className="flex-grow-1" />
              <span className="mx-2 text-secondary">
                Or sign in with Cartesian E-mail
              </span>
              <hr className="flex-grow-1" />
            </div>
            {children}
          </div>
        </div>
        <div className="col-lg-6 rounded-2 d-none d-lg-flex  justify-content-center align-items-center">
          <div
            className="w-100 h-100"
            style={{
              backgroundImage:
                'url("https://media.admagazine.com/photos/648cd919d6ffbb9c781e28c0/16:9/w_2560%2Cc_limit/renovar-los-muebles-sala.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "0.5rem",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

