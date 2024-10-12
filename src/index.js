import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthContextProvider from "./authContext/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <AuthContextProvider>
      <SimpleBar style={{ maxHeight: "100vh" }} autoHide={false} forceVisible="y">
        <App />
      </SimpleBar>
    </AuthContextProvider>
  </QueryClientProvider>
);
