import React from 'react';

import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

import { Octokit } from '@octokit/core';
import projectPlaceholderImg from 'assets/project-placeholder.jpg';
import Skeleton from '@mui/material/Skeleton';

interface Props {
  item: Project;
}

const ProjectImage = ({ item }: Props): JSX.Element => {
  const octokit = new Octokit();
  const theme = useTheme();

  const [image, setImage] = React.useState(projectPlaceholderImg);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const getProjectImage = async () => {
    const screenshotUrl = `/repos/subaquatic-pierre/projects/contents/screenshots/${item.screenshot}`;

    try {
      const response = await octokit.request('GET ' + screenshotUrl);
      const { content } = response.data;

      const src = 'data:image/jpg;base64,' + content;
      setImage(src);
    } catch (e) {
      setImage(projectPlaceholderImg);
    }
    setImageLoaded(true);
  };

  React.useEffect(() => {
    getProjectImage();
  }, []);

  if (imageLoaded) {
    return (
      <Box
        src={item.screenshot ? image : projectPlaceholderImg}
        component="img"
        title={item.title}
        sx={{
          height: { xs: 340, md: 340 },
          filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          objectFit: 'cover',
        }}
      />
    );
  }
  return (
    <Skeleton sx={{ height: 340 }} animation="wave" variant="rectangular" />
  );
};

export default ProjectImage;
