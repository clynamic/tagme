import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  ProjectPage,
  ProjectNewPage,
  ProjectsPage,
  UsersPage,
  CommentsPage,
  NotFoundPage,
} from "./pages";
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
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
              <Route path="/projects/new" element={<ProjectNewPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/users/:id" element={<UsersPage />} />
              <Route path="/comments" element={<CommentsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Background>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
