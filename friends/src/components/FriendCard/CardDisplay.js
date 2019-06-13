import React from 'react'
import Card from './Card'
import styled from 'styled-components'
export default class CardDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div>{this.props.friendData.map(friend => <Card friend={friend} />)}
            </div>
        )
    }
}