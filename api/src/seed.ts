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
  {
    title: 'Internet Bill',
    description: 'Monthly internet plan',
    amount: 5000,
    date: '2024-03-04T13:40:00Z',
  },
  {
    title: 'Clothing',
    description: 'New outfit purchase',
    amount: 7000,
    date: '2024-03-14T16:50:00Z',
  },
  {
    title: 'Coffee',
    description: 'Morning coffee runs',
    amount: 1200,
    date: '2024-03-03T08:15:00Z',
  },
  {
    title: 'Movie Tickets',
    description: 'Cinema night',
    amount: 4000,
    date: '2024-03-15T20:10:00Z',
  },
  {
    title: 'Medical Expenses',
    description: 'Doctor visit and medication',
    amount: 10000,
    date: '2024-03-13T10:30:00Z',
  },
  {
    title: 'Transportation',
    description: 'Bus and train fares',
    amount: 2500,
    date: '2024-03-05T07:45:00Z',
  },
  {
    title: 'Home Decor',
    description: 'New decorations',
    amount: 8500,
    date: '2024-03-06T14:00:00Z',
  },
  {
    title: 'Concert Tickets',
    description: 'Live music event',
    amount: 15000,
    date: '2024-03-17T21:30:00Z',
  },
  {
    title: 'Charity Donation',
    description: 'Donation to local charity',
    amount: 5000,
    date: '2024-03-16T11:10:00Z',
  },
  {
    title: 'Pet Supplies',
    description: 'Food and accessories',
    amount: 4500,
    date: '2024-03-09T18:20:00Z',
  },
  {
    title: 'Subscription Box',
    description: 'Monthly lifestyle box',
    amount: 3000,
    date: '2024-03-18T12:45:00Z',
  },
  {
    title: 'Gifts',
    description: 'Birthday present for a friend',
    amount: 6000,
    date: '2024-03-07T16:30:00Z',
  },
  {
    title: 'Haircut',
    description: 'Salon visit',
    amount: 2500,
    date: '2024-03-11T09:15:00Z',
  },
  {
    title: 'Hardware Store',
    description: 'Tools and supplies',
    amount: 8000,
    date: '2024-03-19T14:50:00Z',
  },
  {
    title: 'Fast Food',
    description: 'Lunch on the go',
    amount: 3500,
    date: '2024-03-08T13:10:00Z',
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
