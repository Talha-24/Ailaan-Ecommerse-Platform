import React from 'react'
import ReceiverMessage from './receiver-message'
import SenderMessage from './sender-message'
import ConversationDay from './conversation-day'
import { StyledChatArea } from '../index.style'

const ActiveChatArea:React.FC = () => {
    return (
            <StyledChatArea>
            <ConversationDay />
            <SenderMessage />
            <ReceiverMessage />
            <SenderMessage />
            <ReceiverMessage />
            <SenderMessage />
            <ReceiverMessage />
            </StyledChatArea>
     
    )
}

export default ActiveChatArea
