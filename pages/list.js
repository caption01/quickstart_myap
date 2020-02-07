import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "next/router";

import BasePage from "../components/layout/basePage";
import Table from "../components/table/table";

const deleteTask = async id => {
  const target = id;
  try {
    const response = await axios.delete(
      `http://laravelapi.co/api/tasks/${target}`
    );
    if (response.status === 200) {
      return Router.push("/list");
    }
  } catch (err) {
    console.log("delete method error" + err.message);
  }
};

const List = ({ tasks }) => {
  return (
    <BasePage index={["2"]}>
      <Table tasks={tasks} deleteTask={deleteTask} />
    </BasePage>
  );
};

List.getInitialProps = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "http://laravelapi.co/api/tasks"
    });
    const taskList = await response.data;
    return { tasks: taskList };
  } catch (err) {
    console.log("fail to fetch", err.message);
  }
};

export default List;
