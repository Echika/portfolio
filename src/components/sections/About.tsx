import { Box, Container, Grid, Typography, Chip, Stack } from '@mui/material'
import { motion } from 'framer-motion'
import PersonIcon from '@mui/icons-material/Person'
import CodeIcon from '@mui/icons-material/Code'
import FavoriteIcon from '@mui/icons-material/Favorite'

const facts = [
  { icon: <PersonIcon sx={{ color: '#FF6B00' }} />, label: 'Self-Taught Developer' },
  { icon: <CodeIcon sx={{ color: '#FF6B00' }} />, label: 'Frontend Specialist' },
  { icon: <FavoriteIcon sx={{ color: '#FF6B00' }} />, label: 'Mother of 3 👶' },
]

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#0A0A0A',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>

          {/* Left — Image */}
          <Grid sx={{xs: 12, md: 5}}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '100%',
                }}
              >
                {/* Orange border frame */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -16,
                    left: -16,
                    right: 16,
                    bottom: 16,
                    border: '2px solid #FF6B00',
                    borderRadius: '16px',
                    zIndex: 0,
                  }}
                />
                {/* Image placeholder */}
                <Box
                  sx={{
                    width: '100%',
                    aspectRatio: '4/5',
                    backgroundColor: '#111111',
                    borderRadius: '16px',
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,107,0,0.2)',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#888888',
                      fontSize: '1rem',
                      textAlign: 'center',
                      px: 2,
                    }}
                  >
                   My Photo Resides here
                  </Typography>
                </Box>

                {/* Floating badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 32,
                    right: -16,
                    backgroundColor: '#FF6B00',
                    borderRadius: '12px',
                    px: 2,
                    py: 1,
                    zIndex: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      fontFamily: 'Bebas Neue, cursive',
                      fontSize: '1rem',
                      letterSpacing: '2px',
                    }}
                  >
                    SELF TAUGHT 🔥
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right — Content */}
          <Grid sx={{xs: 12, md: 7}}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Section label */}
              <Typography
                sx={{
                  color: '#FF6B00',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  mb: 1,
                }}
              >
                About Me
              </Typography>

              {/* Title */}
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  color: '#FFFFFF',
                  mb: 3,
                  lineHeight: 1,
                }}
              >
                PASSIONATE ABOUT
                <span style={{ color: '#FF6B00' }}> BUILDING</span>
              </Typography>

              {/* Bio */}
              <Typography
                sx={{
                  color: '#888888',
                  lineHeight: 1.8,
                  mb: 2,
                  fontSize: '1rem',
                }}
              >
                Hi! I'm Echika Raphael, a self-taught Frontend Developer
                based in Nigeria. I discovered my passion for coding while
                managing my home and raising my three beautiful children.
              </Typography>

              <Typography
                sx={{
                  color: '#888888',
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: '1rem',
                }}
              >
                Every single day I dedicate time to learning and building —
                because I believe that with consistency and passion, anyone
                can break into tech. I specialize in building beautiful,
                responsive and performant web applications. 🔥
              </Typography>

              {/* Facts */}
         <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2, mb: 4 }}>
                {facts.map((fact) => (
                  <Chip
                    key={fact.label}
                    icon={fact.icon}
                    label={fact.label}
                    sx={{
                      backgroundColor: 'rgba(255,107,0,0.1)',
                      border: '1px solid rgba(255,107,0,0.3)',
                      color: '#FFFFFF',
                      '& .MuiChip-icon': { color: '#FF6B00' },
                    }}
                  />
                ))}
              </Stack>

              {/* Quick info */}
              <Grid container spacing={2}>
                {[
                  { label: 'Location', value: 'Nigeria 🇳🇬' },
                  { label: 'Availability', value: 'Open to Work ✅' },
                  { label: 'Experience', value: 'Self Taught' },
                  { label: 'Focus', value: 'Frontend Development' },
                ].map((info) => (
                  <Grid sx={{xs: 6}} key={info.label}>
                    <Typography sx={{ color: '#888888', fontSize: '0.8rem', mb: 0.3 }}>
                      {info.label}
                    </Typography>
                    <Typography sx={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 600 }}>
                      {info.value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>

            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}