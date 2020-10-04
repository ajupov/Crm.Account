import { createMedia } from '@artsy/fresnel'

export const { Media, MediaContextProvider } = createMedia({
    breakpoints: {
        mobile: 320,
        tablet: 768,
        computer: 992
    }
})
