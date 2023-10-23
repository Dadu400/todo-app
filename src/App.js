import Sidebar from "./components/Sidebar.jsx";
import AllTask from "./components/AllTasks.jsx";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState('All');

  return (
      <div className='Container'>
        <Sidebar onCategoryClicked={chosenCategory => setCategory(chosenCategory)} chosenCategory={category} />
        <AllTask />
      </div>
  );
}

export default App;
