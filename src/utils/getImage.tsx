import claqueta from '../img/claqueta.png'

export function getImage(path: string, width: number) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : claqueta
}
