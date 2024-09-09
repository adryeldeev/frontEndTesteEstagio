
import React from 'react';
import { render, screen, waitFor,fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './src/pages/Login/Login'; 
import { Api } from './src/services/Api'; 
import '@testing-library/jest-dom';
import { useAuth } from './src/Context/AuthProvider';


jest.mock('./src/services/Api', () => ({
  Api: {
    post: jest.fn()
  }
}));



jest.mock('./src/Context/AuthProvider', () => ({
  useAuth: jest.fn()
}));

describe('Login', () => {
  test('should call Api.post with correct credentials and redirect after login', async () => {
    const mockSetAuth = jest.fn();
    useAuth.mockReturnValue({ setAuth: mockSetAuth });
    
    Api.post.mockResolvedValue({
      data: {
        user: { id: 1, name: 'John Doe' },
        accessToken: 'token',
        refreshToken: 'refreshToken'
      }
    });

    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'admin@admin.com' } });
    fireEvent.change(screen.getByLabelText(/Senha:/i), { target: { value: 'Admin123@' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    await waitFor(() => {
      expect(Api.post).toHaveBeenCalledWith('/session', {
        email: 'admin@admin.com',
        password: 'Admin123@'
      });
      expect(mockSetAuth).toHaveBeenCalledWith({
        user: { id: 1, name: 'John Doe' },
        accessToken: 'token',
        refreshToken: 'refreshToken'
      });
    });
  });

  test('should show an error message if credentials are invalid', async () => {
    Api.post.mockRejectedValue({
      response: {
        data: {
          message: 'Credenciais inválidas'
        }
      }
    });

    render(
      <Router>
        <Login />
      </Router>
    );

    fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'admin@admin.com' } });
    fireEvent.change(screen.getByLabelText(/Senha:/i), { target: { value: 'Admin123@' } });
    fireEvent.click(screen.getByRole('button', { name: /Login/i }));

    await waitFor(() => {
      expect(screen.getByText(/Credenciais inválidas/i)).toBeInTheDocument();
    });
  });
});