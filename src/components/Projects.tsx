import React, { useState } from "react";

import {
  Typography,
  Box,
  Container,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  AccordionActions,
  Divider,
  Paper,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) => ({
  sectionContainer: {
    paddingTop: theme.spacing(10),
  },
  sectionTitle: {
    fontWeight: 800,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  accordionTitle: {
    fontWeight: 400,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.primary.main,
    fillOpacity: "revert",
  },
  accordionContent: {
    fontWeight: 100,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.primary.main,
  },
  accordionActions: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    justifyContent: "left",
  },
  linkButton: {
    fontWeight: 800,
  },
  accordion: {
    paddingBottom: theme.spacing(1),
    backgroundColor: `rgba(0, 0, 0, 0.2);`,
  },
  expandMoreIcon: {
    color: theme.palette.primary.main,
  },
  paper: {
    backgroundColor: "transparent",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  chipsContent: {
    fontWeight: 400,
  },
}));

interface ProjectContent {
  title: string;
  description: string;
  link?: string;
  chips: Array<string>;
}

const LinkTo: React.FunctionComponent<{ to: string; title: string }> = ({
  to,
  title,
}) => {
  const classes = useStyles();

  return (
    <Link
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.linkButton}
    >
      {title}
    </Link>
  );
};

const Projects: React.FunctionComponent = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => setExpanded(isExpanded ? panel : false);

  const projects: Array<ProjectContent> = [
    // TODO - Reword this
    // {
    //   title: "Data Pipeline",
    //   description: `Led the R&D team in the delivery of a first iteration of a serverless cloud
    //     based Data Pipeline to bulk sync data between the Administrate
    //     platform and third parties.`,
    //   chips: ["Python", "AWS", "Docker", "MySQL"],
    // },
    {
      title: "E-commerce Platform",
      description: `Overhauled and expanded an e-commerce GraphQL API in order to
      reduce complexity and simplify building integrations by third parties.
      Enforced a cleaner API schema through Schema First design 
      while also promoting a clean architecture by following a modular pattern
      to building a GraphQL Server.`,
      chips: ["Node.js", "JavaScript", "GraphQL", "Docker"],
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
      link: "https://github.com/devkot/stelioskot.dev",
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
    <Box id="projects" className={classes.sectionContainer}>
      <Container>
        <Typography variant="h4" className={classes.sectionTitle}>
          <Box>Projects</Box>
        </Typography>
        {projects.map((project) => (
          <Paper key={project.title} className={classes.paper}>
            <Accordion
              className={classes.accordion}
              expanded={expanded === project.title}
              onChange={handleChange(project.title)}
            >
              <AccordionSummary
                aria-controls={`panel1a-${project.title}-content`}
                id={`panel1a-${project.title}-header`}
                className={classes.accordionContent}
                expandIcon={
                  <ExpandMoreIcon className={classes.expandMoreIcon} />
                }
              >
                <Typography variant="h6" className={classes.accordionTitle}>
                  {project.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h6" className={classes.accordionContent}>
                  <div className={classes.chips}>
                    {project.chips.map((chip) => (
                      <Chip
                        label={chip}
                        key={`${project.title}-${chip}`}
                        className={classes.chipsContent}
                      />
                    ))}
                  </div>
                  <Box component="p">{project.description}</Box>
                </Typography>
              </AccordionDetails>
              {project.link && (
                <>
                  <Divider />
                  <AccordionActions className={classes.accordionActions}>
                    <LinkTo to={project.link} title="Read More" />
                  </AccordionActions>
                </>
              )}
            </Accordion>
          </Paper>
        ))}
      </Container>
    </Box>
  );
};

export default Projects;
