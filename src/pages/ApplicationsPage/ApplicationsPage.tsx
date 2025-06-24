/** @module ApplicationsPage */

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert
} from '@mui/material';
import {
  CheckCircle,
  TrendingUp,
  Hub,
  School,
  WorkOutline,
  CloudUpload
} from '@mui/icons-material';

import "./ApplicationsPage.css";

import kunaiLogo from "../../common/assets/images/alumniCompanyLogos/kunai_logo.png";
import trinidadLogo from "../../common/assets/images/alumniCompanyLogos/trinidad_benham_logo.jpeg";
import intradoLogo from "../../common/assets/images/alumniCompanyLogos/intrado_logo.png";
import uberLogo from "../../common/assets/images/alumniCompanyLogos/Uber_logo.svg";
import jpMorganLogo from "../../common/assets/images/alumniCompanyLogos/jpmorgan_logo.png";
import comcastLogo from "../../common/assets/images/alumniCompanyLogos/Comcast_logo.png";
import amazonLogo from "../../common/assets/images/alumniCompanyLogos/amazon_logo.png";
import sasLogo from "../../common/assets/images/alumniCompanyLogos/sas_logo.png";
import googleLogo from "../../common/assets/images/alumniCompanyLogos/google_logo.png";
import firstBankLogo from "../../common/assets/images/alumniCompanyLogos/fb_logo.png";
import zooxLogo from "../../common/assets/images/alumniCompanyLogos/zoox_logo.png";
import airIndiaLogo from "../../common/assets/images/alumniCompanyLogos/air_india_logo.png";
import adobeLogo from "../../common/assets/images/alumniCompanyLogos/adobe_logo.png";

const ApplicationsPage = (): React.JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    major: '',
    email: '',
    phone: '',
    resume: null as File | null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Connect to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const benefits = [
    {
      icon: <TrendingUp />,
      title: "Real Client Experience",
      description: "Work on actual business challenges with measurable impact"
    },
    {
      icon: <Hub />,
      title: "Professional Network",
      description: "Connect with industry leaders and build lasting relationships"
    },
    {
      icon: <School />,
      title: "Skill Development",
      description: "Master data analytics, strategy consulting, and business analysis"
    },
    {
      icon: <WorkOutline />,
      title: "Career Advancement",
      description: "Portfolio projects that distinguish you in job applications"
    }
  ];

  const alumniCompanies = [
    { name: "Kunai", logo: kunaiLogo },
    { name: "Amazon", logo: amazonLogo },
    { name: "Trinidad Benham", logo: trinidadLogo},
    { name: "Intrado", logo: intradoLogo},
    { name: "Uber", logo: uberLogo},
    { name: "J.P. Morgan - Chase", logo: jpMorganLogo },
    { name: "Comcast", logo: comcastLogo },
    { name: "SAS", logo: sasLogo },
    { name: "Google", logo: googleLogo },
    { name: "FirstBank", logo: firstBankLogo },
    { name: "Zoox", logo: zooxLogo },
    { name: "Air India", logo: airIndiaLogo },
    { name: "Adobe", logo: adobeLogo }
  ];

  return (
    <div className="applications-page">
      <Container maxWidth="xl">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, gap: 4 }} className="applications-content">
          {/* Left Content Section */}
          <Box>
            <div className="applications-header">
              <Typography variant="h2" component="h1" className="applications-title">
                Join Artemis Consulting
              </Typography>
              <Typography variant="h5" component="h2" className="applications-subtitle">
                Shape the future of business consulting at CU Boulder
              </Typography>
              <Typography variant="body1" className="applications-description">
                Artemis Consulting Club offers ambitious students the opportunity to work on 
                real business challenges, develop professional skills, and build a network 
                that lasts a lifetime. Join our community of innovators, problem-solvers, 
                and future business leaders.
              </Typography>
            </div>

            <div className="benefits-section">
              <Typography variant="h4" component="h3" className="section-title">
                Why Join Artemis?
              </Typography>
              <List className="benefits-list">
                {benefits.map((benefit, index) => (
                  <ListItem key={index} className="benefit-item">
                    <ListItemIcon className="benefit-icon">
                      {benefit.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={benefit.title}
                      secondary={benefit.description}
                      className="benefit-text"
                    />
                  </ListItem>
                ))}
              </List>
            </div>

            <div className="alumni-section">
              <Typography variant="h4" component="h3" className="section-title">
                Where Our Alumni Have Gone
              </Typography>
              <Typography variant="body1" className="alumni-description" align="center">
                Our members have gone on to prestigious positions at top consulting firms, 
                investment banks, and technology companies worldwide.
              </Typography>
              <div className="alumni-logos-grid">
                {alumniCompanies.map((company, index) => (
                  <div key={index} className="company-logo-container">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="company-logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Box>

          {/* Right Form Section */}
          <Box>
            <Paper className="application-form-container" elevation={3}>
              <div className="form-header">
                <Typography variant="h4" component="h3" className="form-title">
                  Apply Now
                </Typography>
                <Typography variant="body2" className="form-subtitle">
                  Applications for 2025-26 Academic Year
                </Typography>
              </div>

              {submitted ? (
                <Alert severity="success" className="success-alert">
                  <Typography variant="h6">Application Submitted!</Typography>
                  <Typography variant="body2">
                    Thank you for your interest. We'll review your application and get back to you soon.
                  </Typography>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit} className="application-form">
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    required
                    className="form-field"
                  />

                  <FormControl fullWidth variant="outlined" className="form-field">
                    <InputLabel>Year in College (2025-26)</InputLabel>
                    <Select
                      value={formData.year}
                      onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                      label="Year in College (2025-26)"
                      required
                    >
                      <MenuItem value="freshman">Freshman</MenuItem>
                      <MenuItem value="sophomore">Sophomore</MenuItem>
                      <MenuItem value="junior">Junior</MenuItem>
                      <MenuItem value="senior">Senior</MenuItem>
                      <MenuItem value="graduate">Graduate Student</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    fullWidth
                    label="Major"
                    variant="outlined"
                    value={formData.major}
                    onChange={handleInputChange('major')}
                    required
                    className="form-field"
                  />

                  <TextField
                    fullWidth
                    label="CU Boulder Email"
                    variant="outlined"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    required
                    className="form-field"
                    helperText="Please use your @colorado.edu email address"
                  />

                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    required
                    className="form-field"
                  />

                  <div className="file-upload-section">
                    <input
                      accept=".pdf,.doc,.docx"
                      style={{ display: 'none' }}
                      id="resume-upload"
                      type="file"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="resume-upload">
                      <Button
                        variant="outlined"
                        component="span"
                        startIcon={<CloudUpload />}
                        fullWidth
                        className="upload-button"
                      >
                        {formData.resume ? formData.resume.name : 'Upload Resume'}
                      </Button>
                    </label>
                    <Typography variant="caption" className="upload-help">
                      PDF, DOC, or DOCX format
                    </Typography>
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    className="submit-button"
                    disabled={!formData.name || !formData.year || !formData.major || !formData.email || !formData.phone}
                  >
                    Submit Application
                  </Button>

                  <Typography variant="caption" className="form-notice">
                    By submitting this application, you agree to be contacted by Artemis Consulting Club 
                    regarding your application and club activities.
                  </Typography>
                </form>
              )}
            </Paper>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ApplicationsPage; 