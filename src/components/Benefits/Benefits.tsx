/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import CodeIcon from '@mui/icons-material/Code';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import BiotechIcon from '@mui/icons-material/Biotech';
import CommitIcon from '@mui/icons-material/Commit';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import GroupsIcon from '@mui/icons-material/Groups';

const benefits = [
  {
    title: 'Clean Code',
    subtitle: 'Following the best SOLID code design principles',
    icon: <CodeIcon />,
  },
  {
    title: 'Documented Code',
    subtitle: 'Well documented and self describing semantic code',
    icon: <InterpreterModeIcon />,
  },
  {
    title: 'Well Tested',
    subtitle: 'Using test driven development to ensure application integrity',
    icon: <BiotechIcon />,
  },
  {
    title: 'Version Control',
    subtitle: 'Leveraging the latest in Git version control to keep up to date',
    icon: <CommitIcon />,
  },
  {
    title: 'Continuous Development',
    subtitle: 'Continuos development and integration software life cycles',
    icon: <ChangeCircleIcon />,
  },
  {
    title: 'Agile Methods',
    subtitle: 'Harness Agile methodologies to integrate team development',
    icon: <GroupsIcon />,
  },
];

const Benefits = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Grid container spacing={4}>
      {benefits.map((item, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Box
            component={Card}
            padding={4}
            width={1}
            height={1}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box display={'flex'} flexDirection={'column'}>
              <Box
                component={Avatar}
                width={50}
                height={50}
                marginBottom={2}
                bgcolor={theme.palette.primary.main}
                color={theme.palette.background.paper}
              >
                {item.icon}
              </Box>
              <Typography variant={'h6'} gutterBottom sx={{ fontWeight: 500 }}>
                {item.title}
              </Typography>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Benefits;
