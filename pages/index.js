import React from "react";
import { connect } from "react-redux";

// component
import BasePage from "../components/layout/basePage";

// action
import { taskTest } from "../redux/task/task.action";

const Index = props => {
  console.log(props.taskState);
  return (
    <BasePage index={["1"]}>
      <div>Form-Page</div>
    </BasePage>
  );
};

const mapStateToProps = state => ({
  taskState: state.task
});

const mapDispatchToProps = dispatch => ({
  testTask: () => dispatch(taskTast())
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
