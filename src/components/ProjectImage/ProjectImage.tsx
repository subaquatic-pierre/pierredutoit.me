import React from 'react';

import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

interface Props {
  project: Project;
}

const ProjectImage = ({ project }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Box component="a" href={project.url ? project.url : project.github}>
      <Box
        src={project.screenshot}
        component="img"
        title={project.title}
        sx={{
          height: { xs: 340, md: 340 },
          filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          objectFit: 'cover',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      />
    </Box>
  );
};

export default ProjectImage;
