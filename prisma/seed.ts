import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

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
        title: "Data-Driven Solutions for Africa’s Food Security",
        excerpt: "Droughts and other shocks have driven hunger and food prices up across Africa. In 2022, droughts left 20 million Africans short of food; meanwhile, countries relying on Ukrainian and Russian grain saw staples like bread and oil become unaffordable. Yet many governments lack timely data on harvests or stocks, making it hard to respond when crises hit.",
        content: `<p>Droughts and other shocks have driven hunger and food prices up across Africa<sup>[1][2]</sup>. In 2022, droughts left 20 million Africans short of food<sup>[1]</sup>; meanwhile, countries relying on Ukrainian and Russian grain saw staples like bread and oil become unaffordable<sup>[2]</sup>. Yet many governments lack timely data on harvests or stocks, making it hard to respond when crises hit.</p>
<h2>Data Gaps</h2>
<ul>
<li>Sparse crop data: Many nations lack up-to-date farm production figures. A new analysis calls the region’s agricultural data “severe[ly] scarce,”<sup>[3]</sup> so planners often guess harvest sizes instead of real figures.</li>
<li>Hidden trade flows: In West Africa, 85% of regional food trade happens outside official records<sup>[4]</sup>. Staples like maize, cassava and yams cross borders informally, so official data miss the true flows.</li>
<li>Missing market signals: Rural price data can be scarce, leaving officials blind to surging costs and often reacting too late.</li>
</ul>
<h2>Data for Resilience</h2>
<ul>
<li>Early warning: Weather data and satellites can flag a bad harvest before it happens, letting governments import food or release reserves in time, preventing last-minute panic.</li>
<li>Market monitoring: Real-time price tracking alerts authorities to sudden spikes, so they can release buffer stocks or subsidies to stabilize markets<sup>[5]</sup>.</li>
<li>Coordinating trade: Counting both formal and informal flows lets neighbors share food instead of hoarding. Experts note that better data “enhance food supply diversity, accessibility and price stability”<sup>[5]</sup>.</li>
<li>Targeted aid: Detailed data helps social programs reach people who need help. For example, a World Bank report describes a Congolese cash transfer program that used mobile tools to feed 270,000 people during a food crisis<sup>[6]</sup>.</li>
</ul>
<p>Strengthening data systems – from farm surveys to trade records – is key to stopping future food shocks. With clearer numbers, governments can act faster to keep prices stable<sup>[5]</sup>.</p>
<h2>Sources</h2>
<p>Recent analyses highlight both the data gaps and the promise of better information in African food systems<sup>[3][4][5]</sup>. For example, experts note that much intra-African food trade is informal and unrecorded<sup>[4]</sup>, while initiatives using digital tools have helped reach vulnerable households despite data limits<sup>[6]</sup>. These lessons show that investing in timely, accurate agricultural and market data can make food systems more resilient.</p>
<ol>
<li><a href="https://www.brookings.edu/articles/food-security-strengthening-africas-food-systems/">Food Security: Strengthening Africa’s food systems | Brookings</a></li>
<li><a href="https://www.worldbank.org/en/news/immersive-story/2022/10/17/putting-africans-at-the-heart-of-food-security-and-climate-resilience">Putting Africans at the Heart of Food Security and Climate Resilience</a></li>
<li><a href="https://www.nature.com/articles/s41597-025-05001-z?error=cookies_not_supported&amp;code=17c7615d-68df-4d70-b32c-dc0cce9733ef">HarvestStat Africa – Harmonized Subnational Crop Statistics for Sub-Saharan Africa | Scientific Data</a></li>
<li><a href="https://www.ecofinagency.com/news/1906-47327-unseen-and-untracked-85-of-10bln-food-trade-escapes-the-books-in-west-africa">Unseen and Untracked: 85% of $10Bln Food Trade Escapes the Books in West Africa - Ecofin Agency</a></li>
</ol>
<p>Note: Some sources are combined as per [2] [6] etc.</p>`,
        imageUrl: "/food-security.jpg",
        slug: "data-driven-solutions-for-africas-food-security",
      },
      {
        title: "Predictive Analytics and Sustainable Food Systems",
        excerpt: "Climate change and supply shocks have driven a rise in hunger worldwide, highlighting the need for better forecasts. Smallholder farmers produce ~80% of staple crops in many regions but often lack localized climate projections for planting and irrigation. Global undernourishment rose from 572 M (2014) to 733 M (2023) due to climate extremes, conflict and pandemics. AI-driven predictive analytics are now being applied across food systems to improve resilience and efficiency.",
        content: `<p>Climate change and supply shocks have driven a rise in hunger worldwide, highlighting the need for better forecasts. Smallholder farmers produce ~80% of staple crops in many regions but often lack localized climate projections for planting and irrigation<sup>[1]</sup>. Global undernourishment rose from 572 M (2014) to 733 M (2023) due to climate extremes, conflict and pandemics<sup>[2]</sup>. AI-driven predictive analytics are now being applied across food systems to improve resilience and efficiency.</p>
<h2>AI-Enabled Climate-Resilient Farming</h2>
<p>On farms, predictive models integrate weather, soil and sensor data to optimize practices. Smart irrigation uses real-time moisture and weather data with ML to optimize watering schedules, conserving water while maintaining yields<sup>[3]</sup>. Similarly, machine learning can forecast pest and disease risks from satellite or sensor data, enabling targeted interventions before losses occur. These data-driven methods help farmers adapt to erratic climate patterns with minimal resource waste.</p>
<h2>Data-Driven Supply Chains</h2>
<p>Figure: Automation in a beverage production line (image: unsplash).</p>
<img src="/predictive-analytics.jpg" alt="Automation in a beverage production line" style="width:100%; height:auto; margin: 1rem 0;" />
<p>Predictive analytics also optimize food processing and distribution. These systems link demand forecasts with weather, traffic and logistics data to reroute shipments and adjust inventory dynamically, minimizing spoilage and emissions<sup>[4]</sup>. Companies use AI to balance production schedules and delivery routes in real time, making supply chains more agile and sustainable.</p>
<h2>Early Warning and Policy Planning</h2>
<p>At the policy level, AI is enhancing early warning. Agencies now combine satellite imagery, market prices and even news feeds to forecast food crises months ahead. Deep-learning models have identified risk factors (drought, pests, conflict) in 11+ million news and weather records to predict local food insecurity up to a year in advance<sup>[5]</sup>. One pilot achieved ~46% higher accuracy than traditional forecasts. These anticipatory systems allow earlier humanitarian action, shifting responses from reactive relief to proactive planning.</p>
<h2>Opportunities and Limitations</h2>
<p>Predictive analytics offer clear benefits: precise resource use, better risk management and waste reduction. For example, anticipating droughts or pests stabilizes yields and demand-sensing avoids surplus. However, challenges remain. Many AI models use data from well-instrumented farms and formal markets, biasing predictions and omitting smallholder contexts<sup>[6]</sup>. Limited connectivity and sparse sensors in many regions hamper data collection. Delivering forecasts also requires local translation and trust-building, otherwise data-driven advice may be ignored.</p>
<p>In conclusion, AI-driven predictive tools are rewiring food systems for sustainability. Climate-smart yield forecasts, optimized logistics and early-crisis alerts illustrate how analytics can enable preemptive action. Realizing a truly sustainable food future requires bridging data gaps, investing in rural infrastructure and building governance to align AI insights with farmer needs. With careful deployment, predictive analytics can make food production and distribution more efficient and climate-resilient.</p>
<h2>Sources</h2>
<ol>
<li><a href="https://journals.plos.org/climate/article?id=10.1371/journal.pclm.0000675">AI-driven climate risk forecasting to enhance smallholder farmer resilience | PLOS Climate</a></li>
<li><a href="https://voxdev.org/topic/methods-measurement/reading-between-lines-leveraging-news-data-ai-powered-food-insecurity">Leveraging news data for AI-powered food insecurity forecasts</a></li>
<li><a href="https://www.nature.com/articles/s41598-025-16014-4?error=cookies_not_supported&amp;code=f7345524-49b4-4849-bd75-4f6455bc3e17">On-device AI for climate-resilient farming with intelligent crop yield prediction using lightweight models on smart agricultural devices | Scientific Reports</a></li>
<li><a href="https://www.researchgate.net/publication/385083089_Challenges_in_Achieving_Artificial_Intelligence_in_Agriculture">(PDF) Challenges in Achieving Artificial Intelligence in Agriculture</a></li>
</ol>
<p>Note: Some sources are combined as per [2] [5] etc.</p>`,
        imageUrl: "/predictive-analytics.jpg",
        slug: "predictive-analytics-and-sustainable-food-systems",
      },
    ],
  });

  console.log('Seeding completed.');
}

main()
  .catch(e => {
    console.error('Seeding failed:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('Prisma disconnected.');
  });