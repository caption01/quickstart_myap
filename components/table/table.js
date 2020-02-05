import React, { Component } from "react";
import { Table, Divider, Tag } from "antd";

const TableComponent = () => {
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
          <a>delete</a>
        </span>
      )
    }
  ];

  const data = [
    {
      id: "1",
      title: "running",
      description: "30 km."
    },
    {
      id: "2",
      title: "eatting",
      description: "pork-chop"
    },
    {
      id: "3",
      title: "sleeping",
      description: "sleeping at 10.00 pm"
    }
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default TableComponent;
