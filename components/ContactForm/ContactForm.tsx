/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { contactUrl } from 'const';
import { handleSendEmail } from 'utils';
import { useRouter } from 'next/router';

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  message: yup.string().trim().required('Please specify your message'),
});

const Contact = (): JSX.Element => {
  const router = useRouter();
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const onSubmit = (values) => {
    handleSendEmail(contactUrl, values)
      .then((res) => {
        router.push('/');
      })
      .catch((err) => {
        router.push('/contact');
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <Box maxWidth={600} margin={'0 auto'}>
      <Box marginBottom={4}>
        <Typography
          variant={'h3'}
          sx={{ fontWeight: 700 }}
          align={'center'}
          gutterBottom
        >
          Get in touch
        </Typography>
        <Typography color="text.secondary" align={'center'}>
          If you are looking to collaborate on the next project, need advice to
          cloud best practices or just want to have a chat, drop me a message
          and I would be happy to reply
        </Typography>
      </Box>
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Full name"
                variant="outlined"
                color="primary"
                size="medium"
                name="name"
                fullWidth
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={
                  formik.touched.name && (formik.errors.name as React.ReactNode)
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                size="medium"
                name="email"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={
                  formik.touched.email &&
                  (formik.errors.email as React.ReactNode)
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                name="message"
                fullWidth
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={
                  formik.touched.message &&
                  (formik.errors.message as React.ReactNode)
                }
              />
            </Grid>
            <Grid item container justifyContent={'center'} xs={12}>
              <Button
                sx={{ height: 54, minWidth: 150 }}
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
