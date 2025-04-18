import { ProfileContainer, ProfileIcon } from '../Header.styled'
import Headerprofile from '../../../Particles/MyProfile/Headerprofile'
import messageIcon from "../../../Image and Svgs/Header/message.svg"
import bellIcon from "../../../Image and Svgs/Header/Bell.svg"
const Profilefeatures = () => {
    return (
        <ProfileContainer profile={false}>
            <ProfileIcon src={messageIcon}></ProfileIcon>
            <ProfileIcon src={bellIcon}></ProfileIcon>
            <ProfileContainer profile>
                <Headerprofile />
            </ProfileContainer>
        </ProfileContainer>
    )
}

export default Profilefeatures
