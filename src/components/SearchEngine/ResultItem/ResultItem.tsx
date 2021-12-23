import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface ResultItemProps {
  name: string;
}
const ResultItem: React.FC<ResultItemProps> = (props) => {
  const { name } = props;

  return (
    <div>
      <ListItem disablePadding>
        <ListItemText primary={name} />
      </ListItem>
    </div>
  );
};

ResultItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ResultItem;
