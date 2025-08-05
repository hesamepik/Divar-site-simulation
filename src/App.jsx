import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authpage from "pages/Authpage";
import Homepage from "pages/Homepage";
import Dashboard from "pages/Dashboard";
import Adminpage from "pages/Adminpage";
import Pagenotfund from "pages/404";
import Router from "router/Router";
import defaultOptions from "configs/reactQuery.js"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  const queryClient= new QueryClient({defaultOptions})
  return (

    <QueryClientProvider  client={queryClient}>

  <BrowserRouter>
<Router/>
  </BrowserRouter>
  <ReactQueryDevtools/>
    </QueryClientProvider>
)
}

export default App;
