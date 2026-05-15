'use client'

import React from 'react'

export const ST = {
  navy: '#1E3A66',
  navyDeep: '#16294A',
  navySoft: '#2E4F82',
  bone: '#F5F3EC',
  paper: '#FAFAF7',
  paperInk: '#111418',
  paperMute: '#6B7280',
  paperLine: '#E8E4D8',
  paperLineSoft: '#EFEBDF',
  dark: '#0B0D10',
  darkSurface: '#14171B',
  darkElev: '#1A1E24',
  darkInk: '#E8E6DE',
  darkMute: '#8A8F96',
  darkLine: '#22262D',
  green: 'oklch(68% 0.14 150)',
  greenSoft: 'oklch(92% 0.05 150)',
  amber: 'oklch(74% 0.13 75)',
  amberSoft: 'oklch(94% 0.05 75)',
  blue: 'oklch(60% 0.14 240)',
  blueSoft: 'oklch(93% 0.04 240)',
  red: 'oklch(64% 0.17 25)',
}

export function STMark({ size = 22, color = ST.bone, style }: { size?: number; color?: string; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 650 650" style={style} fill="none">
      <path d="M60.4219 119.978C60.4219 111.653 69.1723 106.23 76.6271 109.935L609.318 374.671C613.13 376.566 615.541 380.456 615.541 384.713L615.541 497.079C615.541 505.396 606.806 510.819 599.352 507.129L66.6616 243.466C62.8401 241.575 60.4219 237.68 60.4219 233.416L60.4219 119.978Z" fill={color} />
      <path d="M52.7161 478.47C53.2424 473.969 56.4263 470.227 60.7853 468.986L334.967 390.965C342.842 388.724 350.385 395.403 349.115 403.49L332.209 511.17C331.551 515.358 328.588 518.817 324.551 520.11L53.6623 606.888C45.896 609.376 38.1556 603.006 39.1026 594.906L52.7161 478.47Z" fill={color} />
      <path d="M267.885 64.8386C269.691 61.0692 273.443 58.6171 277.621 58.4765L587.274 48.0581C595.369 47.7857 601.074 55.9218 598.06 63.4396L559.615 159.321C557.91 163.574 553.788 166.362 549.206 166.362L237.047 166.362C228.793 166.362 223.367 157.746 226.934 150.302L267.885 64.8386Z" fill={color} />
    </svg>
  )
}

