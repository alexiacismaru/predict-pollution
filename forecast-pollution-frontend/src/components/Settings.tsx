import {Container, TextField} from "@mui/material";
import {Footer, AuthHeader} from "./Navigation.tsx";

export default function Settings() {
    return (
        <>
            <AuthHeader/> 
            <h1 style={{width: "500px"}}>Update account</h1>
            <Container sx={{textAlign: 'left', display: 'flex', flexDirection: 'column'}}>
                <h3>Username</h3>
                <TextField
                    fullWidth
                    value="Current username"
                />
                <h3>City</h3>
                <TextField
                    fullWidth
                    value="Current city"
                />
                <h3>Postal Code</h3>
                <TextField
                    fullWidth
                    value="Current postal code"
                />
            </Container> 
            <Footer/>
        </>
    )
}
