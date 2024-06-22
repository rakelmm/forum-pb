import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PostsListPage from './PostsListPage';

test('renders PostsListPage and fetches posts', async () => {
    render(<PostsListPage />);

    expect(screen.getByText('Postagens interessantes')).toBeInTheDocument();

    await waitFor(() => {
        const posts = screen.getAllByRole('heading', { level: 2 });
        expect(posts.length).toBeGreaterThan(0);
    });
});