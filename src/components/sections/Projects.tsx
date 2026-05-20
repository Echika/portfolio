import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title: "CineVault",
    description: "A full-stack movie discovery app where users can browse trending movies, search titles, view details with trailers and manage a personal watchlist. Built with real authentication and database.",
    image: "",
    tags: ["React", "TypeScript", "Supabase", "TMDB API", "Tailwind CSS"],
    live: "https://cinevault-nine-mu.vercel.app",
    github: "https://github.com/Echika/cinevault",
    featured: true,
    emoji: "🎬",
  },
  {
    title: "PlentyTask",
    description: "A task management app allowing users to create, edit, and organize tasks into projects. Features include drag-and-drop task organization and real-time updates.",
    image: "",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://quicktasker-frontend.vercel.app/",
    github: "https://github.com/Echika/quicktasker-frontend",
    featured: true,
    emoji: "✅",
  },
  {
    title: "AI4Justice",
    description: "Sole Frontend Engineer for AI4Justice — a production platform promoting justice through AI. I single-handedly built the entire frontend, consumed all REST APIs, and deployed to Microsoft Azure as part of a cross-functional team.",
    image: "",
    tags: ["Frontend", "REST APIs", "Azure", "Production", "Solo Frontend"],
    live: "https://lemon-pebble-0e0bb080f.7.azurestaticapps.net",
    github: "#",
    featured: true,
    emoji: "⚖️",
  },
  {
    title: "VendorFind",
    description: "A vendor directory app that allows users to search and filter local vendors by category, location, and ratings. Built with HTML, CSS, JavaScript, Nodejs, Supabase, Express.",
    image: "",
    tags: ["HTML", "CSS", "JavaScript", "Nodejs", "Supabase", "Express"],
    live: "https://echika.github.io/vendorfind/",
    github: "https://github.com/Echika/vendorfind",
    featured: true,
    emoji: "🏪",
  },
  {
    title: "Coming Soon",
    description: "Next project in progress. Job Board application with role-based authentication, job listings, and application tracking.",
    image: "",
    tags: ["React", "TypeScript", "MUI", "Supabase"],
    live: "#",
    github: "#",
    featured: false,
    emoji: "🚀",
  },
]

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#0A0A0A",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              color: "#FF6B00",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              mb: 1,
              textAlign: "center",
            }}
          >
            What I've Built
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#FFFFFF",
              mb: 2,
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            MY <span style={{ color: "#FF6B00" }}>PROJECTS</span>
          </Typography>
          <Typography
            sx={{
              color: "#888888",
              textAlign: "center",
              mb: 8,
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            Real projects built with real technologies
          </Typography>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#111111",
                    border: project.featured
                      ? "1px solid rgba(255,107,0,0.3)"
                      : "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      border: "1px solid rgba(255,107,0,0.5)",
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(255,107,0,0.1)",
                    },
                  }}
                >
                  {/* Project Image */}
                  <Box
                    sx={{
                      height: 200,
                      backgroundColor: "#0A0A0A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "20px 20px 0 0",
                    }}
                  >
                    {project.featured && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 16,
                          left: 16,
                          backgroundColor: "#FF6B00",
                          borderRadius: "8px",
                          px: 1.5,
                          py: 0.5,
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#FFFFFF",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                          }}
                        >
                          ⭐ Featured
                        </Typography>
                      </Box>
                    )}
                    <Typography sx={{ fontSize: "4rem" }}>
  {project.emoji}
</Typography>
                  </Box>

                  <CardContent sx={{ p: 3 }}>
                    {/* Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#FFFFFF",
                        fontFamily: "Bebas Neue, cursive",
                        fontSize: "1.8rem",
                        letterSpacing: "2px",
                        mb: 1,
                      }}
                    >
                      {project.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        color: "#888888",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        mb: 3,
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Tags */}
                    <Stack
                      direction="row"
                      sx={{ flexWrap: "wrap", gap: 1, mb: 3 }}
                    >
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: "rgba(255,107,0,0.1)",
                            color: "#FF9A3C",
                            border: "1px solid rgba(255,107,0,0.2)",
                            fontSize: "0.75rem",
                          }}
                        />
                      ))}
                    </Stack>

                    {/* Buttons */}
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<OpenInNewIcon />}
                        href={project.live}
                        target="_blank"
                        sx={{
                          backgroundColor: "#FF6B00",
                          "&:hover": { backgroundColor: "#CC5500" },
                        }}
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        sx={{
                          borderColor: "rgba(255,255,255,0.2)",
                          color: "#888888",
                          "&:hover": {
                            borderColor: "#FF6B00",
                            color: "#FF6B00",
                          },
                        }}
                      >
                        GitHub
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
