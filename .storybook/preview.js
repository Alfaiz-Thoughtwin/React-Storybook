import React from 'react';
import {  withConsole } from '@storybook/addon-console';
import { addDecorator,addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
// import { Center } from '../src/components';



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};


// addDecorator( story => <Center>{ story() }</Center> );
// addDecorator( story => withConsole(story)  );
addDecorator(withKnobs);
addDecorator(withA11y);


addParameters({
  viewport : {
    viewports: INITIAL_VIEWPORTS,
  },
});