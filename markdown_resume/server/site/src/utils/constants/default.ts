import type { ResumeStyles } from "~/types";

export const DEFAULT_NAME = "Ian Minoso";

export const DEFAULT_STYLES = {
  marginV: 55,
  marginH: 45,
  lineHeight: 1.3,
  paragraphSpace: 5,
  themeColor: "#000000",
  fontCJK: {
    name: "华康宋体",
    fontFamily: "HKST"
  },
  fontEN: {
    name: "Verdana"
  },
  fontSize: 12,
  paper: "A4"
} as ResumeStyles;

export const DEFAULT_MD_CONTENT = `---
---

# Ian Minoso

<span class="iconify" data-icon="tabler:mail"></span> [iminoso@gmail.com](mailto:iminoso@gmail.com)
  : <span class="iconify" data-icon="tabler:device-imac"></span> [ianminoso.com](https://ianminoso.com/)
  : <span class="iconify" data-icon="tabler:phone"></span> [(+1) 647-657-9539](https://wa.me/16476579539)
  : <span class="iconify" data-icon="tabler:map-pin"></span> Toronto, Ontario

## Experience

**Wealthsimple**
  : **Jul 2024 - Present**

*Senior Software Engineer*
  : *Toronto, Ontario*

- Designed and built a system for automated annual client profile reassessments in **Ruby**, processing 2.4M+ client profiles annually
  - Implemented automated triggers and notifications for timely reassessments
  - Integrated risk and suitability calculations to optimize tax savings of up to 50% for clients
  - Refactored agreement signing services, reducing error rates by 90% and improving the in-app client signing experience
- Led observability initiatives by developing automated tooling to monitor error rates and automatically create **SLOs and monitors** for GraphQL endpoints across multiple Ruby services
  - Created **Datadog** monitors and Sentry error tracking to reduce incident detection time from several minutes to under 5 minutes, improving overall system reliability
- Developed an identity conflict detection system in **Ruby** that proactively identifies duplicate client profiles and potential fraud attempts
  - Reduced fraudulent account creation by 70% by building a profile comparison rules engine and prevented over \\$1,000 in potential monthly fraud losses
  - Automated conflict resolution workflows saving support teams 100+ hours monthly in manual review time


**Datadog**
  : **Jan 2020 - Jun 2024**

*Software Engineer*
  : *New York, NY*

- Architected a change data capture pipeline using **Kafka and Debezium** to index SLO (Service Level Objective) data records into Elasticsearch
  - Achieved a 75% increase in search speed, expanded support for complex queries, and successfully reduced the request load on critical upstream services by 60%
- Led frontend development as technical lead for the SLO product, building scalable components in **TypeScript and React**
  - Designed and developed data visualizations and UIs that effectively communicate Service Level Objective insights to customers
- Optimized a headless browser service handling hundreds of requests per minute by migrating from PhantomJS to Puppeteer, achieving a 40% reduction in p90 response time


**PagerDuty**
  : **Jun 2017 - Dec 2019**

*Software Engineer*
  : *Toronto, Ontario*

- Developed a resilient microservice for real-time computation of account features and entitlements using **Elixir, Kafka, and MySQL**, serving 1,000+ daily requests with 99.9% uptime
- Led the development of a new API supporting the PagerDuty app ecosystem, enabling developers to create third-party integrations that expanded the platform's ecosystem and increased customer retention
- Built a **React** based developer portal for the API platform, streamlining the registration and publishing process for custom applications
- Implemented alert monitors in Datadog, regularly tracking metrics to identify issues with microservices and actively participated in the on-call rotation

## Education

**Bachelor of Applied Science (BASc), Computer Engineering**
  : **Sep 2010 - May 2017**

University of Waterloo
  : *Waterloo, Canada*

## Skills

**Programming Languages:** Python, JavaScript/TypeScript, Golang, Elixir, Ruby

**Frameworks:** Flask, Ruby on Rails, NodeJS, GraphQL

**Data Tooling and Infrastructure:** MySQL, PostgreSQL, Kafka, Elasticsearch, Kubernetes, Terraform

**Other Interests:** Traveling, Cooking, Hiking and Camping, Running Marathons

`;

export const PREVIEW_SELECTOR = "#vue-smart-pages-preview";

export const DEFAULT_CSS_CONTENT = `/* Backbone CSS for Resume Template 1 */

/* Basic */

${PREVIEW_SELECTOR} {
  background-color: white;
  color: black;
  text-align: left;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

${PREVIEW_SELECTOR} p,
${PREVIEW_SELECTOR} li,
${PREVIEW_SELECTOR} dl {
  margin: 0;
}

/* Headings */

${PREVIEW_SELECTOR} h1,
${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  font-weight: bold;
}

${PREVIEW_SELECTOR} h1 {
  font-size: 2.5em;
  letter-spacing: 0.1em;
  text-align: center;
  margin-bottom: 0.25em;
}

${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  margin-bottom: 0.25em;
  margin-top: 1.0em;
  font-size: 1.2em;
}

${PREVIEW_SELECTOR} h1,
${PREVIEW_SELECTOR} h2 {
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: darkgrey;
}

/* Lists */

${PREVIEW_SELECTOR} ul,
${PREVIEW_SELECTOR} ol {
  padding-left: 1.5em;
  margin: 0.2em 0 1.0em 0;
}

${PREVIEW_SELECTOR} ul {
  list-style-type: disc;
}

${PREVIEW_SELECTOR} ol {
  list-style-type: decimal;
}

/* Definition Lists */

${PREVIEW_SELECTOR} dl {
  display: flex;
}

${PREVIEW_SELECTOR} dl dt,
${PREVIEW_SELECTOR} dl dd:not(:last-child) {
  flex: 1;
}

/* Tex */

${PREVIEW_SELECTOR} :not(span.katex-display) > span.katex {
  font-size: 1em !important;
}

/* SVG & Images */

${PREVIEW_SELECTOR} svg.iconify {
  vertical-align: -0.2em;
}

${PREVIEW_SELECTOR} img {
  max-width: 100%;
}

/* Header */

${PREVIEW_SELECTOR} .resume-header {
  text-align: center;
}

${PREVIEW_SELECTOR} .resume-header h1 {
  text-align: center;
  line-height: 1;
  margin-bottom: 8px;
}

${PREVIEW_SELECTOR} .resume-header-item:not(.no-separator)::after {
  content: " | ";
}

/* Citations */

${PREVIEW_SELECTOR} ul.crossref-list {
  padding-left: 1.2em;
}

${PREVIEW_SELECTOR} li.crossref-item p {
  margin-left: 0.5em;
}

${PREVIEW_SELECTOR} li.crossref-item::marker {
  content: attr(data-caption);
}

${PREVIEW_SELECTOR} sup.crossref-ref {
  font-size: 100%;
  top: 0;
}

/* Dark & print mode */

.dark ${PREVIEW_SELECTOR} {
  background-color: #334155;
  color: #e5e7eb;
}

@media print {
  ${PREVIEW_SELECTOR} {
    background-color: white !important;
    color: black !important;
  }

  .dark ${PREVIEW_SELECTOR} a {
    color: black !important;
  }
}
`;
