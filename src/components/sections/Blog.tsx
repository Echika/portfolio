import { Box, Container, Typography, Grid, Card, CardContent, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const posts = [
  {
    title: 'How I Built CineVault as a Self-Taught Developer',
    excerpt: 'A deep dive into building a full-stack movie app with React, TypeScript and Supabase — from zero to deployed in weeks.',
    date: 'April 2026',
    readTime: '5 min read',
    tag: 'Project',
    emoji: '🎬',
  },
  {
    title: 'Why I Chose to Learn TypeScript Early',
    excerpt: 'Most beginners avoid TypeScript. Here is why I embraced it from day one and how it made me a better developer.',
    date: 'April 2026',
    readTime: '4 min read',
    tag: 'TypeScript',
    emoji: '🔷',
  },
  {
    title: 'Coding Every Day as a Mother of Three',
    excerpt: 'How I manage to code daily while raising three children, keeping my home and never giving up on my dreams.',
    date: 'March 2026',
    readTime: '6 min read',
    tag: 'Life',
    emoji: '👩‍💻',
  },
]

export default function Blog() {
  return (
    <Box
      id="blog"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#0A0A0A',
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
            My Thoughts
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
            LATEST <span style={{ color: '#FF6B00' }}>BLOG POSTS</span>
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
            Sharing my journey, lessons learned and technical insights
          </Typography>
        </motion.div>

        {/* Blog Grid */}
        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={post.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    backgroundColor: '#111111',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      border: '1px solid rgba(255,107,0,0.4)',
                      transform: 'translateY(-6px)',
                      boxShadow: '0 16px 32px rgba(255,107,0,0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>

                    {/* Emoji */}
                    <Typography sx={{ fontSize: '2.5rem', mb: 2 }}>
                      {post.emoji}
                    </Typography>

                    {/* Tag */}
                    <Chip
                      label={post.tag}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255,107,0,0.1)',
                        color: '#FF6B00',
                        border: '1px solid rgba(255,107,0,0.2)',
                        mb: 2,
                        alignSelf: 'flex-start',
                        fontSize: '0.75rem',
                      }}
                    />

                    {/* Title */}
                    <Typography
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        lineHeight: 1.4,
                        mb: 2,
                        flexGrow: 1,
                      }}
                    >
                      {post.title}
                    </Typography>

                    {/* Excerpt */}
                    <Typography
                      sx={{
                        color: '#888888',
                        fontSize: '0.875rem',
                        lineHeight: 1.7,
                        mb: 3,
                      }}
                    >
                      {post.excerpt}
                    </Typography>

                    {/* Meta */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box>
                        <Typography sx={{ color: '#888888', fontSize: '0.75rem' }}>
                          {post.date}
                        </Typography>
                        <Typography sx={{ color: '#FF6B00', fontSize: '0.75rem' }}>
                          {post.readTime}
                        </Typography>
                      </Box>
                      <ArrowForwardIcon sx={{ color: '#FF6B00', fontSize: '1.2rem' }} />
                    </Box>

                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  )
}