import React, { useState } from "react";
import { TextField, Button, FormControlLabel, Checkbox, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import registerBackground from './assets/PrepPro.png'; // Import the image

const StyledContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  padding: '16px',
  backgroundColor: '#f5f5f5',
  borderRadius: '12px',
});

const StyledBackground = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `url(${registerBackground}) center/cover`,
  filter: 'blur(0.00001px)', // Adjust the blur effect to your desired level
  opacity: 0.35, // Adjust the opacity to your desired level
  zIndex: -1,
});

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [collegeId, setCollegeId] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [passingYear, setPassingYear] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [acceptTAndC, setAcceptTAndC] = useState(false);
  const [confirmPass, setConfirmPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <StyledContainer className="auth-form-container">
      <StyledBackground />
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <Box sx={{ width: '100%', maxWidth: '400px' }}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            label="Full Name"
            variant="outlined"
            fullWidth
          />

          <TextField
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            type="text"
            label="College"
            variant="outlined"
            fullWidth
          />

          <TextField
            value={collegeId}
            onChange={(e) => setCollegeId(e.target.value)}
            type="text"
            label="College ID"
            variant="outlined"
            fullWidth
          />

          <TextField
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            type="text"
            label="CGPA"
            variant="outlined"
            fullWidth
          />

          <TextField
            value={passingYear}
            onChange={(e) => setPassingYear(e.target.value)}
            type="text"
            label="Passing Year"
            variant="outlined"
            fullWidth
          />

          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
          />

          <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            label="Phone No."
            variant="outlined"
            fullWidth
          />

          <TextField
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            label="Location"
            variant="outlined"
            fullWidth
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={acceptTAndC}
                onChange={(e) => setAcceptTAndC(e.target.checked)}
                id="acceptTAndC"
                name="acceptTAndC"
              />
            }
            label="Accept Terms & Conditions"
          />

          <TextField
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
          />

          <TextField
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            label="Confirm Password"
            variant="outlined"
            fullWidth
          />

          <Button type="submit" variant="contained">
            Register
          </Button>
        </Box>
      </form>
      <Button
        className="link-btn"
        onClick={() => props.onFormSwitch('login')}
        variant="text"
      >
        Already have an account? Login here.
      </Button>
    </StyledContainer>
  );
};
