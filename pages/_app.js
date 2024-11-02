import "@/styles/globals.css";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "@/store";

function App({ Component, pageProps }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Provider store={store}>
        <React.Fragment>
          <AnimatePresence>
            <Component
              {...pageProps}
              drawer={modalVisible}
              setDrawer={setModalVisible}
            />
          </AnimatePresence>
        </React.Fragment>
      </Provider>
    </>
  );
}

export default App;
