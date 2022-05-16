import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

const CardSkeleton = (): JSX.Element => {
  return (
    <Card>
      <Skeleton sx={{ height: 400 }} animation="wave" variant="rectangular" />
      <CardContent>
        <React.Fragment>
          <Skeleton
            animation="wave"
            height={30}
            width="50%"
            style={{ marginBottom: 14 }}
          />
          <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={20} style={{ marginBottom: 60 }} />
        </React.Fragment>
      </CardContent>
    </Card>
  );
};

export default CardSkeleton;
