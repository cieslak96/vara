import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.property.createMany({
    data: [
      {
        title: 'Modern Apartment in Downtown',
        description: 'A spacious 2-bedroom apartment with a balcony and natural light.',
        price: 1850,
        location: 'Salt Lake City, UT',
        imageUrl: 'https://via.placeholder.com/400x300',
      },
      {
        title: 'Cozy Cottage by the Lake',
        description: 'Perfect for weekend getaways or quiet remote work.',
        price: 950,
        location: 'Park City, UT',
        imageUrl: 'https://via.placeholder.com/400x300',
      },
    ],
  })
}

main()
  .then(() => {
    console.log('✅ Seed complete')
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
