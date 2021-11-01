import DataTable from "components/DataTable";
import Footer from "components/footer";
import NavBar from "components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <DataTable />
        <h1 className="text-primary">Olá, Mundo!</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
