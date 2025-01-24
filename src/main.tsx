import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiProvider } from "./context/ApiContext.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { ResponseProvider } from "./context/ResponseContext.tsx";



createRoot(document.getElementById("root")!).render(

    <UserProvider>
      <ApiProvider>
        <ResponseProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </ResponseProvider>
      </ApiProvider>
    </UserProvider>
    
);
