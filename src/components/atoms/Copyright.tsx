import { Link, Typography } from '@mui/material';
import { VFC } from 'react';

type CopyrightType = {
  sx: {
    mt: number;
    mb: number;
  };
};

const Copyright: VFC<CopyrightType> = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/" target='_blanck' rel='noopener'>
        はるの
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
