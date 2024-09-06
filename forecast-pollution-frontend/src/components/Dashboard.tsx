import EnvironmentData from "./EmvironmentalData.tsx";
import {AuthHeader, Footer } from "./Navigation.tsx";
import Notification from "./Notification.tsx"; 

export default function Dashboard() {
    return (
        <>
            <AuthHeader/>  
            <div style={{display: "flex", marginTop: '5rem'}}> 
                <EnvironmentData/>
                <Notification/>
            </div>
            <Footer/> 
        </>
    );
}
