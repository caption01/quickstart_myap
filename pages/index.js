import React from "react";
import { Card } from "antd";
import axios from "axios";
import Router from "next/router";

import BasePage from "../components/layout/basePage";
import WrappedForm from "../components/form/form";

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

const Index = () => (
  <BasePage index={["1"]}>
    <Card hoverable={true} style={{ maxWidth: "400px" }} title="New Task">
      <WrappedForm addTask={addTask} />
    </Card>
  </BasePage>
);

export default Index;
