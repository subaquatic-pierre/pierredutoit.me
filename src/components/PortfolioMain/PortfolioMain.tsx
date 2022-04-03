import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';

import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

import ProjectImage from 'components/ProjectImage';

interface Props {
  projects: Project[];
}

const Main = ({ projects }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={4}>
        {projects.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                <ProjectImage item={item} />
                <Box component={CardContent}>
                  <Typography variant={'h6'} fontWeight={700} gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant={'body2'} color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'flex-start'}>
                  <IconButton href={item.github} target="blank">
                    <GitHubIcon />
                  </IconButton>
                  {item.url && (
                    <IconButton href={item.url} target="blank">
                      <LanguageIcon />
                    </IconButton>
                  )}
                  {item.youtube && (
                    <IconButton href={item.youtube} target="blank">
                      <LanguageIcon />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Main;
