import { Injectable } from '@nestjs/common';
import {createProductDto} from "./dto/createProductDto.dto";

@Injectable()
export class ProductsService {
    private products = [];


    getAll() {
        return this.products
    }


    getById(id: string) {
        return this.products.find(p => p.id === id)
    }


    createProduct(dto: createProductDto) {
        this.products.push({
            ...dto,
            id: Date.now().toString()
        });
        this.products.pop()
    }


    updateProduct(){

    }


    deleteProduct(){

    }


}
