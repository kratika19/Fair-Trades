import image from '../../images/svg-1.svg'
import image2 from '../../images/svg-2.svg'
import image3 from '../../images/svg-3.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that alows you to send unlimited transactions without getting charged of any fees.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: image,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: image2,
    alt: 'Piggy Bank',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headline: 'Creating an account is extremely easy',
    description: "Get everything set up and ready in under 10 minutes. All you need to do is to add your information and you're ready to go.",
    buttonLabel: 'Start Now',
    imgStart: true,
    img: image3,
    alt: 'login',
    dark: false,
    primary: false,
    darkText: true,
};