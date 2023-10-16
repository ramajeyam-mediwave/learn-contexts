import { DataProvider } from "./contexts/DataContext";
import "@picocss/pico";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <>
      <DataProvider>
        <IndexPage />
      </DataProvider>
    </>
  );
}

export default App;
