import * as React from "react";
import {Routes} from "./Components/Routes/routes";
import * as ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import "antd/dist/antd.css";
import {ApolloProvider} from "react-apollo";
import {ServiceBus} from "./Components/Entities/ServiceBus";
import {loadScript} from "./Util/HtmlHelper";

(window as any).SerivceBus = new ServiceBus();


const preload = async () => {
    for (const file of (await (await fetch("/api/1.0/getWebPlugins")).json() as string[])) {
        await loadScript(file);
    }
    console.log(3);
};

preload().then(() => {
    const client = new ApolloClient({
        uri: "http://localhost"
    });
    ReactDOM.render(
        <ApolloProvider client={client}>
            <Routes/>
        </ApolloProvider>
        ,
        document.querySelector(".application")
    );
});


