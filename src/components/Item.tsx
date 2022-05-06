import { experimentalStyled as styled } from '@mui/material/styles'

export const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.h3,
  fontSize: 16,
  fontFamily :theme.typography.fontFamily,
  color: theme.palette.text.secondary,
}));