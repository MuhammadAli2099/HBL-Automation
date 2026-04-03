export function buildValidNickname(base = 'ValidPayee'): string {
  return `${base}-${Date.now()}`;
}