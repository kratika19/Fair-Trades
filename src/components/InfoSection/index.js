import React from 'react';
import { Button } from '../ButtonElement';
import { BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './InfoElements'


const InfoSection = ({ lightBg, id, imgStart, img, alt, topLine, lightText, headline, darkText, description, buttonLabel, primary, dark, dark2 }) => {
    return (
        <>
            <InfoContainer LightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading LightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true' offset={-80}
                                        dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0} primary={primary ? 1 : 0}>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
