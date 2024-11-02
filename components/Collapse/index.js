import React from "react";
import { Collapse, Divider } from "antd";
import Markdown from "markdown-to-jsx";
import { Quicksand } from "@next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // İhtiyacınıza göre ağırlıkları ekleyin
});

const App = ({ data }) => (
  <>
    {data.map((item, index) => (
      <Collapse
      key={index}
      className={quicksand.className}
        style={{ width: "100%", background: "#fff", fontSize:18, fontWeight:"bold" }}
        items={[
          {
            key: "3",
            label: item.title,
            children: <Markdown style={{ fontSize:14, fontWeight:"500"}}>{item.content}</Markdown>,
          },
        ]}
      />
    ))}
  </>
);
export default App;
