import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AppWalletProvider from "./components/AppWalletProvider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWalletProvider>
      <App />
    </AppWalletProvider>
  </StrictMode>
);
