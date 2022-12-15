import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { API_URL } from "./constants/URL";
import { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const Create = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const postData = async () => {
    await axios.post(API_URL, {
      fullName,
      email,
      checked,
    });
    navigate("/read");
  
  };

  return (
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
      <Button onClick={postData} color="green" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Create;
