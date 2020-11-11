import React from 'react';
import { Popover } from '@material-ui/core';

class EmailForm extends React.Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return(
            <div>
                <Popover 
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    The content of the Popover.
                </Popover>
            </div>
        )
    }
}

export default EmailForm;