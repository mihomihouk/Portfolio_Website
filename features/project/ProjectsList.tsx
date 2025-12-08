import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox } from '@chakra-ui/react'
import { Section } from '../../components/Section'
import { Asset } from 'contentful'
import { Projects } from '../../types/contentful'
import { SectionHeading } from '../../components/SectionHeading'

type ProjectPreviewProps = {
  projects: Projects
}

export function ProjectsList({ projects }: ProjectPreviewProps) {
  return (
    <>
      {projects.map(project => {
        // Contentful does not provide support for the types of linked fields so cast it here
        const thumbnail = project.fields.thumbnail as Asset
        const file = thumbnail.fields.file!
        const details = file.details as {
          image: { width: number; height: number }
        }

        return (
          <Section key={project.sys.id}>
            <Box w="100%" alignItems="center">
              <NextLink href={'/projects/' + project.fields.slug} passHref>
                <LinkBox cursor="pointer">
                  <Image
                    src={`http:${file.url}`}
                    alt={project.fields.title}
                    width={details.image.width}
                    height={details.image.height}
                    className="grid-item-thumbnail"
                  />
                  <SectionHeading
                    title={project.fields.title}
                    textAlign="center"
                    my={2}
                  />
                  <Text>{project.fields.abstract}</Text>
                </LinkBox>
              </NextLink>
            </Box>
          </Section>
        )
      })}
    </>
  )
}
