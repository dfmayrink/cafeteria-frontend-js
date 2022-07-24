import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';
import React from 'react';

// ----------------------------------------------------------------------

interface Props {
  children: Node
  title?: string
  meta?: Node
  [other: string]: any
}

const Page = forwardRef(({ children, title = '', meta, ...other } : Props, ref) => (
  <>
    <Helmet>
      <title>{`${title} | Minimal-UI`}</title>
      {meta}
    </Helmet>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

export default Page;
