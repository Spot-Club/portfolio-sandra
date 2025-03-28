import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { dynamicActivate } from "./i18n";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const I18nApp = () => {
    const [language, setLanguage] = useLocalStorage("language", "fr");


    useEffect(() => {
        // With this method we dynamically load the catalogs
        dynamicActivate(language);
    }, [language]);

    return (
        <I18nProvider i18n={i18n}>
            <App language={language} setLanguage={setLanguage} />
        </I18nProvider>
    );
};

ReactDOM.render(<I18nApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
