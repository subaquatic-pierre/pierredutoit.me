import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';

import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

interface Props {
  project: Project;
  projectTags?: string[];
}

const ProjectCardFooter = ({
  project,
  projectTags = [],
}: Props): JSX.Element => {
  return (
    <Box>
      <Box component={CardContent}>
        <Typography variant={'body2'} color="text.secondary">
          Tags:
        </Typography>
        <Box>
          {projectTags.map((tag, i) => (
            <Box key={i}>{tag}</Box>
          ))}
        </Box>
      </Box>
      <Box component={CardActions} justifyContent={'flex-start'}>
        <IconButton href={project.github} target="blank">
          <GitHubIcon />
        </IconButton>
        {project.url && (
          <IconButton href={project.url} target="blank">
            <LanguageIcon />
          </IconButton>
        )}
        {project.youtube && (
          <IconButton href={project.youtube} target="blank">
            <LanguageIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default ProjectCardFooter;
