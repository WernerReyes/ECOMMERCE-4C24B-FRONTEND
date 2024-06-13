import { Suspense } from "react";
import "./App.css";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <p className="text-4xl">Loading...</p>
          </div>
        }
      >
        <AppRouter />
      </Suspense>
    </>
  );
}

export default App;
