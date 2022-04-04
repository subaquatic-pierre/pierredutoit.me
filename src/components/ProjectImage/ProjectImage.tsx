import React from 'react';

import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

interface Props {
  project: Project;
}

const ProjectImage = ({ project }: Props): JSX.Element => {
  const theme = useTheme();

  const navigate = () => {
    const url = project.url ? project.url : project.github;
    window.open(url, '_blank');
  };

  return (
    <Box
      onClick={navigate}
      src={project.screenshot}
      component="img"
      // href={project.github}
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
  );
};

export default ProjectImage;
