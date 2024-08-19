export function validaRutChileno(rut: string): boolean {
   if (!/^[0-9]+[-]{1}[0-9kK]{1}$/.test(rut)) {
    return false;
  }

  const [rutDigits, rutVerifier] = rut.split('-');
  const cleanRut = rutDigits.replace(/\./g, ''); // Eliminar puntos

  let sum = 0;
  let multiplier = 2;

  for (let i = cleanRut.length - 1; i >= 0; i--) {
    sum += parseInt(cleanRut.charAt(i), 10) * multiplier;
    multiplier = (multiplier + 1) % 8 || 2;
  }

  const expectedVerifier = String(11 - (sum % 11));
  const verifier = expectedVerifier === '10' ? 'k' : expectedVerifier;

  return verifier.toLowerCase() === rutVerifier.toLowerCase();
}
