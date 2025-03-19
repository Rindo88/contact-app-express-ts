interface Paging {
  current_page: number;
  total_page: number;
  size: number;
}

interface Pageable<T> {
  data: Array<T>,
  paging: Paging
}

export type {Pageable,Paging}