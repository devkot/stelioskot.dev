import React from "react";

import {
  Typography,
  Box,
  Container,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) => ({
  homeContainer: {
    paddingTop: theme.spacing(10),
  },
  homeTitle: {
    fontWeight: 800,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  homeContent: {
    fontWeight: 100,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.primary.main,
  },
  linkButton: {
    color: theme.palette.secondary.main,
  },
  cardSeparator: {
    paddingBottom: theme.spacing(1),
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

interface ProjectContent {
  title: string;
  description: string;
  link?: string;
  chips: Array<string>;
}

// const CardDescription: React.FunctionComponent<{
//   project: ProjectContent;
// }> = ({ project }) => {
//   const classes = useStyles();

//   return (
//     <Typography variant="h6" className={classes.homeContent}>
//       <CardHeader title={project.title} />
//       <CardContent>
//         <div className={classes.chips}>
//           {project.chips.map((chip) => (
//             <Chip label={chip} key={`${project.title}-${chip}`} />
//           ))}
//         </div>
//         <Box component="p">{project.description}</Box>
//       </CardContent>
//     </Typography>
//   );
// };

const Projects: React.FunctionComponent = () => {
  const classes = useStyles();

  const projects: Array<ProjectContent> = [
    {
      title: "Data Pipeline",
      description: `Led the R&D team in the delivery of a first iteration of a cloud
        based Data Pipeline to bulk sync data between the Administrate
        platform and third parties.`,
      chips: ["Python", "AWS Lambda", "AWS S3", "AWS Fargate", "Docker"],
    },
    {
      title: "Learning Management System",
      description: `Led the unification of 3 versions of legacy LMS's in order to
        allow learners to undertake online learning and receive
        certificates of completion.`,
      chips: [
        "Node.js",
        "GraphQL",
        "React.js",
        "TypeScript",
        "Nginx",
        "Docker",
      ],
    },
    {
      title: "Identity Provider",
      description: `Expanded a newly built Identity Provider by implementing SSO
      using OpenID Connect.`,
      chips: [
        "Python",
        "Asyncio",
        "Starlette",
        "MySQL",
        "OpenID Connect",
        "OAuth 2.0",
      ],
    },
    {
      title: "E-commerce Platform",
      description: `Rebuilt an e-commerce GraphQL API in order to simplify
      building integrations by enforcing a cleaner schema while also
      increasing development speed by promoting a modular approach
      to building a GraphQL server.`,
      chips: ["Node.js", "GraphQL", "Docker"],
    },
    {
      title: "Miscellaneous",
      description: `I've enjoyed taking part in a variety of smaller projects
      ranging from the expansion of the Administrate platorm's API
      to supporting the enablement of its Continuous Delivery by
      implementing a contract testing framework. Particularly, I
      enjoyed optimising the performance of MySQL hierarchical
      relationship queries by implementing the Nested Set Model.`,
      link:
        "https://engineering.getadministrate.com/databases/2020/07/15/nested-set-model.html",
      chips: ["Python", "GraphQL", "Flask", "MySQL", "AWS"],
    },
    {
      title: "Personal Website",
      description: `The website you're currently on! I'm experimenting with 
      Material UI and React.js in order to work on my creative skills by building a personal website.`,
      link: "https://github.com/devkot/devkot.github.io",
      chips: ["TypeScript", "React.js", "Create React App", "Material UI"],
    },
    {
      title: "Network Caching for 5G Systems",
      description: `Despite being a code geek, I'm still fascinated by Networks and
      its advancements, like Software Defined Networks. The endless
      options of this next generation tech along the ever growing
      number of IoT devices also inspired my thesis on "Network
      Caching for 5G Systems". I developed a protype for an Android
      app to download popular content outside of peak network traffic
      hours.`,
      chips: ["Java", "Android", "SQLite"],
    },
    {
      title: "Search Engine",
      description: `One of the projects I've enjoyed the most was building a
      Distributed Search Engine from scratch using C for a
      university Systems Programming course. It really helped me to
      avoid treating most popular Web Server frameworks as a black
      box! It consists of a multithreaded web server serving the
      content and a Crawler to index the pages using a Trie for
      quick lookups. IPC communication is handled using Named Pipes
      (FIFOs).`,
      link: "https://github.com/devkot/SearchEngine",
      chips: ["C", "Bash", "IPC", "Named Pipes", "Trie"],
    },
  ];

  return (
    <Box id="projects" className={classes.homeContainer}>
      <Container>
        <Typography variant="h4" className={classes.homeTitle}>
          <Box>Projects</Box>
        </Typography>
        {projects.map((project) => (
          <Accordion className={classes.cardSeparator}>
            {/* <Card variant="outlined" raised key={project.title}>
              <CardDescription project={project} key={project.title} />
            </Card> */}
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography className={classes.homeContent}>
                {project.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.homeContent}>
                <div className={classes.chips}>
                  {project.chips.map((chip) => (
                    <Chip label={chip} key={`${project.title}-${chip}`} />
                  ))}
                </div>
                <p>{project.description}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        {/* {projects.map((project) => (
          <div className={classes.cardSeparator} key={project.title}>
            {project.link ? (
              <CardActionArea
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                key={project.title}
              >
                <Card variant="outlined" raised key={project.title}>
                  <CardDescription project={project} key={project.title} />
                </Card>
              </CardActionArea>
            ) : (
              <Card variant="outlined" raised key={project.title}>
                <CardDescription project={project} key={project.title} />
              </Card>
            )}
          </div>
        ))} */}
      </Container>
    </Box>
  );
};

export default Projects;
