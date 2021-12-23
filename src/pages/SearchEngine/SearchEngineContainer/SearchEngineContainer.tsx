import React, { useState, Fragment } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import ResultsList from '../../../components/SearchEngine/ResultsList/ResultsList';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const SearchEngineContainer: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [searchEngineOption, setSearchEngineOption] = useState<string>('');
  const [showGoogleResults, setShowGoogleResults] = useState<boolean>(false);
  const [showBingResults, setShowBingResults] = useState<boolean>(false);
  const [showBothEnginesResults, setShowBothEnginesResults] = useState<boolean>(false);

  const searchEngineOptions = ['Google', 'Bing', 'Both'];

  const selectSearchEngineOptionStyles = {
    width: 220,
  };

  const searchTextFieldStyles = {
    marginLeft: 1,
  };

  const { fetchResultsGoogle, fetchResultsBing } = useActions();
  const {
    googleResults,
    error: googleResultsError,
    loading: googleResultsLoading,
  } = useTypedSelector((state) => state.googleResults);
  const {
    bingResults,
    error: bingResultsError,
    loading: bingResultsLoading,
  } = useTypedSelector((state) => state.bingResults);

  const resetState = () => {
    setShowGoogleResults(false);
    setShowBingResults(false);
    setShowBothEnginesResults(false);
  };

  const setKeywordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    resetState();
    setKeyword(event.target.value);
  };
  const searchEngineChangeHandler = (event: any) => {
    resetState();
    setSearchEngineOption(event.target.value);
  };

  const fetchResults = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchEngineOption === 'Google') {
      fetchResultsGoogle(keyword);
      setShowGoogleResults(true);
    } else if (searchEngineOption === 'Bing') {
      fetchResultsBing(keyword);
      setShowBingResults(true);
    } else if (searchEngineOption === 'Both') {
      fetchResultsGoogle(keyword);
      fetchResultsBing(keyword);
      setShowBothEnginesResults(true);
    }
  };

  const renderGoogleResults = () => {
    return (
      <div>
        {googleResultsLoading ? (
          <CircularProgress />
        ) : googleResultsError ? (
          <Alert severity='error'>An error has ocurred while fetching the data</Alert>
        ) : (
          showGoogleResults && <ResultsList title='Google Results' results={googleResults} />
        )}
      </div>
    );
  };

  const renderBingResults = () => {
    return (
      <div>
        {bingResultsLoading ? (
          <CircularProgress />
        ) : bingResultsError ? (
          <Alert severity='error'>An error has ocurred while fetching the data</Alert>
        ) : (
          showBingResults && <ResultsList title='Bing Results' results={bingResults} />
        )}
      </div>
    );
  };

  const renderBothEnginesResults = () => {
    return (
      <div>
        {bingResultsLoading || googleResultsLoading ? (
          <CircularProgress />
        ) : bingResultsError || googleResultsError ? (
          <Alert severity='error'>An error has ocurred while fetching the data</Alert>
        ) : (
          showBothEnginesResults && (
            <>
              <ResultsList title='Google Results' results={googleResults} />
              <ResultsList title='Bing Results' results={bingResults} />
            </>
          )
        )}
      </div>
    );
  };

  const formIsInvalid = () => {
    return keyword.length < 1 || !searchEngineOption;
  };
  return (
    <Fragment>
      <form onSubmit={fetchResults}>
        <h1>Search Engine App</h1>
        <FormControl variant='standard'>
          <InputLabel>Select a search engine</InputLabel>
          <Select
            sx={selectSearchEngineOptionStyles}
            autoWidth
            value={searchEngineOption}
            label='Select a search engine'
            onChange={searchEngineChangeHandler}
          >
            {searchEngineOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label='Search something...'
          variant='standard'
          type='text'
          value={keyword}
          onChange={setKeywordHandler}
          sx={searchTextFieldStyles}
        />
        <Button disabled={formIsInvalid()} type='submit' variant='contained'>
          Search
        </Button>

        {showBothEnginesResults
          ? renderBothEnginesResults()
          : showGoogleResults
          ? renderGoogleResults()
          : renderBingResults()}
      </form>
    </Fragment>
  );
};

export default SearchEngineContainer;
