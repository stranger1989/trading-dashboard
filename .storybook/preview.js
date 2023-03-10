import '../app/globals.css';
import { initialize, mswDecorator } from 'msw-storybook-addon';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextjs: {
    appDirectory: true,
    navigation: {
      pathname: '/',
      query: {},
    },
  },
};

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];
