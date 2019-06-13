import React from 'react'
import styled from 'styled-components'

const CardsDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: grey;
    width: 35rem;
    height: 10rem;
    margin: 2rem;
`
const CardInfoDiv = styled.div`
    font-size: 1.5rem;
    color: white;
    margin-left: 1.5rem;
`
export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <CardsDiv>
                <CardInfoDiv>{`ID: ${this.props.friend.id}`}</CardInfoDiv>
                <CardInfoDiv>{`Name: ${this.props.friend.name}`}</CardInfoDiv>
                <CardInfoDiv>{`Age: ${this.props.friend.age}`}</CardInfoDiv>
                <CardInfoDiv>{`Email: ${this.props.friend.email}`}</CardInfoDiv>
            </CardsDiv>
        )
    }
}