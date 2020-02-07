import React from "react";
import { connect } from "react-redux";

import BasePage from "../components/layout/basePage";

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

export default connect(mapStateToProps, null)(Index);
