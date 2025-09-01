import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { prisma } from '@/lib/prisma';

async function main() {
  console.log('Seeding started...');
  const hashedPassword = await bcrypt.hash('30gTmZYP2ansDhk', 10);
  await prisma.user.upsert({
    where: { email: 'raphaelmiyoyo@gmail.com' },
    update: {},
    create: { email: 'raphaelmiyoyo@gmail.com', password: hashedPassword },
  });

  await prisma.article.createMany({
    data: [
      {
        title: "The Role of Data in Addressing Food Security",
        excerpt: "Explore how data-driven insights can enhance food security initiatives.",
        content: "Detailed content about using data to address food security challenges...",
        imageUrl: "/food-security.jpg",
      },
      {
        title: "Harnessing the Power of Predictive Analytics",
        excerpt: "Learn about the transformative impact of predictive analytics on sustainability.",
        content: "Detailed content about predictive analytics in sustainability efforts...",
        imageUrl: "/predictive-analytics.jpg",
      },
    ],
  });
}

main()
  .catch(e => {
    console.error('Seeding failed:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Prisma disconnected.');
  });