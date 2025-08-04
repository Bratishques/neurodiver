import Header from '@/components/Header/Header';

interface HeaderOnlyLayoutProps {
  children?: React.ReactNode;
}

const HeaderOnlyLayout = ({ children }: HeaderOnlyLayoutProps) => {
  return (
    <div className="bg-firstScreenBg flex flex-col h-screen">
    <div className="px-53">
      <Header />
      {children}
    </div>
    </div>
  );
};

export default HeaderOnlyLayout; 