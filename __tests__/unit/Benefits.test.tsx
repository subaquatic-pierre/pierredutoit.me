import { render, screen } from '@testing-library/react';
import Benefits from 'components/Benefits';

describe('Main component test', () => {
  it('render component without errors', () => {
    render(<Benefits />);

    const cleanCode = screen.getByText(/Clean Code/i);
    expect(cleanCode).toBeInTheDocument();

    const documented = screen.getByText(/Documented Code/i);
    expect(documented).toBeInTheDocument();

    const tested = screen.getByText(/Well Tested/i);
    expect(tested).toBeInTheDocument();

    const git = screen.getByText(/Version Control/);
    expect(git).toBeInTheDocument();

    const cicd = screen.getByText(/Continuous Development/i);
    expect(cicd).toBeInTheDocument();

    const agile = screen.getByText(/Agile Methods/i);
    expect(agile).toBeInTheDocument();
  });
});
