import React from "react";
import { Card } from "antd";
import axios from "axios";
import { connect } from "react-redux";

// component
import BasePage from "../components/layout/basePage";
import WrappedForm from "../components/form/form";

// action
import { addTask } from "../redux/task/task.action";

const Index = ({ addTask }) => {
  const onSubmit = values => {
    return new Promise((resolve, reject) => {
      if (values) {
        resolve(addTask(values));
      } else {
        reject("no form data");
      }
    });
  };

  return (
    <BasePage index={["1"]}>
      <Card hoverable style={{ maxWidth: "400px" }} title="New Task">
        <WrappedForm onSubmit={onSubmit} />
      </Card>
    </BasePage>
  );
};

const mapDispatchToProps = dispatch => ({
  addTask: values => dispatch(addTask(values))
});

export default connect(null, mapDispatchToProps)(Index);
