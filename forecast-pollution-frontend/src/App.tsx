import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Statistics from "./components/Statistics.tsx";
import Settings from "./components/Settings.tsx";
import Dashboard from "./components/Dashboard.tsx";
import EnvDataPage from './components/EnvDataPage.tsx';
// import Login from "./components/Login.tsx";
// import Signup from "./components/Signup.tsx";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/statistics" element={<Statistics/>}/>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/index" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/get-fetched-data/:id" element={<EnvDataPage />} />
                    {/* <Route path="/login" element={<Login />}/>
                    <Route path="/signup" element={<Signup />}/> */}
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
