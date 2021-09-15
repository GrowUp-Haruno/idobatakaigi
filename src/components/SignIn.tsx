import { FormEventHandler } from 'react';
import { Box, Container, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import Copyright from './atoms/Copyright';
import { PrimaryButton } from './atoms/PrimaryButton';
import { PrimaryTextBox } from './atoms/PrimaryTextBox';

const theme = createTheme();

export default function SignIn() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: data.get('user'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" children={'ようこそ'} />
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <PrimaryTextBox id={'user'} label={'ニックネーム'} fieldName={'user'} />
            <PrimaryButton sx={{ mt: 3, mb: 2 }}>はじめる</PrimaryButton>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
