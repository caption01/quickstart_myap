import React, { useEffect } from "react";

import { connect } from "react-redux";

// component
import BasePage from "../components/layout/basePage";
import Table from "../components/table/table";

// action
import { getTasksList, deleteTask } from "../redux/task/task.action";

const List = ({ taskListData, getTasksList, deleteTask }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <BasePage index={["2"]}>
      <Table tasks={taskListData} deleteTask={deleteTask} />
    </BasePage>
  );
};

const mapStateToProps = state => ({
  taskListData: state.task.list
});

const mapDispatchToProps = dispatch => ({
  getTasksList: () => dispatch(getTasksList()),
  deleteTask: id => dispatch(deleteTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
