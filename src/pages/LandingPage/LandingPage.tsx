/** @module LandingPage */

import { Box, Container, Typography, Button, Card } from "@mui/material";
import { ArrowForward, TrendingUp, Group, Business, CalendarMonth} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

// Import images
import artemisLogo from "../../common/assets/images/ArtemisLogo.png";
import cuLogo from "../../common/assets/images/cu_logo.png";
import fbLogo from "../../common/assets/images/fb_logo.png";
import vfLogo from "../../common/assets/images/vf_logo.png";
import flatironBg from "../../common/assets/images/flatiron_bg.jpg";
import teamPhoto1 from "../../common/assets/images/initial_group_photo.jpeg";
import teamPhoto2 from "../../common/assets/images/teamphoto.jpeg";
import teamPhoto3 from "../../common/assets/images/eventPhoto.jpeg";
import teamPhoto4 from "../../common/assets/images/artemis_fb_group.png";

import "./LandingPage.css";

const LandingPage = (): React.JSX.Element => {
  const theme = useTheme();

  return (
    <Box className="landing-page">
      {/* Hero Section */}
      <Box 
        className="hero-section"
        sx={{
          backgroundImage: `url(${flatironBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <Box className="hero-overlay" />
        <Container maxWidth="lg" className="hero-content">
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Typography 
              variant="h1" 
              component="h1"
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '3rem', md: '4.5rem' },
                textShadow: '0 4px 16px rgba(0,0,0,0.5)'
              }}
            >
              Artemis Consulting
            </Typography>
            <Typography 
              variant="h4" 
              component="h2"
              sx={{
                color: 'white',
                mb: 4,
                fontWeight: 300,
                fontSize: { xs: '1.5rem', md: '2rem' },
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                lineHeight: 1.4
              }}
            >
              Driving Real Impact Through Student Innovation
            </Typography>
            <Typography 
              variant="body1"
              sx={{
                color: 'white',
                mb: 5,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                opacity: 0.95,
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              We connect CU Boulder's top talent with forward-thinking companies, 
              delivering high-impact solutions that drive measurable business results.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' } }}>
              <Button 
                component={Link}
                to="/portfolio"
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: theme.palette.primary.main,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 8,
                  boxShadow: '0 8px 32px rgba(212, 76, 76, 0.4)',
                  '&:hover': { 
                    bgcolor: '#B03A3A',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 40px rgba(212, 76, 76, 0.5)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                View Our Work
                <ArrowForward sx={{ ml: 1 }} />
              </Button>
              <Button 
                component={Link}
                to="/applications"
                variant="outlined" 
                size="large"
                sx={{ 
                  color: 'white',
                  borderColor: 'white',
                  borderWidth: 2,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 8,
                  '&:hover': { 
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Join Our Team
              </Button>
              <Button 
                component={Link}
                to="/hire-artemis"
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  color: theme.palette.primary.main,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderRadius: 8,
                  boxShadow: '0 8px 32px rgba(255, 255, 255, 0.3)',
                  '&:hover': { 
                    bgcolor: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 40px rgba(255, 255, 255, 0.4)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Hire Artemis
                <Business sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box className="about-section section-spacing">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <img 
              src={artemisLogo} 
              alt="Artemis Consulting Logo" 
              className="logo-in-about"
            />
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: theme.palette.text.primary
              }}
            >
              Who We Are
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                maxWidth: 900, 
                mx: 'auto', 
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontWeight: 300
              }}
            >
              Artemis Consulting Club connects driven CU Boulder undergraduates with companies across 
              diverse industries. We tackle real-world projects end-to-end, combining academic rigor 
              with practical deliverables to deliver high-impact solutions and fresh perspectives.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center', mb: 6 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: theme.palette.primary.main }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', lineHeight: 1.8 }}>
                We create meaningful, mutually beneficial partnerships between students and professionals 
                by providing hands-on experience for students and creating measurable value for companies.
              </Typography>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: theme.palette.primary.main }}>
                Our Expertise
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', lineHeight: 1.8 }}>
                Our accumulated expertise spans Business Strategy & Automation, Data Analytics, 
                Artificial Intelligence, Software Design, and Research—delivering solutions that 
                drive competitive advantage.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <img src={cuLogo} alt="CU Boulder Logo" style={{ height: '80px' }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    University of Colorado Boulder
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Registered Student Organization
                  </Typography>
                </Box>
              </Box>
            </Box>
            
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
                <Card className="stat-card">
                  <TrendingUp sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
                  <Typography variant="h3" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                    4
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Industries Served in 2024-2025
                  </Typography>
                </Card>
                <Card className="stat-card">
                  <Business sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
                  <Typography variant="h3" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                    4
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Client Partners Since Founding
                  </Typography>
                </Card>
                <Card className="stat-card">
                  <Group sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
                  <Typography variant="h3" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                    30+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Students Placed on Engagements
                  </Typography>
                </Card>
                <Card className="stat-card">
                  <CalendarMonth sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 2 }} />
                  <Typography variant="h3" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                    2024
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Founding Year
                  </Typography>
                </Card>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Featured Projects Section */}
      <Box className="projects-section section-spacing">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Recent Client Success Stories
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: 600, 
                mx: 'auto', 
                color: theme.palette.text.secondary,
                fontWeight: 300
              }}
            >
              Real projects. Measurable impact. Proven results across diverse industries.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mb: 4 }}>
            <Card className="project-card" sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <img src={fbLogo} alt="FirstBank Logo" style={{ height: '60px', marginRight: '24px' }} />
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    FirstBank
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Treasury & Risk Management
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: theme.palette.text.secondary, mb: 2 }}>
                Designed and implemented a modern Funds Transfer Pricing framework that centralizes 
                interest-rate risk management and guides disciplined loan and deposit pricing across 
                billions of dollars in assets.
              </Typography>
              <Typography variant="caption" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                3-month engagement • 4-member team • Enterprise-scale impact
              </Typography>
            </Card>

            <Card className="project-card" sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <img src={vfLogo} alt="Vital Farms Logo" style={{ height: '60px', marginRight: '24px' }} />
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                    Vital Farms
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Supply Chain Analytics
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: theme.palette.text.secondary, mb: 2 }}>
                Built a scalable ML-powered egg supply forecasting model achieving 75% accuracy, 
                enabling data-driven decision making and strengthening financial planning for 
                the leading pasture-raised egg producer.
              </Typography>
              <Typography variant="caption" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                3-month engagement • 7-member team • 75% forecast accuracy
              </Typography>
            </Card>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary, fontStyle: 'italic' }}>
              Your organization could stand among these success stories
            </Typography>
            <Button 
              component={Link}
              to="/portfolio"
              variant="outlined" 
              size="large"
              sx={{ 
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 8,
                '&:hover': { 
                  bgcolor: theme.palette.primary.main,
                  color: 'white',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              View Full Portfolio
              <ArrowForward sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Team Section */}
      <Box className="team-section section-spacing">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              sx={{ 
                fontWeight: 700, 
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Our Team
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                maxWidth: 600, 
                mx: 'auto', 
                color: theme.palette.text.secondary,
                fontWeight: 300
              }}
            >
              Driven students delivering professional-grade consulting across diverse industries
            </Typography>
          </Box>

          <Box className="team-photo-collage" sx={{ mb: 5 }}>
            <Box className="team-photo-placeholder">
              <img src={teamPhoto1} alt="Team Photo 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box className="team-photo-placeholder">
              <img src={teamPhoto2} alt="Team Photo 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box className="team-photo-placeholder">
              <img src={teamPhoto3} alt="Team Photo 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box className="team-photo-placeholder team-photo-4">
              <img src={teamPhoto4} alt="Team Events" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
              Ready to tackle real-world challenges and build your professional portfolio?
            </Typography>
            <Button 
              component={Link}
              to="/applications"
              variant="contained" 
              size="large"
              sx={{ 
                bgcolor: theme.palette.primary.main,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 8,
                '&:hover': { 
                  bgcolor: '#B03A3A',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Apply Now
              <ArrowForward sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
