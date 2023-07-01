import React, { useState } from "react";
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import prepProImage from './assets/PrepPro.png'; // Import the image

const StyledForm = styled('form')({
  display: 'grid',
  gap: '16.5px',
});

const StyledContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between', // Align components to the right and left half of the screen respectively
  alignItems: 'center',
  gap: '16.5px',
  padding: '16px',
  backgroundColor: '#f5f5f5',
  borderRadius: '18px',
});

const StyledLinkButton = styled(Button)({
  textDecoration: 'underline',
});

const StyledAppName = styled('h1')({
  fontFamily: 'Arial, sans-serif',
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '16px',
});

const StyledSlideshow = styled('div')({
  flex: '0.98', // Occupy remaining space
  height: '100vh',
  background: `url(${prepProImage}) `, // Use the imported image as the background
  backgroundPosition: 'top'

});

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <StyledContainer className="auth-form-container">
      <StyledSlideshow />
      <div>
        <StyledAppName>PrepPro</StyledAppName>
        <StyledForm className="login-form" onSubmit={handleSubmit}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            label="Password"
            variant="outlined"
          />
          <Button type="submit" variant="contained">
            Log In
          </Button>
        </StyledForm>
        <StyledLinkButton
          onClick={() => props.onFormSwitch('register')}
          variant="text"
        >
          Don't have an account? Register here.
        </StyledLinkButton>
      </div>
    </StyledContainer>
  )
}
