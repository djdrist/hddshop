import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  async findAll() {
    return await this.ordersService.findAll();
  }
  @Post('/')
  async create(@Body() orderData: CreateOrderDTO) {
    return await this.ordersService.create(orderData);
  }
}
