import { Metadata } from 'next';
import DahisarLandPage from './PageContent';

export const metadata: Metadata = {
  title: 'Land for Apartment Construction in Dahisar, Mumbai | Delicacy Property',
  description: "Looking for land for apartment construction in Dahisar? Delicacy Property offers verified, clear-title plots ideal for residential projects. Call +91-9004810239 for a free site visit.",
  keywords: 'Land for Apartment Construction in Dahisar, residential development land Dahisar, plot for building construction Dahisar, land for builders in Dahisar, land for sale in Dahisar, land for housing project Mumbai, redevelopment land Dahisar',
  openGraph: {
    title: 'Land for Apartment Construction in Dahisar, Mumbai | Delicacy Property',
    description: "Looking for land for apartment construction in Dahisar? Delicacy Property offers verified, clear-title plots ideal for residential projects.",
    type: 'website',
    url: '/land-for-apartment-construction-in-dahisar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Land for Apartment Construction in Dahisar | Delicacy Property',
    description: 'Verified Plots for Residential Projects in Dahisar, Mumbai.',
  },
};

export default function Page() {
  return <DahisarLandPage />;
}
