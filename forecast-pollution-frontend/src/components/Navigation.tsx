import Box from '@mui/material/Box'; 
// import Button from '@mui/material/Button'; 
import '../index.css'
import { AppBar, Container, Typography } from '@mui/material'; 
// import { useContext } from 'react';
// import SecurityContext from '../context/SecurityContext';

export function AuthHeader() {
//   const { isAuthenticated, logout, loggedInUser } = useContext(SecurityContext)
  return (
      <header style={{ display: 'block', width: '100%', top: 0, left: 0, zIndex: 'var(--header-and-footer)' }}>
          <AppBar sx={{
              borderBottom: '1px solid white',
              boxShadow: '',
              backgroundColor: 'transparent',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              marginLeft: 'auto',
              marginRight: 'auto',
          }}>
              <div
                  style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '5px',
                      alignItems: 'baseline',
                  }}
              >
                  <a href='/index' style={{
                      fontSize: '40px', color: 'black', 
                  }}>Detect pollution</a>
                  <div style={{display: 'flex',
                      justifyContent: 'space-around',
                      padding: '5px',
                      alignItems: 'baseline',}}>
                      <a href='/settings' style={{
                          marginRight: '10px', color: 'black'
                      }}>Settings</a>
                      <a href='/statistics' style={{ marginRight: '10px', color: 'black'
                      }}>Statistics</a>
                      <a href='/login' style={{ marginRight: '60px', color: 'black'
                      }}>Login</a>
                      {/* {isAuthenticated() && (
                          <><p style={{marginRight: '10px'}}>Hello, {loggedInUser}</p><Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, backgroundColor: 'green'}}
                                                               onClick={logout}>
                              Log out
                          </Button ></>
                      )} */}
                  </div>
              </div>
          </AppBar>
      </header>
  )
}

export function Footer() {
    return (
        <Box
            sx={{display:'block', position: 'fixed', width: '100%', bottom: 0, left: 0, zIndex: 'var(--header-and-footer)'}}
            component="footer"
        >
            <Container>
                <Typography>
                    <p>Copyright © Alexia Cismaru, August 2024</p>
                </Typography>
            </Container>
        </Box>
    )
}
