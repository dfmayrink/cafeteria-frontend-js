// @mui
import {Checkbox, Stack, Typography} from '@mui/material';
import React, {ReactElement} from "react";

// ----------------------------------------------------------------------

interface Props {
  dense?: boolean,
  actions?: ReactElement,
  rowCount?: number,
  numSelected?: number,
  onSelectAllRows?: (checked) => any,
  sx?: object,
  [other: string]: any
};

export default function TableSelectedActions({ dense, actions, rowCount, numSelected, onSelectAllRows, sx, ...other }: Props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        px: 2,
        top: 0,
        left: 8,
        right: 8,
        zIndex: 9,
        height: 58,
        borderRadius: 1,
        position: 'absolute',
        bgcolor: 'primary.lighter',
        ...(dense && {
          pl: 1,
          height: 38,
        }),
        ...sx,
      }}
      {...other}
    >
      <Checkbox
        indeterminate={numSelected > 0 && numSelected < rowCount}
        checked={rowCount > 0 && numSelected === rowCount}
        onChange={(event) => onSelectAllRows(event.target.checked)}
      />

      <Typography
        variant="subtitle1"
        sx={{
          ml: 2,
          flexGrow: 1,
          color: 'primary.main',
          ...(dense && {
            ml: 3,
          }),
        }}
      >
        {numSelected} selected
      </Typography>

      {actions && actions}
    </Stack>
  );
}
