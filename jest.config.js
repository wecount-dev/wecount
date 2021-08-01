module.exports = {
  setupFiles: ['./jestSetup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    "^.+\\.svelte$": ["svelte-jester", { "preprocess": true }],
  },
  moduleNameMapper: { '^.+\\.(css|less|scss)$': 'babel-jest'},
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?|svelte?)$',
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  modulePathIgnorePatterns: ['dist', 'build'],
  testEnvironment: 'jsdom',
  globals: {
    SUPABASE_URL: '1234',
    SUPABASE_PUBLIC_KEY: '1234',
    SUPABASE_PRIVATE_KEY: '1234',
    SUPABASE_JWT_SECRET: '1234',
    window: {},
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.json',
    },
  },
};
