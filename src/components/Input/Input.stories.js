import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input, InputAnim } from './index';

const MockData = ['Москва', 'Москва нью васюки', 'Питербург', 'Санкт Питербург', 'London', 'Paris'];

storiesOf('Input', module)
  .add('InputAnim width=20', () => <InputAnim type={'text'} width={20} />)
  .add('Input type text', () => <Input type={'text'} placeholder={'text'} />)
  .add('Input type text disabled', () => <Input type={'text'} placeholder={'disable'} disabled />)
  .add('Input type password', () => <Input type={'password'} placeholder={'password'} />)
  .add('Input type text name user whith check correct', () => (
    <Input type={'text'} placeholder={'name'} regexp={/^[a-zA-Z][a-zA-Z0-9]{1,10}$/} />
  ))
  .add('Input type text whith character count counterMax=10', () => (
    <Input type={'text'} placeholder={'name'} counterMax={10} />
  ))
  .add('Input type text autocomplite', () => <Input type={'text'} placeholder={'sity'} data={MockData} />);
