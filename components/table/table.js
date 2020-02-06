import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";

const TableComponent = ({ tasks, deleteTask }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "TITLE",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "DESCRIPTION",
      dataIndex: "description",
      key: "description"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <a>edit</a>
          <Divider type="vertical" />
          <a onClick={() => deleteTask(record.id)}>delete</a>
        </span>
      )
    }
  ];

  return <Table columns={columns} dataSource={tasks} />;
};

export default TableComponent;
