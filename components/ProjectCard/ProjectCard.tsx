import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Octokit } from '@octokit/core';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

import ProjectImage from 'components/ProjectImage';
import ProjectCardFooter from 'components/ProjectCardFooter';
import CardSkeleton from 'components/CardSkeleton';

import { githubUsername } from 'const';

const githubToken = process.env.REACT_APP_FOO;

const blankProject: Project = {
  title: '',
  description: '',
  github: '',
  screenshot: '',
  url: '',
  youtube: '',
  stars: 0,
  forks: 0,
  tags: [],
};

interface Props {
  projectMeta: ProjectMetaData;
}

const ProjectCard = ({ projectMeta }: Props): JSX.Element => {
  const [project, setProject] = useState<Project>(blankProject);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  const octokit = new Octokit({ auth: githubToken });
  const theme = useTheme();

  const getProjectImage = async (): Promise<string> => {
    const projectPlaceholderImgUrl = '/assets/project-placeholder.jpg';
    const screenshotUrl = `/repos/subaquatic-pierre/projects/contents/screenshots/${projectMeta.screenshot}`;

    if (!projectMeta.screenshot) {
      return projectPlaceholderImgUrl;
    }

    try {
      const response = await octokit.request('GET ' + screenshotUrl);
      const { content } = response.data;

      const src = 'data:image/jpg;base64,' + content;
      return src;
    } catch (e) {
      return projectPlaceholderImgUrl;
    }
  };

  const fetchProjectData = async () => {
    const response = await octokit.request(
      `GET /repos/${githubUsername}/${projectMeta.title}`,
    );

    const image = await getProjectImage();

    try {
      const { data } = response;
      const project: Project = {
        title: data.name,
        description: data.description,
        github: data.html_url,
        screenshot: image,
        url: data.homepage,
        youtube: projectMeta.youtube,
        stars: data.stargazers_count,
        forks: data.forks,
        tags: data.topics,
      };
      setProject(project);
    } catch (e) {
      console.log(e);
      setFailed(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  if (failed) {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <CardSkeleton />
      </Grid>
    );
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        display={'block'}
        width={1}
        height={1}
        sx={{
          textDecoration: 'none',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            transform: `translateY(-${theme.spacing(1 / 2)})`,
          },
        }}
      >
        <Box
          component={Card}
          width={1}
          height={1}
          display={'flex'}
          flexDirection={'column'}
        >
          {loading ? (
            <Skeleton
              sx={{ height: 340 }}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <ProjectImage project={project} />
          )}

          <Box component={CardContent}>
            <Typography variant={'h6'} fontWeight={700} gutterBottom>
              {project.title}
            </Typography>
            <Typography variant={'body2'} color="text.secondary">
              {project.description}
            </Typography>
          </Box>
          <Box flexGrow={1} />
          <ProjectCardFooter project={project} />
        </Box>
      </Box>
    </Grid>
  );
};

export default ProjectCard;
