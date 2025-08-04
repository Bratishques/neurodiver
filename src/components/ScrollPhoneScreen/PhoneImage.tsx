import * as React from "react"

interface PhoneImageProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

export const PhoneImage = ({ children, ...props }: PhoneImageProps) => (
  <div className="relative w-full max-w-[496px] h-auto aspect-[496/1000] mx-auto">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      className="absolute inset-0 z-10"
      viewBox="0 0 496 1000"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        fill="#333343"
        d="M488.042 158.128h-.941V59.32c0-32.762-26.558-59.32-59.32-59.32H68.218C35.458 0 8.899 26.558 8.899 59.32v98.808h-.941a7.743 7.743 0 0 0-7.745 7.745v68.347a7.744 7.744 0 0 0 7.745 7.746h.941v16.301h-.941a7.744 7.744 0 0 0-7.745 7.746v68.346a7.743 7.743 0 0 0 7.745 7.746h.941V940.68c0 32.762 26.559 59.32 59.32 59.32h359.563c32.762 0 59.32-26.558 59.32-59.32V283.884h.941a7.743 7.743 0 0 0 7.746-7.745V165.873a7.743 7.743 0 0 0-7.746-7.745Z"
      />
    </svg>
    
    <div className="absolute inset-0 z-20 flex items-center justify-center">
      <div className="w-[87.7%] h-[95%] bg-white p-2 sm:p-3 md:p-4 rounded-[32px] overflow-y-scroll">
        {children}
      </div>
    </div>
  </div>
)
