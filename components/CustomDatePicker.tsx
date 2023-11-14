import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface Props {
  label: string;
  onChange: (date: any) => void;
}
const CustomDatePicker: React.FC<Props> = ({ label, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label={label} onChange={(date) => onChange(date)} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
