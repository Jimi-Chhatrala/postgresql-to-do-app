import { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";

const App = () => {
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    const userEmail = "example@test.com";

    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getData, []);

  console.log(tasks);

  return (
    <div className="app">
      <ListHeader listName={"Holiday tick list"} />
    </div>
  );
};

export default App;
