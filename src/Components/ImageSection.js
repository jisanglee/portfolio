import React from 'react';
import styled from 'styled-components';
import resume from '../img/resume.jpeg'
import PrimaryButton from './PrimaryButton';
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume img" />
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>Jisang Lee</span></h4>
                </div>
                <p className="paragraph">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio voluptatum velit est aliquam quod similique amet fugiat, deleniti nostrum ut, sed provident quo sint dolore magnam earum ratione quasi. Tenetur animi inventore saepe.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age </p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                        <p></p>
                    </div>
                    <div className="info-title">
                        <p>: Jisang Lee (Michael)</p>
                        <p>: 33 </p>
                        <p>: Korea</p>
                        <p>: Korean / English / Chinese</p>
                        <p>: Seoul, Korea</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'}/>
            </div>
        </ImageSectionStyled>
    );
}

const ImageSectionStyled = styled.div`
    margin-top:5rem;
    display: flex;
    .left-content{
        width: 100%;
        height: 60vh;
        img{
            width: 90%;
            height: 100%;
            object-fit: cover;
        }
    }
    .right-content{
        h4{
            font-size:2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 2rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, info{
                p{
                    padding: .3rem 0;
                }

            }
        }
    }
`;

export default ImageSection;