import Footer from "../components/Footer";
import Header from "../components/Header";
import { useThemeStore } from "../shared/stores/themeStore";
import AppRoutes from "./routes";

function App() {
  const { setMode } = useThemeStore();
  return (
    <>
      <Header />
      <button className="cursor-pointer" onClick={setMode}>
        Toggle Theme
      </button>
      <main style={{ padding: "1rem" }}>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
