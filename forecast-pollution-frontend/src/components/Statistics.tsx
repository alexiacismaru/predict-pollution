import { Container, Alert } from "@mui/material";
import { Footer, AuthHeader } from "./Navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 
import { useEnvData } from "../hooks/useEnvData";
import { usePredictions } from "../hooks/usePredictions";


export default function Statistics() {
    const {isLoading, isError, envData} = useEnvData();
    const {isLoadingPredictions, isErrorPredictions, predictions} = usePredictions();

    if (isLoading || isLoadingPredictions) {
        return <Alert severity="info">Loading...</Alert>;
    }

    if (isError || isErrorPredictions) {
        return <Alert severity="error">Error loading data</Alert>;
    }   

    const keyArray = Object.values(envData); 
    const data = keyArray.slice(-35).map(item => ({
        timestamp: item.timestamp,
        temperature: Math.round(item.temp),
        traffic: Math.round(item.traffic_level),
        pollution: Math.round(item.pollution)
    }));

    const data_forecasts = predictions.slice(-35).map(item => ({
        timestamp: item.timestamp,
        pollution: Math.round(item.pollution)
    }));

    return (  
        <>
            <AuthHeader/> 
            <h1>Statistics</h1>
            <div className="prediction-data" style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <h3>Predictions</h3>
                <ResponsiveContainer width={1000} height={300}>
                    <LineChart data={data_forecasts}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="timestamp" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pollution" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <Container style={{ display: "flex", justifyContent: "space-between"}}>
            <div className="traffic-data">
                <h3>Traffic Data</h3>
                <ResponsiveContainer width={400} height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="timestamp" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="traffic" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="weather-data">
                <h3>Temperature Data</h3>
                <ResponsiveContainer width={400} height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="timestamp" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="air-quality-data">
                <h3>Air Quality Data</h3>
                <ResponsiveContainer width={400} height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="timestamp" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pollution" stroke="#ff7300" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Container>
            <Footer/>
        </>
        
    );   
} 
