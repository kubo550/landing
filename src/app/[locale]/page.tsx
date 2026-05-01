import { setRequestLocale } from 'next-intl/server';

import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { PainPoints } from '@/components/sections/PainPoints';
import { Services } from '@/components/sections/Services';
import { PromoBanner } from '@/components/sections/PromoBanner';
import { Portfolio } from '@/components/sections/Portfolio';
import { PricingCalculator } from '@/components/sections/PricingCalculator';
import { Process } from '@/components/sections/Process';
import { About } from '@/components/sections/About';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <PainPoints />
        <Services />
        <PromoBanner />
        <Portfolio />
        <PricingCalculator />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
