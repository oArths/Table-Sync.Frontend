export interface IPagination {
    limit: number;
    total: number;
    offset: number;
    setOffset: (offset: number) => void;
  }