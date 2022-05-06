import { FC } from 'react';
import './app.css';
import 'rsuite/dist/rsuite.min.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import SelectSection from './components/SelectSection';
import HeaderSection from './components/HeaderSection';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import Typography from '@mui/material/Typography'

const App: FC = () => {
  return (
    <>
      <HeaderSection />
      <Container>
        <div className='app'>
          <Box >
            <Typography variant='h5' marginY={{ xs: 1, md: 3 }} component='h1' textAlign='center' >
              Translate and enjoy !!! 😎
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <SelectSection />
              <InputSection />
              <OutputSection />
            </Grid>
          </Box>
        </div>
      </Container>
    </>
  );
}

export default App;
