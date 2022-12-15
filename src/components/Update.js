import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Update = () => {

   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [checked, setChecked] = useState(false);
   const [id, setId] = useState('');
   const navigate = useNavigate();


   const updateUser = async () => {
    await axios.put(`https://638eb1169cbdb0dbe31280b6.mockapi.io/users/${id}`, {
      fullName,
      email,
      checked
    });
    navigate('/read')
   };

   useEffect(() => {
    setId(localStorage.getItem('id'))
    setFullName(localStorage.getItem("fullname"));
    setEmail(localStorage.getItem("email"));
    setChecked(localStorage.getItem("checked"));
   }, [])

  return (
    <>
    
    <Form className="form">
      <Form.Field>
        <label>Name</label>
        <input
          value={fullName}
          placeholder="Enter a Name"
          onChange={(event) => setFullName(event.target.value)}
          required
        />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input
          value={email}
          placeholder="Enter a Email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          checked={checked}
          onChange={() => setChecked(!checked)}
          label="I agree to the Terms and Conditions"
          required
        />
      </Form.Field>
      <Button onClick={updateUser} color="green" type="submit">
        Update
      </Button>
    </Form>
    </>
  );
}

export default Update