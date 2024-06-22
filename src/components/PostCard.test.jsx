import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import PostCard from './PostCard';

test('renders PostCard component with correct data', () => {
  const post = {
    title: 'Sample Post',
    selftext: 'This is a sample post description',
    author: 'author123',
    created_utc: 1627841234,
    num_comments: 10,
    ups: 20,
    downs: 2,
  };

  render(<PostCard post={post} isOwner={true} />);

  expect(screen.getByText('Sample Post')).toBeInTheDocument();
  expect(screen.getByText('This is a sample post description...')).toBeInTheDocument();
  expect(screen.getByText('By author123')).toBeInTheDocument();
  expect(screen.getByText('Published on')).toBeInTheDocument();
  expect(screen.getByText('10 comments')).toBeInTheDocument();
  expect(screen.getByText('20 likes')).toBeInTheDocument();
  expect(screen.getByText('2 dislikes')).toBeInTheDocument();
});

test('renders PostCard component without selftext', () => {
  const post = {
    title: 'Sample Post Without Selftext',
    selftext: '',
    author: 'author456',
    created_utc: 1627841234,
    num_comments: 5,
    ups: 15,
    downs: 1,
  };

  render(<PostCard post={post} isOwner={false} />);

  expect(screen.getByText('Sample Post Without Selftext')).toBeInTheDocument();
  expect(screen.getByText('No description...')).toBeInTheDocument();
  expect(screen.getByText('By author456')).toBeInTheDocument();
  expect(screen.getByText('Published on')).toBeInTheDocument(); 
  expect(screen.getByText('5 comments')).toBeInTheDocument();
  expect(screen.getByText('15 likes')).toBeInTheDocument();
  expect(screen.queryByText('1 dislikes')).not.toBeInTheDocument();
});