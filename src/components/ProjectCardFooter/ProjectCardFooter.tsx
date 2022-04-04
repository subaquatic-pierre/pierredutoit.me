import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';

import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForkLeftIcon from '@mui/icons-material/ForkLeft';

interface Props {
  project: Project;
}

const ProjectCardFooter = ({ project }: Props): JSX.Element => {
  return (
    <Box>
      <Box component={CardContent}>
        <Typography variant={'body1'} color="text.secondary">
          Tags:
        </Typography>
        <Box display="flex">
          {project.tags.map((tag, i) => (
            <Box marginRight={1} key={i}>
              <Typography variant={'body2'} color="text.secondary">
                #{tag}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box component={CardActions} justifyContent={'space-between'}>
        <Box>
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
        <Box>
          <IconButton disableRipple>
            <StarBorderIcon />
            <Typography marginLeft={1}>{project.stars}</Typography>
          </IconButton>
          <IconButton disableRipple>
            <ForkLeftIcon />
            <Typography marginLeft={1}>{project.forks}</Typography>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCardFooter;
