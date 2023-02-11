export function getDateFromUnix(unix: number) {
  const date = new Date(unix * 1000)

  return date
}
