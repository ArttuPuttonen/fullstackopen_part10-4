import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer'; 

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {

      const onSubmitMock = jest.fn();


      const { getByTestId } = render(<SignInContainer onSubmit={onSubmitMock} />);


      fireEvent.changeText(getByTestId('usernameInput'), 'testuser');


      fireEvent.changeText(getByTestId('passwordInput'), 'password123');


      fireEvent.press(getByTestId('submitButton'));

      await waitFor(() => {
        expect(onSubmitMock).toHaveBeenCalledTimes(1);
        expect(onSubmitMock).toHaveBeenCalledWith({
          username: 'testuser',
          password: 'password123',
        }, expect.anything());  
      });
    });
  });
});