export function STWordmarkGlyph({ color = ST.bone, height = 22 }: { color?: string; height?: number }) {
  const width = height * (2683 / 511)
  return (
    <svg width={width} height={height} viewBox="0 0 2683 511" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2447.24 397.957H2343.02V92.1807H2449.18C2479.54 92.1807 2505.67 98.3022 2527.56 110.545C2549.46 122.689 2566.28 140.157 2578.03 162.951C2589.77 185.745 2595.65 213.018 2595.65 244.77C2595.65 276.622 2589.73 303.995 2577.88 326.888C2566.13 349.782 2549.16 367.35 2526.97 379.593C2504.87 391.836 2478.29 397.957 2447.24 397.957ZM2399.46 349.284H2444.55C2465.55 349.284 2483.12 345.452 2497.26 337.787C2511.39 330.024 2521.99 318.428 2529.06 302.999C2536.22 287.571 2539.81 268.162 2539.81 244.77C2539.81 221.479 2536.27 202.169 2529.21 186.84C2522.14 171.412 2511.64 159.915 2497.7 152.351C2483.77 144.686 2466.55 140.854 2446.04 140.854H2399.46V349.284Z" fill={color}/>
      <path d="M2094.69 397.957H2034.67L2142.17 92.1807H2211.9L2319.4 397.957H2259.38L2178.31 155.635H2175.92L2094.69 397.957ZM2096.04 278.065H2257.59V323.156H2096.04V278.065Z" fill={color}/>
      <path d="M2011.21 92.1807V397.957H1954.77V92.1807H2011.21Z" fill={color}/>
      <path d="M1697.43 397.957V92.1807H1812.84C1836.23 92.1807 1855.94 96.2617 1871.97 104.424C1887.99 112.586 1900.14 124.032 1908.4 138.764C1916.66 153.495 1920.79 170.665 1920.79 190.274C1920.79 209.883 1916.61 226.904 1908.25 241.336C1899.89 255.67 1887.59 266.768 1871.37 274.631C1855.24 282.395 1835.44 286.277 1811.95 286.277H1730.28V239.843H1804.18C1817.72 239.843 1828.82 237.952 1837.48 234.17C1846.24 230.288 1852.71 224.664 1856.89 217.298C1861.17 209.933 1863.31 200.925 1863.31 190.274C1863.31 179.425 1861.17 170.217 1856.89 162.653C1852.71 154.988 1846.24 149.165 1837.48 145.184C1828.72 141.103 1817.52 139.062 1803.88 139.062H1753.87V397.957H1697.43ZM1856.14 259.402L1931.99 397.957H1869.13L1794.78 259.402H1856.14Z" fill={color}/>
      <path d="M1667.83 139.36H1573.47V397.956H1517.63V139.36H1423.27V92.1797H1573.04V138.96L1612.92 92.1819L1612.93 92.1797H1667.83V139.36Z" fill={color}/>
      <path d="M1404.88 139.38H1310.51V397.977H1254.67V139.38H1160.31V92.1999H1310.07V138.979L1349.95 92.2014L1349.95 92.1999H1404.88V139.38Z" fill={color}/>
      <path d="M918.004 397.957V92.1807H1033.42C1056.81 92.1807 1076.52 96.2617 1092.54 104.424C1108.57 112.586 1120.71 124.032 1128.97 138.764C1137.23 153.495 1141.36 170.665 1141.36 190.274C1141.36 209.883 1137.18 226.904 1128.82 241.336C1120.46 255.67 1108.17 266.768 1091.94 274.631C1075.82 282.395 1056.01 286.277 1032.52 286.277H950.851V239.843H1024.76C1038.29 239.843 1049.39 237.952 1058.05 234.17C1066.81 230.288 1073.28 224.664 1077.46 217.298C1081.74 209.933 1083.88 200.925 1083.88 190.274C1083.88 179.425 1081.74 170.217 1077.46 162.653C1073.28 154.988 1066.81 149.165 1058.05 145.184C1049.29 141.103 1038.09 139.062 1024.46 139.062H974.441V397.957H918.004ZM1076.71 259.402L1152.56 397.957H1089.7L1015.35 259.402H1076.71Z" fill={color}/>
      <path d="M882.626 245.069C882.626 278.115 876.454 306.334 864.112 329.725C851.769 353.116 834.997 371.033 813.796 383.475C792.595 395.917 768.606 402.138 741.831 402.138C715.055 402.138 691.067 395.917 669.866 383.475C648.664 370.933 631.893 352.967 619.55 329.576C607.307 306.184 601.185 278.015 601.185 245.069C601.185 212.023 607.307 183.804 619.55 160.413C631.893 137.022 648.664 119.105 669.866 106.663C691.067 94.221 715.055 88 741.831 88C768.606 88 792.595 94.221 813.796 106.663C834.997 119.105 851.769 137.022 864.112 160.413C876.454 183.804 882.626 212.023 882.626 245.069ZM825.89 245.069C825.89 221.976 822.307 202.517 815.14 186.691C808.073 170.864 798.219 158.87 785.577 150.708C772.936 142.546 758.354 138.465 741.831 138.465C725.308 138.465 710.726 142.546 698.084 150.708C685.443 158.87 675.539 170.864 668.373 186.691C661.306 202.517 657.772 221.976 657.772 245.069C657.772 268.161 661.306 287.621 668.373 303.447C675.539 319.273 685.443 331.268 698.084 339.43C710.726 347.592 725.308 351.673 741.831 351.673C758.354 351.673 772.936 347.592 785.577 339.43C798.219 331.268 808.073 319.273 815.14 303.447C822.307 287.621 825.89 268.161 825.89 245.069Z" fill={color}/>
      <path d="M354.421 397.957V92.1807H469.834C493.225 92.1807 512.934 96.5603 528.959 105.32C544.984 114.079 557.128 126.123 565.389 141.451C573.651 156.68 577.782 174.099 577.782 193.708C577.782 213.317 573.601 230.786 565.24 246.114C556.979 261.343 544.735 273.337 528.511 282.097C512.386 290.756 492.529 295.086 468.938 295.086H392.793V248.951H461.175C474.811 248.951 485.959 246.612 494.619 241.934C503.279 237.156 509.699 230.636 513.879 222.375C518.159 214.014 520.299 204.458 520.299 193.708C520.299 182.958 518.159 173.502 513.879 165.34C509.699 157.079 503.229 150.658 494.47 146.08C485.81 141.402 474.612 139.062 460.876 139.062H410.859V397.957H354.421Z" fill={color}/>
      <path d="M264.225 176.687C262.832 163.747 257.009 153.694 246.756 146.528C236.604 139.261 223.365 135.628 207.041 135.628C195.595 135.628 185.79 137.32 177.628 140.705C169.466 144.089 163.195 148.767 158.816 154.739C154.536 160.612 152.396 167.331 152.396 174.896C152.296 181.166 153.69 186.641 156.576 191.319C159.562 195.898 163.544 199.78 168.521 202.965C173.497 206.15 179.022 208.838 185.093 211.027C191.265 213.217 197.536 215.059 203.906 216.552L232.423 223.718C244.168 226.406 255.416 230.089 266.166 234.767C276.916 239.346 286.521 245.119 294.982 252.086C303.443 259.054 310.111 267.465 314.989 277.319C319.966 287.173 322.454 298.719 322.454 311.958C322.454 329.974 317.826 345.8 308.569 359.437C299.411 372.974 286.173 383.574 268.854 391.239C251.634 398.803 230.781 402.586 206.295 402.586C182.406 402.586 161.653 398.903 144.035 391.537C126.516 384.072 112.83 373.272 102.976 359.138C93.1215 344.904 87.7963 327.535 87 307.03H142.392C143.188 317.681 146.423 326.54 152.097 333.607C157.771 340.574 165.236 345.85 174.493 349.433C183.849 352.917 194.251 354.659 205.698 354.659C217.642 354.659 228.093 352.867 237.052 349.284C246.109 345.601 253.177 340.525 258.253 334.055C263.429 327.585 266.017 320.12 266.017 311.659C266.017 303.796 263.727 297.276 259.149 292.1C254.67 286.924 248.349 282.594 240.187 279.11C232.025 275.527 222.42 272.342 211.371 269.555L176.882 260.597C151.599 254.127 131.642 244.322 117.01 231.184C102.378 217.945 95.1122 200.377 95.2118 178.479C95.1122 160.363 99.9397 144.537 109.694 131C119.548 117.463 132.986 106.912 150.007 99.3472C167.028 91.7824 186.238 88 207.638 88C229.437 88 248.548 91.7824 264.972 99.3472C281.495 106.812 294.434 117.214 303.791 130.552C313.147 143.89 317.975 159.268 318.273 176.687H264.225Z" fill={color}/>
    </svg>
  )
}

