import kanmuConfig from 'eslint-config-kanmu';
import kanmuConfigBrowser from 'eslint-config-kanmu/browser';
import kanmuConfigReact from 'eslint-config-kanmu/react';

export default [
  ...kanmuConfig,
  ...kanmuConfigBrowser,
  ...kanmuConfigReact,
];
