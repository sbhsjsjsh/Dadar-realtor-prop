import { Metadata } from 'next';
import WhyBuyDadarPage from './PageContent';

export const metadata: Metadata = {
  title: 'Why Buy in Dadar? Price Trends, Metro & Schools 2026',
  description: 'Planning to buy flats in Dadar? Check price trends, metro connectivity, top schools & who should invest. Call 9004810239 for a free site visit.',
  keywords: 'flats in Dadar, why buy in Dadar, Dadar property price, 2 BHK flat in Dadar, ready to move flats in Dadar, Dadar Mumbai real estate, Dadar connectivity, schools in Dadar',
  openGraph: {
    title: 'Why Buy in Dadar? Price Trends, Metro & Schools 2026',
    description: 'Planning to buy flats in Dadar? Check price trends, metro connectivity, top schools & who should invest.',
    type: 'article',
    url: '/why-buy-in-dadar-mumbai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Buy in Dadar? Price Trends, Metro & Schools 2026',
    description: 'Planning to buy flats in Dadar? Check price trends, metro connectivity, top schools & who should invest.',
  },
};

export default function Page() {
  return <WhyBuyDadarPage />;
}
