import Announcement from '@/components/AnnouncementScreen/Announcement';
import FirstScreen from '@/components/FirstScreen/FirstScreen';
import Footer from '@/components/Footer/Footer';
import SliderScreen from '@/components/SliderScreen/SliderScreen';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="">
      <FirstScreen />
      <Announcement/>
      <SliderScreen/>
      <Footer />
    </div>
  );
}
