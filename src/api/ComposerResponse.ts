import {Status} from "./common";

export interface ComposerResponse {
  status: Status
  composers: Composer[]
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
