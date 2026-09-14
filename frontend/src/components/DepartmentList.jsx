import { useEffect, useState } from "react";

function DepartmentList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/departments")
      .then((res) => res.json())
      .then((data) => setDepartments(data));
  }, []);

  return (
    <div>
      <h2>部署一覧</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>部署名</th>
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
    </div>
  );
}

export default DepartmentList;