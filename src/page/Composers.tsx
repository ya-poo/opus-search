import { VFC } from 'react';
import { CircularProgress } from '@mui/material';
import ComposerTable from '../component/ComposerTable';
import useFetchComposers from '../hooks/useFetchComposers';

const Composers: VFC = () => {
  const {
    allComposers, popularComposers, isLoading,
  } = useFetchComposers();

  return (
    <div>
      {
        isLoading
          ? (<CircularProgress />)
          : (
            <ComposerTable
              composers={allComposers}
              popularComposerIds={popularComposers.map((composer) => composer.id)}
            />
          )
      }
    </div>
  );
};

export default Composers;
