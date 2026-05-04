/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          0: 'var(--bg-0)',
          1: 'var(--bg-1)',
          2: 'var(--bg-2)',
        },
        surface: 'var(--surface)',
        border: 'var(--border)',
        text: {
          DEFAULT: 'var(--text)',
          dim: 'var(--text-dim)',
          muted: 'var(--text-muted)',
        },
        blood: {
          DEFAULT: 'var(--blood)',
          bright: 'var(--blood-bright)',
        },
        rust: 'var(--rust)',
        mil: 'var(--mil)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
      },
      fontFamily: {
        display: ['"Big Shoulders Stencil Display"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      letterSpacing: {
        stencil: '0.04em',
      },
    },
  },
  plugins: [],
};
