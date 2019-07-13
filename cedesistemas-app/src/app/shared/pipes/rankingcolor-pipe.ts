import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'rankingcolor'
})
export class RankingColorPipe implements PipeTransform{
    transform(value: any, ...args: any[]) { 
       
        if(value<=3){
            return "https://cdn.icon-icons.com/icons2/402/PNG/512/trafficlight-red_40428.png";
        }else{
            return "https://cdn.icon-icons.com/icons2/402/PNG/512/trafficlight-green_40427.png"
        }
    } 
}