import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { Login } from "./pages/Login";
import Sidebar from "./components/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { Contacts } from "./pages/Contacts";
import { ContactDetail } from "./pages/ContactDetail";
import { ContactFormCreate } from "./pages/ContactFormCreate";
import { ContactFormUpdate } from "./pages/ContactFormUpdate";
import { RequireAuth } from "./util/RequireAuth";
import { UserPage } from "./pages/UserPage";
import { Leads } from "./pages/Leads";
import { LeadDetail } from "./pages/LeadDetail";
import { LeadFormCreate } from "./pages/LeadFormCreate";
import { LeadFormUpdate } from "./pages/LeadFormUpdate";

function App() {
  return (
    <>
      <div
        className="app"
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <Sidebar />
        <Routes>
          {/** public routes */}
          <Route path="/login" exact="true" element={<Login />} />

          {/** protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="/" exact="true" element={<Dashboard />}></Route>
            <Route path="/contacts" exact="true" element={<Contacts />}></Route>
            <Route
              path="/contacts/:id"
              exact="true"
              element={<ContactDetail />}
            ></Route>
            <Route
              path="/contacts/create"
              exact="true"
              element={<ContactFormCreate />}
            ></Route>
            <Route
              path="/contacts/update/:id"
              exact="true"
              element={<ContactFormUpdate />}
            ></Route>
            <Route path="/profile" exact="true" element={<UserPage/>}></Route>
          </Route>
          <Route path="/leads" exact="true" element={<Leads />}></Route>
          <Route
              path="/leads/:id"
              exact="true"
              element={<LeadDetail />}
          ></Route>
          <Route
              path="/leads/create"
              exact="true"
              element={<LeadFormCreate />}
          ></Route>
          <Route
              path="/leads/update/:id"
              exact="true"
              element={<LeadFormUpdate />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
