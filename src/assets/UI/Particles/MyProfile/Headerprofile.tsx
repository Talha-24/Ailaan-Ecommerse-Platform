import profilePic from "../../Image and Svgs/Header/profile.svg"
const Headerprofile = () => {
    return (
        <>
            <div className="h-[45px]">
                <img className="h-[45px] object-contain" src={profilePic} alt="" />
            </div>
            <svg className="h-[15px] w-[18px] mt-[10px]" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </>

    )
}

export default Headerprofile
