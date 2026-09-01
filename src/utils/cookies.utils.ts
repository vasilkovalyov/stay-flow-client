export function setCookie(email: string, maxAgeInSeconds: number) {
  document.cookie = `email=${encodeURIComponent(email)}; Max-Age=${maxAgeInSeconds}; Path=/; SameSite=Lax`;
}

export function getCookies(key: string) {
  const value = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${key}=`))
    ?.split('=')[1];

  return value ? decodeURIComponent(value) : null;
}

export function deleteCookie(key: string) {
  document.cookie = `${key}=; Max-Age=0; Path=/; SameSite=Lax`;
}
