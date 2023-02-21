import {Origin} from "./Origin"
import {Episode} from "./Episode";

export type Character = {

    id: number,
    name: string,
    origin: Origin,
    status: string,
    image: string
    episode: Episode[],
    url: string




}