export function STWordmark({ color = ST.bone, size = 14, gap = 8 }: { color?: string; size?: number; gap?: number }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap }}>
      <STMark size={size * 1.4} color={color} />
      <STWordmarkGlyph color={color} height={size * 0.95} />
    </div>
  )
}

export type IconName =
  | 'home' | 'chat' | 'pulse' | 'journal' | 'bell' | 'plan' | 'brain' | 'metric' | 'map'
  | 'user' | 'gear' | 'send' | 'plus' | 'arrow-right' | 'arrow-up' | 'sun' | 'moon'
  | 'spark' | 'check' | 'target' | 'clock' | 'chevron-right' | 'sidebar' | 'search'

export function Icon({ name, size = 18, color = 'currentColor', strokeWidth = 1.6 }: { name: IconName; size?: number; color?: string; strokeWidth?: number }) {
  const s: React.SVGProps<SVGSVGElement> = {
    width: size, height: size, fill: 'none', stroke: color,
    strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round',
  }
  switch (name) {
    case 'home': return <svg {...s} viewBox="0 0 24 24"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/></svg>
    case 'chat': return <svg {...s} viewBox="0 0 24 24"><path d="M4 5h16v11H8l-4 4V5z"/></svg>
    case 'pulse': return <svg {...s} viewBox="0 0 24 24"><path d="M3 12h4l2-5 4 10 2-5h6"/></svg>
    case 'journal': return <svg {...s} viewBox="0 0 24 24"><path d="M5 4h11a3 3 0 013 3v13H8a3 3 0 01-3-3V4z"/><path d="M5 4v13"/></svg>
    case 'bell': return <svg {...s} viewBox="0 0 24 24"><path d="M6 15V10a6 6 0 0112 0v5l1.5 2H4.5L6 15z"/><path d="M10 19a2 2 0 004 0"/></svg>
    case 'plan': return <svg {...s} viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 9h16M9 3v4M15 3v4"/></svg>
    case 'brain': return <svg {...s} viewBox="0 0 24 24"><path d="M9 4a3 3 0 00-3 3v1a3 3 0 00-2 3 3 3 0 002 3v1a3 3 0 003 3h0V4z"/><path d="M15 4a3 3 0 013 3v1a3 3 0 012 3 3 3 0 01-2 3v1a3 3 0 01-3 3h0V4z"/></svg>
    case 'metric': return <svg {...s} viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/></svg>
    case 'map': return <svg {...s} viewBox="0 0 24 24"><path d="M9 4l6 2 5-2v14l-5 2-6-2-5 2V6l5-2z"/><path d="M9 4v16M15 6v16"/></svg>
    case 'user': return <svg {...s} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>
    case 'gear': return <svg {...s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z"/></svg>
    case 'send': return <svg {...s} viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
    case 'plus': return <svg {...s} viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
    case 'arrow-right': return <svg {...s} viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    case 'arrow-up': return <svg {...s} viewBox="0 0 24 24"><path d="M7 14l5-5 5 5"/></svg>
    case 'sun': return <svg {...s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
    case 'moon': return <svg {...s} viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>
    case 'spark': return <svg {...s} viewBox="0 0 24 24"><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"/></svg>
    case 'check': return <svg {...s} viewBox="0 0 24 24"><path d="M4 12l5 5L20 6"/></svg>
    case 'target': return <svg {...s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg>
    case 'clock': return <svg {...s} viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
    case 'chevron-right': return <svg {...s} viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
    case 'sidebar': return <svg {...s} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/></svg>
    case 'search': return <svg {...s} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
    default: return null
  }
}

// ─── Mental hexagon radar ─────────────────────────────────────
export function MentalHexagon({ size = 160 }: { size?: number }) {
  const c = size / 2
  const r = size * 0.42
  const vals = [
    { k: 'Self-reg', v: 4.6, label: 'SR' },
    { k: 'Comp', v: 6.0, label: 'CM' },
    { k: 'Intrinsic', v: 7.8, label: 'ID' },
    { k: 'Resilience', v: 5.4, label: 'RS' },
    { k: 'Coachable', v: 7.2, label: 'CO' },
    { k: 'Team', v: 7.0, label: 'TO' },
  ]
  const pt = (i: number, rad: number): [number, number] => {
    const ang = (Math.PI / 3) * i - Math.PI / 2
    return [c + Math.cos(ang) * rad, c + Math.sin(ang) * rad]
  }
  const ring = (rad: number) => vals.map((_, i) => pt(i, rad).join(',')).join(' ')
  const dataPoly = vals.map((v, i) => pt(i, (v.v / 10) * r).join(',')).join(' ')

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[0.33, 0.66, 1].map((sc, i) => (
        <polygon key={i} points={ring(r * sc)} fill="none" stroke={ST.paperLine} strokeWidth="1" />
      ))}
      {vals.map((_, i) => {
        const [x, y] = pt(i, r)
        return <line key={i} x1={c} y1={c} x2={x} y2={y} stroke={ST.paperLine} strokeWidth="1" />
      })}
      <polygon points={dataPoly} fill={ST.navy} fillOpacity="0.18" stroke={ST.navy} strokeWidth="1.5" />
      {vals.map((v, i) => {
        const [x, y] = pt(i, (v.v / 10) * r)
        return <circle key={i} cx={x} cy={y} r="3" fill={ST.navy} />
      })}
      {vals.map((v, i) => {
        const [x, y] = pt(i, r + 10)
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
            style={{ fontSize: 8, letterSpacing: 0.6, fill: ST.paperMute, fontFamily: 'Inter' }}>{v.label}</text>
        )
      })}
    </svg>
  )
}

