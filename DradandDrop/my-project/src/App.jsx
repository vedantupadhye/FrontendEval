import Todo from "./Components/Todo";

const initialData = {
  Todo: [
    "Design UI mockups",
    "Set up project repository",
    "Write unit test",
    "Integrate payment gateway",
  ],
  InProgress: ["Develop authentication flow", "Implement responsive design"],
  Completed: [
    "Set up CI/CD pipeline",
    "Conduct code reviews",
    "Deploy initial version to staging",
  ],
};


function App() {

  return (
    <div >
     <Todo data={initialData} />
    </div>
  )
}

export default App
