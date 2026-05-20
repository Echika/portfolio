import { Box, Container, Typography, Paper } from '@mui/material'
import { motion } from 'framer-motion'

const experiences = [
  {
    year: '2024 - Present',
    title: 'Frontend Engineer',
    company: 'AI4Justice',
    description: 'Sole frontend engineer for a production AI platform. Built the entire frontend from scratch, consumed REST APIs, collaborated with backend team. Live production website serving real users.',
    current: true,
  },
  {
    year: '2023 - 2024',
    title: 'React & TypeScript Developer',
    company: 'Self Study',
    description: 'Mastered React hooks, Context API, React Router, TypeScript, Supabase and REST APIs. Built CineVault, PlentyTask, VendorFind — real full-stack applications deployed to production.',
    current: false,
  },
  {
    year: '2022 - 2023',
    title: 'JavaScript Developer',
    company: 'Self Study',
    description: 'Mastered JavaScript ES6+, DOM manipulation, async programming, fetch API. Started building real interactive web applications from scratch.',
    current: false,
  },
  {
    year: '2021 - 2022',
    title: 'CSS & Layout Specialist',
    company: 'Self Study',
    description: 'Deep dived into CSS3, Flexbox, Grid, animations and responsive design. Built pixel-perfect layouts across all screen sizes.',
    current: false,
  },
  {
    year: '2020',
    title: 'Started Coding Journey',
    company: 'Self Study',
    description: 'Discovered a passion for web development and wrote my very first line of HTML. Committed to learning every single day while managing a home and raising three beautiful children. Never stopped since.',
    current: false,
  },
]

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#111111',
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
              color: '#FF6B00',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              mb: 1,
              textAlign: 'center',
            }}
          >
            My Journey
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: '#FFFFFF',
              mb: 2,
              textAlign: 'center',
              lineHeight: 1,
            }}
          >
            MY <span style={{ color: '#FF6B00' }}>EXPERIENCE</span>
          </Typography>
          <Typography
            sx={{
              color: '#888888',
              textAlign: 'center',
              mb: 8,
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            From zero to full-stack — my self-taught journey
          </Typography>
        </motion.div>

        {/* Timeline */}
        <Box sx={{ position: 'relative', maxWidth: '800px', mx: 'auto' }}>

          {/* Vertical line */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 16, md: '50%' },
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'rgba(255,107,0,0.2)',
              transform: { md: 'translateX(-50%)' },
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: {
                    xs: 'flex-start',
                    md: index % 2 === 0 ? 'flex-start' : 'flex-end',
                  },
                  mb: 4,
                  position: 'relative',
                  pl: { xs: 6, md: 0 },
                  pr: { xs: 0, md: index % 2 === 0 ? '52%' : 0 },
                  pl2: { md: index % 2 !== 0 ? '52%' : 0 },
                }}
              >
                {/* Dot on timeline */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 8, md: '50%' },
                    top: 24,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    backgroundColor: exp.current ? '#FF6B00' : '#333333',
                    border: '2px solid',
                    borderColor: exp.current ? '#FF9A3C' : '#555555',
                    transform: { md: 'translateX(-50%)' },
                    zIndex: 1,
                    boxShadow: exp.current ? '0 0 12px rgba(255,107,0,0.6)' : 'none',
                  }}
                />

                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    backgroundColor: '#0A0A0A',
                    border: exp.current
                      ? '1px solid rgba(255,107,0,0.3)'
                      : '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    maxWidth: { xs: '100%', md: '85%' },
                    width: { xs: '100%', md: 'auto' },
                    transition: 'all 0.3s',
                    '&:hover': {
                      border: '1px solid rgba(255,107,0,0.4)',
                    },
                  }}
                >
                  {/* Year */}
                  <Typography
                    sx={{
                      color: '#FF6B00',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      mb: 0.5,
                    }}
                  >
                    {exp.year}
                    {exp.current && (
                      <span style={{
                        marginLeft: 8,
                        backgroundColor: 'rgba(255,107,0,0.2)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                      }}>
                        CURRENT
                      </span>
                    )}
                  </Typography>

                  {/* Title */}
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      mb: 0.5,
                    }}
                  >
                    {exp.title}
                  </Typography>

                  {/* Company */}
                  <Typography
                    sx={{
                      color: '#FF9A3C',
                      fontSize: '0.85rem',
                      mb: 1.5,
                    }}
                  >
                    {exp.company}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: '#888888',
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {exp.description}
                  </Typography>
                </Paper>
              </Box>
            </motion.div>
          ))}
        </Box>

      </Container>
    </Box>
  )
}