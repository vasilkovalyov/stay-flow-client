export function mergeCookies(currentCookies: string, setCookies: string[]): string {
  const cookieMap = new Map<string, string>();

  for (const cookie of currentCookies.split('; ')) {
    const [name, ...rest] = cookie.split('=');

    if (name) {
      cookieMap.set(name, `${name}=${rest.join('=')}`);
    }
  }

  for (const cookie of setCookies) {
    const [nameValue] = cookie.split(';');
    if (nameValue) {
      const [name, ...rest] = nameValue.split('=');

      if (name) {
        cookieMap.set(name, `${name}=${rest.join('=')}`);
      }
    }
  }

  return [...cookieMap.values()].join('; ');
}
