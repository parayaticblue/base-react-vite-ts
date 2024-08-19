export function formatRut(rut: string): string {
  const formattedRut = rut.replace(/[^\dKk]/g, '');
  if (formattedRut.length <= 1) return formattedRut;
  
  const rutDigits = formattedRut.slice(0, -1);
  const rutVerifier = formattedRut.slice(-1).toUpperCase();
  
  const formattedDigits = rutDigits
    .split('')
    .reverse()
    .map((digit, index) => (index > 0 && index % 3 === 0 ? `${digit}.` : digit))
    .reverse()
    .join('');

  return `${formattedDigits}-${rutVerifier}`;
}
