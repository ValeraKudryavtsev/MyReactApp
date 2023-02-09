import { render, screen } from '@testing-library/react';
import ErrorPage from "../components/ErrorPage";

describe('ErrorPageTest', () => {
    it('has an arror text', () => {
        render(<ErrorPage />);
        const errorText = screen.getByText(/Что-то пошло не так/i);
        expect(errorText).toBeInTheDocument();
    })
});
