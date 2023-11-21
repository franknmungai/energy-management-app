import React from 'react';
import TextField from '@mui/material/TextField';

const Login = () => {
  return (
    <div className="w-full">
      <div className="max-w-6xl shadow-lg rounded-md p-8">
        <form>
          <TextField label="Email" variant="outlined" required />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
