import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: trigger ? "blur(10px)" : "none",
          borderBottom: trigger ? "1px solid rgba(255,107,0,0.2)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                sx={{
                  fontFamily: "Bebas Neue, cursive",
                  fontSize: "1.8rem",
                  letterSpacing: "3px",
                  flexGrow: 0,
                  mr: 4,
                  cursor: "pointer",
                }}
              >
                <span style={{ color: "#FFFFFF" }}>ECHIKA</span>
                <span style={{ color: "#FF6B00" }}>.</span>
              </Typography>
            </motion.div>

            {/* Desktop Nav Links */}
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 1 }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Button
                    href={link.href}
                    sx={{
                      color: "#888888",
                      fontSize: "0.9rem",
                      "&:hover": {
                        color: "#FF6B00",
                        backgroundColor: "transparent",
                      },
                      transition: "color 0.2s",
                    }}
                  >
                    {link.label}
                  </Button>
                </motion.div>
              ))}
            </Box>

            {/* Hire Me Button */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                variant="contained"
                href="#contact"
                sx={{
                  backgroundColor: "#FF6B00",
                  "&:hover": {
                    backgroundColor: "#CC5500",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s",
                }}
              >
                Hire Me
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{ color: "#FF6B00" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "#111111",
              width: 280,
              borderLeft: "1px solid rgba(255,107,0,0.2)",
            },
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Bebas Neue, cursive",
                fontSize: "1.5rem",
                letterSpacing: "3px",
              }}
            >
              <span style={{ color: "#FFFFFF" }}>ECHIKA</span>
              <span style={{ color: "#FF6B00" }}>.</span>
            </Typography>
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{ color: "#888888" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    borderRadius: "8px",
                    mb: 0.5,
                    "&:hover": {
                      backgroundColor: "rgba(255,107,0,0.1)",
                      "& .MuiListItemText-primary": {
                        color: "#FF6B00",
                      },
                    },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: "#888888",
                        fontWeight: 500,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Button
            variant="contained"
            fullWidth
            href="#contact"
            onClick={() => setMobileOpen(false)}
            sx={{
              mt: 2,
              backgroundColor: "#FF6B00",
              "&:hover": { backgroundColor: "#CC5500" },
            }}
          >
            Hire Me
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
