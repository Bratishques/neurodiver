import Header from '@/components/Header/Header';

interface HeaderOnlyLayoutProps {
  children?: React.ReactNode;
}

const HeaderOnlyLayout = ({ children }: HeaderOnlyLayoutProps) => {
  return (
    <div className="bg-firstScreenBg pb-73 max-1xl:pb-60 max-lg:pb-45 flex flex-col h-screen">
      <div className="px-40 max-1xl:px-20 max-md:px-10 max-sm:px-6">
        <Header />
        {children}
      </div>
      <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 z-10">
        <p className="text-white/40 text-base">
          © 2025 Neuro. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default HeaderOnlyLayout;
