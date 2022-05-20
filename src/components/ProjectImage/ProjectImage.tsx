import React from 'react';
import Box from '@mui/material/Box';
import Image from 'components/Image';

interface Props {
  project: Project;
}

const ProjectImage = ({ project }: Props): JSX.Element => {
  return (
    <Box
      component="a"
      href={project.url ? project.url : project.github}
      target="blank"
    >
      <Image
        alt={project.title}
        src={project.screenshot}
        height={340}
        width={400}
        objectFit="cover"
      />
    </Box>
  );
};

export default ProjectImage;
