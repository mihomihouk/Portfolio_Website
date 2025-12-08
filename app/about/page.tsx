import { client } from '../../libs/client'
import { AboutContent } from './AboutContent'

export default async function About() {
  const firstView = await client.getAsset('4pOuhvWFjuBUkseHNzUFZO')
  const imageURL = `https:${firstView.fields.file.url}?r=24&bg=rgb:DD6B20`

  return <AboutContent imageURL={imageURL} />
}
