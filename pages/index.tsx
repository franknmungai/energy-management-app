import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
      setLoading(false);
    }, 1500);
  };
  return (
    <div className="w-full h-[95vh] flex items-center">
      <div className="max-w-6xl mx-auto shadow-lg rounded-md bg-white p-8 text-center">
        {isLoading ? <LinearProgress /> : null}
        <h1 className="text-3xl font-semibold tracking-wide">Group 4</h1>
        <h2 className="text-xl">Energy Management App</h2>

        <form className="flex flex-col space-y-12" onSubmit={handleSubmit}>
          <div>
            <img src="/icons/login.avif" className="w-64 h-64" />
            <p>
              (Margret Thatcher Library and the School of Information Science)
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <TextField label="Email" variant="outlined" required />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              required
            />

            <Button variant="contained" className="bg-green-500" type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
