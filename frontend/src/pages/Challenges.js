import React from 'react';
import { useQuery } from 'react-query';
import api from '../api/axios';
import { Container, Typography, Card, CardContent, Button, Grid } from '@mui/material';

export default function Challenges() {
  const { data, isLoading, error } = useQuery('challenges', () =>
    api.get('challenges/').then(res => res.data)
  );

  const handleJoin = async (id) => {
    await api.post(`challenges/${id}/join/`);
    alert('Joined challenge!');
  };

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error loading challenges</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Active Challenges</Typography>
      <Grid container spacing={2}>
        {data.map(challenge => (
          <Grid item xs={12} md={6} key={challenge.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{challenge.name}</Typography>
                <Typography>Type: {challenge.type}</Typography>
                <Typography>Goal: {challenge.goal}</Typography>
                <Typography>Duration: {challenge.duration_days} days</Typography>
                <Button variant="contained" onClick={() => handleJoin(challenge.id)} sx={{ mt: 2 }}>
                  Join
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 