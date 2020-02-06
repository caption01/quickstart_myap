import React, { useState, useEffect } from "react";
import { Table, Divider } from "antd";

import EditModal from "../modal/edit.modal";

const modalController = (modalCurrentState, setModalState) => {
  return setModalState(!modalCurrentState);
};

const selectTask = (selectedTask, setTaskAction) => {
  return setTaskAction(selectedTask);
};

const TableComponent = ({ tasks, deleteTask }) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [taskTarget, setTaskTarget] = useState({});

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
          <a
            onClick={() => {
              modalController(modalStatus, setModalStatus);
              selectTask(record, setTaskTarget);
            }}
          >
            edit
          </a>
          <Divider type="vertical" />
          <a onClick={() => deleteTask(record.id)}>delete</a>
        </span>
      )
    }
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={tasks}
        rowKey={record => record.id}
      />
      {modalStatus ? (
        <EditModal
          status={modalStatus}
          modalToggle={() => modalController(modalStatus, setModalStatus)}
          taskTarget={taskTarget}
        />
      ) : null}
    </>
  );
};

export default TableComponent;
