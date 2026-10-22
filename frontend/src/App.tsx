import DeleteTask from "./components/DeleteTask";
import EditTask from "./components/EditTask";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  return (
    <main className="">
      <Header />
      <div className="flex flex-col items-center mt-10">
        <div className="w-7xl flex flex-col gap-3">
          <FilterBar />
          <TaskInput />
          <TaskList />
        </div>
      </div>
      <EditTask />
      <DeleteTask />
    </main>
  );
}

export default App;
