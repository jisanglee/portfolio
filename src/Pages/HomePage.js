import React from 'react';
import Particle from '../Components/Particle';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
function HomePage(props) {
    return (
        
            <HomePageStyled>
                <div className="particle-con">
                    <Particle />
                </div>
                <div className="typography">
                    <h1>Hi I'm <span>Jisang Lee</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas, optio sed rerum labore laudantium quidem, hic corrupti atque non incidunt? Dolor ducimus aperiam explicabo dolore nam sunt commodi officiis.</p>
                    <div className="icons">
                        <a href="https://www.facebook.com/273Leejisang" className="icon i-facebook">
                            <FacebookIcon />
                        </a>
                        <a href="https://github.com/jisanglee" className="icon i-github">
                            <GithubIcon />
                        </a>
                        <a href="https://twitter.com/newspatoy" className="icon i-twitter">
                            <TwitterIcon />
                        </a>
                    </div>
                </div>
            </HomePageStyled>
    );
}
const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .particle-con{
        position: absolute;
        top: 0;
        left: 0;
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
    }
    .icons{
        display: flex;
        justify-content: center;
        margin-top:1rem;
        .icon{
            border:2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all .4s ease-in-out;
            cursor: pointer;

            &:not(:last-child){
                margin-right: 1rem;
            }
            svg{
                margin:.5rem;
            }
        }
    }
    .i-facebook{
        &:hover{
                color:white;
                border:2px solid white;
            }
    }
    .i-github{
        &:hover{
                color:purple;
                border:2px solid purple;
            }
    }
    .i-twitter{
        &:hover{
                color:blue;
                border:2px solid blue;
            }
    }
`;
export default HomePage;