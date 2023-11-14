import { Button, TextField } from '@mui/material';
import { FormEvent, useReducer } from 'react';
import { BsUpload } from 'react-icons/bs';
import CustomDatePicker from '../CustomDatePicker';

const MeterReadingForm = () => {
  const [formState, dispatch] = useReducer(reducer, {
    meterId: '',
    reading: '',
    image: null,
  });

  function reducer(state: any, action: any) {
    const newState = { ...state };
    const { field, value } = action;
    newState[field] = value;

    return newState;
  }

  const inputHandler = (field: string, value: string) => {
    dispatch({ field, value });
  };

  const fileHandler = (field: string, value: File | null) => {
    dispatch({ field, value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
      <TextField
        label="Meter Identification Number"
        variant="outlined"
        fullWidth
        required
        onChange={(e) => inputHandler('meterId', e.target.value)}
        value={formState.meterId}
      />

      <TextField
        label="Meter Reading (kW)"
        variant="outlined"
        fullWidth
        required
        type="number"
        onChange={(e) => inputHandler('reading', e.target.value)}
        value={formState.reading}
      />

      <Button component="label" variant="outlined" startIcon={<BsUpload />}>
        Upload meter reading image
        <input
          type="file"
          className="hidden"
          onChange={(e) =>
            fileHandler('image', e.target.files && e.target.files[0])
          }
        />
      </Button>

      {formState.image && <img src={URL.createObjectURL(formState.image)} />}

      <CustomDatePicker
        label="Date"
        onChange={(date) => inputHandler('date', date)}
      />

      <Button variant="contained" className="bg-blue-500" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default MeterReadingForm;
