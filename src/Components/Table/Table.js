import React from "react";
import Table from "react-bootstrap/Table";
const TableComponent = (props) => {
  console.log(props.userData);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Image</th>
            <th>Address</th>
            <th>Hobbies</th>
          </tr>
        </thead>
        <tbody>
          {props.userData.map((user,index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.image}</td>
                <td>{user.Address}</td>
                <td>{user.Hobbies}</td>
              </tr>
              //  <td>{}</td>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
