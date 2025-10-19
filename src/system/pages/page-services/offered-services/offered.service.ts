import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagedServiceResponse } from '../../../shared/models/paged-service-response';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OfferedService {
  constructor(private http: HttpClient) {}

  getAllServices(page: number, pageSize: number, search: string) {
    const params = {
      page: page.toString(),
      pageSize: pageSize.toString(),
      search: search,
    };

    // get paged services
    return this.http.get<PagedServiceResponse>(
      `${environment.appUrl}/api/services/get-all-services`,
      { params }
    );
  }
}
