import Hero from '@/components/hero';
import Services from '@/components/services';
import Pricing from '@/components/pricing';
import VideoScroll from '@/components/video-scroll';
import Reviews from '@/components/reviews';
import ContactForm from '@/components/contact-form';
import FAQ from '@/components/faq';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <VideoScroll />
      <Pricing />
      <Reviews />
      <FAQ />
    </>
  );
}