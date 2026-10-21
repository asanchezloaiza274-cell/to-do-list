import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <main>
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="flex flex-col items-center gap-10">
          <FilterBar />
          <TaskInput />
          <TaskList />
        </div>
      </div>
    </main>
  );
}

export default App;
