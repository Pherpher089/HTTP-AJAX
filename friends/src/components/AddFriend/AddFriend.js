import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
`
const Input = styled.input`
`
const Button = styled.button`
`

export default class AddFriend extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <Form>
                <Input></Input>
                <Input></Input>
                <Input></Input>
                <Button></Button>
            </Form>
        )
    }
}