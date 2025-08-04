'use client'

import Announcement from '@/components/AnnouncementScreen/Announcement';
import FirstScreen from '@/components/FirstScreen/FirstScreen';
import Footer from '@/components/Footer/Footer';
import MetricsScreen from '@/components/MetricsScreen/MetricsScreen';
import ScrollPhone from '@/components/ScrollPhoneScreen/ScrollPhone';
import SliderScreen from '@/components/SliderScreen/SliderScreen';
import { PhoneSection } from '../ScrollPhoneScreen/ScrollPhoneTest';
import { useState } from 'react';

interface PageLayoutProps {
  children?: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const [showThirdSection, setShowThirdSection] = useState(false);
  return (
    <div className="">
      <FirstScreen />
      <PhoneSection onShowThirdSection={setShowThirdSection} />
      {/* <ScrollPhone /> */}
      <div className={`${showThirdSection ? 'block' : 'hidden'}`}>
        <MetricsScreen />
        <Announcement />
        <SliderScreen />
        <Footer />
        {children}
      </div>
    </div>
  );
};

export default PageLayout; 