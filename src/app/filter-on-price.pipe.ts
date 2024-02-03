import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOnPrice'
})
export class FilterOnPricePipe implements PipeTransform {
  transform(value: any[], ...args: any): any[] {
    let FliteredArray:any[] =[];

    FliteredArray = value?.filter((a)=>{
           console.log(a.price);
           console.log(FliteredArray);
      return a.price<=args[0];

    })
    console.log(FliteredArray);
    return FliteredArray;
  }

}
