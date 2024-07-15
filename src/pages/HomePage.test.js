import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from './HomePage';

jest.mock('./HomePage/Components/HomeTable', () => {
  return jest.fn(() => <div>Mocked HomeTable</div>);
});

describe('HomePage', () => {
    test('renders loading state initially', () => {
        render(<HomePage />);
        expect(screen.getByText('Cargando...')).toBeInTheDocument();
    });

    test('renders HomeTable with data after loading', async () => {
        render(<HomePage />);
        await screen.findByText('Componente: Tabla');
    });
});
