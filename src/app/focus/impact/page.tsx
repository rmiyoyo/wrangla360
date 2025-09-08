import Link from 'next/link';
import Image from 'next/image';

export default function InclusiveDataSocialImpact() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Inclusive Data and Social Impact Analytics</h1>
          <p>
            Collect, analyze, and leverage diverse datasets to address social dimensions within the food system, focusing on equitable food access, nutrition, and affordability, especially for vulnerable populations.
          </p>
          <Link href="/contact" className="hero-btn">
            Contact us to learn more
          </Link>
        </div>
        <div className="hero-image">
          <Image
            src="/inclusive-data.jpg"
            alt="Inclusive data and social impact analytics"
            width={500}
            height={450}
            priority
            className="rounded-xl"
          />
        </div>
      </section>

      <section className="focus-section">
        <h2>Key Activities</h2>
        <div className="focus-grid">
          <div className="focus-item-page">
            Develop inclusive, cross-sectional datasets that represent diverse demographics, regional food security, dietary needs, and socioeconomic factors to identify inequities in food access and nutrition.
          </div>
          <div className="focus-item-page">
            Use geospatial and demographic analytics to map “food deserts” and “food swamps” (areas with limited access to healthy food or a high density of unhealthy food options) and model how climate or economic changes could affect these regions.
          </div>
          <div className="focus-item-page">
            Collaborate with government bodies, NGOs, and local organizations to create tools for monitoring food access and affordability, enabling targeted interventions to improve food equity and access in underserved communities.
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>SDG Impact</h2>
        <p className="text-center max-w-3xl mx-auto">
          Advances social equity by addressing food access and affordability, ensuring that ESG efforts include social outcomes and prioritize nutritional security, especially for marginalized groups. This supports fair access to resources and healthier outcomes for all.
        </p>
        <div className="cta-buttons">
          <Link href="/services" className="cta-btn primary">
            Explore our services
          </Link>
          <Link href="/contact" className="cta-btn secondary">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}