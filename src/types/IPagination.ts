import { IContact } from './IContact';

export interface IGap {
  before: boolean;
  paginationGroup: number[];
  after: boolean;
}

export interface IusePagination {
  contentPerPage: number;
  count: number;
}

export interface IPagination {
  contentPerPage: number;
  filteredContactList: IContact[];
  prevPage: () => void;
  nextPage: () => void;
  page: number;
  setPage: (page: number) => void;
  gaps: { before: boolean; paginationGroup: number[]; after: boolean };
  totalPages: number;
}
