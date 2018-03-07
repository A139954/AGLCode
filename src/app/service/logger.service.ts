import { Injectable } from '@angular/core';
import { ILoggerService } from './ilogger.service';

@Injectable()

export class LoggerService implements ILoggerService {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
}
