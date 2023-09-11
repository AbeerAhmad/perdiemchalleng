import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
// @ts-ignore
import RadioButtonRN from 'radio-buttons-react-native';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {fetchPosts, fetchTodos} from '../../slice/homeAction';
import {Option, RadioSelectionProps} from './RadioSelection.props';

const RadioSelection = ({handleClose}: RadioSelectionProps) => {
  const {dataType} = useAppSelector(state => state.homeSlice);
  const dispatch = useAppDispatch();
  const data = [
    {
      label: 'Todos',
    },
    {
      label: 'Posts',
    },
  ];
  const [initial, setinitial] = useState(
    data.findIndex(item => item.label.toLowerCase() == dataType) + 1,
  );
  const handleOptionPress = ({label}: Option) => {
    if (label?.toLowerCase() == dataType) {
      return;
    }
    if (label === 'Todos') {
      dispatch(fetchTodos()).then(() => handleClose && handleClose());
    } else if (label === 'Posts') {
      dispatch(fetchPosts()).then(() => handleClose && handleClose());
    }
  };
  return (
    <RadioButtonRN
      initial={initial}
      data={data}
      selectedBtn={handleOptionPress}
    />
  );
};

export default RadioSelection;

const styles = StyleSheet.create({});
