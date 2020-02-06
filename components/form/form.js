import React from "react";
import { Form, Input, Button } from "antd";

const TaskForm = ({ form, addTask }) => {
  const { getFieldDecorator } = form;
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 12 }}
      onSubmit={e => addTask(e, form)}
      layout={"vertical"}
    >
      <Form.Item label="Title">
        {getFieldDecorator("title", {
          rules: [{ required: true, message: "Please input your title!" }]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Description">
        {getFieldDecorator("description", {
          rules: [{ required: true, message: "Please input your description!" }]
        })(<Input />)}
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const WrappedForm = Form.create({ name: "coordinated" })(TaskForm);

export default WrappedForm;
