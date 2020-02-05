import React, { useState, useEffect } from "react";
import axios from "axios";

import BasePage from "../components/layout/basePage";
import Table from "../components/table/table";

const List = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios({
        method: "get",
        headers: { "Access-Control-Allow-Origin": "*" },
        url: "http://laravelapi.co/tasks"
      });
      console.log(response.json().data);
    };
    fetchTasks();
  }, []);

  return (
    <BasePage index={["2"]}>
      <Table />
    </BasePage>
  );
};

export default List;
