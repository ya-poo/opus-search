import {Genre} from "../domain/Genre";

export interface Status {
  rows: number
}

export interface Composer {
  id: number
  name: string
  complete_name: string
  birth: string
  death: string
  epoch: string
  portrait: string
}

export interface Work {
  title: string
  subtitle: string
  popular: string
  recommended: string
  id: string
  genre: Genre
}
