import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Project, ProjectNew, Projects, Users } from "./pages";
import { Background, Footer, Header } from "./components";
import { ThemeProvider } from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Background>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="/projects/new" element={<ProjectNew />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<Users />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Background>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
