import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

const dummyData = [
  {
    title: 'Groceries',
    description: 'Weekly grocery shopping',
    amount: 12000,
    date: '2024-03-10T14:30:00Z',
  },
  {
    title: 'Rent',
    description: 'Monthly apartment rent',
    amount: 150000,
    date: '2024-03-01T00:00:00Z',
  },
  {
    title: 'Electricity Bill',
    description: 'February electricity usage',
    amount: 9000,
    date: '2024-03-05T10:15:00Z',
  },
  {
    title: 'Dining Out',
    description: 'Dinner with friends',
    amount: 7500,
    date: '2024-03-12T19:45:00Z',
  },
  {
    title: 'Gym Membership',
    description: 'Monthly subscription',
    amount: 5000,
    date: '2024-03-02T08:00:00Z',
  },
  {
    title: 'Gas',
    description: 'Fuel refill',
    amount: 4000,
    date: '2024-03-09T09:30:00Z',
  },
  {
    title: 'Streaming Service',
    description: 'Netflix subscription',
    amount: 1500,
    date: '2024-03-07T12:00:00Z',
  },
  {
    title: 'Phone Bill',
    description: 'Monthly mobile plan',
    amount: 6000,
    date: '2024-03-06T11:20:00Z',
  },
  {
    title: 'Car Maintenance',
    description: 'Oil change and inspection',
    amount: 20000,
    date: '2024-03-08T15:10:00Z',
  },
  {
    title: 'Books',
    description: 'Purchased new books',
    amount: 3000,
    date: '2024-03-11T17:25:00Z',
  },
];

async function main() {
  // create two dummy articles
  await prisma.expense.createMany({
    data: dummyData,
  });
  console.log('Seed data created successfully');
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(
    void (async () => {
      // close Prisma Client at the end
      await prisma.$disconnect();
    }),
  );
