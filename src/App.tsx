import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Header } from "./components/Header";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { BrowserRouter } from "react-router-dom";
import { Content } from "./components/Content";
import { Stack } from "@mui/material";
import { AuthProvider } from "./provider/AuthProvider";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Content />
        </BrowserRouter>
        <CssBaseline />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
