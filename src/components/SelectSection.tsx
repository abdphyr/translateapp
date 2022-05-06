import { FC } from 'react';
import Grid from '@mui/material/Grid';
import { useGetStore } from './ContextProvider';
import { useGetLangs } from '../services/useGetLangs';
import { Loader } from 'rsuite';
import SelectChild from './SelectChild';

const SelectSection: FC = () => {
  const { setSource, setTarget } = useGetStore()
  const { data, isError, error, isLoading } = useGetLangs()
  const options = data?.data.languages.map(item => (
    {
      value: item.language,
      label: item.name
    }
  ))
  const styleLoader: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0,
    right: 0, bottom: 0, background: '#fff',
    zIndex: 1000, display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    width: '100vw', height: '100vh'
  }
  if (isLoading) {
    return (
      <div style={styleLoader}>
        <Loader />
      </div>)
  }
  if (isError) {
    alert(error.message)
    return <></>;
  }
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} item columns={{ xs: 4, sm: 8, md: 12 }}>
      <SelectChild options={options} setValue={setSource} />
      <SelectChild options={options} setValue={setTarget} />
    </Grid>
  );
};

export default SelectSection;