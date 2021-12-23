import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import ResultItem from '../ResultItem/ResultItem';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';

interface ResultsListProps {
  title: string;
  results: string[];
}

const ResultsList: React.FC<ResultsListProps> = (props) => {
  const { title, results } = props;

  return (
    <Fragment>
      <h2>{title}</h2>
      <Box>
        <Divider />
        <nav aria-label='secondary mailbox folders'>
          <List>
            {results.length > 0 ? (
              results.map((result: string) => <ResultItem key={result} name={result} />)
            ) : (
              <Alert severity='info'>No results were found</Alert>
            )}
          </List>
        </nav>
      </Box>
    </Fragment>
  );
};

ResultsList.propTypes = {
  title: PropTypes.string.isRequired,
  results: PropTypes.array.isRequired,
};

export default ResultsList;
