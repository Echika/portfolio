import { useState } from 'react'
import {
  Box, Container, Typography, Grid,
  TextField, Button, Paper, Stack
} from '@mui/material'
import { motion } from 'framer-motion'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import SendIcon from '@mui/icons-material/Send'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  setError(false)

  try {
    const response = await fetch('https://formspree.io/f/xvzygkdk', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    })

    if (response.ok) {
      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } else {
      setError(true)
    }
  } catch (err) {
    setError(true)
  } finally {
    setIsLoading(false)
  }
}

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ color: '#FF6B00' }} />,
      label: 'Email',
      value: 'echikaraphael286@gmail.com',
      href: 'mailto:echikaraphael286@gmail.com',
    },
    {
      icon: <LinkedInIcon sx={{ color: '#FF6B00' }} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/echika-raphael',
      href: 'https://linkedin.com/in/echika-raphael',
    },
    {
      icon: <GitHubIcon sx={{ color: '#FF6B00' }} />,
      label: 'GitHub',
      value: 'github.com/Echika',
      href: 'https://github.com/Echika',
    },
  ]

  return (
    <Box
      id="contact"
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
            Get In Touch
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
            CONTACT <span style={{ color: '#FF6B00' }}>ME</span>
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
            Have a project in mind? Let's work together! 🔥
          </Typography>
        </motion.div>

        <Grid container spacing={6}>

          {/* Left — Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#FFFFFF',
                  fontFamily: 'Bebas Neue, cursive',
                  mb: 2,
                  letterSpacing: '2px',
                }}
              >
                LET'S BUILD SOMETHING AMAZING
              </Typography>
              <Typography
                sx={{
                  color: '#888888',
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                I'm currently open to new opportunities.
                Whether you have a project, a job offer or
                just want to say hi — my inbox is always open! 😊
              </Typography>

              <Stack spacing={3}>
                {contactInfo.map((info) => (
                  <Box
                    key={info.label}
                    component="a"
                    href={info.href}
                    target="_blank"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2,
                      backgroundColor: '#0A0A0A',
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.05)',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      '&:hover': {
                        border: '1px solid rgba(255,107,0,0.4)',
                        backgroundColor: 'rgba(255,107,0,0.05)',
                      },
                    }}
                  >
                    {info.icon}
                    <Box>
                      <Typography sx={{ color: '#888888', fontSize: '0.75rem' }}>
                        {info.label}
                      </Typography>
                      <Typography sx={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 500 }}>
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Right — Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  backgroundColor: '#0A0A0A',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '20px',
                }}
              >
                {success ? (
                  <Box sx={{ textAlign: 'center', py: 4 }}>
                    <Typography sx={{ fontSize: '3rem', mb: 2 }}>🎉</Typography>
                    <Typography variant="h5" sx={{ color: '#FFFFFF', mb: 1 }}>
                      Message Sent!
                    </Typography>
                    <Typography sx={{ color: '#888888' }}>
                      Thank you! I'll get back to you soon. 😊
                    </Typography>
                    <Button
                      onClick={() => setSuccess(false)}
                      sx={{ mt: 3, color: '#FF6B00' }}
                    >
                      Send Another
                    </Button>
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Stack spacing={3}>
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                                '&:hover fieldset': { borderColor: 'rgba(255,107,0,0.4)' },
                                '&.Mui-focused fieldset': { borderColor: '#FF6B00' },
                              },
                              '& .MuiInputLabel-root.Mui-focused': { color: '#FF6B00' },
                            }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                          <TextField
                            fullWidth
                            label="Your Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                                '&:hover fieldset': { borderColor: 'rgba(255,107,0,0.4)' },
                                '&.Mui-focused fieldset': { borderColor: '#FF6B00' },
                              },
                              '& .MuiInputLabel-root.Mui-focused': { color: '#FF6B00' },
                            }}
                          />
                        </Grid>
                      </Grid>

                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                            '&:hover fieldset': { borderColor: 'rgba(255,107,0,0.4)' },
                            '&.Mui-focused fieldset': { borderColor: '#FF6B00' },
                          },
                          '& .MuiInputLabel-root.Mui-focused': { color: '#FF6B00' },
                        }}
                      />

                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                            '&:hover fieldset': { borderColor: 'rgba(255,107,0,0.4)' },
                            '&.Mui-focused fieldset': { borderColor: '#FF6B00' },
                          },
                          '& .MuiInputLabel-root.Mui-focused': { color: '#FF6B00' },
                        }}
                      />

                      {error && (
                        <Typography sx={{ color: '#EF4444', fontSize: '0.875rem' }}>
                          ⚠ Something went wrong. Please try again.
                        </Typography>
                      )}

                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isLoading}
                        endIcon={<SendIcon />}
                        sx={{
                          backgroundColor: '#FF6B00',
                          '&:hover': { backgroundColor: '#CC5500' },
                          py: 1.5,
                          fontSize: '1rem',
                        }}
                      >
                        {isLoading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Stack>
                  </form>
                )}
              </Paper>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  )
}