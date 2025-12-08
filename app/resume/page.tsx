import { client } from '../../libs/client'
import { ResumeContent } from './ResumeContent'

export default async function Resume() {
  const [agileLogo, chakraUILogo, contentfulLogo] = await Promise.all([
    client.getAsset('1y0uxAPI1Wfdwabrhizd1A'),
    client.getAsset('4qahETPzPahg9OOWT3ZB4T'),
    client.getAsset('7kwOlrTJdl14EnnnYpexpE')
  ])

  // these fields always have a file so use ! assertion
  const agileLogoURL = `https:${agileLogo.fields.file!.url}`
  const chakraUILogoURL = `https:${chakraUILogo.fields.file!.url}`
  const contentfulLogoURL = `https:${contentfulLogo.fields.file!.url}`
  return (
    <ResumeContent
      agileLogoURL={agileLogoURL}
      chakraUILogoURL={chakraUILogoURL}
      contentfulLogoURL={contentfulLogoURL}
    />
  )
}
