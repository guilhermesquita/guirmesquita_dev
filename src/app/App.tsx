import Header from "../shared/components/header/Header";
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
    </>
  );
}

export default App;