export function PerformanceRadar({ size = 220 }: { size?: number }) {
  const c = size / 2
  const r = size * 0.4
  const axes = ['Agility', 'Dribbling', 'Acceleration', 'Max speed', 'Ball feel', 'Game impact']
  const cur = [5.5, 4.9, 5.5, 5.3, 3.8, 4.4]
  const plan = [5.6, 5.1, 5.5, 5.3, 5.5, 4.4]
  const pt = (i: number, rad: number): [number, number] => {
    const ang = (Math.PI * 2 / 6) * i - Math.PI / 2
    return [c + Math.cos(ang) * rad, c + Math.sin(ang) * rad]
  }
  const ring = (rad: number) => axes.map((_, i) => pt(i, rad).join(',')).join(' ')
  const poly = (arr: number[]) => arr.map((v, i) => pt(i, (v / 10) * r).join(',')).join(' ')
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[0.25, 0.5, 0.75, 1].map((sc, i) => (
        <polygon key={i} points={ring(r * sc)} fill="none" stroke={ST.paperLine} strokeWidth="1" />
      ))}
      {axes.map((_, i) => {
        const [x, y] = pt(i, r)
        return <line key={i} x1={c} y1={c} x2={x} y2={y} stroke={ST.paperLine} strokeWidth="1" />
      })}
      <polygon points={poly(plan)} fill={ST.green} fillOpacity="0.15" stroke={ST.green} strokeWidth="1.5" strokeDasharray="3 3" />
      <polygon points={poly(cur)} fill={ST.navy} fillOpacity="0.22" stroke={ST.navy} strokeWidth="1.7" />
      {axes.map((a, i) => {
        const [x, y] = pt(i, r + 12)
        return <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" style={{ fontSize: 8.5, fill: ST.paperMute, fontFamily: 'Inter' }}>{a}</text>
      })}
    </svg>
  )
}

