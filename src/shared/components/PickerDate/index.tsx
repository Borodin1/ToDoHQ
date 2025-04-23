import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

export const PickerDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const today = new Date();

  return (
    <div className='flex flex-col text-left gap-2 mt-3'>
      <h1 className='text-sm font-semibold'>Date</h1>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={today}
        dateFormat="dd/MM/yyyy"
        showIcon
        // icon={<FaCalendarAlt/>}
        className="h-[60px] rounded-[5px] border-1 border-gray-400 max-[1450px]:w-[500px] max-[1150px]:w-[350px] max-[400px]:w-[250px] max-[400px]:h-[25px]"
      />
    </div>
  );
};
