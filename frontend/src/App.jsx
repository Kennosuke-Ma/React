import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";
import DepartmentList from "./components/DepartmentList";
import "./App.css";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("users");

  return (
    <>
      <Header />
      <div className="layout">
        
        <Sidebar onSelect={setSelectedMenu} />

        <main>
          {selectedMenu === "users" && <UserList />}

          {selectedMenu === "departments" && <DepartmentList />}
        </main>

      </div>
    </>
  );
}

export default App;