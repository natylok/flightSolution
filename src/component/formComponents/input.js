import TextField from 'material-ui/TextField';
import React from 'react';
const Input = (props) => {
        return (
            <TextField id={props.id} 
                className={props.class}
                onChange={props.handleChange()}    
            />
        )
    }

}