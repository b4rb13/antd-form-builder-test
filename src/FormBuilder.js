import { Switch, Input, Select } from "antd";

const MySwitch = ({ value }) => <Switch defaultChecked={!!Number(value)} />;
const MyInput = ({ value }) => <Input defaultValue={value} />;
const MyPassword = ({ value }) => (
  <Input type={"password"} defaultValue={value} />
);
const MySelect = ({ value, options }) => (
  <Select options={options} defaultValue={value} />
);
const MyMultiSelect = ({ value, options }) => (
  <Select options={options} defaultValue={value} mode={"multiple"} />
);

export const Builder = () => {
  return null;
};

Builder.boolean = MySwitch;
Builder.text = Builder.depends = MyInput;
Builder.select = MySelect;
Builder.multiselect = MyMultiSelect;
Builder.password = MyPassword;
