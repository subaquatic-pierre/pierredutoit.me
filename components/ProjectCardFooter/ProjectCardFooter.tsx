import React from 'react';

import { useTheme } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForkLeftIcon from '@mui/icons-material/ForkLeft';

interface Props {
  project: Project;
}

const ProjectCardFooter = ({ project }: Props): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Box component={CardContent}>
        <Box display="flex">
          {project.tags.map((tag, i) => (
            <Box
              marginRight={1}
              key={i}
              component="a"
              href={`https://github.com/topics/${tag}`}
              target="blank"
              sx={{
                backgroundColor: theme.palette.alternate.dark,
                px: 1,
                py: 0.5,
                borderRadius: '10px',
                textDecoration: 'none',
              }}
            >
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
          <Tooltip title="Github Stars" placement="top-end">
            <IconButton
              disableRipple
              sx={{
                '&:hover': {
                  cursor: 'initial',
                },
              }}
            >
              <StarBorderIcon />
              <Typography marginLeft={1}>{project.stars}</Typography>
            </IconButton>
          </Tooltip>
          <Tooltip title="Github Forks" placement="top-end">
            <IconButton
              disableRipple
              sx={{
                '&:hover': {
                  cursor: 'initial',
                },
              }}
            >
              <ForkLeftIcon />
              <Typography marginLeft={1}>{project.forks}</Typography>
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCardFooter;
