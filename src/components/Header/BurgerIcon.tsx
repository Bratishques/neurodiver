import * as React from "react"
export const BurgerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M4 12h16M4 6h16M4 18h16"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={25.05}
        height={25.05}
        x={-0.525}
        y={-0.525}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feTurbulence
          baseFrequency="0.15151514112949371 0.15151514112949371"
          numOctaves={3}
          seed={7647}
          type="fractalNoise"
        />
        <feDisplacementMap
          width="100%"
          height="100%"
          in="shape"
          result="displacedImage"
          scale={1.05}
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMerge result="effect1_texture_831_5266">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
    </defs>
  </svg>
)
