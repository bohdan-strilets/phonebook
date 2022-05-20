import { Spinner, LoaderWrapper } from './Loader.styled';

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};

export default Loader;
