import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Shop from '../pages/Shop';
import { AppContextProvider } from '../context/app.context';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get('/products', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          product: 'memantine',
        },
      ])
    );
  })
);

test('renders container div', () => {
  const { getByTitle } = render(
    <AppContextProvider>
      <Shop category='longevity' />
    </AppContextProvider>
  );
  const containerElement = getByTitle('container');
  //   console.log(linkElement);
  expect(containerElement).toBeInTheDocument();
});

test('renders longevity as title when category is  set to longevity', () => {
  const { getByText } = render(
    <AppContextProvider>
      <Shop category='longevity' />
    </AppContextProvider>
  );
  const titleElement = getByText('Life Extension');

  expect(titleElement).toBeInTheDocument();
});
