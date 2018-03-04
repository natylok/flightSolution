import React from 'react';
class InputContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentText: ""
        };
    }
    onChange(event){
        this.state.currentText = event.currentTarge.value;
    }
    render(){
        <Input />
    }
}