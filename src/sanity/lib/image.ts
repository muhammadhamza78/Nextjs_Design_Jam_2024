// import createImageUrlBuilder from '@sanity/image-url'
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// import { dataset, projectId } from '../env'

// // https://www.sanity.io/docs/image-url
// const builder = createImageUrlBuilder({ projectId, dataset })

// export const urlFor = (source: SanityImageSource) => {
//   return builder.image(source)
// }






import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { dataset, projectId } from '../env'

// Initialize the image URL builder
const builder = createImageUrlBuilder({ projectId, dataset })

// The urlFor function to generate the image URL
export const urlFor = (source: SanityImageSource) => {
  if (source) {
    // Ensure source contains _type property, otherwise provide a fallback
    const imageSource = source._type === 'image' ? source : { ...source, _type: 'image' }
    return builder.image(imageSource)
  }
  return null // Return null if no valid source is provided
}
