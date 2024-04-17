import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledPagination = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
});

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <Button
        key={i}
        variant={currentPage === i ? 'contained' : 'outlined'}
        onClick={() => onPageChange(i)}
      >
        {i}
      </Button>
    );
  }

  return <StyledPagination>{pages}</StyledPagination>;
};

export default Pagination;
