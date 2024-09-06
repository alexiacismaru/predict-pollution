import { Alert, Card, Container } from '@mui/material';
import { useNotification } from '../hooks/useNotification.ts';

export default function Notification() {
    const { isLoading, isError, notification } = useNotification();

    if (isLoading) {
        return <Alert severity="info">Loading...</Alert>;
    }

    if (isError) {
        return <Alert severity="error">Error loading data</Alert>;
    }

    return (
        <>
            <Container style={{ display: 'flex', flexDirection: 'column' }}>
                <h2>Notifications</h2> 
                <div style={{ marginLeft: '2rem', width: '25rem', height: '30rem', overflowY: 'auto' }}>
                    {notification.map((item, id) => (
                        <Card key={id} style={{ width: '18rem', backgroundColor: 'rgba(189, 188, 188, 0.56)', height: '6rem', padding: '1rem', marginTop: '2rem' }}>
                            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '15px', color: 'black' }}>
                                {item.message}
                            </p>
                        </Card>
                    ))}
                </div>
            </Container>
        </>      
    );
}
