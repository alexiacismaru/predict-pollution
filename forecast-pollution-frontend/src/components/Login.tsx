import {FormEvent, useState} from "react";
import {User} from "../model/User.ts";
import {useNavigate} from "react-router-dom";
import {Alert, Button, Container, TextField, Typography} from "@mui/material";

interface UserProps {
    user: User;
}

export default function Login({user}: UserProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (username == user.username && password == user.password) {
            navigate("/dashboard")
        } else {
            return <Alert severity="error">Wrong username or password. Please try again!</Alert>
        }
    }

    return (
        <Container>
            <Typography variant="h4">Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                />
                <p>
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Login
                </Button>
            </form>
        </Container>
    );
}