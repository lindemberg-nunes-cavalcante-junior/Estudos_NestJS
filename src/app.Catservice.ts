import { Injectable } from '@nestjs/common';

@Injectable()
export class AppCatservice{
    getCats(){
        return {
           Name: "Arthur",
           Race: "Siamês" 
        }
    }
}