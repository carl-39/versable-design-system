declare module 'jest-axe' {
  export function axe(node?: Element | Document | string): Promise<{ violations: unknown[] }>;
}
