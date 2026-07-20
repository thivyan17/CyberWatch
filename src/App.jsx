import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SummaryCards from "./components/SummaryCards";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="content">
        <Navbar />
        <SummaryCards />
      </main>
    </div>
  );
}

export default App;