import { TextField } from '@mui/material';
import {VFC} from 'react'

//Propsの型定義
type PropsType = {
  id: string;
  label: string;
  fieldName: string;

}

export const PrimaryTextBox: VFC<PropsType> = ({id,label,fieldName}) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={fieldName}
      autoFocus
    />
  ); 
}
