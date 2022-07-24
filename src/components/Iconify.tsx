import PropTypes from 'prop-types';
// icons
import {Icon, IconifyIcon} from '@iconify/react';
// @mui
import {Box, IconProps} from '@mui/material';
import React, {ReactElement} from 'react';

// ----------------------------------------------------------------------


interface Props {
  icon: IconifyIcon | string
  sx?: object
  [other: string]: any
}

export default function Iconify({ icon, sx, ...other }: Props) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
