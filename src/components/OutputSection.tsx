import { FC } from 'react';
import Grid from '@mui/material/Grid';
import { Item } from './Item';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import { useGetStore } from './ContextProvider';

const OutputSection: FC = () => {
  const { transData } = useGetStore()
  return (
    <Grid item xs={12} sm={4} md={6}>
      <Card className='mainCard'>
        <CardHeader
          title={
            <Typography fontSize={18} variant='h3' component='h1'>
              Result
            </Typography>
          }
          action={
            <IconButton aria-label='translate'>
              {transData?.data.translations?.translatedText &&
                <CheckIcon />
              }
            </IconButton>
          }
        />
        <CardContent>
          <div style={{ minHeight: 50 }}>
            <Item>
              <Typography marginTop={2} lineHeight={1.5} fontSize={16} variant='h3' component='h1'  >
                {transData.data.translations.translatedText}
              </Typography>
            </Item>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default OutputSection;