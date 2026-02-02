import Header from "../shared/components/header/Header";
import { ToastContainer } from "../shared/components/Toast";
import AppRoutes from "./routes";
import bgImage from "../assets/bg.svg";
import { Footer } from "./pages/home/components/Footer/Footer";

function App() {
  return (
    <>
      <img src={bgImage} alt="Background" className="fixed inset-0 w-full h-full object-cover" />
      <div className="relative w-full min-h-screen flex flex-col overflow-x-hidden">
        <ToastContainer />
        <div className="md:sticky md:top-0 md:z-50 flex items-center justify-center w-full">
          <Header />
        </div>
        <main className="grow">
          <AppRoutes />
        </main>
        <div className="p-6 md:px-48">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
