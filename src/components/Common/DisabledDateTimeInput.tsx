import React, { useEffect, useState } from "react";
import { format, isEqual, parseISO } from "date-fns";

interface DisabledDateTimeInputProps {
  occupiedAppointments: string[]; // Array de strings con las fechas ocupadas en formato ISO
}

export const DisabledDateTimeInput: React.FC<DisabledDateTimeInputProps> = ({
  occupiedAppointments,
}) => {
  const [disabledDates, setDisabledDates] = useState<Date[]>([]);

  useEffect(() => {
    const dates = occupiedAppointments.map((dateString) =>
      parseISO(dateString),
    );
    setDisabledDates(dates);
  }, [occupiedAppointments]);

  const isDateDisabled = (date: Date) => {
    return disabledDates.some((disabledDate) => isEqual(disabledDate, date));
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = parseISO(event.target.value);
    if (isDateDisabled(selectedDate)) {
      alert("Esta fecha y hora ya están ocupadas.");
      event.target.value = "";
    }
  };

  return (
    <input
      type="datetime-local"
      onChange={handleDateChange}
      className="form-input"
    />
  );
};
