import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17250',
      name: 'External Hard Drive 2.5 inch USB 3.0 500GB',
      price: 50,
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 500GB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17251',
      name: 'External Hard Drive 2.5 inch USB 3.0 1TB',
      price: 100,
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 1TB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17252',
      name: 'External Hard Drive 2.5 inch USB 3.0 2TB',
      price: 200,
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 2TB of storage',
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
}

seed();
