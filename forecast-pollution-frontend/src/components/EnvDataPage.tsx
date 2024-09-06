import { useParams } from 'react-router-dom'
import { useEnvDataElement } from '../hooks/useEnvDataElements'
import { AuthHeader, Footer } from './Navigation'
import { Container } from '@mui/material'

export default function EnvDataPage() {
    const { id } = useParams()
    const { isLoading, isError, envDataElement } = useEnvDataElement(id!)

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Error loading data</p>
    } 


    return (
        <>
            <AuthHeader/>
            <Footer/>
        
            <Container style={{ backgroundColor: 'lightgreen', padding: '5rem', borderRadius: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h2>Stats for {envDataElement.latitude} x {envDataElement.longitude}</h2>
                <ol style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', listStyle: 'none', alignItems: 'center', padding: 0, margin: 0 }}>
                    <div style={{textAlign: 'left'}}>
                        <li>Time: {envDataElement.timestamp}</li>
                        <li>Pollution level: {envDataElement.pollution}</li>
                        <li>Traffic level: {envDataElement.traffic_level}</li>
                        <li>Wind speed: {envDataElement.wind_speed}</li>
                        <li>Pressure: {envDataElement.pressure}</li>
                        <li>Temperature: {Math.round(envDataElement.temp)} °C</li> 
                    </div>
                    
                </ol>
            </Container>

        </>
    )

}