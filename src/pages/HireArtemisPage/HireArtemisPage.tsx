/** @module HireArtemisPage */

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  TextField,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider
} from '@mui/material';
import {
  TrendingUp,
  Analytics,
  Lightbulb,
  AccountBalance,
  CheckCircle,
  ArrowForward,
  Star,
  Business,
  DataUsage,
  Psychology
} from '@mui/icons-material';

// Removed unused imports

import "./HireArtemisPage.css";

const HireArtemisPage = (): React.JSX.Element => {
  const [contactForm, setContactForm] = useState({
    name: '',
    company: '',
    email: '',
    description: ''
  });

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setContactForm(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Connect to backend
    console.log('Contact form submitted:', contactForm);
  };

  const expertiseAreas = [
    {
      category: "Analytics & Data",
      skills: ["Data Analytics", "Business Intelligence", "Predictive Modeling", "Performance Metrics"]
    },
    {
      category: "Strategy & Growth", 
      skills: ["Strategic Consulting", "Market Analysis", "Growth Strategy", "Investment Analysis"]
    },
    {
      category: "Operations & Finance",
      skills: ["Process Optimization", "Financial Modeling", "Risk Assessment", "Automation Strategy"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Scoping",
      description: "We dive deep into your business challenges, objectives, and requirements to craft a tailored solution approach."
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Our team develops a comprehensive project plan with clear deliverables, timelines, and success metrics."
    },
    {
      step: "03",
      title: "Execution & Analysis",
      description: "We execute the project with regular check-ins, applying cutting-edge methodologies and industry best practices."
    },
    {
      step: "04",
      title: "Delivery & Impact",
      description: "We deliver actionable insights and recommendations, with ongoing support to ensure successful implementation."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "VP of Strategy, FirstBank",
      company: "FirstBank",
      content: "Artemis delivered exceptional FTP modeling that transformed how we approach treasury management. Their insights were game-changing.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      title: "Head of Analytics, Vital Farms",
      company: "Vital Farms",
      content: "The forecasting model Artemis built achieved 75% accuracy and revolutionized our supply chain planning. Outstanding work.",
      rating: 5
    },
    {
      name: "Jennifer Park",
      title: "Operations Director, SmashBurger",
      company: "SmashBurger",
      content: "Their elasticity analysis provided clear, data-driven pricing strategies that directly impacted our bottom line. Highly recommended.",
      rating: 5
    }
  ];

  return (
    <div className="hire-artemis-page">
      {/* Hero Section */}
      <section className="hero-section-simple">
        <Container maxWidth="lg" className="hero-content">
          <div className="hero-text">
            <Typography variant="h1" component="h1" className="hero-title">
              Partner with Boulder's
              <span className="hero-highlight"> Premier Consulting Team</span>
            </Typography>
            <Typography variant="h5" component="h2" className="hero-subtitle">
              Unlock your business potential with data-driven insights, strategic guidance, 
              and innovative solutions from CU Boulder's top consulting talent.
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              className="hero-cta"
              endIcon={<ArrowForward />}
              href="#contact"
            >
              Start Your Project
            </Button>
          </div>
        </Container>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <Container maxWidth="lg">
          <div className="section-header">
            <Typography variant="h2" component="h2" className="section-title">
              Our Expertise
            </Typography>
            <Typography variant="h6" component="p" className="section-subtitle">
              Areas where we deliver exceptional results
            </Typography>
          </div>
          
          <Box className="expertise-categories">
            {expertiseAreas.map((category, categoryIndex) => (
              <div key={categoryIndex} className="expertise-category">
                <Typography variant="h5" className="category-title">
                  {category.category}
                </Typography>
                <Box className="category-skills">
                  {category.skills.map((skill, skillIndex) => (
                    <Chip 
                      key={skillIndex} 
                      label={skill} 
                      className="expertise-chip"
                      size="medium"
                    />
                  ))}
                </Box>
              </div>
            ))}
          </Box>
        </Container>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <Container maxWidth="lg">
          <div className="section-header">
            <Typography variant="h2" component="h2" className="section-title">
              Our Process
            </Typography>
            <Typography variant="h6" component="p" className="section-subtitle">
              A proven methodology that delivers exceptional results
            </Typography>
          </div>

          <div className="process-timeline">
            {process.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.step}</div>
                <div className="step-content">
                  <Typography variant="h5" component="h3" className="step-title">
                    {step.title}
                  </Typography>
                  <Typography variant="body1" className="step-description">
                    {step.description}
                  </Typography>
                </div>
                {index < process.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <Container maxWidth="lg">
          <div className="section-header">
            <Typography variant="h2" component="h2" className="section-title">
              Client Success Stories
            </Typography>
            <Typography variant="h6" component="p" className="section-subtitle">
              See what industry leaders say about working with Artemis
            </Typography>
          </div>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="star-icon" />
                    ))}
                  </div>
                  <Typography variant="body1" className="testimonial-text">
                    "{testimonial.content}"
                  </Typography>
                  <div className="testimonial-author">
                    <Avatar className="author-avatar">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <div className="author-info">
                      <Typography variant="subtitle1" className="author-name">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" className="author-title">
                        {testimonial.title}
                      </Typography>
                      <Typography variant="body2" className="author-company">
                        {testimonial.company}
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6 }}>
            <div className="contact-info">
              <Typography variant="h2" component="h2" className="contact-title">
                Ready to Transform Your Business?
              </Typography>
              <Typography variant="h6" component="p" className="contact-subtitle">
                Let's discuss how Artemis can help you achieve your goals with innovative, 
                data-driven solutions tailored to your unique challenges.
              </Typography>
              
              <div className="contact-highlights">
                <div className="highlight-item">
                  <CheckCircle className="highlight-icon" />
                  <Typography variant="body1">Free initial consultation</Typography>
                </div>
                <div className="highlight-item">
                  <CheckCircle className="highlight-icon" />
                  <Typography variant="body1">Custom project scoping</Typography>
                </div>
                <div className="highlight-item">
                  <CheckCircle className="highlight-icon" />
                  <Typography variant="body1">Flexible engagement models</Typography>
                </div>
                <div className="highlight-item">
                  <CheckCircle className="highlight-icon" />
                  <Typography variant="body1">Rapid turnaround times</Typography>
                </div>
              </div>

              
            </div>

            <Paper className="contact-form-container" elevation={3}>
              <Typography variant="h4" component="h3" className="form-title">
                Get in Touch
              </Typography>
              <form onSubmit={handleSubmit} className="contact-form">
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mb: 2 }}>
                  <TextField
                    fullWidth
                    label="Your Name *"
                    variant="outlined"
                    value={contactForm.name}
                    onChange={handleInputChange('name')}
                    required
                    className="form-field"
                  />
                  <TextField
                    fullWidth
                    label="Company *"
                    variant="outlined"
                    value={contactForm.company}
                    onChange={handleInputChange('company')}
                    required
                    className="form-field"
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <TextField
                    fullWidth
                    label="Email *"
                    variant="outlined"
                    type="email"
                    value={contactForm.email}
                    onChange={handleInputChange('email')}
                    required
                    className="form-field"
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <TextField
                    fullWidth
                    label="Project Description (Optional)"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={contactForm.description}
                    onChange={handleInputChange('description')}
                    placeholder="Tell us about your project, challenges, and goals..."
                    className="form-field"
                  />
                </Box>
                
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  className="submit-button"
                  endIcon={<ArrowForward />}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default HireArtemisPage; 