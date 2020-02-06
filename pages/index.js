import React from "react";
import { Card } from "antd";

import BasePage from "../components/layout/basePage";
import WrappedForm from "../components/form/form";

const Index = () => (
  <BasePage index={["1"]}>
    <Card hoverable={true} style={{ maxWidth: "400px" }} title="New Task">
      <WrappedForm />
    </Card>
  </BasePage>
);

export default Index;
