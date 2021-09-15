import { Button, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { FC } from 'react';

//Propsの型定義
type PropsType = {
  sx?: SxProps<Theme>;
  children: string;
};

export const PrimaryButton: FC<PropsType> = ({ sx, children }) => {
  return (
    <Button type="submit" fullWidth variant="contained" sx={sx}>
      {children}
    </Button>
  );
};
