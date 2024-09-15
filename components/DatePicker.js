import React from 'react';
import { View, Button, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Importando o DateTimePicker corretamente

const DatePicker = ({ value, onChange }) => {
  const [show, setShow] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(value);

  const onDateChange = (event, date) => {
    setShow(Platform.OS === 'ios'); // Fechar o modal no iOS
    if (date) {
      setSelectedDate(date);
      onChange(date); // Atualiza a data no formulário
    }
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View>
      <Button title="Selecionar Data" onPress={showDatepicker} />
      {show && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
