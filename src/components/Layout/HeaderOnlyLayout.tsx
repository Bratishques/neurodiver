import Header from '@/components/Header/Header';

interface HeaderOnlyLayoutProps {
  children?: React.ReactNode;
}

const HeaderOnlyLayout = ({ children }: HeaderOnlyLayoutProps) => {
  return (
    <div className="bg-firstScreenBg pb-73 max-1xl:pb-60 max-lg:pb-45 flex flex-col min-h-screen overflow-y-scroll">
    <div className="px-40 max-1xl:px-20 max-md:px-10 max-sm:px-6">
      <Header />
      {children}
    </div>
    </div>
  );
};

export default HeaderOnlyLayout; 