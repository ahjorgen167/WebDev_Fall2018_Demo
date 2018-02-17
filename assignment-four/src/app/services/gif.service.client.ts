import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GifService {

  private apikey = 'F2hPDLy6rmp6PBOKaTKJ8mNrlSXp508v';
  private giphyQueryUrl =
    'https://api.giphy.com/v1/gifs/random?' +
    'api_key=F2hPDLy6rmp6PBOKaTKJ8mNrlSXp508v' +
    '&tag=banana&rating=G';

  constructor(private http: Http, private httpClient: HttpClient) {}

  public getURLLink(input: string): Observable<any> {
    const url = 'https://api.giphy.com/v1/gifs/random?' +
      'api_key=F2hPDLy6rmp6PBOKaTKJ8mNrlSXp508v' +
      '&tag='  + input + '&rating=G';

    return this.http.get(url)
      .map((res: Response) =>
        res.json()
      );
  }

}
