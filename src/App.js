import React from "react";
import "./App.scss";
import Main from "./containers/Main";


const App = ({ language, setLanguage }) => {
  return (
    <div>
      <Main language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default App;
