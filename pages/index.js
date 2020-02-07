import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";
import Router from "next/router";
import { connect } from "react-redux";

// component
import BasePage from "../components/layout/basePage";
import WrappedForm from "../components/form/form";

// action
import { taskTest } from "../redux/task/task.action";

const addTask = (e, form) => {
  e.preventDefault();
  form.validateFields(async (err, values) => {
    if (!err) {
      try {
        const response = await axios.post(
          "http://laravelapi.co/api/tasks",
          values
        );
        if (response.status === 200) {
          alert("new task has been created");
          form.resetFields();
          return Router.push("/index");
        }
      } catch (err) {
        console.log("create task fail" + err.message);
      }
    } else {
      console.log("something woring with form validate");
    }
  });
};

const Index = ({ taskMessage }) => {
  const [message, setMessage] = useState("messsage init.");

  useEffect(() => {
    setMessage(taskMessage);
  }, [taskMessage]);

  console.log(message);

  return (
    <BasePage index={["1"]}>
      <Card hoverable style={{ maxWidth: "400px" }} title="New Task">
        <WrappedForm addTask={addTask} />
      </Card>
    </BasePage>
  );
};

const mapStateToProps = state => ({
  taskMessage: state.task.message
});

const mapDispatchToProps = dispatch => ({
  taskTest: message => dispatch(taskTest(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
