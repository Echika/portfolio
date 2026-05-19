import { useEffect, useState } from 'react'
import { Box, Typography, Button, Stack, Container } from '@mui/material'
import { motion } from 'framer-motion'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import EmailIcon from '@mui/icons-material/Email'

const firstName = "ECHIKA"
const lastName = "RAPHAEL"

export default function Hero() {
  const [firstNameVisible, setFirstNameVisible] = useState<boolean[]>(
    new Array(firstName.length).fill(false)
  )
  const [lastNameVisible, setLastNameVisible] = useState<boolean[]>(
    new Array(lastName.length).fill(false)
  )

  useEffect(() => {
    // Animate first name letter by letter
    firstName.split('').forEach((_, i) => {
      setTimeout(() => {
        setFirstNameVisible(prev => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }, i * 150)
    })

    // Animate last name after first name finishes
    lastName.split('').forEach((_, i) => {
      setTimeout(() => {
        setLastNameVisible(prev => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }, firstName.length * 150 + 300 + i * 150)
    })
  }, [])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#0A0A0A',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow effect */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ py: 8 }}>

          {/* Self taught badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.8,
                mb: 3,
                border: '1px solid rgba(255,107,0,0.4)',
                borderRadius: '50px',
                backgroundColor: 'rgba(255,107,0,0.1)',
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#FF6B00',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': { opacity: 1 },
                    '50%': { opacity: 0.3 },
                    '100%': { opacity: 1 },
                  }
                }}
              />
              <Typography
                sx={{
                  color: '#FF6B00',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Self-Taught Frontend Developer
              </Typography>
            </Box>
          </motion.div>

          {/* Animated Name */}
          <Box sx={{ mb: 2 }}>
            {/* First Name */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px', mb: 1 }}>
              {firstName.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={firstNameVisible[i]
                    ? { opacity: 1, y: 0, rotateX: 0 }
                    : { opacity: 0, y: 50, rotateX: -90 }
                  }
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{
                    display: 'inline-block',
                    fontSize: 'clamp(60px, 12vw, 120px)',
                    fontFamily: 'Bebas Neue, cursive',
                    color: '#FFFFFF',
                    lineHeight: 1,
                    letterSpacing: '4px',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </Box>

            {/* Last Name */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {lastName.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={lastNameVisible[i]
                    ? { opacity: 1, y: 0, rotateX: 0 }
                    : { opacity: 0, y: 50, rotateX: -90 }
                  }
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{
                    display: 'inline-block',
                    fontSize: 'clamp(60px, 12vw, 120px)',
                    fontFamily: 'Bebas Neue, cursive',
                    color: '#FF6B00',
                    lineHeight: 1,
                    letterSpacing: '4px',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </Box>
          </Box>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#888888',
                mb: 4,
                maxWidth: '600px',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              I build beautiful, fast and responsive web applications.
              Passionate about clean code and great user experiences. 🔥
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.3 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                startIcon={<EmailIcon />}
                href="#contact"
                sx={{
                  backgroundColor: '#FF6B00',
                  '&:hover': {
                    backgroundColor: '#CC5500',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s',
                  fontSize: '1rem',
                }}
              >
                Hire Me
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<FileDownloadIcon />}
                sx={{
                  borderColor: '#FF6B00',
                  color: '#FF6B00',
                  '&:hover': {
                    borderColor: '#FF9A3C',
                    backgroundColor: 'rgba(255,107,0,0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s',
                  fontSize: '1rem',
                }}
              >
                Download CV
              </Button>
            </Stack>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={4}
              sx={{ mt: 8 }}
            >
              {[
                { number: '5+', label: 'Projects Built' },
                { number: '5+', label: 'Technologies' },
                { number: '100%', label: 'Self Taught' },
                { number: '∞', label: 'Passion' },
              ].map((stat) => (
                <Box key={stat.label}>
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      fontFamily: 'Bebas Neue, cursive',
                      color: '#FF6B00',
                      lineHeight: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#888888',
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </motion.div>

        </Box>
      </Container>
    </Box>
  )
}