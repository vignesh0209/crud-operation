import React, { useState } from "react";
import { Table } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "./constants/URL";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([""]);
  const navigate = useNavigate();

  const updateUser = ({ fullName, email, checked, id }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("checked", checked);
    navigate("/update");
  };

  const goBack = () => {
    navigate('/')
  };

  const deleteUser = async (id) => {
    await axios.delete(
      `https://638eb1169cbdb0dbe31280b6.mockapi.io/users/${id}`
    );
    callGetAPI();
  };

  const callGetAPI = async () => {
    const resp = await axios.get(API_URL);
    setApiData(resp.data);
  };

  useEffect(() => {
    callGetAPI();
  }, []);

  return (
    <>
      <Table singleLine className="table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>S.No</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data, index) => (
            <Table.Row key={index}>
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>{data.fullName}</Table.Cell>
              <Table.Cell>{data.email}</Table.Cell>
              <Table.Cell>{data.checked ? "Yes" : "No"}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => deleteUser(data.id)} color="red">
                  Delete
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => updateUser(data)} color="blue">
                  Update
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <br></br>
      <Button onClick={goBack}color="black">GO BACK</Button>
    </>
  );
};

export default Read;
