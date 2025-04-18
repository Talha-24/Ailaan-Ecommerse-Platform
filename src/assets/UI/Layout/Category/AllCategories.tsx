import { categoryData } from "../../../Data/Data"
import { Category, CategoryContainer, CategoryImage, CategoryWrapper, Text, Title } from "./index.style"

const AllCategories = () => {

    return (
        <CategoryWrapper>
            <Title>All Categories</Title>
            <CategoryContainer>
                {categoryData.map(function (value, index) {
                    return (

                        <Category key={index}>
                            <CategoryImage>
                                <img className="h-[100%] w-[100%]" src={value?.icon} alt="" />
                            </CategoryImage>
                            <Text>{value?.name}</Text>
                        </Category>
                    )
                })}
            </CategoryContainer>
        </CategoryWrapper>
    )
}

export default AllCategories
