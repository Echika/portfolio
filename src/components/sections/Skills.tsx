import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML5', icon: '🌐', level: 90, category: 'Frontend' },
  { name: 'CSS3', icon: '🎨', level: 85, category: 'Frontend' },
  { name: 'JavaScript', icon: '⚡', level: 80, category: 'Frontend' },
  { name: 'TypeScript', icon: '🔷', level: 75, category: 'Frontend' },
  { name: 'React', icon: '⚛️', level: 80, category: 'Frontend' },
  { name: 'Material UI', icon: '🎯', level: 85, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '💨', level: 75, category: 'Frontend' },
  { name: 'Git', icon: '📦', level: 80, category: 'Tools' },
  { name: 'GitHub', icon: '🐙', level: 80, category: 'Tools' },
  { name: 'Supabase', icon: '⚡', level: 70, category: 'Backend' },
  { name: 'REST APIs', icon: '🔗', level: 75, category: 'Backend' },
  { name: 'Vite', icon: '🚀', level: 75, category: 'Tools' },
]

export default function Skills() {
  return (
    <Box
      id="skills"
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
            What I Work With
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
            MY <span style={{ color: '#FF6B00' }}>SKILLS</span>
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
            Technologies and tools I use to bring ideas to life
          </Typography>
        </motion.div>

        {/* Skills Grid */}
        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={skill.name}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    backgroundColor: '#0A0A0A',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    textAlign: 'center',
                    cursor: 'default',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '1px solid rgba(255,107,0,0.4)',
                      backgroundColor: 'rgba(255,107,0,0.05)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  {/* Icon */}
                  <Typography sx={{ fontSize: '2.5rem', mb: 1 }}>
                    {skill.icon}
                  </Typography>

                  {/* Name */}
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      mb: 2,
                    }}
                  >
                    {skill.name}
                  </Typography>

                  {/* Progress bar */}
                  <Box
                    sx={{
                      width: '100%',
                      height: '4px',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '2px',
                      overflow: 'hidden',
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level + '%' }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #FF6B00, #FF9A3C)',
                        borderRadius: '2px',
                      }}
                    />
                  </Box>

                  {/* Level */}
                  <Typography
                    sx={{
                      color: '#FF6B00',
                      fontSize: '0.75rem',
                      mt: 1,
                      fontWeight: 600,
                    }}
                  >
                    {skill.level}%
                  </Typography>

                  {/* Category */}
                  <Typography
                    sx={{
                      color: '#888888',
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {skill.category}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  )
}