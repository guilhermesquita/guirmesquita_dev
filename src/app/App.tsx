import Header from "../shared/components/header/Header";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <div className="md:sticky md:top-0 md:z-50 flex items-center justify-center w-full">
        <Header />
      </div>
      <main>
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
