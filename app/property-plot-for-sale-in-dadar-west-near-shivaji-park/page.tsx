import { Metadata } from 'next';
import DadarWestPage from './PageContent';

export const metadata: Metadata = {
  title: 'Property Plot for Sale in Dadar West Near Shivaji Park | Verified Plots Mumbai',
  description: "Looking for a property plot for sale in Dadar West near Shivaji Park? Explore verified, clear-title plots in Mumbai's most sought-after location. Call +91-9004810239 for a free site visit.",
  keywords: 'plot for sale in Dadar West, land near Shivaji Park, buy plot in Dadar West Mumbai, residential plot Dadar West, commercial plot Dadar West, property near Shivaji Park, Dadar West land investment, Mumbai central plot for sale',
  openGraph: {
    title: 'Property Plot for Sale in Dadar West Near Shivaji Park | Verified Plots Mumbai',
    description: "Looking for a property plot for sale in Dadar West near Shivaji Park? Explore verified, clear-title plots in Mumbai's most sought-after location.",
    type: 'website',
    url: '/property-plot-for-sale-in-dadar-west-near-shivaji-park',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Plot for Sale in Dadar West Near Shivaji Park',
    description: 'Verified Plots for Residential & Commercial Use in Dadar West near Shivaji Park.',
  },
};

export default function Page() {
  return <DadarWestPage />;
}
