import React from "react";
import { Collapse, Divider } from "antd";
import Markdown from "markdown-to-jsx";

const App = ({ data }) => (
  <>
    {data.map((item, index) => (
      <Collapse
      key={index}
        style={{ width: "100%", background: "#fff", fontFamily: "Quicksand", fontSize:18, fontWeight:"bold" }}
        items={[
          {
            key: "3",
            label: item.title,
            children: <Markdown style={{fontFamily: "Quicksand", fontSize:14, fontWeight:"500"}}>{item.content}</Markdown>,
          },
        ]}
      />
    ))}
  </>
);
export default App;
