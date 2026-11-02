import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function DeveloperCabinHero({ className = "", idPrefix = "" }: { className?: string; idPrefix?: string }) {
  const [typingStep, setTypingStep] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Alternating typing cadence for fingers and backlit keyboard keys
    const interval = setInterval(() => {
      setTypingStep((prev) => (prev + 1) % 4);
    }, 180);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const cyberBlobId = `${idPrefix}cyberBlob`;
  const sunglassesGradId = `${idPrefix}sunglassesGrad`;
  const hologramBgId = `${idPrefix}hologramBg`;
  const keyboardBedId = `${idPrefix}keyboardBed`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[520px] h-[210px] sm:h-[280px] lg:h-[460px] flex items-center justify-center select-none ${className}`}
    >
      {/* Seamless Ambient Cyber Aura (100% blends to transparent into #0A0A0A) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-emerald-500/5 to-transparent rounded-full blur-[90px] pointer-events-none" />

      {/* Main Vector Cockpit Workstation */}
      <motion.svg
        viewBox="0 0 680 560"
        className="w-full h-full relative z-10"
        animate={{
          rotateX: mousePos.y * -5,
          rotateY: mousePos.x * 5,
          x: mousePos.x * 8,
          y: mousePos.y * 8,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <defs>
          {/* Subtle Ambient Aura Blob (Transparent edges, no hard cuts) */}
          <radialGradient id={cyberBlobId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0E1E38" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#081020" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0" />
          </radialGradient>

          <linearGradient id={sunglassesGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#020617" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id={hologramBgId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B132B" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#060A16" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id={keyboardBedId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>

        {/* ──────── 1. SOFT NATURAL AMBIENT AURA ──────── */}
        <ellipse cx="340" cy="270" rx="300" ry="240" fill={`url(#${cyberBlobId})`} />

        {/* ──────── 2. TOP FLOATING COMMAND / BUILD EXECUTION BAR ──────── */}
        <motion.g
          transform="translate(230, 30)"
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="0"
            y="0"
            width="220"
            height="32"
            rx="6"
            fill="rgba(15, 23, 42, 0.85)"
            stroke="rgba(6, 182, 212, 0.35)"
            strokeWidth="1.2"
          />
          {/* Animated Execution Blocks */}
          <rect x="8" y="7" width="16" height="18" rx="2" fill="#10B981" className="animate-pulse" />
          <rect x="28" y="7" width="16" height="18" rx="2" fill="#10B981" className="animate-pulse" style={{ animationDelay: "150ms" }} />
          <rect x="48" y="7" width="16" height="18" rx="2" fill="#10B981" className="animate-pulse" style={{ animationDelay: "300ms" }} />
          <text x="74" y="20" fill="#38BDF8" fontSize="9" fontFamily="monospace" fontWeight="bold">
            BUILD: DEPLOYED (100%)
          </text>
        </motion.g>

        {/* ──────── 3. FLOATING CODE & TELEMETRY COLUMNS (LEFT & RIGHT) ──────── */}
        {/* Left Floating Code Column */}
        <g transform="translate(75, 120)">
          <rect x="0" y="0" width="4" height="140" rx="2" fill="#1E3A8A" />
          <rect x="16" y="0" width="4" height="140" rx="2" fill="#1E3A8A" />
          {[0, 14, 28, 42, 56, 70, 84, 98, 112, 126].map((y, i) => (
            <React.Fragment key={i}>
              <line x1="6" y1={y + 6} x2="14" y2={y + 6} stroke="#34D399" strokeWidth="2.5" strokeDasharray="3 2" />
              <line x1="24" y1={y + 6} x2="42" y2={y + 6} stroke={i % 2 === 0 ? "#22D3EE" : "#818CF8"} strokeWidth="2" strokeDasharray="4 2" />
            </React.Fragment>
          ))}
          {/* Real-time Bar Telemetry */}
          <g transform="translate(50, 100)">
            <motion.rect x="0" y="10" width="4" height="15" rx="1" fill="#06B6D4" animate={{ height: [15, 25, 15], y: [10, 0, 10] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.rect x="8" y="5" width="4" height="20" rx="1" fill="#10B981" animate={{ height: [20, 12, 20], y: [5, 13, 5] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }} />
            <motion.rect x="16" y="2" width="4" height="23" rx="1" fill="#38BDF8" animate={{ height: [23, 28, 23], y: [2, -3, 2] }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.6 }} />
          </g>
        </g>

        {/* Right Floating Code Column */}
        <g transform="translate(550, 120)">
          <rect x="0" y="0" width="4" height="140" rx="2" fill="#1E3A8A" />
          <rect x="16" y="0" width="4" height="140" rx="2" fill="#1E3A8A" />
          {[0, 14, 28, 42, 56, 70, 84, 98, 112, 126].map((y, i) => (
            <React.Fragment key={i}>
              <line x1="6" y1={y + 6} x2="14" y2={y + 6} stroke="#34D399" strokeWidth="2.5" strokeDasharray="3 2" />
              <line x1="24" y1={y + 6} x2="42" y2={y + 6} stroke={i % 2 === 0 ? "#22D3EE" : "#818CF8"} strokeWidth="2" strokeDasharray="4 2" />
            </React.Fragment>
          ))}
          {/* Real-time Bar Telemetry */}
          <g transform="translate(-25, 100)">
            <motion.rect x="0" y="7" width="4" height="18" rx="1" fill="#10B981" animate={{ height: [18, 25, 18], y: [7, 0, 7] }} transition={{ duration: 2.1, repeat: Infinity }} />
            <motion.rect x="8" y="12" width="4" height="13" rx="1" fill="#06B6D4" animate={{ height: [13, 20, 13], y: [12, 5, 12] }} transition={{ duration: 1.9, repeat: Infinity, delay: 0.4 }} />
            <motion.rect x="16" y="3" width="4" height="22" rx="1" fill="#A78BFA" animate={{ height: [22, 15, 22], y: [3, 10, 3] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.7 }} />
          </g>
        </g>

        {/* ──────── 4. FLOATING HOLOGRAPHIC TERMINAL (Floating above the desk, not covering hands) ──────── */}
        <motion.g
          transform="translate(195, 95)"
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        >
          <rect
            x="0"
            y="0"
            width="290"
            height="105"
            rx="6"
            fill={`url(#${hologramBgId})`}
            stroke="rgba(6, 182, 212, 0.4)"
            strokeWidth="1.2"
            className="backdrop-blur-md"
          />
          {/* Header Bar */}
          <rect x="0" y="0" width="290" height="20" rx="5" fill="rgba(6, 182, 212, 0.15)" />
          <circle cx="12" cy="10" r="3" fill="#EF4444" />
          <circle cx="22" cy="10" r="3" fill="#F59E0B" />
          <circle cx="32" cy="10" r="3" fill="#10B981" />
          <text x="44" y="14" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">
            izhan-core.ts · TypeScript
          </text>
          <text x="280" y="14" fill="#10B981" fontSize="8" fontFamily="monospace" textAnchor="end">
            ● 99.9% UPTIME
          </text>

          {/* Code Lines */}
          <g transform="translate(14, 34)">
            <text x="0" y="12" fill="#64748B" fontSize="9" fontFamily="monospace">01</text>
            <text x="20" y="12" fill="#F43F5E" fontSize="9" fontFamily="monospace">
              import <tspan fill="#38BDF8">&#123; FullStack, AI &#125;</tspan> <tspan fill="#F43F5E">from</tspan> <tspan fill="#34D399">'@izhan/engine'</tspan>;
            </text>

            <text x="0" y="28" fill="#64748B" fontSize="9" fontFamily="monospace">02</text>
            <text x="20" y="28" fill="#A855F7" fontSize="9" fontFamily="monospace">
              const <tspan fill="#60A5FA">engineer</tspan> = <tspan fill="#FBBF24">new</tspan> <tspan fill="#38BDF8">MohammedIzhan()</tspan>;
            </text>

            <text x="0" y="44" fill="#64748B" fontSize="9" fontFamily="monospace">03</text>
            <text x="20" y="44" fill="#38BDF8" fontSize="9" fontFamily="monospace">
              await engineer.<tspan fill="#34D399">shipPatentedPlatform()</tspan>;
              <tspan fill="#22D3EE" className="animate-pulse">_</tspan>
            </text>
          </g>
        </motion.g>

        {/* ──────── 5. MOHAMMED IZHAN (CURLY HAIR, SUNGLASSES, BLACK SHIRT, NATURAL ARMS) ──────── */}
        <g transform="translate(340, 310)">
          {/* Subtle Breathing Motion */}
          <motion.g
            animate={{ y: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Black Shirt / Torso (Faithful to photo) */}
            <path
              d="M -95,140 L -95,65 L -45,25 L 0,60 L 45,25 L 95,65 L 95,140 Z"
              fill="#18181B"
              stroke="#27272A"
              strokeWidth="2.5"
            />
            {/* Shirt Collar Placket */}
            <path d="M -45,25 L 0,60 L -15,10 L -45,25 Z" fill="#27272A" stroke="#3F3F46" strokeWidth="1.5" />
            <path d="M 45,25 L 0,60 L 15,10 L 45,25 Z" fill="#27272A" stroke="#3F3F46" strokeWidth="1.5" />
            <line x1="0" y1="60" x2="0" y2="135" stroke="#3F3F46" strokeWidth="2" />
            <circle cx="0" cy="80" r="2" fill="#71717A" />
            <circle cx="0" cy="102" r="2" fill="#71717A" />

            {/* Neck */}
            <path d="M -20,20 L -20,-15 L 20,-15 L 20,20 Z" fill="#A1A1AA" stroke="#71717A" strokeWidth="2" />

            {/* Head & Jaw */}
            <path
              d="M -42,-110 C -42,-160 42,-160 42,-110 C 42,-60 36,-20 22,-10 C 10,-3 -10,-3 -22,-10 C -36,-20 -42,-60 -42,-110 Z"
              fill="#D4D4D8"
              stroke="#71717A"
              strokeWidth="2.5"
            />

            {/* Ears */}
            <path d="M -42,-80 C -50,-80 -50,-60 -40,-60" fill="#D4D4D8" stroke="#71717A" strokeWidth="2" />
            <path d="M 42,-80 C 50,-80 50,-60 40,-60" fill="#D4D4D8" stroke="#71717A" strokeWidth="2" />

            {/* Distinct Curly Hair Ringlets (The user explicitly praised: "face and specs and hair and all perfect") */}
            <g fill="#18181B" stroke="#09090B" strokeWidth="2">
              <circle cx="-38" cy="-120" r="14" />
              <circle cx="-25" cy="-140" r="15" />
              <circle cx="0" cy="-148" r="16" />
              <circle cx="25" cy="-140" r="15" />
              <circle cx="38" cy="-120" r="14" />
              <circle cx="-14" cy="-125" r="15" />
              <circle cx="14" cy="-125" r="15" />
              <circle cx="-35" cy="-102" r="12" />
              <circle cx="35" cy="-102" r="12" />
              <circle cx="-8" cy="-136" r="14" />
              <circle cx="12" cy="-136" r="14" />
            </g>

            {/* Nose & Smile */}
            <path d="M -4,-58 L 0,-48 L 4,-58" fill="none" stroke="#71717A" strokeWidth="2" strokeLinecap="round" />
            <path d="M -12,-34 Q 0,-24 12,-34" fill="none" stroke="#52525B" strokeWidth="2.5" strokeLinecap="round" />

            {/* ──────── SUNGLASSES (SPECS) WITH MATRIX REFLECTIONS ──────── */}
            <line x1="-12" y1="-78" x2="12" y2="-78" stroke="#09090B" strokeWidth="4" />

            {/* Left Sunglass Lens */}
            <rect
              x="-40"
              y="-94"
              width="36"
              height="30"
              rx="6"
              fill={`url(#${sunglassesGradId})`}
              stroke="#09090B"
              strokeWidth="3.5"
            />
            {/* Left Lens Matrix Screen Reflection */}
            <motion.g
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <line x1="-34" y1="-88" x2="-18" y2="-88" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" />
              <line x1="-34" y1="-80" x2="-24" y2="-80" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="-34" y1="-73" x2="-12" y2="-73" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
            </motion.g>

            {/* Right Sunglass Lens */}
            <rect
              x="4"
              y="-94"
              width="36"
              height="30"
              rx="6"
              fill={`url(#${sunglassesGradId})`}
              stroke="#09090B"
              strokeWidth="3.5"
            />
            {/* Right Lens Matrix Screen Reflection */}
            <motion.g
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            >
              <line x1="10" y1="-88" x2="28" y2="-88" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" />
              <line x1="10" y1="-80" x2="20" y2="-80" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="10" y1="-73" x2="34" y2="-73" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
            </motion.g>

            {/* ──────── NATURAL ARMS EXTENDING DOWN TOWARD KEYBOARD ──────── */}
            {/* Left Arm (Natural connection from left shoulder to left hand) */}
            <path
              d="M -90,75 C -105,100 -95,135 -75,150 L -45,150 C -60,135 -70,105 -65,75 Z"
              fill="#18181B"
              stroke="#27272A"
              strokeWidth="2"
            />

            {/* Right Arm (Natural connection from right shoulder to right hand) */}
            <path
              d="M 90,75 C 105,100 95,135 75,150 L 45,150 C 60,135 70,105 65,75 Z"
              fill="#18181B"
              stroke="#27272A"
              strokeWidth="2"
            />
          </motion.g>
        </g>

        {/* ──────── 6. MECHANICAL KEYBOARD (CLEARLY SITTING AT THE BOTTOM) ──────── */}
        <g transform="translate(160, 465)">
          {/* Keyboard Chassis Bed */}
          <rect
            x="0"
            y="0"
            width="360"
            height="46"
            rx="5"
            fill={`url(#${keyboardBedId})`}
            stroke="rgba(6, 182, 212, 0.5)"
            strokeWidth="1.5"
            className="drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]"
          />

          {/* Keycaps Row 1 */}
          {Array.from({ length: 18 }).map((_, i) => {
            const keyX = 14 + i * 18.5;
            const isTypingKey = i === 4 || i === 6 || i === 11 || i === 13;
            return (
              <rect
                key={`k1-${i}`}
                x={keyX}
                y="6"
                width="14"
                height="13"
                rx="2"
                fill={isTypingKey && typingStep % 2 === 0 ? "#06B6D4" : "#0F172A"}
                stroke={isTypingKey ? "#22D3EE" : "#334155"}
                strokeWidth="1"
              />
            );
          })}

          {/* Keycaps Row 2 */}
          {Array.from({ length: 18 }).map((_, i) => {
            const keyX = 14 + i * 18.5;
            const isTypingKey = i === 5 || i === 7 || i === 10 || i === 12;
            return (
              <rect
                key={`k2-${i}`}
                x={keyX}
                y="23"
                width="14"
                height="14"
                rx="2"
                fill={isTypingKey && typingStep % 2 !== 0 ? "#10B981" : "#0F172A"}
                stroke={isTypingKey ? "#34D399" : "#334155"}
                strokeWidth="1"
              />
            );
          })}
        </g>

        {/* ──────── 7. NATURAL HANDS TYPING DOWN ON TOP OF KEYBOARD ──────── */}
        {/* LEFT HAND & FINGERS (Resting naturally on keyboard, NOT coming out of screen) */}
        <g transform="translate(235, 435)">
          {/* Forearm & Wrist connecting into hand */}
          <path
            d="M 5,30 C 5,10 25,0 45,0 C 60,0 70,10 70,30 L 70,45 L 5,45 Z"
            fill="#D4D4D8"
            stroke="#52525B"
            strokeWidth="2"
          />
          {/* Left Fingers typing downwards onto keycaps */}
          <motion.rect
            x="12"
            y="22"
            width="9"
            height="26"
            rx="3.5"
            fill="#D4D4D8"
            stroke="#52525B"
            strokeWidth="1.5"
            animate={{ y: typingStep === 0 ? 3 : 0 }}
            transition={{ duration: 0.09 }}
          />
          <motion.rect
            x="24"
            y="16"
            width="9"
            height="32"
            rx="3.5"
            fill="#D4D4D8"
            stroke="#52525B"
            strokeWidth="1.5"
            animate={{ y: typingStep === 1 ? 4 : 0 }}
            transition={{ duration: 0.09 }}
          />
          <motion.rect
            x="36"
            y="14"
            width="9"
            height="34"
            rx="3.5"
            fill="#D4D4D8"
            stroke="#52525B"
            strokeWidth="1.5"
            animate={{ y: typingStep === 2 ? 4 : 0 }}
            transition={{ duration: 0.09 }}
          />
          <motion.rect
            x="48"
            y="18"
            width="9"
            height="30"
            rx="3.5"
            fill="#D4D4D8"
            stroke="#52525B"
            strokeWidth="1.5"
            animate={{ y: typingStep === 3 ? 4 : 0 }}
            transition={{ duration: 0.09 }}
          />
        </g>

        {/* RIGHT HAND & FINGERS (Resting naturally on keyboard) */}
        <g transform="translate(375, 435)">
          {/* Forearm & Wrist */}
          <path
            d="M 35,0 C 55,0 75,10 75,30 L 75,45 L 10,45 L 10,30 C 10,10 20,0 35,0 Z"
            fill="#D4D4D8"
            stroke="#52525B"
            strokeWidth="2"
          />
          {/* Right Fingers typing downwards onto keycaps */}
          <motion.rect
            x="14"
            y="18"
            width="9"
            height="30"
            rx="3.5"
            fill="#D4D4D8"
            stroke="#52525B"
            strokeWidth="1.5"
            animate={{ y: typingStep === 1 ? 4 : 0 }}
            transition={{ duration: 0.09 }}
          />
          <motion.rect
            x="26"
            y="14"
            width="9"
            height="34"
            rx="3.5"
            fill="#D4D4D8"
            stroke="#52525B"
            strokeWidth="1.5"
            animate={{ y: typingStep === 3 ? 4 : 0 }}
            transition={{ duration: 0.09 }}
          />
          <motion.rect
            x="38"
            y="16"
            width="9"
            height="32"
            rx="3.5"
            fill="#D4D4D8"
            stroke="#52525B"
            strokeWidth="1.5"
            animate={{ y: typingStep === 0 ? 3 : 0 }}
            transition={{ duration: 0.09 }}
          />
          <motion.rect
            x="50"
            y="22"
            width="9"
            height="26"
            rx="3.5"
            fill="#D4D4D8"
            stroke="#52525B"
            strokeWidth="1.5"
            animate={{ y: typingStep === 2 ? 3 : 0 }}
            transition={{ duration: 0.09 }}
          />
        </g>
      </motion.svg>
    </div>
  );
}
