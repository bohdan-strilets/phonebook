import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

interface IErrorMessage {
  data?: FetchBaseQueryError | SerializedError | string;
  status?: FetchBaseQueryError | SerializedError | string;
}

export default IErrorMessage;
