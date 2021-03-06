import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinators";
import usePrivatePage from "../hooks/usePrivatePage"
import { DivContainer, DivButtons, Buttons } from '../components/Estilization'
import styled from 'styled-components'

const DivApproved = styled.div`
margin-top: 5px;
padding:3px;
overflow: auto;
`
const DivCandidate = styled.div`
border: 1px solid white;
border-radius: 10px;
margin-bottom: 10px;
padding: 5px;
`
export default function TripDetailsPage() {
    usePrivatePage()
    const history = useHistory()
    const [tripDetail, setTripDetail] = useState({})
    const pathParams = useParams()

    useEffect(() => {
        getTripDetail()
    }, []);

    const logout = () => {
        window.localStorage.removeItem("token");
        history.push("/login");
    };

    const getTripDetail = () => {
        const token = window.localStorage.getItem("token");
        axios.get(``,
            {
                headers: {
                    auth: token
                }
            })
            .then((res) => {
                setTripDetail(res.data.trip)

            })
            .catch((err) => {
                console.log(err)
            })
    }

    const decideCandidate = (id, status) => {
        const token = window.localStorage.getItem("token");
        const body = {
            "approve": status,
        }
        axios.put(``, body, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                getTripDetail()
            })
            .catch((err) => {
                console.log(err)
                alert("Ocorreu um erro, tente novamente mais tarde")
            })
    }

    return (
        <DivContainer>
            <DivButtons>
                <Buttons onClick={() => goToAdminHomePage(history)}>Voltar</Buttons>
                <Buttons onClick={logout}>Logout</Buttons>
            </DivButtons>
            <h1>Detalhes das viagens</h1>
            <div>
                <p><b>Viagem: </b>{tripDetail.name}</p>
                <p><b>Planeta: </b>{tripDetail.planet}</p>
                <p><b>Data: </b>{tripDetail.date}</p>
                <p><b>Dura????o: </b>{tripDetail.durationInDays}</p>
                <p><b>Descri????o: </b>{tripDetail.description}</p>
            </div>
            <h2>Candidatos pendentes</h2>
            <DivApproved>
            {tripDetail.candidates &&
                tripDetail.candidates.map((candidate) => {
                    const {name, age, country, profession, applicationText, id} = candidate
                    return (
                        <DivCandidate>
                            <p><b>Nome: </b>{name}</p>
                            <p><b>Idade: </b>{age}</p>
                            <p><b>Pa??s: </b>{country}</p>
                            <p><b>Profiss??o: </b>{profession}</p>
                            <p><b>Sobre: </b>{applicationText}</p>
                            <Buttons onClick={() => decideCandidate(id, true)}>Aprovar</Buttons>
                            <Buttons onClick={() => decideCandidate(id, false)}>Reprovar</Buttons>
                        </DivCandidate>
                    )
                })}
            </DivApproved>
            <h2>Candidatos aprovados</h2>
            {!tripDetail.approved ?
                <p>Sem aprova????es</p>
                :
                tripDetail.approved.map((candidate) => {
                    return (
                        <p key={candidate.id}>{candidate.name}</p>
                    )
                })
            }
        </DivContainer>
    );
}


