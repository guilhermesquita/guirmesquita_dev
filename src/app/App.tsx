import Footer from "../components/Footer";
import Header from "../components/header/Header";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Header />
      </div>
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
