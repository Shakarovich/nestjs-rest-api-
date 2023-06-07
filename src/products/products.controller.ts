import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {createProductDto} from "./dto/createProductDto.dto";
import {updateProductDto} from "./dto/updateProductDto.dto";
import {ProductsService} from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {

    }
    @Get()
    getAll(){
        return this.productsService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.productsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type', 'application/json')
    @Header('Cache-Control', 'none')
    create(@Body() dto: createProductDto){
        return this.productsService.createProduct(dto)
    }


    @Delete(':id')
    remove(@Param('id') id: string){
        return 'Remove' + id
    }

    @Put(':id')
    update(@Body() dto: updateProductDto, @Param('id') id: string) {
        return 'Update' + id
    }
}
