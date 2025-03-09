import "./App.css";
import CarForm from "./components/CarForm";
import CarValue from "./components/CarValue";
import CarSearch from "./components/CarSearch";
import CarList from "./components/CarList";

function App() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
