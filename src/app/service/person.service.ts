import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { IPersonService } from './iperson.service';
import { ConfigService } from './config.service';
import { LoggerService } from './logger.service';
import { Person } from '../model/person.model';

@Injectable()
export class PersonService implements IPersonService {
  constructor(
    private http: Http,
    private config: ConfigService,
    private logger: LoggerService
) { }

  public getPersonDetails(): Observable<Person[]> {
    return this.http.get(this.config.current.jsonURL)
            .catch((err: Response) => {
                this.logger.error(err);
                return Observable.throw(err.json());
            })
            .map((response) => response.json() as Person[]);
  }
}