// ─── Pulse chart (30-day mental trend) ────────────────────────
export function PulseChart() {
  const conf = [5.2, 5.4, 5.0, 5.6, 5.8, 6.0, 5.9, 6.2, 6.1, 6.4, 6.5, 6.3, 6.6, 6.8, 7.0, 6.9, 7.1, 7.2, 7.0, 7.3, 7.1, 7.4, 7.2, 7.3, 7.5, 7.2, 7.4, 7.3, 7.5, 7.6]
  const anx  = [7.2, 7.0, 6.8, 6.6, 7.1, 6.4, 6.5, 6.2, 6.0, 6.3, 5.8, 5.6, 5.7, 5.4, 5.2, 5.0, 4.8, 5.1, 4.6, 4.5, 4.7, 4.3, 4.4, 4.2, 4.0, 4.3, 4.1, 4.0, 3.9, 3.8]
  const foc  = [6.0, 6.2, 6.1, 6.3, 6.5, 6.4, 6.6, 6.7, 6.8, 6.9, 7.0, 6.9, 7.1, 7.2, 7.3, 7.1, 7.3, 7.4, 7.5, 7.3, 7.5, 7.6, 7.4, 7.6, 7.7, 7.5, 7.6, 7.7, 7.8, 7.8]
  const W = 720, H = 220, P = 20
  const xs = (i: number) => P + (i * (W - 2 * P)) / (conf.length - 1)
  const ys = (v: number) => H - P - ((v - 2) * (H - 2 * P)) / 8
  const path = (arr: number[]) => arr.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xs(i)} ${ys(v)}`).join(' ')
  const labels = ['Mar 22', 'Mar 29', 'Apr 5', 'Apr 12', 'Apr 20']
  const labelIdxs = [0, 7, 14, 21, 29]
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
      {[2, 4, 6, 8, 10].map(g => (
        <line key={g} x1={P} x2={W - P} y1={ys(g)} y2={ys(g)} stroke={ST.paperLineSoft} strokeWidth="1" />
      ))}
      {[6, 13, 20, 27].map(i => (
        <g key={i}>
          <line x1={xs(i)} x2={xs(i)} y1={P} y2={H - P} stroke={ST.paperLine} strokeDasharray="2 3" strokeWidth="1" />
          <circle cx={xs(i)} cy={P + 4} r="3" fill={ST.amber} />
        </g>
      ))}
      <path d={path(anx)} fill="none" stroke={ST.amber} strokeWidth="1.8" />
      <path d={path(foc)} fill="none" stroke={ST.green} strokeWidth="1.8" />
      <path d={path(conf)} fill="none" stroke={ST.navy} strokeWidth="2.2" />
      <circle cx={xs(conf.length - 1)} cy={ys(conf[conf.length - 1])} r="4" fill={ST.navy} />
      <circle cx={xs(conf.length - 1)} cy={ys(conf[conf.length - 1])} r="7" fill={ST.navy} fillOpacity="0.18" />
      {labelIdxs.map((i, n) => (
        <text key={i} x={xs(i)} y={H - 4} textAnchor="middle" style={{ fontSize: 9, fill: ST.paperMute, fontFamily: 'Inter' }}>{labels[n]}</text>
      ))}
    </svg>
  )
}

export function PathBar({ label, now, plan }: { label: string; now: number; plan: number }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: ST.paperMute, marginBottom: 3 }}>
        <span>{label}</span>
        <span>+{plan}%</span>
      </div>
      <div style={{ height: 10, borderRadius: 999, background: ST.paperLineSoft, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: now + '%', background: ST.navy, borderRadius: 999 }} />
        <div style={{ position: 'absolute', left: now + '%', top: 0, bottom: 0, width: plan + '%', background: ST.green, opacity: 0.85 }} />
      </div>
    </div>
  )
}

export function MiniSpark({ values, color }: { values: number[]; color: string }) {
  const W = 140, H = 30
  const max = Math.max(...values), min = Math.min(...values)
  const xs = (i: number) => i * W / (values.length - 1)
  const ys = (v: number) => H - (v - min) / (max - min || 1) * H
  const d = values.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xs(i)} ${ys(v)}`).join(' ')
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 30, marginTop: 8 }} preserveAspectRatio="none">
      <path d={d} fill="none" stroke={color} strokeWidth="1.8" />
      <circle cx={xs(values.length - 1)} cy={ys(values[values.length - 1])} r="2.5" fill={color} />
    </svg>
  )
}
