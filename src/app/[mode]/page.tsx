import DislexiaPage from '@/components/DislexiaPage';
import ADHDPage from '@/components/ADHDPage';
import BipolarPage from '@/components/BipolarPage';

interface PageProps {
  params: Promise<{
    mode: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { mode: 'dislexia' },
    { mode: 'adhd' },
    { mode: 'bipolar' },
  ];
}

export default async function ModePage({ params }: PageProps) {
  const { mode } = await params;

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