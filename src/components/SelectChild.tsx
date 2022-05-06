import { FC, SetStateAction } from 'react';
import Grid from '@mui/material/Grid';
import Select from 'react-select';
import { Item } from './Item';

interface ISelectProps {
  options: {
    value: string;
    label: string;
  }[] | undefined;
  setValue: React.Dispatch<SetStateAction<string>>
}

const SelectChild: FC<ISelectProps> = (props) => {
  const { options, setValue } = props
  return (
    <Grid item xs={2} sm={4} md={6}>
      <Item>
        <Select
          placeholder='Select...'
          onChange={(newValue, ActionMeta) => {
            if (newValue?.value) {
              setValue(newValue.value)
            }
          }}
          className='mainSelect'
          options={options} />
      </Item>
    </Grid>
  );
};

export default SelectChild;