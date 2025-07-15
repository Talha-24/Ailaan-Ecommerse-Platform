import React from 'react'
import MainCategories from './parts/main-categories'
import SubCategories from './parts/sub-categories'
import NestedCategories from './parts/nested-categories'
import { StyledCategory, StyledCategoryWrapper, } from './parts/index.style'
import PostHeader from './parts/post-header'

const ChooseCategory: React.FC = () => {

    return (
        <div className='px-[100px] max-[1400px]:px-[30px] max-[500px]:px-[10px]  h-30 w-[min(100%,1600px)]'>
            <PostHeader />
            <StyledCategory $add={false}>
                <div className='font-[500] text-2xl mb-10 max-[500px]:m-3'>
                    Choose A Category
                </div>
                <StyledCategoryWrapper>
                    <MainCategories />
                    <SubCategories />
                    <NestedCategories />
                </StyledCategoryWrapper>
            </StyledCategory>

        </div>
    )
}

export default ChooseCategory
