import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Filter from "./components/Filter";
function App(): JSX.Element {
  return (
    <div className="">
      <Navbar />
      <Searchbar />
      <Filter />
    </div>
  );
}
export default App;
