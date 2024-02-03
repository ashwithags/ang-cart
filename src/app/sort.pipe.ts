import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], ...args: any): any[] {

    if(args){
      console.log(args);
      switch(args[0]){
        case 'Price low to High': 
          value.sort((a,b)=>{
            if(a.price<b.price) return  -1;
            else if(a.price>b.price) return 1;
          return 0;
          console.log("value");

          })
          break;
        case "Price High to Low" :
          value.sort((a,b)=>{
            if(a.price>b.price) return  -1;
            else if(a.price<b.price) return 1;
          return 0;
          })
          break;
        case 'Ratings':
          value.sort((a,b)=>{
            if(a.rating>b.rating) return  -1;
            else if(a.rating<b.rating) return 1;
          return 0;
          })
          break;
        case 'Discounts' :
          value.sort((a,b)=>{
            if(a.discountPercentage>b.discountPercentage) return  -1;
            else if(a.discountPercentage<b.discountPercentage) return 1;
          return 0;
          })
          break;
        default: return value;
      }  
    }

    return value;
  }

}
