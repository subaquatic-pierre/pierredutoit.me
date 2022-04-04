import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProjectCard from 'components/ProjectCard';

interface Props {
  projectMetaData: ProjectMetaData[];
}

const Main = ({ projectMetaData }: Props): JSX.Element => {
  console.log(projectMetaData.length);
  return (
    <Box>
      <Grid container spacing={4}>
        {projectMetaData.map((projectMeta, i) => (
          <ProjectCard projectMeta={projectMeta} key={i} />
        ))}
      </Grid>
    </Box>
  );
};

export default Main;
