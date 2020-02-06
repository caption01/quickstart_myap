import React, { useState } from "react";
import { Modal, Input } from "antd";
import axios from "axios";
import Router from "next/router";

const handleInputChange = (e, field, action) => {
  const { value, name } = e.target;
  return action({ ...field, [name]: value });
};

const handleSubmit = async field => {
  try {
    const response = await axios.put(
      `http://laravelapi.co/api/tasks/${field.id}`,
      {
        title: field.title,
        description: field.description
      }
    );
    if (response.status === 200) {
      return Router.push("/list");
    }
  } catch (err) {
    console.log("fail to update task" + err.message);
  }
};

const EditModal = ({ status, modalToggle, taskTarget }) => {
  const [field, setField] = useState({
    id: taskTarget.id,
    title: taskTarget.title,
    description: taskTarget.description
  });
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={status}
        onOk={() => {
          handleSubmit(field);
          modalToggle();
        }}
        onCancel={() => modalToggle()}
      >
        <Input
          addonBefore="title"
          defaultValue={field.title}
          name="title"
          onChange={e => handleInputChange(e, field, setField)}
        />
        <Input
          addonBefore="description"
          defaultValue={field.description}
          name="description"
          onChange={e => handleInputChange(e, field, setField)}
        />
      </Modal>
    </div>
  );
};

export default EditModal;
