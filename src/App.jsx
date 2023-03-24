import Card from "./components/Card";
import List from "./components/List";
import TypeMe from "./components/TypeMe";
import MyForm from "./components/MyForm";

const user = {
  name: "John Doe",
  job: "Engineer",
  Hobby: "Listening to music",

};

const users = [
  {name: "John Doe",job: "Engineer",Hobby: "Listening to music"},
  {name: "John Smith",job: "Programmer",Hobby: "Running"},
  {name: "John Roe",job: "Farmer",Hobby: "Swimming"}
];

function App() {
  return (
    <div className="App">
        <Card user={user} />
        <List users={users} />
        <TypeMe />
        <MyForm />
    </div>
  );
}

export default App
