import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Order, Quantities } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public async findAll(): Promise<Order[]> {
    return await this.prismaService.order.findMany({
      include: {
        products: true,
        quantities: true,
      },
    });
  }

  public async create(orderData: any): Promise<Order> {
    const { products, ...order } = orderData;
    let newOrder = await this.prismaService.order.create({
      data: {
        ...order,
        products: {
          connect: products.map((product: any) => ({
            id: product.id,
          })),
        },
      },
      include: {
        products: true,
      },
    });

    const quantities = products.map((product: any) => ({
      id: product.id,
      quantity: product.quantity,
    }));

    await quantities.forEach(async (quantity: Quantities) => {
      await this.prismaService.quantities.create({
        data: {
          quantity: quantity.quantity,
          product: {
            connect: {
              id: quantity.id,
            },
          },
          order: {
            connect: {
              id: newOrder.id,
            },
          },
        },
      });
    });

    newOrder = await this.prismaService.order.findUnique({
      where: {
        id: newOrder.id,
      },
      include: {
        products: true,
        quantities: true,
      },
    });

    return newOrder;
  }
}
