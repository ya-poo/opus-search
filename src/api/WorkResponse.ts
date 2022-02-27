import {Composer, Status, Work} from "./common";

export interface WorkResponse {
  status: Status
  composer: Composer
  works: Work[]
}
