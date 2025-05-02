import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {


    getProduct(): string[] {
        return ['Product 1', 'Product 2', 'Product 3','Product 4','Product 5'];
    }


}
