import { Form } from "antd";
import { Builder } from "./FormBuilder";
import "./App.css";

function App() {
  const data = [
    { name: "aaaaaaaaaaaaaaa", type: "boolean", value: "1" },
    { name: "bbbbbbbbbbbbbbb", type: "boolean", value: "0" },
    { name: "ccccccccccccccc", type: "depends", value: "hello" },
    { name: "ddddddddddddddd", type: "text", value: "" },
    { name: "eeeeeeeeeeeeeee", type: "depends", value: "urish hello" },
    {
      name: "fffffffffffffff",
      type: "select",
      value: "esiminch",
      options: [
        { label: "Esiminchner", value: "siminchner" },
        { label: "Esiminch", value: "esiminch" },
        { label: "Lriv urish ban", value: "lrivurishban" },
      ],
    },
    {
      name: "ggggggggggggggg",
      type: "multiselect",
      value: ["esiminch1", "esiminch2"],
      options: [
        { label: "Esiminch1", value: "esiminch1" },
        { label: "Esiminch2", value: "esiminch2" },
        { label: "Lriv urish ban", value: "lrivurishban" },
      ]
    },
    { name: "hhhhhhhhhhhhhhh", type: "select", value: "" },
    { name: "iiiiiiiiiiiiiii", type: "password", value: "" },
  ];
  return (
    <div className="App">
      <Form layout={"vertical"}>
        {data.map((item) => (
          <Form.Item key={item.name} name={item.name} label={item.name}>
            {Builder[item.type](item)}
          </Form.Item>
        ))}
      </Form>
    </div>
  );
}

export default App;
