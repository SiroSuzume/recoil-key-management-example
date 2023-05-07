const generatedKeys = new Set<string>();

export function generateRecoilKey(parentKey: string, suffix: string): string {
  const key = `${parentKey}.${suffix}`;
  if (generatedKeys.has(key)) throw new Error(`${key} is already exists`);
  generatedKeys.add(key);
  return key;
}
