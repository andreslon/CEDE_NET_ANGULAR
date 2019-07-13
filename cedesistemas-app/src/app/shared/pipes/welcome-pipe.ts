import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'welcome'
})
export class welcomePipe implements PipeTransform{
    transform(value: any, ...args: any[]) { 
        let msg= "Bienvenido " + value;
        return msg;
    } 
}