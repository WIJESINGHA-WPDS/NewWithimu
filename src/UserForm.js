import React, { useState } from 'react';
import { Grid, Input, Typography, Button } from '@mui/material';

const UserForm = () => {
  const [userData, setUserData] = useState({
    id: '',
    name: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAdd = () => {
    console.log("User data submitted:", userData);
    // You can add logic here to send data to an API or update a list
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: '#ffffff',
        marginBottom: '30px',
        padding: '20px'
      }}
    >
      <Grid item xs={12}>
        <Typography component="h1" sx={{ color: '#000000' }}>
          User Form
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          component="label"
          htmlFor="user-id"
          sx={{
            color: '#000000',
            marginRight: '20px',
            fontSize: '16px',
            width: '100px',
            display: 'block'
          }}
        >
          ID
        </Typography>
        <Input
          type="number"
          id="user-id"
          name="id"
          value={userData.id}
          onChange={handleChange}
          sx={{ width: '400px' }}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          component="label"
          htmlFor="user-name"
          sx={{
            color: '#000000',
            marginRight: '20px',
            fontSize: '16px',
            width: '100px',
            display: 'block'
          }}
        >
          Name
        </Typography>
        <Input
          type="text"
          id="user-name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          sx={{ width: '400px' }}
        />
      </Grid>

      <Grid item xs={12}>
        <Button
          onClick={handleAdd}
          sx={{
            margin: 'auto',
            display: 'block',
            marginBottom: '20px',
            backgroundColor: '#00c6e6',
            color: '#000000',
            marginTop: '20px',
            '&:hover': {
              opacity: 0.7,
              backgroundColor: '#00c6e6'
            }
          }}
        >
          ADD
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserForm;
