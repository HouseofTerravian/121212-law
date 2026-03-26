import Hero from '@/components/home/Hero';
import RightsGrid from '@/components/home/RightsGrid';
import FeaturedArticle from '@/components/home/FeaturedArticle';
import PolicyWatch from '@/components/home/PolicyWatch';
import Resources from '@/components/home/Resources';
import FindHelp from '@/components/home/FindHelp';
import Community from '@/components/home/Community';

export default function HomePage() {
  return (
    <>
      <Hero />
      <RightsGrid />
      <FeaturedArticle />
      <PolicyWatch />
      <Resources />
      <FindHelp />
      <Community />
    </>
  );
}
