import {CreateUser} from "../model/User.ts";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {Controller, useForm} from "react-hook-form";
import {
    Button, Container,
    TextField, Typography,
} from '@mui/material';

interface SignupProps {
    onSubmit: (data: CreateUser) => void;
}

const userSchema: z.ZodType<CreateUser> = z.object({
    name: z.string().min(3, 'Name is too short'),
    surname: z.string().min(3, 'Surname is too short'),
    username: z.string().min(3, 'Username is too short'),
    password: z.string().min(5, 'Password is too short'),
    confirmPassword: z.string(),
    email: z.string().email('Invalid email address'),
    city: z.string().min(3, 'City is too short'),
    postalCode: z.string().length(5, 'Invalid postal code')
})


export default function Signup({onSubmit}: SignupProps) {
    const {
        handleSubmit,
        reset,
        control,
        formState: {errors},
    } = useForm<CreateUser>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
        },
    })

    return (
        <Container>
            <Typography variant="h4">Sign up</Typography>
            <form onSubmit={handleSubmit((data) => {
                onSubmit(data)
                reset()
            })}>
                <Controller
                    name="name"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="surname"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            label="Surname"
                            variant="outlined"
                            fullWidth
                            required
                            error={!!errors.surname}
                            helperText={errors.surname?.message}
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="username"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            label="Username"
                            variant="outlined"
                            fullWidth
                            required
                            error={!!errors.username}
                            helperText={errors.username?.message}
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            label="Email"
                            variant="outlined"
                            fullWidth
                            required
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            label="Password"
                            variant="outlined"
                            fullWidth
                            required
                            error={!!errors.password}
                            helperText={errors.password?.message}
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="confirmPassword"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            label="Confirm password"
                            variant="outlined"
                            fullWidth
                            required
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="city"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            label="City"
                            variant="outlined"
                            fullWidth
                            required
                            error={!!errors.city}
                            helperText={errors.city?.message}
                            margin="normal"
                        />
                    )}
                />
                <Controller
                    name="postalCode"
                    control={control}
                    render={({field}) => (
                        <TextField
                            {...field}
                            label="Postal Code"
                            variant="outlined"
                            fullWidth
                            required
                            error={!!errors.postalCode}
                            helperText={errors.postalCode?.message}
                            margin="normal"
                        />
                    )}
                />
                {errors.confirmPassword && errors.confirmPassword.type === 'refine' && (
                    <span style={{color: 'red'}}>{errors.confirmPassword.message}</span>
                )}
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
