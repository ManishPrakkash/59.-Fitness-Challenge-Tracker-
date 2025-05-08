import React from 'react';
import { useQuery } from 'react-query';
import api from '../api/axios';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Leaderboard() {
  const { data, isLoading, error } = useQuery('leaderboard', () =>
    api.get('leaderboard/').then(res => res.data)
  );

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error loading leaderboard</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Leaderboard</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Total Distance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((entry, idx) => (
            <TableRow key={entry.user_id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{entry.username}</TableCell>
              <TableCell>{entry.total_distance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="username" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total_distance" fill="#1976d2" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
} 