import { FC, useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TranslateIcon from '@mui/icons-material/Translate';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { Loader } from 'rsuite';
import { useTranslate } from '../services/useTranslate';
import { useGetStore } from './ContextProvider';

const InputSection: FC = () => {
  const [result, setResult] = useState(false)
  const { source, target, setTransData } = useGetStore()
  const [text, setText] = useState('')

  const { mutateAsync, isLoading } = useTranslate();

  const handleText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handleSubmit = () => {
    if (!text || source.length === 0 || target.length === 0) {
      alert("Enter text or select language ...")
      return;
    }
    if (result) {
      setResult(false)
      setText('')
      setTransData({
        data: {
          translations: {
            translatedText: ''
          }
        }
      })
      return;
    }
    mutateAsync({
      text,
      source,
      target
    }, {
      onSuccess: (res) => {
        setTransData(res.data)
        setResult(true)
      },
      onError: (err) => {
        alert(err.message)
      }
    })
  }
  return (
    <Grid item xs={12} sm={4} md={6}>
      <Card className='mainCard'>
        <CardHeader
          title={
            <Typography fontSize={18} variant='h3' component='h1'>
              Translate
            </Typography>
          }
          action={
            <IconButton onClick={handleSubmit} aria-label='translate'>
              {isLoading ?
                <div style={{ width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Loader />
                </div>
                :
                result
                  ?
                  <ClearIcon />
                  :
                  <TranslateIcon />
              }
            </IconButton>
          }
        />
        <CardContent>
          <TextField value={text} onChange={handleText} placeholder='Enter text...' className='mainInput' type='text' multiline size='medium' fullWidth />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default InputSection;