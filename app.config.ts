// ⚠️ WICHTIG: Diese Farben müssen mit den Farben in app/assets/css/main.css synchronisiert werden!
// Die Farben hier werden für Nuxt UI Komponenten verwendet (UButton, UBadge, etc.)
// Die Farben in main.css werden für Tailwind-Klassen verwendet (bg-background, bg-accent, etc.)
export default defineAppConfig({
  ui: {
    colors: {
      // Harmonische, warme Palette - alle Töne passen zusammen
      primary: "#8b7355",       // Warmes, mittleres Braun - Hauptfarbe für Buttons
      secondary: "#b8a082",    // Sanftes, helles Braun - Sekundäre Elemente
      accent: "#d4c4b0",       // Sehr sanftes Beige - Karten & Akzente
      
      // Hintergrundfarben
      background: "#f5f3f0",   // Warmes, sehr helles Creme - Haupt-Hintergrund
      surface: "#faf9f7",       // Fast weißes, warmes Creme - Karten-Hintergrund
      
      // Textfarben
      text: "#3d3a35",         // Warmes, dunkles Grau-Braun - Gute Lesbarkeit
      
      // Highlight-Farbe
      highlight: "#e8ddd0",    // Sehr sanftes, warmes Beige - Subtile Highlights
      
      // Footer-Farbe
      dark: "#4c2b08",         // Warmes, dunkles Braun-Grau - Footer
    },
  },
});
