export function PageBackground() {
  return (
    <svg
      className="page-background"
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="var(--bg-glow)" stopOpacity="0.55" />
          <stop offset="55%" stopColor="var(--bg-glow)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--bg-darken)" stopOpacity="0.35" />
        </radialGradient>

        <filter id="paperNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.14" />
          </feComponentTransfer>
        </filter>

        <linearGradient id="edgeShade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--edge-shade)" stopOpacity="0.35" />
          <stop offset="50%" stopColor="transparent" stopOpacity="0" />
          <stop
            offset="100%"
            stopColor="var(--edge-shade)"
            stopOpacity="0.38"
          />
        </linearGradient>
      </defs>

      <rect width="1440" height="900" fill="var(--bg-base)" />
      <rect width="1440" height="900" fill="url(#bgGlow)" />
      <rect width="1440" height="900" filter="url(#paperNoise)" opacity="1" />
      <rect width="1440" height="900" fill="url(#edgeShade)" />

      <path
        d="M0 75 C230 35 420 110 650 72 C900 30 1120 55 1440 18"
        fill="none"
        stroke="var(--bg-line)"
        strokeOpacity="0.13"
        strokeWidth="2"
      />

      <path
        d="M0 830 C240 780 470 875 720 835 C980 790 1180 860 1440 805"
        fill="none"
        stroke="var(--bg-line)"
        strokeOpacity="0.12"
        strokeWidth="2"
      />
    </svg>
  )
}
