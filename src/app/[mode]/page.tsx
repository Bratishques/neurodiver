import DislexiaPage from '@/pages/DislexiaPage';
import ADHDPage from '@/pages/ADHDPage';
import BipolarPage from '@/pages/BipolarPage';

interface PageProps {
  params: {
    mode: string;
  };
}

export default function ModePage({ params }: PageProps) {
  const { mode } = params;

  switch (mode) {
    case 'dislexia':
      return <DislexiaPage />;
    case 'adhd':
      return <ADHDPage />;
    case 'bipolar':
      return <BipolarPage />;
    default:
      return <div>Page not found</div>;
  }
} 