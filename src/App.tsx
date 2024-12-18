import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Filter from "./components/Filter";
import AppliedFilter from "./components/AppliedFilter";
import CardsList from "./components/CardsList";
function App(): JSX.Element {
  return (
    <div className="">
      <Navbar />
      <Searchbar />
      <Filter />
      <AppliedFilter />
      <CardsList />
    </div>
  );
}
export default App;
