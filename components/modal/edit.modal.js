import React, { useState } from "react";
import { Modal, Input } from "antd";
import { connect } from "react-redux";

import { editTask } from "../../redux/task/task.action";

const handleInputChange = (e, field, action) => {
  const { value, name } = e.target;
  return action({ ...field, [name]: value });
};

const EditModal = ({ status, modalToggle, taskTarget, editTask }) => {
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
          editTask(field);
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

const mapDispatchToProps = dispatch => ({
  editTask: field => dispatch(editTask(field))
});

export default connect(null, mapDispatchToProps)(EditModal);
