import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components//Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
                <Title title={'Skills'} span={'Skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar
                            title={'CSS3'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar
                            title={'JAVASCRIPT'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar
                            title={'REACT JS'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar
                            title={'PYTHON'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar
                            title={'R'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar
                            title={'JAVA'}
                            width={'60%'}
                            text={'60%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    );
}
const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
    }
`;
export default Skills;