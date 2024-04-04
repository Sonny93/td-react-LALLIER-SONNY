// Source : https://stackoverflow.com/a/3710226
export function isJsonString(str: string | null) {
  try {
    JSON.parse(str ?? "");
  } catch (e) {
    return false;
  }
  return true;
}
