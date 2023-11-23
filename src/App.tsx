import { useEffect, useState } from "react";
import "./App.css";
import ExampleComponent from "./components/example";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

interface Task {
  createdAt: string;
  description: string;
  done: boolean;
  dueDate: string | null;
  id: number;
  priority: number;
  title: string;
  updatedAt: string;
  userId: number;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { login, isAuthenticated, isLoading, user } = useKindeAuth();

  useEffect(() => {
    if (isAuthenticated || isLoading) {
      return;
    }

    const loginRedirect = async (): Promise<void> => {
      await login();
    };

    loginRedirect();
  }, [isAuthenticated, isLoading]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const serviceUrl = import.meta.env.VITE_STREAMLINE_SERVICES_URL;

      fetch(`${serviceUrl}/task`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setTasks(data.data);
          }
        });
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  if (!user) {
    return (
      <>
        <span>Not Authenticated!</span>
      </>
    );
  }

  return (
    <>
      {tasks.map((task, id) => (
        <div key={id}>{task.title}</div>
      ))}
      <ExampleComponent></ExampleComponent>
    </>
  );
}

export default App;
