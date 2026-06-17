/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Paleta oficial g-digital (manual de marca)
        green: '#0CF25D',   // verde g-digital (acento principal)
        lime: '#CCF943',    // lima g-digital (acento escaso)
        teal: '#007362',    // verde asociación Garrigues
        navy: '#143259',    // color texto (sobre claro)
        gris: '#FAFAFA',    // gris g-digital
        ink: '#05060A',     // lienzo negro
        coal: '#0C0E12',    // superficie elevada
        cloud: '#F4F6F5',   // texto sobre oscuro
      },
      fontFamily: {
        head: ['Poppins', 'Century Gothic', 'sans-serif'],
        sans: ['Rubik', 'Calibri', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
