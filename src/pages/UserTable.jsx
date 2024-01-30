// UserTable.js
import { useState } from "react";

const UserTable = ( formData ) => {
    const [users, setUsers] = useState([]);
    console.log(formData)
  const handleEdit = (index) => {
    // Handle edit logic
    console.log(`Edit user at index ${index}`);
  };

  const handleDelete = (index) => {
    // Handle delete logic
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <table style={{border:"1px solid red", }}>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* {formData.map((user, index) => (
          <tr key={index}>
            <td>{formData.username} </td>
            <td>{formData.email} </td>
            <td>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))} */}
        <tr >
            <td>{formData.username} </td>
            <td>{formData.email} </td>
            <td>
              <button onClick={() => handleEdit()}>Edit</button>
              <button onClick={() => handleDelete()}>Delete</button>
            </td>
          </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
