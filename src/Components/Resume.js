import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import SmallTitle from './SmallTitle';
import Title from './Title';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem';
function Resume(props) {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (

        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={school} title={'School'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2008 - 2015'}
                        title={'Sinology'}
                        subtitle={'Hanyang Univ.'}
                        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore debitis laborum modi dolores vero dolor officia saepe, laudantium ipsum amet.'}
                    />
                    <ResumeItem
                        year={'2018 - 2019'}
                        title={'DeepLearning College'}
                        subtitle={'MODULabs'}
                        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore debitis laborum modi dolores vero dolor officia saepe, laudantium ipsum amet.'}
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem
                        year={'2016 - 2017'}
                        title={'FullStack Dev'}
                        subtitle={'NextMove'}
                        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore debitis laborum modi dolores vero dolor officia saepe, laudantium ipsum amet.'}
                    />
                    <ResumeItem
                        year={'2018 - 2019'}
                        title={'User Interface Designer'}
                        subtitle={'FreeLancer'}
                        text={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore debitis laborum modi dolores vero dolor officia saepe, laudantium ipsum amet.'}
                    />
                </div>
            </InnerLayout>        
        </ResumeStyled>
    );
}
const ResumeStyled = styled.section`
    .small-title{
        padding-bottom:3rem;
    }
    .resume-content{
        border-left:2px solid var(--border-color);
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }
`;

export default Resume;