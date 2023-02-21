import {useParams} from "react-router-dom";
import {Character} from "../model/Character";


type CharacterCardDetailsPageProps = {
    characters: Character[]
}

export default function CharacterCardDetailsPage(props: CharacterCardDetailsPageProps){

    const params = useParams()
    const id: string | undefined = params.characterId
    if(!id){
        return <div>no element with such id found</div>
    }

    const character: Character | undefined = props.characters.find(character =>
        character.id === parseInt(id));

    return(
        <div>
            <h1>
            {
                character && character.name
            }
            </h1>
        </div>
    );
}