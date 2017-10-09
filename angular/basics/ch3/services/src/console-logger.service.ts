import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleLoggerService {
    log(message: string) {
        console.log(message);
    }
}