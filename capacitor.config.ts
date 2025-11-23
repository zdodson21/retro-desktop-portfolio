import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'me.zachdodson.app',
  appName: "Zach Dodson's Portfolio",
  webDir: 'dist/retro-desktop-portfolio/browser',
  plugins: {
    "EdgeToEdge": {
      "backgroundColor": "#000000"
    }
  }
};

export default config;
