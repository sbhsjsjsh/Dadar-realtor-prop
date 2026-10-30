import { Metadata } from 'next';
import MumbaiSuburbsLandPage from './PageContent';

export const metadata: Metadata = {
  title: 'Large Land Investment Property in Mumbai Suburbs | Verified Plots for Sale',
  description: "Looking for a large land investment property in Mumbai suburbs? Explore verified, clear-title land parcels with high appreciation potential. Call +91-9004810239 for a free site visit.",
  keywords: 'Large Land Investment Property in Mumbai Suburbs, large land parcel in Mumbai suburbs, land investment in Mumbai, bulk land for sale Mumbai suburbs, acres of land near Mumbai, land for development in Mumbai suburbs, commercial and residential land Mumbai',
  openGraph: {
    title: 'Large Land Investment Property in Mumbai Suburbs | Verified Plots for Sale',
    description: "Looking for a large land investment property in Mumbai suburbs? Explore verified, clear-title land parcels with high appreciation potential.",
    type: 'website',
    url: '/large-land-investment-property-in-mumbai-suburbs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Large Land Investment Property in Mumbai Suburbs',
    description: 'Verified Land Parcels for Development & Long-Term Growth in Mumbai Suburbs.',
  },
};

export default function Page() {
  return <MumbaiSuburbsLandPage />;
}
