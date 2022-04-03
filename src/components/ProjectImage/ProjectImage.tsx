import React from 'react';

import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

import { Octokit } from '@octokit/core';
import projectPlaceholderImg from 'assets/project-placeholder.jpg';

interface Props {
  item: Project;
}

const ProjectImage = ({ item }: Props): JSX.Element => {
  const octokit = new Octokit();
  const theme = useTheme();

  const [image, setImage] = React.useState(projectPlaceholderImg);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const getProjectImage = async () => {
    const screenshotUrl =
      '/repos/subaquatic-pierre/projects/contents/screenshots/ballotonline.png';

    const response = await octokit.request('GET ' + screenshotUrl);

    const { content } = response.data;

    const src = 'data:image/jpg;base64,' + content;

    setImage(src);
    if (item.title !== 'pizza-app') {
      setImageLoaded(true);
    }
  };

  React.useEffect(() => {
    getProjectImage();
  }, []);

  return (
    <Box
      src={imageLoaded ? image : projectPlaceholderImg}
      component="img"
      title={item.title}
      sx={{
        height: { xs: 340, md: 340 },
        filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
        objectFit: 'cover',
      }}
    />
  );
};

export default ProjectImage;
