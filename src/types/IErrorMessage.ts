import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

interface IErrorMessage {
  data?: FetchBaseQueryError | SerializedError;
  status?: FetchBaseQueryError | SerializedError;
}

export default IErrorMessage;
