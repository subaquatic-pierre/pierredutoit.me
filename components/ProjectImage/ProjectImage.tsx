import Box from '@mui/material/Box';
import Image from 'next/image';

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
        src={project.screenshot}
        title={project.title}
        height={340}
        width={400}
        objectFit="cover"
      />
    </Box>
  );
};

export default ProjectImage;
