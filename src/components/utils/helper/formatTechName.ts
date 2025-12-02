const specialWords: Record<string, string> = {
  ios: 'iOS',
  android: 'Android',
  api: 'API',
  ui: 'UI',
  ux: 'UX',
  'ui/ux': 'UI/UX',
  ai: 'AI',
  ml: 'ML',
  'ai/ml': 'AI/ML',
  pwa: 'PWA',
  cto: 'CTO',
  saas: 'SaaS',
  mvp: 'MVP',
  php: 'PHP',
  sql: 'SQL',
  next: 'Next',
  node: 'Node',
  react: 'React',
  vue: 'Vue',
};

export function formatTechName(text: string): string {
  if (!text) return '';

  return text
    .trim()
    .split(' ')
    .map((word) => {
      const lower = word.toLowerCase();

      // 1️⃣ Full special word match
      if (specialWords[lower]) return specialWords[lower];

      // 2️⃣ Special cases with dot: next.js, node.js, react.js
      if (lower.endsWith('.js')) {
        const base = word.split('.')[0].toLowerCase();
        return (specialWords[base] || capitalize(base)) + '.js';
      }

      // 3️⃣ Words with slash: ui/ux, ai/ml
      if (word.includes('/')) {
        return word
          .split('/')
          .map((w) => specialWords[w.toLowerCase()] || capitalize(w))
          .join('/');
      }

      // 4️⃣ Normal word → capitalize first letter
      return capitalize(word);
    })
    .join(' ');
}

function capitalize(w: string) {
  return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
}
