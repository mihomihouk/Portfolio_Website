import { client } from '../../libs/client'
import { AboutContent } from './AboutContent'

export default async function About() {
  const mainImage = await client.getAsset('4pOuhvWFjuBUkseHNzUFZO')

  //the image always has a file so use ! assertion
  const imageURL = `https:${mainImage.fields.file!.url}?r=24&bg=rgb:DD6B20`

  return <AboutContent imageURL={imageURL} />
}
