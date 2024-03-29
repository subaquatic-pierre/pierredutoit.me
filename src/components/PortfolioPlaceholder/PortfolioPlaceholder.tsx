import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import CardSkeleton from 'components/CardSkeleton';

const mock = [1, 2, 3, 4, 5, 6];

const PortfolioPlaceholder = (): JSX.Element => {
  return (
    <Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <CardSkeleton />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioPlaceholder;
