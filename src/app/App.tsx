import Header from "../shared/components/header/Header";
import { ToastContainer } from "../shared/components/Toast";
import AppRoutes from "./routes";
import bgImage from "../assets/bg.svg";

function App() {
  return (
    <>
      <img src={bgImage} alt="Background" className="absolute inset-0 w-full object-cover" />
      <div className="relative w-full min-h-screen">
        <ToastContainer />
        <div className="md:sticky md:top-0 md:z-50 flex items-center justify-center w-full">
          <Header />
        </div>
        <main>
          <AppRoutes />
        </main>
      </div>
    </>
  );
}

export default App;
