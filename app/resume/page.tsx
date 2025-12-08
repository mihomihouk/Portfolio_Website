import { client } from '../../libs/client'
import { ResumeContent } from './resume-content'

export default async function Resume() {
  const agileLogo = await client.getAsset('1y0uxAPI1Wfdwabrhizd1A')
  const chakraUILogo = await client.getAsset('4qahETPzPahg9OOWT3ZB4T')
  const contentfulLogo = await client.getAsset('7kwOlrTJdl14EnnnYpexpE')
  const agileLogoURL = `https:${agileLogo.fields.file.url}`
  const chakraUILogoURL = `https:${chakraUILogo.fields.file.url}`
  const contentfulLogoURL = `https:${contentfulLogo.fields.file.url}`
  return (
    <ResumeContent
      agileLogoURL={agileLogoURL}
      chakraUILogoURL={chakraUILogoURL}
      contentfulLogoURL={contentfulLogoURL}
    />
  )
}
