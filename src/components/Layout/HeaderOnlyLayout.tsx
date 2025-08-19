import Header from '@/components/Header/Header';

interface HeaderOnlyLayoutProps {
  children?: React.ReactNode;
}

const HeaderOnlyLayout = ({ children }: HeaderOnlyLayoutProps) => {
  return (
    <div className="bg-firstScreenBg flex flex-col min-h-screen">
      <div className="flex-1 px-40 max-1xl:px-20 max-md:px-10 max-sm:px-6 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
      </div>
      <div className="px-40 max-1xl:px-20 max-md:px-10 max-sm:px-6 pb-7 pt-4">
        <p className="text-white/40 text-base text-center">
          © 2025 0xy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default HeaderOnlyLayout;
