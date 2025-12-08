'use client'
import { Text, List, VStack } from '@chakra-ui/react'
import { PageTitle } from '../../components/PageTitle'
import { Section } from '../../components/Section'
import { SectionHeading } from '../../components/SectionHeading'
import { PageWrapper } from '../_layout/PageWrapper'
import { SecondaryText } from '../../components/SecondaryText'

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <PageTitle pageTitle="Privacy Policy" />

      <VStack align="start">
        <Section>
          <SecondaryText text="Last updated: December 2025" mb={14} />
          <Text>
            This website collects a small amount of technical information to
            help me understand how the site is used and to improve its
            performance.
          </Text>
        </Section>

        <Section delay={0.1}>
          <SectionHeading title="Information I Collect" />
          <List.Root ps={4} mt={2}>
            <List.Item>Your IP address</List.Item>
            <List.Item>Your browser and device information</List.Item>
            <List.Item>The page or link you came from</List.Item>
            <List.Item>The pages you visit</List.Item>
            <List.Item>The date and time of each interaction</List.Item>
          </List.Root>
        </Section>

        <Section delay={0.2}>
          <SectionHeading title="How I Use This Information" />
          <List.Root ps={4} mt={2}>
            <List.Item>Basic site analytics</List.Item>
            <List.Item>Understanding which content is most useful</List.Item>
            <List.Item>Improving site performance</List.Item>
          </List.Root>
        </Section>

        <Section delay={0.3}>
          <SectionHeading title="Legal Basis (for visitors from the UK/EU/Japan)" />
          <Text>
            For visitors from the UK and EU, I process this data under the
            lawful basis of legitimate interests, as it is necessary for
            operating, securing, and improving the website. For visitors from
            Japan, data is processed in accordance with the Act on the
            Protection of Personal Information (APPI). The information collected
            is used solely for clearly specified purposes: operating the
            website, analysing traffic in aggregate, and maintaining its
            security and performance.
          </Text>
        </Section>

        <Section delay={0.3}>
          <SectionHeading title="Data Retention" />
          <Text>
            Click logs are kept for no longer than 60 days and then
            automatically deleted.
          </Text>
        </Section>

        <Section delay={0.4}>
          <SectionHeading title="Sharing of Data" />
          <Text>
            I do not sell, share, or use this information for advertising or
            cross-site tracking.Technical data (such as IP address, user agent,
            referrer, and click logs) is stored securely and may be processed by
            my hosting provider solely to operate and maintain the website. Only
            aggregated, non-identifiable statistics—for example, overall visitor
            counts or traffic trends—are displayed publicly on the site. These
            summaries do not contain any information that could be used to
            identify individual visitors.
          </Text>
        </Section>

        <Section delay={0.4}>
          <SectionHeading title="Cookies" />
          <Text>
            This website does not use cookies or similar tracking technologies.
          </Text>
        </Section>

        <Section delay={0.4}>
          <SectionHeading title="Contact for Data Requests" />
          <Text>
            Because the data I collect (IP address, user agent, referrer, and
            timestamps) is stored only in a technical log format and is not
            linked to any name, account, or other identifying information, I am
            unable to identify individual visitors or match specific log entries
            to specific people. As a result, it is not technically possible to
            fulfil requests to access, correct, or delete data on a per-person
            basis.
          </Text>
        </Section>
      </VStack>
    </PageWrapper>
  )
}
