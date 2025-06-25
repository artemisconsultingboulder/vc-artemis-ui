/** @module HireArtemisPage */

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  TextField
} from '@mui/material';
import {
  ArrowForward,
  CheckCircle,
  Star,
  AccountBalanceWallet,
  RocketLaunch,
  Insights
} from '@mui/icons-material';

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
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const expertiseAreas = [
    {
      icon: <Insights />,
      title: "Analytics & Intelligence",
      description: "Transform raw data into actionable insights that drive strategic decision-making",
      skills: ["Advanced Analytics", "Machine Learning", "Business Intelligence", "Predictive Modeling", "Data Visualization", "Statistical Analysis"]
    },
    {
      icon: <RocketLaunch />,
      title: "Strategy & Growth",
      description: "Develop comprehensive strategies that accelerate growth and maximize market opportunities",
      skills: ["Strategic Planning", "Market Research", "Competitive Analysis", "Growth Hacking", "Go-to-Market", "Digital Transformation"]
    },
    {
      icon: <AccountBalanceWallet />,
      title: "Operations & Finance",
      description: "Optimize operations and financial performance through innovative processes and technology",
      skills: ["Process Optimization", "Financial Modeling", "Risk Management", "Supply Chain", "Cost Reduction", "Automation"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Scoping",
      description: "We discuss your business challenges, objectives, and requirements to craft a tailored approach."
    },
    {
      number: "02",
      title: "Strategic Planning",
      description: "Our team develops a comprehensive project plan with clear deliverables, timelines, and success metrics."
    },
    {
      number: "03",
      title: "Execution & Analysis",
      description: "We execute the project with regular check-ins, applying cutting-edge methodologies and industry best practices."
    },
    {
      number: "04",
      title: "Delivery & Impact",
      description: "We deliver actionable insights and recommendations, with ongoing support to ensure successful implementation."
    }
  ];

  const testimonials = [
    {
      name: "Brian Seeley",
      title: "Executive Vice President, FirstBank",
      content: "The Artemis team was so thorough and impressive to work with. They will be a true asset to any company! If you need help with financial modeling I now know a few young professionals I can recommend.",
      rating: 5,
      initials: "BS"
    }
  ];

  const stats = [
    { number: "4", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "4 months", label: "Avg. Engagement Length" }
  ];

  const highlights = [
    "Free initial consultation",
    "Custom project scoping",
    "Flexible engagement models",
    "Rapid turnaround times"
  ];

  useEffect(() => {
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hire-artemis-page">
      {/* Hero Section */}
      <section className="hero-section">
        <Container maxWidth="lg" className="hero-container">
          <div className="hero-content">
            <Typography variant="h1" component="h1" className="hero-title">
              Partner with Boulder's
              <span className="hero-highlight"> Premier Consulting Team</span>
            </Typography>
            <Typography variant="h5" component="p" className="hero-subtitle">
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
      <section className="section section-alt">
        <Container maxWidth="lg">
          <div className="section-header">
            <Typography variant="h2" component="h2" className="section-title">
              Our Expertise
            </Typography>
            <Typography variant="h6" component="p" className="section-subtitle">
              Areas where we deliver exceptional results
            </Typography>
          </div>
          
          <div className="expertise-container">
            <div className="expertise-intro">
              <Typography variant="h3" component="h3" className="expertise-intro-title">
                Transforming Ideas Into Impact
              </Typography>
              <Typography variant="body1" className="expertise-intro-text">
                Our multidisciplinary team combines deep technical expertise with strategic thinking 
                to deliver solutions that don't just meet requirements—they exceed expectations and 
                drive measurable business outcomes.
              </Typography>
              <div className="expertise-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="expertise-areas">
                             {expertiseAreas.map((area, index) => (
                 <div key={index} className="expertise-area fade-in">
                   <div className="area-header">
                     <div className="area-icon">{area.icon}</div>
                     <div className="area-content">
                       <Typography variant="h4" component="h4" className="area-title">
                         {area.title}
                       </Typography>
                       <Typography variant="body1" className="area-description">
                         {area.description}
                       </Typography>
                     </div>
                   </div>
                   <div className="area-skills">
                     {area.skills.map((skill, skillIndex) => (
                       <span key={skillIndex} className="skill-tag">
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section">
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
            {processSteps.map((step, index) => (
              <div key={index} className="process-step fade-in">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <Typography variant="h3" component="h3" className="step-title">
                    {step.title}
                  </Typography>
                  <Typography variant="body1" className="step-description">
                    {step.description}
                  </Typography>
                </div>
                {index < processSteps.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="section section-alt">
        <Container maxWidth="lg">
          <div className="section-header">
            <Typography variant="h2" component="h2" className="section-title">
              Client Success Stories
            </Typography>
            <Typography variant="h6" component="p" className="section-subtitle">
              See what industry leaders say about working with Artemis
            </Typography>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card fade-in">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star-icon" />
                  ))}
                </div>
                <Typography variant="body1" className="testimonial-text">
                  "{testimonial.content}"
                </Typography>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.initials}
                  </div>
                  <div className="author-info">
                    <Typography variant="h4" component="h4" className="author-name">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" className="author-title">
                      {testimonial.title}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <Container maxWidth="lg">
          <div className="contact-content">
            <div className="contact-info">
              <Typography variant="h2" component="h2" className="contact-title">
                Ready to Transform Your Business?
              </Typography>
              <Typography variant="body1" className="contact-subtitle">
                Let's discuss how Artemis can help you achieve your goals with innovative, 
                data-driven solutions tailored to your unique challenges.
              </Typography>
              
              <ul className="contact-highlights">
                {highlights.map((highlight, index) => (
                  <li key={index}>
                    <CheckCircle className="check-icon" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Paper className="contact-form" elevation={0}>
              <Typography variant="h3" component="h3" className="form-title">
                Get in Touch
              </Typography>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <TextField
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange('name')}
                      required
                      fullWidth
                      variant="outlined"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company *</label>
                    <TextField
                      id="company"
                      name="company"
                      value={contactForm.company}
                      onChange={handleInputChange('company')}
                      required
                      fullWidth
                      variant="outlined"
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <TextField
                    id="email"
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleInputChange('email')}
                    required
                    fullWidth
                    variant="outlined"
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="description">Project Description (Optional)</label>
                  <TextField
                    id="description"
                    name="description"
                    multiline
                    rows={4}
                    value={contactForm.description}
                    onChange={handleInputChange('description')}
                    placeholder="Tell us about your project, challenges, and goals..."
                    fullWidth
                    variant="outlined"
                    className="form-input"
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  className="submit-btn"
                  endIcon={<ArrowForward />}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HireArtemisPage; 