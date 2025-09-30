import { Service } from './view-service';

export interface PagedServiceResponse {
  data: Service[];
  totalCount: number;
  page: number;
  pageSize: number;
}
