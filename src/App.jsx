import { Suspense } from "react";
import "./App.css";
import { AppRouter } from "./router/AppRouter";
//import ShopPage from "./shop/pages/ShopPage";


function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <p className="text-4xl">Loading app...</p>
          </div>
        }
      >
        <AppRouter />
        
      </Suspense> 

      {/* <ShopPage /> */}


    </>
  );
}

export default App;
