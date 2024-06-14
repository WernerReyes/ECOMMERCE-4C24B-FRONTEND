import { Suspense } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <p className="text-4xl">Loading app...</p>
          </div>
        }
      >
        <AppRouter />
      </Suspense>
    </Provider>
  );
}

export default App;
