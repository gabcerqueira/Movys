import {useCallback, useState} from 'react';

type Props = {
  fetchFunction: (page: number) => void;
};
const usePagination = ({fetchFunction}: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleEndReached = useCallback(() => {
    fetchFunction(currentPage);
    setCurrentPage(prev => prev + 1);
  }, [currentPage, fetchFunction]);

  return {currentPage, handleEndReached};
};
export default usePagination;
