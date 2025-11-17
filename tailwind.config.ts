import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'serif': ['Spectral', 'Georgia', 'serif'],
  			'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
  			'sans': ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
  		},
  		colors: {
  			// Legacy colors (keep for compatibility during transition)
  			primary: '#ff976e',
  			secondary: '#70D7FF',
  			tertiary: '#495057',
  			// Terminal Renaissance palette
  			'ink': {
  				DEFAULT: '#1A1A1A',
  				light: '#3A3A3A',
  			},
  			'cream': {
  				DEFAULT: '#FBF8F3',
  				dark: '#F5F0E8',
  			},
  			'vermillion': {
  				DEFAULT: '#D4442E',
  				light: '#E6564A',
  				dark: '#B03626',
  			},
  			'jade': {
  				DEFAULT: '#2A7F62',
  				light: '#3A9F7A',
  				dark: '#1F6049',
  			},
  			'sepia': {
  				DEFAULT: '#8B7355',
  				light: '#A68B6F',
  				dark: '#6B5A45',
  			},
  			'coral': {
  				DEFAULT: '#FF6B6B',
  				light: '#FF8787',
  				dark: '#E55555',
  			},
  			'cyan': {
  				DEFAULT: '#4ECDC4',
  				light: '#6FE3DA',
  				dark: '#3BAAA3',
  			},
  			'mint': {
  				DEFAULT: '#95E1D3',
  				light: '#B0EBE0',
  				dark: '#7AC9BC',
  			},
  			'charcoal': {
  				DEFAULT: '#0F1419',
  				light: '#1A2028',
  				dark: '#0A0C0F',
  			},
  			'glow': {
  				DEFAULT: '#E6E1DC',
  				dim: '#C7C2BD',
  			},
  			// System colors
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'typewriter': {
  				'0%': { width: '0' },
  				'100%': { width: '100%' }
  			},
  			'blink': {
  				'0%, 100%': { opacity: '1' },
  				'50%': { opacity: '0' }
  			},
  			'codeRain': {
  				'0%': { transform: 'translateY(-100%)' },
  				'100%': { transform: 'translateY(100vh)' }
  			},
  			'fadeIn': {
  				'0%': { opacity: '0', transform: 'translateY(20px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' }
  			},
  			'glow': {
  				'0%, 100%': { opacity: '0.5' },
  				'50%': { opacity: '1' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'typewriter': 'typewriter 2s steps(30) forwards',
  			'blink': 'blink 1s step-end infinite',
  			'codeRain': 'codeRain 20s linear infinite',
  			'fadeIn': 'fadeIn 0.6s ease-out forwards',
  			'glow': 'glow 2s ease-in-out infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
