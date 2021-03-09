import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components'

function ChatInput(channelName, channelId) {

    const sendMessage = (e) => {
        e.preventDefault();
    }

    return (

        <ChatInputContainer>
            <form>
                <input placeholder = {`Message #Room`}/>
                <Button hidden type = 'submit' onClick = {sendMessage}>
                    Send
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div``;