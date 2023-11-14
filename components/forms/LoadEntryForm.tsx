import { Button, TextField } from '@mui/material';
import { FormEvent, useReducer } from 'react';
import { BsUpload } from 'react-icons/bs';
import CustomDatePicker from '../CustomDatePicker';

const LoadEntryForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formState);
  };

  const [formState, dispatch] = useReducer(formReducer, {
    name: '',
    quantity: '',
    rating: '',
    loadPercent: '',
    usageTime: '',
    date: '',
    image: null,
  });

  function formReducer(state: any, action: any) {
    const { field, value } = action;
    const newState = { ...state };

    newState[field] = value;
    return newState;
  }

  const inputHandler = (field: string, value: string) => {
    dispatch({ field, value });
  };

  const fileHandler = (field: string, value: File | null) => {
    dispatch({ field, value });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
      <TextField
        label="Load type (Name)"
        variant="outlined"
        fullWidth
        onChange={(e) => inputHandler('name', e.target.value)}
        required
        value={formState.name}
      />

      <TextField
        label="Quantity"
        required
        defaultValue={1}
        variant="outlined"
        fullWidth
        type="number"
        onChange={(e) => inputHandler('quantity', e.target.value)}
        value={formState.quantity}
      />

      <TextField
        label="Rating (kW)"
        variant="outlined"
        fullWidth
        required
        type="number"
        onChange={(e) => inputHandler('rating', e.target.value)}
        value={formState.rating}
      />

      <TextField
        label="Estimated Load (%)"
        variant="outlined"
        fullWidth
        required
        defaultValue={100}
        type="number"
        onChange={(e) => inputHandler('loadPercent', e.target.value)}
        value={formState.load}
      />
      <TextField
        label="Estimated Usage Time (Hrs)"
        variant="outlined"
        fullWidth
        required
        type="number"
        onChange={(e) => inputHandler('usageTime', e.target.value)}
        value={formState.usageTime}
      />

      <Button
        component="label"
        variant="outlined"
        startIcon={<BsUpload />}
        // className="bg-purple-500"
      >
        Upload meter reading image
        <input
          type="file"
          className="hidden"
          onChange={(e) =>
            fileHandler('image', e.target.files && e.target.files[0])
          }
        />
      </Button>

      <CustomDatePicker
        label="Date"
        onChange={(date) => inputHandler('date', date.$d)}
      />

      <Button variant="contained" className="bg-blue-500" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default LoadEntryForm;
