export interface ICharacter {
  name: string;
  image: string;
}

export interface ICharacterFilter {
  keyword?: string
  id?: string
  page: number
}