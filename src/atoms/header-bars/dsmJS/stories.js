/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import React from 'react';
import {storiesOf} from '@storybook/react';
import DsmJsBar from './component';

storiesOf('Atoms/Header Bars/dsmJS Bar', module).add('default', () => <DsmJsBar />);
