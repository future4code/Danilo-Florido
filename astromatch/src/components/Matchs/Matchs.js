import React, { useState, useEffect } from 'react';

import ProfileMatch from '../ProfileMatch/ProfileMatch';

import axios from 'axios';

import './Initial.css';
import { ContainerMatches, ClearButton, TitleMatch } from './styled'

function Matchs() {
  const [matchs, setMatchs] = useState([]);

  const getMatchs = async () => {
    try {
      const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hyago/matches")
        setMatchs(response.data.matches)
    } catch (error) {
      console.log(error.response)
    }
  }

  const clearMatchs = async () => {
    try {
      const response = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/hyago/clear")
    } catch (error) {
      console.log(error.response)
    }
  }

  const onClickClearMatches = () => {
    clearMatchs();
  }



  useEffect(() => {
    getMatchs();
  },[onClickClearMatches])

  return (
    <>
      <TitleMatch>Seus Matchs</TitleMatch>
        <ContainerMatches className="scrollbar-primary">
            <div>
              {matchs.map((person) => {
                return <ProfileMatch photo={person.photo} name={person.name} />
              })}
            </div>
        </ContainerMatches>
      <ClearButton onClick={onClickClearMatches}>Limpar Matches</ClearButton>
    </>
  );
}

export default Matchs;
