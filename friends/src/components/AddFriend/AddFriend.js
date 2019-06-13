import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    height: 15rem;
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgrey;
    border-radius: 8px;
`
const Input = styled.input`
    width: 12rem;
    margin: 1rem;
    padding-left: .5rem;
`
const Button = styled.button`
    width: 10rem;
    height: 2rem;
    border-radius: 8px;
    margin: 1rem;
`

export default class AddFriend extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <Form>
                <Input 
                type='text' 
                value={this.props.name} placeholder='name' 
                name='name' 
                onChange={this.props.changeHandler}> 
                </Input>
                <Input 
                type='text'
                placeholder='age'
                value={this.props.age}
                name='age'
                onChange={this.props.changeHandler}>
                </Input>
                <Input 
                type='text'
                placeholder='email'
                value={this.props.email}
                name='email'
                onChange={this.props.changeHandler}>
                </Input>
                <Button>Add Friend</Button>
            </Form>
        )
    }
}