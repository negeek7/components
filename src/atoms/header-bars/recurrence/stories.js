/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import RecurrenceBar from './component';

storiesOf('Atoms/Header Bars/Meeting Recurrence Bar', module).add('default', () => <RecurrenceBar />);
