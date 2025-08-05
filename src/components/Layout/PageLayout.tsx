'use client'

import Announcement from '@/components/AnnouncementScreen/Announcement';
import FirstScreen from '@/components/FirstScreen/FirstScreen';
import Footer from '@/components/Footer/Footer';
import MetricsScreen from '@/components/MetricsScreen/MetricsScreen';
import SliderScreen from '@/components/SliderScreen/SliderScreen';
import { PhoneSection } from '../ScrollPhoneScreen/ScrollPhoneTest';
import { useState } from 'react';

interface PageLayoutProps {
  children?: React.ReactNode;
  mode?: string;
}

const PageLayout = ({ children, mode }: PageLayoutProps) => {
  const [showThirdSection, setShowThirdSection] = useState(false);
  return (
    <div className="">
      <FirstScreen mode={mode} />
      <PhoneSection onShowThirdSection={setShowThirdSection} mode={mode}/>
      {/* <ScrollPhone /> */}
      <div className={`${showThirdSection ? 'block' : 'hidden'}`}>
        <MetricsScreen mode={mode}/>
        <Announcement mode={mode}/>
        <SliderScreen />
        <Footer mode={mode}/>
        {children}
      </div>
    </div>
  );
};

export default PageLayout; 