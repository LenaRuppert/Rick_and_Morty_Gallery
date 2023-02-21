import {Character} from "../model/Character";
import "./CharacterCard.css";
import {useNavigate} from "react-router-dom";

type CharacterCardProps = {
    character: Character,
}

export default function CharacterCard(props: CharacterCardProps) {

    const navigate = useNavigate();

    function onDetailsClick(){
        navigate("/characters/" + props.character.id)
    }

    return (
        <section className={"character-card"}>
            <h2 className={"character-card-name"}>{props.character.name}</h2>
            <p className={"character-card-status"}>{props.character.status}</p>
            <img className={"character-card-image"} src={props.character.image} alt={props.character.name + " image"}/>
            <p className={"character-card-origin"}>Origin: {props.character.origin.name}</p>
            <button onClick={onDetailsClick}>Details</button>
        </section>
    );
}