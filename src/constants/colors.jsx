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

  // Accent colors - Red-emphasized theme
  accent: {
    primary: 'bg-red-500',
    primaryHover: 'bg-red-400',
    primaryText: 'text-red-400',
    primaryTextHover: 'text-red-300',
    secondary: 'bg-orange-500',
    secondaryText: 'text-red-400',
    tertiary: 'bg-pink-500',
    tertiaryText: 'text-red-400',
    quaternary: 'bg-rose-500',
    quaternaryText: 'text-red-400'
  },

  // Interactive elements
  interactive: {
    buttonPrimary: 'bg-red-500 hover:bg-red-400 text-white',
    buttonSecondary: 'bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-white',
    buttonGhost: 'hover:bg-white/10 text-slate-300 hover:text-white',
    cardHover: 'hover:bg-slate-800/50 transition-all duration-300',
    linkHover: 'hover:text-red-400 transition-colors'
  },

  // Effects
  effects: {
    backdrop: 'backdrop-blur-xl',
    glass: 'bg-slate-800/30 backdrop-blur-xl border border-slate-700/50',
    glassHover: 'hover:bg-slate-800/50 transition-all duration-300',
    shadow: 'shadow-2xl',
    gradient: 'bg-gradient-to-br from-red-500 to-orange-600',
    gradientText: 'bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent',
    rounded: 'rounded-xl',
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
    
    logo: 'bg-gradient-to-br from-red-500 to-orange-600',
    navActive: 'bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg',
    navInactive: 'text-gray-300 hover:text-white hover:bg-white/10'
  },

  // Color variants for dynamic content
  variants: {
    red: 'bg-red-500',
    orange: 'bg-orange-500', 
    pink: 'bg-pink-500',
    rose: 'bg-rose-500',
    amber: 'bg-amber-500',
    yellow: 'bg-yellow-500'
  }
}