<<<<<<< HEAD
import ShopPage from "./shop/pages/ShopPage"
import HomePage from "./home/pages/HomePage"
=======
import { Suspense } from "react";
import "./App.css";
import { AppRouter } from "./router/AppRouter";
//import ShopPage from "./shop/pages/ShopPage";

>>>>>>> 058fd0388e73479f094d48f79fc92f4235ea5f84

function App() {
  return (
<<<<<<< HEAD
    < >
     <HomePage />
    
=======
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


>>>>>>> 058fd0388e73479f094d48f79fc92f4235ea5f84
    </>
  );
}

export default App;
