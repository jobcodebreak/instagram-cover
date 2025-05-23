/* import libraries */
import React from 'react';
import styled from 'styled-components';

/* import Components */
import SearchInputBox from '../components/search/SearchInputBox';
import SearchGrid from '../components/search/SearchGrid';


/* Styled Components */
const Container = styled.div`
  height: 100vh;
  max-width: 400px;
  background: white;
  margin: 0 auto;
`;

const SearchBar = styled.div`
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  padding: 10px 0;
  z-index: 1;
`;


const SearchPage = () => {
  return (
    <Container>
      <SearchBar>
        <SearchInputBox />
      </SearchBar>

      <SearchGrid />
    </Container>
  );
};

export default SearchPage;

