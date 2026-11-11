export const ADMIN_EMAIL = 'chutichutitours@gmail.com';

export function isAdmin(email?: string | null): boolean {
  if (!email) return false;
  return email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
}