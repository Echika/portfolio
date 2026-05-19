import { Box, Container, Typography, IconButton, Divider, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    icon: <GitHubIcon />,
    href: 'https://github.com/Echika',
    label: 'GitHub',
  },
  {
    icon: <LinkedInIcon />,
    href: 'https://linkedin.com/in/echika-raphael',
    label: 'LinkedIn',
  },
  {
    icon: <EmailIcon />,
    href: 'mailto:echikaraphael286@gmail.com',
    label: 'Email',
  },
]

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(255,107,0,0.15)',
        pt: 6,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">

        {/* Top section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 4,
            mb: 4,
          }}
        >
          {/* Logo & tagline */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              sx={{
                fontFamily: 'Bebas Neue, cursive',
                fontSize: '2rem',
                letterSpacing: '3px',
                mb: 1,
              }}
            >
              <span style={{ color: '#FFFFFF' }}>ECHIKA</span>
              <span style={{ color: '#FF6B00' }}>.</span>
            </Typography>
            <Typography sx={{ color: '#888888', fontSize: '0.9rem', maxWidth: '250px' }}>
              Self-taught Frontend Developer building beautiful web experiences. 🔥
            </Typography>
          </Box>

          {/* Nav Links */}
          <Stack
            direction="row"
            sx={{ flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}
          >
            {navLinks.map((link) => (
              <Typography
                key={link.label}
                component="a"
                href={link.href}
                sx={{
                  color: '#888888',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#FF6B00' },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Stack>

          {/* Social Links */}
          <Stack direction="row" spacing={1}>
            {socialLinks.map((social) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  sx={{
                    color: '#888888',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    '&:hover': {
                      color: '#FF6B00',
                      border: '1px solid rgba(255,107,0,0.4)',
                      backgroundColor: 'rgba(255,107,0,0.1)',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  {social.icon}
                </IconButton>
              </motion.div>
            ))}
          </Stack>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', mb: 3 }} />

        {/* Bottom section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography sx={{ color: '#888888', fontSize: '0.85rem', textAlign: 'center' }}>
            © 2026 Echika Raphael. Built with ❤️ and lots of ☕
          </Typography>
          <Typography sx={{ color: '#888888', fontSize: '0.85rem', textAlign: 'center' }}>
            <span style={{ color: '#FF6B00' }}>Self-Taught</span> — Proud of every line of code 🔥
          </Typography>
        </Box>

      </Container>
    </Box>
  )
}