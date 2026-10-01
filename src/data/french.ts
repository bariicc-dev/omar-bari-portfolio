/**
 * French typography: a non-breaking space before : ; ? ! » and after «,
 * so punctuation never wraps onto its own line. Applied to every French
 * data object at export, so copy can be written with ordinary spaces.
 */
export function frenchSpacing<T>(value: T): T {
  if (typeof value === 'string') {
    return value.replace(/ ([:;?!»])/g, ' $1').replace(/« /g, '« ') as T;
  }
  if (Array.isArray(value)) return value.map((v) => frenchSpacing(v)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, frenchSpacing(v)])
    ) as T;
  }
  return value;
}
