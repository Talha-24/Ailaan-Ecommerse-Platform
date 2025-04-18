import React from 'react'
import { ChatBoxWrapper, StyledButton, StyledButtons, StyledDashboard, StyledDashboardUser, StyledPerson, StyledSearch, StyledSearchInput, StyledUsersChat, Text, UserWrapper } from './index.style'
import { IoSearch } from 'react-icons/io5'
import OwnerMessage from './parts/owner-messages'
import ActiveUserDetails from './parts/active-user-details'
import ActiveChatProduct from './parts/active-chat-product'
import ActiveChatArea from './parts/active-chat-area'
import SendMessageOptions from './parts/send-message-options'
const ChatBox: React.FC = () => {
    return (
        <ChatBoxWrapper>
            <UserWrapper>
                <Text>Inbox</Text>
                <StyledPerson>
                    <StyledButtons> <StyledButton $color={true}>All</StyledButton><StyledButton $color={false}>Unread Chats</StyledButton><StyledButton $color={false}>Important</StyledButton></StyledButtons>
                    <StyledSearch>
                        <IoSearch fontSize={'30px'} />
                        <StyledSearchInput placeholder='Search Messages' />
                    </StyledSearch>
                    <StyledUsersChat>
                        {Array.from({ length: 8 }, () => {
                            return (
                                <OwnerMessage />
                            )
                        })}
                    </StyledUsersChat>
                </StyledPerson>
            </UserWrapper>
            <StyledDashboard>
                <StyledDashboardUser>
                    <ActiveUserDetails />
                </StyledDashboardUser>
                <StyledDashboardUser>
                    <ActiveChatProduct />
            <button className='bg-[var(--blue)] text-white text-[12px] whitespace-nowrap px-6 py-2 text-lg font-[400] rounded-full shadow-2xl shadow-[#2BBEF9] max-[331px]:px-2 max-[331px]:py-1'>View Ad</button>

                </StyledDashboardUser>
                <ActiveChatArea />
                <SendMessageOptions />
            </StyledDashboard>
        </ChatBoxWrapper>
    )
}

export default ChatBox
