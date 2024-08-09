import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer';  // Adjust the path as necessary

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // Create a mock function for onSubmit
      const onSubmitMock = jest.fn();

      // Render the SignInContainer component with the mock onSubmit function
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmitMock} />);

      // Fill the username input
      fireEvent.changeText(getByTestId('usernameInput'), 'testuser');

      // Fill the password input
      fireEvent.changeText(getByTestId('passwordInput'), 'password123');

      // Press the submit button
      fireEvent.press(getByTestId('submitButton'));

      // Wait for the onSubmit to be called and check if it was called with the correct arguments
      await waitFor(() => {
        expect(onSubmitMock).toHaveBeenCalledTimes(1);
        expect(onSubmitMock).toHaveBeenCalledWith({
          username: 'testuser',
          password: 'password123',
        }, expect.anything());  // Ignore the second argument (Formik bag)
      });
    });
  });
});
