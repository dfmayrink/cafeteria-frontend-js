import PropTypes from 'prop-types';
// @mui
import { Box, Typography, Link } from '@mui/material';
//
import Breadcrumbs from './Breadcrumbs';
import React, {ReactElement} from 'react';

// ----------------------------------------------------------------------

interface Props {
  links?: any[]
  action?: Node | ReactElement
  heading: string
  moreLink?: string | string[]
  sx?: object
  [other: string] : any
}

export default function HeaderBreadcrumbs({ links, action, heading, moreLink = '' || [], sx, ...other } : Props) {
  return (
    <Box sx={{ mb: 5, ...sx }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" gutterBottom>
            {heading}
          </Typography>
          <Breadcrumbs links={links} {...other} />
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Box>

      <Box sx={{ mt: 2 }}>
        {typeof moreLink === 'string' ? (
          <Link href={moreLink} target="_blank" rel="noopener" variant="body2">
            {moreLink}
          </Link>
        ) : (
          moreLink.map((href) => (
            <Link
              noWrap
              key={href}
              href={href}
              variant="body2"
              target="_blank"
              rel="noopener"
              sx={{ display: 'table' }}
            >
              {href}
            </Link>
          ))
        )}
      </Box>
    </Box>
  );
}
