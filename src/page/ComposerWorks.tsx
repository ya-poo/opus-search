import { VFC } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import ComposerWorkTable from '../component/ComposerWorkTable';
import useFetchComposerWorks from '../hooks/useFetchComposerWorks';

const ComposerWorks: VFC = () => {
  const { composerCode } = useParams();
  const { composer, works, isLoading } = useFetchComposerWorks(composerCode);

  return composer && !isLoading
    ? <ComposerWorkTable composer={composer} works={works} />
    : <CircularProgress />;
};

export default ComposerWorks;
