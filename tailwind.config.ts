import type { Config } from 'tailwindcss';
import tailwindCssAnimation from 'tailwindcss-animate';

export default {
  mode: 'jit',
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        geist: ['Geist Mono', 'monospace'],
      },
      borderColor: {
        plan: {
          '1': 'hsl(var(--plan-1))',
          '2': 'hsl(var(--plan-2))',
          '3': 'hsl(var(--plan-3))',
          '4': 'hsl(var(--plan-4))',
          '5': 'hsl(var(--plan-5))',
        },
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          warn: 'hsl(var(--secondary-warn))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          500: 'hsl(var(--accent-500))',
          400: 'hsl(var(--accent-400))',
        },
        theme: {
          900: 'hsla(var(--theme-900))',
          700: 'hsla(var(--theme-700))',
          500: 'hsla(var(--theme-500))',
        },
        palatte: {
          '1': 'hsl(var(--palatte-1))',
          '2': 'hsl(var(--palatte-2))',
          '3': 'hsl(var(--palatte-3))',
          '4': 'hsl(var(--palatte-4))',
          '5': 'hsl(var(--palatte-5))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        plan: {
          '1': 'hsl(var(--plan-1))',
          '2': 'hsl(var(--plan-2))',
          '3': 'hsl(var(--plan-3))',
          '4': 'hsl(var(--plan-4))',
          '5': 'hsl(var(--plan-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  safelist: [
    'bg-plan-1',
    'bg-plan-2',
    'bg-plan-3',
    'bg-plan-4',
    'bg-plan-5',
    'border-plan-1',
    'border-plan-2',
    'border-plan-3',
    'border-plan-4',
    'border-plan-5',
    'text-plan-1',
    'text-plan-2',
    'text-plan-3',
    'text-plan-4',
    'text-plan-5',
  ],
  plugins: [tailwindCssAnimation],
} satisfies Config;
