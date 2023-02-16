
import './App.css';
import {Character} from "./model/Character";
import Characters from "../../rickandmorty_m/src/characters.json"
import CharacterGallery from "./component/CharacterGallery";
import React, {useState} from "react";
import InputUser from "./component/InputUser";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


function App() {


    //const characters: Character[] = Characters;

    const[characters, setCharacters] = useState<Character[]>([])
    const[text, setText] = useState<string>("")

    function getCharacters(){
        axios.get("https://rickandmortyapi.com/api/character")
        .then((response) => {
            console.log(response.data.results)
            setCharacters(response.data.results);})
            .catch((error) => {
                console.error(error);
            })

    }

    function handleText(text: string){
        setText(text)
    }

    function characterSearch(characters: Character[], text: string){
        return characters.filter(character =>
        {return text.includes(character.name)})
    }

    const myCharacterSearch = characterSearch(characters, text);
    console.log(characterSearch)



    return (
    <div className={"App"}>
        <h1>Rick and Morty Gallery</h1>

        <button onClick={getCharacters}>show all Characters</button>


        <p>
            <InputUser setText={handleText}/>
        </p>
        <CharacterGallery characters={myCharacterSearch}/>

        <p>
         <CharacterGallery characters={characters}/>
        </p>

    </div>

  );
}

export default App;
