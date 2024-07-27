// jest.config.js

module.exports = {
  testEnvironment: 'jsdom', // ブラウザ環境をシミュレートするjsdomを指定
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // TypeScriptファイルのトランスパイル
    '^.+\\.(js|jsx)$': 'babel-jest', // JavaScriptファイルのトランスパイル
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(next-auth|next|@next|@nextui-org/react|lucide-react)/)' // 必要なパッケージもトランスパイル
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // エイリアスの設定
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // 無視するパス
  collectCoverage: true,
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
};
