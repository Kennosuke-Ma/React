import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // users取得
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    // departments取得
    fetch("http://localhost:3000/api/departments")
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);



  return (
    <>
      <h1>React + Express</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
            <th>年齢</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.department_id}>
              <td>{department.department_id}</td>
              <td>{department.department_name}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}

export default App;