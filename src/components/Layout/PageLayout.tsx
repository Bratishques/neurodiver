import Announcement from '@/components/AnnouncementScreen/Announcement';
import FirstScreen from '@/components/FirstScreen/FirstScreen';
import Footer from '@/components/Footer/Footer';
import MetricsScreen from '@/components/MetricsScreen/MetricsScreen';
import ScrollPhone from '@/components/ScrollPhoneScreen/ScrollPhone';
import SliderScreen from '@/components/SliderScreen/SliderScreen';

interface PageLayoutProps {
  children?: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="">
      <FirstScreen />
      <ScrollPhone />
      <MetricsScreen />
      <Announcement />
      <SliderScreen />
      <Footer />
      {children}
    </div>
  );
};

export default PageLayout; 