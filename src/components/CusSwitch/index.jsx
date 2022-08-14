import React, { useState } from "react";

import "./styles.scss";

import { Switch, Tooltip } from "antd";
const CusSwitch = () => {
  return (
    <div className="cus-switch">
      <Tooltip title="We haven't supported Vietnamese yet">
        <Switch
          checkedChildren="English"
          unCheckedChildren="Tiếng Việt"
          defaultChecked
        />
      </Tooltip>
    </div>
  );
};

export default CusSwitch;
