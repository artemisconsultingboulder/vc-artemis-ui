/** @module CalendarPage */

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  ChevronLeft,
  ChevronRight,
  Event,
  LocationOn,
  AccessTime,
  Person,
  Close
} from '@mui/icons-material';

import "./CalendarPage.css";

interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location?: string;
  description?: string;
  type: 'meeting' | 'workshop' | 'social' | 'deadline' | 'presentation' | 'event';
  organizer?: string;
}

const CalendarPage = (): React.JSX.Element => {
  const [currentDate, setCurrentDate] = useState(new Date()); // August 2024 (month is 0-indexed)
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Sample events data - in a real app, this would come from an API
    const sampleEvents: CalendarEvent[] = [
      {
        id: 1,
        title: "First Day of CU Classes",
        date: "2025-08-25",
        time: "8:00 AM",
        location: "CU Boulder Campus",
        description: "Welcome back! First day of fall semester classes at CU Boulder.",
        type: "meeting",
        organizer: "University of Colorado Boulder"
      },
      {
        id: 2,
        title: "New Website Launch",
        date: "2025-06-30",
        time: "8:00 AM",
        location: "Remote",
        description: "We are launching our new website! Please check it out and let us know what you think.",
        type: "event",
        organizer: "Artemis Consulting"
      },
      {
        id: 3,
        title: "Fall 2025 Application Deadline",
        date: "2025-09-15",
        time: "11:59 PM",
        location: "Remote",
        description: "The application deadline for Fall 2025 is September 15th. Please submit your application by then.",
        type: "event",
        organizer: "Artemis Consulting"
      }

    ];
    
    setEvents(sampleEvents);
  }, []);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (date: Date) => {
    const dateString = date.toISOString().split('T')[0];
    return events.filter(event => event.date === dateString);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedEvent(null);
  };

  const getEventTypeColor = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'meeting': return '#D44C4C';
      case 'workshop': return '#2196F3';
      case 'social': return '#4CAF50';
      case 'deadline': return '#FF9800';
      case 'presentation': return '#9C27B0';
      case 'event': return '#757575';
      default: return '#757575';
    }
  };

  const getEventTypeLabel = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'meeting': return 'Meeting';
      case 'workshop': return 'Workshop';
      case 'social': return 'Social';
      case 'deadline': return 'Deadline';
      case 'presentation': return 'Presentation';
      case 'event': return 'Event';
      default: return 'Event';
    }
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="calendar-day empty" />
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dayEvents = getEventsForDate(date);
      const isToday = new Date().toDateString() === date.toDateString();

      days.push(
        <div
          key={day}
          className={`calendar-day ${isToday ? 'today' : ''}`}
        >
          <span className="day-number">{day}</span>
          {dayEvents.length > 0 && (
            <div className="event-list">
              {dayEvents.map((event, index) => (
                <div
                  key={index}
                  className="event-item-inline"
                  style={{ backgroundColor: getEventTypeColor(event.type) }}
                  onClick={() => handleEventClick(event)}
                >
                  <span className="event-title-inline">{event.title}</span>
                  <span className="event-time-inline">{event.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  // Get upcoming events from today's date
  const upcomingEvents = events
    .filter(event => new Date(event.date + 'T00:00:00') >= new Date())
    .sort((a, b) => new Date(a.date + 'T00:00:00').getTime() - new Date(b.date + 'T00:00:00').getTime())
    .slice(0, 4);

  return (
    <div className="calendar-page">
      <Container maxWidth="lg">
        <Box className="calendar-header">
          <Typography variant="h2" component="h1" className="page-title">
            Event Calendar
          </Typography>
          <Typography variant="h6" component="p" className="page-subtitle">
            Stay up to date with Artemis Consulting events and important dates
          </Typography>
        </Box>

        <div className="calendar-layout">
          {/* Calendar Grid */}
          <div className="calendar-section">
            <Card className="calendar-card">
              <CardContent>
                <Box className="calendar-nav">
                  <IconButton onClick={() => navigateMonth('prev')} className="nav-button">
                    <ChevronLeft />
                  </IconButton>
                  <Typography variant="h4" component="h2" className="month-title">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </Typography>
                  <IconButton onClick={() => navigateMonth('next')} className="nav-button">
                    <ChevronRight />
                  </IconButton>
                </Box>

                <div className="calendar-grid">
                  <div className="calendar-header-row">
                    {daysOfWeek.map(day => (
                      <div key={day} className="day-header">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="calendar-body">
                    {renderCalendarDays()}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events Sidebar */}
          <div className="sidebar-section">
            <Card className="upcoming-events-card">
              <CardContent>
                <Typography variant="h5" component="h3" className="events-title">
                  Upcoming Events
                </Typography>
                <Box className="events-list">
                  {upcomingEvents.length > 0 ? (
                    upcomingEvents.map(event => (
                      <Card key={event.id} className="event-item" onClick={() => handleEventClick(event)}>
                        <CardContent className="event-content">
                          <Box className="event-header">
                            <Typography variant="h6" component="h4" className="event-title">
                              {event.title}
                            </Typography>
                            <Chip 
                              label={getEventTypeLabel(event.type)}
                              size="small"
                              style={{ 
                                backgroundColor: getEventTypeColor(event.type),
                                color: 'white'
                              }}
                            />
                          </Box>
                          <Box className="event-details">
                            <Box className="event-detail">
                              <Event className="detail-icon" />
                              <Typography variant="body2">
                                {new Date(event.date + 'T00:00:00').toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric' 
                                })}
                              </Typography>
                            </Box>
                            <Box className="event-detail">
                              <AccessTime className="detail-icon" />
                              <Typography variant="body2">{event.time}</Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      No upcoming events
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Event Details Dialog */}
        <Dialog 
          open={isDialogOpen} 
          onClose={handleCloseDialog}
          maxWidth="sm"
          fullWidth
          className="event-dialog"
        >
          {selectedEvent && (
            <>
              <DialogTitle className="dialog-title">
                <Box className="dialog-header">
                  <Typography variant="h5" component="h2">
                    {selectedEvent.title}
                  </Typography>
                  <IconButton onClick={handleCloseDialog} className="close-button">
                    <Close />
                  </IconButton>
                </Box>
                <Chip 
                  label={getEventTypeLabel(selectedEvent.type)}
                  size="small"
                  style={{ 
                    backgroundColor: getEventTypeColor(selectedEvent.type),
                    color: 'white',
                    marginTop: '8px'
                  }}
                />
              </DialogTitle>
              <DialogContent className="dialog-content">
                <Box className="event-details-dialog">
                  <Box className="event-detail">
                    <Event className="detail-icon" />
                    <Typography variant="body1">
                      {new Date(selectedEvent.date + 'T00:00:00').toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </Typography>
                  </Box>
                  <Box className="event-detail">
                    <AccessTime className="detail-icon" />
                    <Typography variant="body1">{selectedEvent.time}</Typography>
                  </Box>
                  {selectedEvent.location && (
                    <Box className="event-detail">
                      <LocationOn className="detail-icon" />
                      <Typography variant="body1">{selectedEvent.location}</Typography>
                    </Box>
                  )}
                  {selectedEvent.organizer && (
                    <Box className="event-detail">
                      <Person className="detail-icon" />
                      <Typography variant="body1">{selectedEvent.organizer}</Typography>
                    </Box>
                  )}
                  {selectedEvent.description && (
                    <Box className="event-description-dialog">
                      <Typography variant="h6" component="h3" gutterBottom>
                        Description
                      </Typography>
                      <Typography variant="body1">
                        {selectedEvent.description}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} variant="contained" className="close-dialog-button">
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </div>
  );
};

export default CalendarPage; 