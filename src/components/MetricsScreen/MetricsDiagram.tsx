'use client';
import { PieChart, Pie, Cell, ResponsiveContainer, PieLabelRenderProps } from 'recharts';
import { useState, useEffect } from 'react';

interface MetricsDiagramProps {
  mode?: string;
}
interface CustomLabelProps {
  cx: number;
  cy: number;
  outerRadius: number;
  midAngle: number;
  percent?: number;
  index?: number;
}
const MetricsDiagram = ({ mode }: MetricsDiagramProps) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = [
    { name: 'Public Sale', value: 65, color: '#FFF0CF', icon: '/icons/tokenomics/sale.svg' },
    { name: 'Cex Liquidity', value: 5, color: '#88D7FF', icon: '/icons/tokenomics/cex.svg' },
    { name: 'Treasury', value: 3, color: '#FFE09B', icon: '/icons/tokenomics/treasury.svg' },
    { name: 'Fund', value: 16.6, color: '#51FFFF', icon: '/icons/tokenomics/fund.svg' },
    { name: 'Team', value: 3.4, color: '#FCFF2E', icon: '/icons/tokenomics/team.svg' },
    { name: 'Permanent Liquidity Lock', value: 2, color: '#5DF5AA', icon: '/icons/tokenomics/lock.svg' },
    { name: 'Marketing', value: 5, color: '#A9FF5E', icon: '/icons/tokenomics/marketing.svg' },
  ];

  const lineConfigDefault = [
    { offsetX: 60, offsetY: 1, horizontalLength: 60 },
    { offsetX: 0, offsetY: -130, horizontalLength: 100, isVertical: true, thirdSegmentX: -140 },
    { offsetX: 0, offsetY: -165, horizontalLength: 45, isVertical: true, thirdSegmentX: -170 },
    { offsetX: -285, offsetY: 0, horizontalLength: 40, firstVerticalUp: true },
    { offsetX: -180, offsetY: 0, horizontalLength: 80, firstVerticalUp: true },
    { offsetX: 470, offsetY: 0, horizontalLength: 100, firstVerticalUp: true },
    { offsetX: 290, offsetY: 0, horizontalLength: 25, firstVerticalUp: true, extraSegments: [{ y: 90 }, { x: 120 }] },
  ];

  const getAdaptiveConfig = () => {
    const isVerySmallMobile = windowWidth < 768;
    const isSmallMobile = windowWidth <= 900;
    const isMobile = windowWidth <= 1024;
    
    if (isVerySmallMobile) {
      return {
        innerRadius: 60,
        outerRadius: 140,
        cornerRadius: 8,
        containerHeight: 400,
        fontSize: { large: 24, medium: 14, small: 10 },
        showLines: false,
        showTable: true,
        lineConfig: [],
      };
    }
    
    if (isSmallMobile) {
      return {
        innerRadius: 70,
        outerRadius: 160,
        cornerRadius: 6,
        containerHeight: 600,
        fontSize: { large: 30, medium: 16, small: 12 },
        showLines: true,
        showTable: false,
        lineConfig: [
          { offsetX: 30, offsetY: 15, horizontalLength: 30 },
          { offsetX: 0, offsetY: -65, horizontalLength: 45, isVertical: true, thirdSegmentX: -90 },
          { offsetX: 0, offsetY: -90, horizontalLength: 25, isVertical: true, thirdSegmentX: -95 },
          { offsetX: -160, offsetY: 0, horizontalLength: 25, firstVerticalUp: true },
          { offsetX: -105, offsetY: 0, horizontalLength: 40, firstVerticalUp: true },
          { offsetX: 260, offsetY: 0, horizontalLength: 50, firstVerticalUp: true },
          { offsetX: 160, offsetY: 0, horizontalLength: 25, firstVerticalUp: true, extraSegments: [{ y: 40 }, { x: 60 }] },
        ],
      };
    }
    
    if (isMobile) {
      return {
        innerRadius: 80,
        outerRadius: 200,
        cornerRadius: 7,
        containerHeight: 700,
        fontSize: { large: 36, medium: 20, small: 16 },
        showLines: true,
        showTable: false,
        lineConfig: [
          { offsetX: 40, offsetY: 20, horizontalLength: 40 },
          { offsetX: 0, offsetY: -80, horizontalLength: 60, isVertical: true, thirdSegmentX: -110 },
          { offsetX: 0, offsetY: -115, horizontalLength: 30, isVertical: true, thirdSegmentX: -120 },
          { offsetX: -200, offsetY: 0, horizontalLength: 30, firstVerticalUp: true },
          { offsetX: -125, offsetY: 0, horizontalLength: 55, firstVerticalUp: true },
          { offsetX: 330, offsetY: 0, horizontalLength: 70, firstVerticalUp: true },
          { offsetX: 200, offsetY: 0, horizontalLength: 30, firstVerticalUp: true, extraSegments: [{ y: 50 }, { x: 80 }] },
        ],
      };
    }
    
    return {
      innerRadius: 120,
      outerRadius: 280,
      cornerRadius: 9,
      containerHeight: 820,
      fontSize: { large: 48, medium: 24, small: 18 },
      showLines: true,
      showTable: false,
      lineConfig: lineConfigDefault,
    };
  };
  

  const config = getAdaptiveConfig();

  const renderLabel = ({ cx, cy, midAngle, outerRadius, percent }: CustomLabelProps) => {
    if (!percent) return null;
    const value = +(percent * 100).toFixed(1);
    if (value === 2) return null;

    if (config.showTable) {
      const offset = config.outerRadius === 140 ? 30 : 35;
      const radius = outerRadius - offset;
      const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
      const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

      let fontSize = config.fontSize.medium;
      if (value > 50) fontSize = config.fontSize.large;
      else if (value < 10) fontSize = value < 4 && value % 1 !== 0 ? config.fontSize.small : config.fontSize.medium;

      return (
        <text x={x} y={y} fill="#333" textAnchor="middle" dominantBaseline="central" fontSize={fontSize}>
          {`${value}%`}
        </text>
      );
    }

    const offset = config.outerRadius === 160 ? 35 : config.outerRadius === 200 ? 45 : 65;
    const radius = outerRadius - offset;
    let x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    let y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

    if (value === 65) {
      y -= config.outerRadius === 160 ? 125 : config.outerRadius === 200 ? 160 : 220;
      x -= config.outerRadius === 160 ? 20 : config.outerRadius === 200 ? 25 : 35;
    }

    let fontSize = config.fontSize.medium;
    if (value > 50) fontSize = config.fontSize.large;
    else if (value < 10) fontSize = value < 4 && value % 1 !== 0 ? config.fontSize.small : config.fontSize.medium;

    return (
      <text x={x} y={y} fill="#333" textAnchor="middle" dominantBaseline="central" fontSize={fontSize}>
        {`${value}%`}
      </text>
    );
  };

  const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, index }: CustomLabelProps) => {
    if (index === undefined) return null;
    const item = data[index];
    const line = config.lineConfig[index];

    if (config.showTable) {
      return null;
    }

    let startX = cx + outerRadius * Math.cos((-midAngle * Math.PI) / 180);
    let startY = cy + outerRadius * Math.sin((-midAngle * Math.PI) / 180);

    if (item.name === 'Public Sale') startY -= config.outerRadius === 160 ? 125 : config.outerRadius === 200 ? 160 : 220;
    if (item.name === 'Fund') { startY -= config.outerRadius === 160 ? 42 : config.outerRadius === 200 ? 55 : 75; startX += config.outerRadius === 160 ? 32 : config.outerRadius === 200 ? 40 : 60; }

    let midX, midY;
    if (line.firstVerticalUp) { midX = startX; midY = startY - (line.horizontalLength || 0); }
    else { midX = startX + (startX < cx ? -line.horizontalLength : line.horizontalLength); midY = startY; }

    const endX = line.isVertical ? midX : midX + (line.offsetX || 0);
    const endY = midY + (line.offsetY || 0);

    let finalX = line.thirdSegmentX !== undefined ? endX + line.thirdSegmentX : endX;
    let finalY = endY;
    if (item.name === 'Marketing' && config.outerRadius === 200) {
        finalY += 20;
        finalX += 10;
      }
    if (item.name === 'Marketing' && config.outerRadius === 160) {
        finalY += 16;
        finalX += 8;
      }
    if (item.name === 'Public Sale' && config.outerRadius === 200) {
        finalX += 10;
        finalY -= 20;
      }
    if (item.name === 'Public Sale' && config.outerRadius === 160) {
        finalX += 8;
        finalY -= 16;
      }
    if (line.extraSegments?.length) {
      let prevX = finalX, prevY = finalY;
      line.extraSegments.forEach((seg: { x?: number; y?: number }) => {
        const nextX = seg.x !== undefined ? prevX + seg.x : prevX;
        const nextY = seg.y !== undefined ? prevY + seg.y : prevY;
        prevX = nextX; prevY = nextY;
      });
      finalX = prevX; finalY = prevY;
    }

    const points = [{ x: startX, y: startY }, { x: midX, y: midY }, { x: endX, y: endY }];
    if (line.thirdSegmentX !== undefined) points.push({ x: finalX, y: finalY });

    const buildRoundedPath = (pts: { x: number; y: number }[], r = 8) => {
      if (pts.length < 2) return '';
      let d = `M${pts[0].x},${pts[0].y}`;
      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i-1], p1 = pts[i], p2 = pts[i+1];
        if (!p2) { d += ` L${p1.x},${p1.y}`; break; }
        const dx1 = p1.x - p0.x, dy1 = p1.y - p0.y;
        const dx2 = p2.x - p1.x, dy2 = p2.y - p1.y;
        if ((dx1 !== 0 && dy2 !== 0) || (dy1 !== 0 && dx2 !== 0)) {
          const len1 = Math.sqrt(dx1*dx1 + dy1*dy1);
          const startX = p1.x - (dx1/len1)*r, startY = p1.y - (dy1/len1)*r;
          const len2 = Math.sqrt(dx2*dx2 + dy2*dy2);
          const endX = p1.x + (dx2/len2)*r, endY = p1.y + (dy2/len2)*r;
          d += ` L${startX},${startY} Q${p1.x},${p1.y} ${endX},${endY}`;
        } else d += ` L${p1.x},${p1.y}`;
      }
      return d;
    };

    const pathD = buildRoundedPath(points, 8);
    const lastSegment = points.slice(-2);

    return (
      <g key={`line-label-${index}`}>
        <defs>
          <linearGradient id={`gradient-last-${index}`} x1={lastSegment[0].x} y1={lastSegment[0].y} x2={lastSegment[1].x} y2={lastSegment[1].y} gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={item.color} stopOpacity="1" />
            <stop offset="100%" stopColor={item.color} stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <path d={pathD} stroke={`url(#gradient-last-${index})`} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <foreignObject x={finalX - (config.outerRadius === 160 ? 50 : config.outerRadius === 200 ? 60 : 75)} y={finalY - (config.outerRadius === 160 ? 16 : config.outerRadius === 200 ? 20 : 25)} width={config.outerRadius === 160 ? 220 : config.outerRadius === 200 ? 270 : 300} height={config.outerRadius === 160 ? 40 : config.outerRadius === 200 ? 50 : 60}>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg overflow-visible font-main w-fit" style={{ backgroundColor: item.color }}>
            <img src={item.icon} alt="icon" className={`${config.outerRadius === 160 ? 'w-4 h-5' : config.outerRadius === 200 ? 'w-5 h-7' : 'w-7 h-10'} flex-shrink-0`} />
            <span className={`text-black font-bold whitespace-nowrap ${config.outerRadius === 160 ? 'text-sm' : config.outerRadius === 200 ? 'text-lg' : 'text-xl'}`}>{item.name}</span>
          </div>
        </foreignObject>
        {item.name === 'Permanent Liquidity Lock' && (
          <foreignObject x={finalX - (config.outerRadius === 160 ? 45 : config.outerRadius === 200 ? 60 : 75)} y={finalY + (config.outerRadius === 160 ? 25 : config.outerRadius === 200 ? 30 : 40)} width={config.outerRadius === 160 ? 45 : config.outerRadius === 200 ? 60 : 75} height={config.outerRadius === 160 ? 25 : config.outerRadius === 200 ? 30 : 38}>
            <div className="flex items-center justify-center w-full h-full rounded-lg border-[#5DF5AA] border-3" style={{ backgroundColor: '#C0FFE0' }}>
              <span className={`text-black font-bold ${config.outerRadius === 160 ? 'text-sm' : config.outerRadius === 200 ? 'text-lg' : 'text-2xl'}`}>2%</span>
            </div>
          </foreignObject>
        )}
      </g>
    );
  };

  const sortedData = [...data].sort((a, b) => b.value - a.value);

  const getPercentageStyle = (itemName: string) => {
    const styles: { [key: string]: { bg: string; border: string } } = {
      'Permanent Liquidity Lock': { bg: '#C0FFE0', border: '#5DF5AA' },
      'Treasury': { bg: '#FFF3DA', border: '#FFE09B' },
      'Marketing': { bg: '#DFFFC3', border: '#A9FF5E' },
      'Cex Liquidity': { bg: '#C8EDFF', border: '#88D7FF' },
      'Team': { bg: '#FEFFCA', border: '#FCFF2E' },
      'Fund': { bg: '#C9FFFF', border: '#51FFFF' },
      'Public Sale': { bg: '#FFF0CF', border: '#FFAF00' },
    };
    return styles[itemName] || { bg: '#FFF0CF', border: '#FFAF00' };
  };

  return (
    <div className="mt-6 sm:mt-8 md:mt-10 w-full pointer-events-none">
      <div className={`w-full flex items-center justify-center relative ${config.containerHeight === 400 ? 'h-[400px]' : config.containerHeight === 550 ? 'h-[550px]' : config.containerHeight === 700 ? 'h-[700px]' : 'h-[820px]'}`}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              {data.map((item, index) => (
                <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={item.color} stopOpacity="1" />
                  <stop offset="100%" stopColor={item.color} stopOpacity="0.1" />
                </linearGradient>
              ))}
            </defs>
            <Pie data={data} cx="50%" cy="50%" innerRadius={config.innerRadius} outerRadius={config.outerRadius} paddingAngle={0} cornerRadius={config.cornerRadius} startAngle={90} endAngle={-270} stroke="none" dataKey="value" label={(props: PieLabelRenderProps) => renderLabel(props as unknown as CustomLabelProps)} labelLine={false}>
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
            </Pie>
            {config.showLines && (
              <Pie data={data} cx="50%" cy="50%" innerRadius={config.innerRadius} outerRadius={config.outerRadius} paddingAngle={0} cornerRadius={config.cornerRadius} startAngle={90} endAngle={-270} stroke="none" dataKey="value" label={(props: PieLabelRenderProps) => renderCustomLabel(props as unknown as CustomLabelProps)} labelLine={false}>
                {data.map((_, index) => <Cell key={`label-${index}`} fill="transparent" />)}
              </Pie>
            )}
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      {config.showTable && (
        <div className="w-full mt-6 space-y-3 pb-[54px]">
          {sortedData.map((item, index) => (
            <div key={index} className="flex items-center w-full gap-1.5">
              <div className="flex items-center gap-1 px-[9px] py-1.5 rounded-lg w-[85%] font-main" style={{ backgroundColor: item.color }}>
                <img src={item.icon} alt="icon" className="w-5 h-6 flex-shrink-0" />
                <span className="text-black font-bold text-sm max-[425px]:text-[13px] whitespace-nowrap">{item.name}</span>
              </div>
              <div 
                className="w-[15%] flex justify-center px-[9px] py-1.5 rounded-lg border-2" 
                style={{ 
                  backgroundColor: getPercentageStyle(item.name).bg,
                  borderColor: getPercentageStyle(item.name).border
                }}
              >
                <span className="text-black font-bold text-sm max-[425px]:text-[13px]">{item.value}%</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MetricsDiagram;
