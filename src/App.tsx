
import './App.css';
import {Character} from "./model/Character";
import Characters from "../../rickandmorty_m/src/characters.json"
import CharacterGallery from "./component/CharacterGallery";
import React, {useEffect, useState} from "react";
import InputUser from "./component/InputUser";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {Episode} from "./model/Episode";
import EpisodeCard from "./component/EpisodesCard";
import EpisodeGallery from "./component/EpisodesGallery";
import Header from "./component/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./component/HomePage";
import CharacterCardDetailsPage from "./component/CharacterCardDetailsPage";
import EpisodeCardDetailsPage from "./component/EpisodeCardDetailsPage";


function App() {


    //const characters: Character[] = Characters;

    const [characters, setCharacters] = useState<Character[]>([])
    const [episodes, setEpisodes] = useState<Episode[]>([])


    const [text, setText] = useState<string>("")


    function getCharacters() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                console.log(response.data.results)
                setCharacters(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            })}

    useEffect(() => {
        getCharacters()
    }, [])

    function getEpisodes() {
        axios.get("https://rickandmortyapi.com/api/episode")
            .then((response) => {
                console.log(response.data.results)
                setEpisodes(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            })}

    useEffect(() => {
        getEpisodes()
    }, [])



        function handleText(text: string) {
            setText(text)
        }

        function characterSearch(characters: Character[], text: string) {
            return characters.filter(character => {
                return text.includes(character.name)
            })
        }

        const myCharacterSearch = characterSearch(characters, text);
        console.log(characterSearch)


        return (

            <div className={"App"}>
                <Header />
                <Routes>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/characters"} element={<CharacterGallery characters={characters}/>}/>
                    <Route path={"/characters/:characterId"} element={<CharacterCardDetailsPage characters={characters}/>}/>
                    <Route path={"/episodes"} element={<EpisodeGallery episodes={episodes}/>}/>
                    <Route path={"/episodes/:episodeId"} element ={<EpisodeCardDetailsPage episodes={episodes}/>}/>
                </Routes>
            </div>
        )

    {/* <InputUser setText={handleText}></InputUser>*/}


    }

    export default App;


