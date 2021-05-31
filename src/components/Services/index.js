import React from 'react'

const ServiceSection = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1}>
                        <ServicesH2>Reduce Expenses</ServicesH2>
                        <ServicesP>
                            We help and you reduce your fees and increase your overall revenue.
                        </ServicesP>
                    </ServicesIcon>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={icon2}>
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>
                            You can sccess our platform online from anywhere in the world.
                        </ServicesP>
                    </ServicesIcon>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={icon3}>
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>
                           Unlock our special membership card that returns 5% cash back.
                        </ServicesP>
                    </ServicesIcon>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default ServiceSection;
