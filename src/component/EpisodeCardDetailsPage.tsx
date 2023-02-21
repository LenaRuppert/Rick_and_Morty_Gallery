import {useParams} from "react-router-dom";
import {Episode} from "../model/Episode";
import {Character} from "../model/Character";

type EpisodeCardDetailsPageProps = {
    episodes: Episode[]
}

export default function EpisodeCardDetailsPage(props: EpisodeCardDetailsPageProps){

    const params = useParams()
    const id: string | undefined = params.episodeId
    if(!id){
        return <div>no element with id found</div>
    }

    const episode: Episode | undefined = props.episodes.find(episode =>
        episode.id === parseInt(id));

    return(
        <div>
            <h1>
                {
                    episode && episode.name
                }
            </h1>
        </div>
    );
}