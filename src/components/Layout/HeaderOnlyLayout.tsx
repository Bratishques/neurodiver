import Header from '@/components/Header/Header';

interface HeaderOnlyLayoutProps {
  children?: React.ReactNode;
}

const HeaderOnlyLayout = ({ children }: HeaderOnlyLayoutProps) => {
  return (
    <div className="bg-firstScreenBg flex flex-col h-screen">
    <div className="px-40 max-1xl:px-20 max-md:px-10 max-sm:px-6">
      <Header />
      {children}
    </div>
    </div>
  );
};

export default HeaderOnlyLayout; 