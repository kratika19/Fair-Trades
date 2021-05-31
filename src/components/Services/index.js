import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServiceElements';
import icon1 from '../../images/svg-2.svg'
import icon2 from '../../images/svg-3.svg'
import icon3 from '../../images/svg-4.svg'

const ServiceSection = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1}>
                    </ServicesIcon>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>
                        We help and you reduce your fees and increase your overall revenue.
                        </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={icon2}>
                    </ServicesIcon>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>
                        You can sccess our platform online from anywhere in the world.
                        </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={icon3}>
                    </ServicesIcon>
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>
                        Unlock our special membership card that returns 5% cash back.
                        </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServiceSection;
