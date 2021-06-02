import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';
function ReviewsSection() {
    return (
        
            <ReviewStyled>
            <Title title={'Reviews'} span={'Reviews'} ></Title>
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium aliquam velit, quis odit hic, qui nulla similique'} />
                    <ReviewItem text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium aliquam velit, quis odit hic, qui nulla similique Dos Dos'} />
                </div>
            </InnerLayout>
            </ReviewStyled>
        
    );
}

const ReviewStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1,1fr);
        }
        
    }
`;

export default ReviewsSection;