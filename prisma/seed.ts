import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17250',
      name: 'External Hard Drive 2.5 inch USB 3.0 500GB BLACK',
      price: 50,
      capacity: '500GB',
      color: 'black',
      image: 'black.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 500GB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17251',
      name: 'External Hard Drive 2.5 inch USB 3.0 500GB BLUE',
      price: 50,
      capacity: '500GB',
      color: 'blue',
      image: 'blue.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 500GB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17252',
      name: 'External Hard Drive 2.5 inch USB 3.0 500GB DARK GREEN',
      price: 50,
      capacity: '500GB',
      color: 'darkgreen',
      image: 'darkgreen.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 500GB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17253',
      name: 'External Hard Drive 2.5 inch USB 3.0 500GB GOLD',
      price: 50,
      capacity: '500GB',
      color: 'gold',
      image: 'gold.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 500GB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17254',
      name: 'External Hard Drive 2.5 inch USB 3.0 500GB GRAY',
      price: 50,
      capacity: '500GB',
      color: 'gray',
      image: 'gray.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 500GB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17255',
      name: 'External Hard Drive 2.5 inch USB 3.0 500GB NAVY',
      price: 50,
      capacity: '500GB',
      color: 'navy',
      image: 'navy.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 500GB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'External Hard Drive 2.5 inch USB 3.0 500GB ORANGE',
      price: 50,
      capacity: '500GB',
      color: 'orange',
      image: 'orange.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 500GB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17257',
      name: 'External Hard Drive 2.5 inch USB 3.0 500GB SILVER',
      price: 50,
      capacity: '500GB',
      color: 'silver',
      image: 'silver.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 500GB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'External Hard Drive 2.5 inch USB 3.0 500GB RED',
      price: 50,
      capacity: '500GB',
      color: 'red',
      image: 'red.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 500GB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      name: 'External Hard Drive 2.5 inch USB 3.0 500GB PURPLE',
      price: 50,
      capacity: '500GB',
      color: 'purple',
      image: 'purple.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 500GB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17260',
      name: 'External Hard Drive 2.5 inch USB 3.0 1TB BLACK',
      price: 100,
      capacity: '1TB',
      color: 'black',
      image: 'black.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 1TB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17261',
      name: 'External Hard Drive 2.5 inch USB 3.0 1TB BLUE',
      price: 100,
      capacity: '1TB',
      color: 'blue',
      image: 'blue.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 1TB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      name: 'External Hard Drive 2.5 inch USB 3.0 1TB DARK GREEN',
      price: 100,
      capacity: '1TB',
      color: 'darkgreen',
      image: 'darkgreen.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 1TB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      name: 'External Hard Drive 2.5 inch USB 3.0 1TB GOLD',
      price: 100,
      capacity: '1TB',
      color: 'gold',
      image: 'gold.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 1TB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      name: 'External Hard Drive 2.5 inch USB 3.0 1TB GRAY',
      price: 100,
      capacity: '1TB',
      color: 'gray',
      image: 'gray.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 1TB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17265',
      name: 'External Hard Drive 2.5 inch USB 3.0 1TB NAVY',
      price: 100,
      capacity: '1TB',
      color: 'navy',
      image: 'navy.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 1TB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17266',
      name: 'External Hard Drive 2.5 inch USB 3.0 1TB ORANGE',
      price: 100,
      capacity: '1TB',
      color: 'orange',
      image: 'orange.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 1TB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17267',
      name: 'External Hard Drive 2.5 inch USB 3.0 1TB SILVER',
      price: 100,
      capacity: '1TB',
      color: 'silver',
      image: 'silver.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 1TB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17268',
      name: 'External Hard Drive 2.5 inch USB 3.0 1TB RED',
      price: 100,
      capacity: '1TB',
      color: 'red',
      image: 'red.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 1TB of storage',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17269',
      name: 'External Hard Drive 2.5 inch USB 3.0 1TB PURPLE',
      price: 100,
      capacity: '1TB',
      color: 'purple',
      image: 'purple.jpg',
      description:
        'Very nice and handy external hard drive for your laptop or PC\nWith super fast USB 3.0 connection and 1TB of storage',
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
