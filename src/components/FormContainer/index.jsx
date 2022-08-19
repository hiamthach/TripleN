import React, { useState } from "react";

import "./styles.scss";

import { Input, Select } from "antd";
const { Option } = Select;

const DateInput = () => {
  return (
    <div className="input-wrap__date">
      <input type="date" id="input-wrap__date" />
    </div>
  );
};

const SelectDayNight = () => {
  return (
    <div className="input-wrap__day-night">
      <Select className="input-wrap__select" defaultValue="morning" autoFocus>
        <Option value="morning">Morning</Option>
        <Option value="noon">Noon</Option>
        <Option value="afternoon">Afternoon</Option>
        <Option value="evening">Evening</Option>
      </Select>

      <div className="input-wrap__icon">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAFS0lEQVRoge1aXWscVRh+3jOpvZIiZneS1YuKHymxILVSIjTgZjZtETVYu5M0FBRRxFx5b8Co+QHeWIXe1arNbCPUItoms0kr9evCfijWTxqwxN1sgvYyYee8XuymbnazmzNzTrbS5oGFndk5z/M++87M+XgPsIFbG9RswUzK7mOJIyAwJF52p/KfNlNfNFMMAJhxGIQYgDgEDjdbv+mGASQqvt/TbPGbYfimYsPwrY7bznCL6oUf97YmhBQ9DPndgD//63oGpQovmegAFXdZm+Tkc6fn/1Jpo5Th8b2t7Za0LhHoAwHrB8+x+zXinKn4fjUqiefY/RDBZRAdDYrW5fG9re0q7ZQMy0D0AmgtH94B4FhU08Q0BPC10kcOReEoax8rxwIArcWicJT01QTaOgG+CGBTxekigEOunx8LE6wuKsxWPo5LwrIeOXBm9ue12itl2PVzPwE0iJLJZbQA+HDMiR8KE7AOMj1tadSaDQj8oopZIORYus6/WwTk065f+CIMV1h4TmwfIE7Vaoe7y0J1S2XiQ6jJtHgjDE8kkBiBplkgRLe0DNfPj3mODazINP1T73oGKJNsf5QE9zG4G+B2gO4t//gnCDmAzkkWJweys9/XFWb6G+Dlo8jvj8jTQ8+J7QOLYQhcFyRfOzBR+G1FfAB5qbY0Md4G+CE1Vv4FEMNpPzdOFe4A4ERv7EHJ4h1IbAHJ0aiP0LrMh4/3xO8XRB8B2BWR4htYGHTP5CP30/Vg3LCXiu0Gi3EAcU2qBTBcN5vPmohrGUYNjzltSQKfxsr+WgdLELTHncidNcRnzrC3x74PRXxbXs0wiQUEssudLvxugszIbIkBQoDj62AWAO6GJY6yoeQYMZxxbBfRX1AqeNxLxfebINI2XPrn6S0TwTQCSRo1waNteLy3fad6P6sBwrYTqdgOXRptw0Eg+3Q5lLVgaWtpGybCbl0OZS3mbl2OG2PpsWTbkyT4XQBb61w7Q0xD6Wzu86owElWjwHUE16xjh437RoZJ8PsNGgHAViY+skoQidpz6wWqMRw2bhPdUrPSCwBSl+C/DDO9gsaLalcB+VLtaVJaLTQDrtEKG7f26MVz7CyApC6PIrKun1darKsHA7c0fanPoQrWnkRoG5YsTupyKGtJaGtp39IMUMaJXwGoQ5drDVxx/XynLon+wANgQAzr8qwJ5tdN0BiZcpWybH8FoMsE3yoC59PZfHf1OlcUGJkeEsBBQAfBKJjgq8KCBD9vwixgsFx6cDo3A4vSAJZMcQJYIshnB7Jzf5giNFofdidyZ1lyD4A5A3QLDNqX9gtGuz3jBfH+qbnzsNAF4OvIJIzzQUCP9fu5KXORlRD5pZVx7KeYMALGdYng1eoieWkhPr6fJI2CsE2R9goRD6cn5z6p/sFLJjoggvcA3AmiEXcy91mUuCMZXqWo1nDIdyIV2xHA6iPmbjASICyXWq6BMEvM59jik+5E4WIDTR9AT/kwcqkldG1p1QoiYUujNgcmCxcAXAirtRJ0V8WLugWlojzCmg71DNcrl7LEm2F4IkHyCGrr06F3IigbblCMfqE/mz8VRjQKSnsy6SA0i/JqWx6eiD0AS/wIYHPF6f/TlodFBHK7SnVCLcOW2AlDZjMpu8/rsec8x857SfuZsO3rFOU3l2NcE0qGi4HlVwwbF6GRWRO7aStML5ZIUSgGlq/SVsnw4PTsfFFancTkSuaHNW9jI7tpXT8/hkBuJya3KK3OwenZeZV2Td8g7jn2ikmA6+ebGsNtt9dyw/Ctjg3DTYCR3bRR0XTDJnbTbmAD9fEvLXr2cfW7HkoAAAAASUVORK5CYII=" />
      </div>
    </div>
  );
};

const FormContainer = () => {
  return (
    <div className="form-container">
      <DateInput />
      <SelectDayNight />

      <button className="form-container__btn">Book</button>
    </div>
  );
};

export default FormContainer;
