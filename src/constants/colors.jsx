// src/constants/colors.js

export const COLORS = {
  // Primary colors
  primary: {
    bg: 'bg-slate-950',
    bgSecondary: 'bg-slate-900',
    bgTertiary: 'bg-slate-800',
    bgCard: 'bg-slate-800/30',
    bgCardHover: 'bg-slate-800/50',
    text: 'text-white',
    textSecondary: 'text-slate-300',
    textMuted: 'text-slate-400',
    textLight: 'text-slate-500',
    border: 'border-slate-700/50',
    borderLight: 'border-slate-800'
  },

  // Accent colors
  accent: {
    primary: 'bg-cyan-500',
    primaryHover: 'bg-cyan-400',
    primaryText: 'text-cyan-400',
    primaryTextHover: 'text-cyan-300',
    secondary: 'bg-blue-500',
    secondaryText: 'text-blue-400',
    tertiary: 'bg-purple-500',
    tertiaryText: 'text-purple-400',
    quaternary: 'bg-emerald-500',
    quaternaryText: 'text-emerald-400'
  },

  // Interactive elements
  interactive: {
    buttonPrimary: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950',
    buttonSecondary: 'bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-white',
    buttonGhost: 'hover:bg-white/10 text-slate-300 hover:text-white',
    cardHover: 'hover:bg-slate-800/50 transition-all duration-300',
    linkHover: 'hover:text-cyan-400 transition-colors'
  },

  // Effects
  effects: {
    backdrop: 'backdrop-blur-xl',
    glass: 'bg-slate-800/30 backdrop-blur-xl border border-slate-700/50',
    glassHover: 'hover:bg-slate-800/50 transition-all duration-300',
    shadow: 'shadow-2xl',
    gradient: 'bg-gradient-to-br from-pink-500 to-orange-600',
    gradientText: 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent',
    rounded: 'rounded-2xl',
    roundedLg: 'rounded-3xl'
  },

  // Layout
  layout: {
    container: 'max-w-7xl mx-auto px-4',
    section: 'py-12 sm:py-16',
    grid: {
      cols1: 'grid grid-cols-1',
      cols2: 'grid grid-cols-1 md:grid-cols-2',
      cols3: 'grid grid-cols-1 md:grid-cols-3',
      cols4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      gap: 'gap-6 sm:gap-8'
    },
    spacing: {
      xs: 'space-y-3 sm:space-y-4',
      sm: 'space-y-4 sm:space-y-6', 
      md: 'space-y-6 sm:space-y-8',
      lg: 'space-y-8 sm:space-y-12',
      xl: 'space-y-12 sm:space-y-16'
    }
  },

  // Typography
  typography: {
    heading: {
      xl: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight',
      lg: 'text-2xl sm:text-3xl md:text-4xl font-bold',
      md: 'text-xl sm:text-2xl font-bold',
      sm: 'text-lg sm:text-xl font-bold'
    },
    body: {
      lg: 'text-base sm:text-lg md:text-xl font-light leading-relaxed',
      md: 'text-sm sm:text-base md:text-lg font-light leading-relaxed',
      sm: 'text-xs sm:text-sm font-light'
    }
  },

  // Component specific
  header: {
    bg: 'bg-slate-900/95',
    backdrop: 'backdrop-blur-lg',
    border: 'border-b border-white/10',
    logo: 'bg-gradient-to-br from-pink-500 to-orange-600',
    navActive: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg',
    navInactive: 'text-gray-300 hover:text-white hover:bg-white/10'
  },

  // Color variants for dynamic content
  variants: {
    cyan: 'bg-cyan-500',
    blue: 'bg-blue-500', 
    purple: 'bg-purple-500',
    emerald: 'bg-emerald-500',
    orange: 'bg-orange-500',
    pink: 'bg-pink-500'
  }
}