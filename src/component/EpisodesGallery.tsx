import {Episode} from "../model/Episode";

import "./EpisodeGallery.css";
import EpisodeCard from "./EpisodesCard";


type EpisodeGalleryProps = {
    episodes: Episode[]

}

export default function EpisodeGallery(props: EpisodeGalleryProps) {

    const episodeCard = props.episodes.map((episode) => {
        return (
            <EpisodeCard episode={episode} key={episode.id + " " + episode.name + " " + episode.air_date}/>
        );
    });



    return (
        <div className={"episode-gallery"}>
            {episodeCard}
        </div>
    );



}