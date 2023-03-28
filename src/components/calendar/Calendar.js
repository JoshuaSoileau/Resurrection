import React from 'react';
import 'twin.macro';

const Calendar = ({ url }) => {
  return (
    <ol tw="p-0 m-0 relative">
      <iframe src={url} tw="h-200px lg:h-300px  w-full" />
    </ol>
  );
};

export default Calendar;
