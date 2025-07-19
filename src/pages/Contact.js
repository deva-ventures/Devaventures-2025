import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { contactInfo } from '../data/mockData';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h1 className="contact-title">Say Hello</h1>
              <p className="contact-subtitle">
                Get in touch with us. We'd love to hear from you and answer any questions you might have.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form and Info Section */}
      <section className="contact-content py-5">
        <Container>
          <Row>
            {/* Contact Form */}
            <Col lg={8} className="mb-5">
              <Card className="contact-form-card">
                <Card.Body className="p-4">
                  <h2 className="form-title mb-4">Send us a Message</h2>
                  
                  {isSubmitted && (
                    <Alert variant="success" className="mb-4">
                      Thank you for your message! We'll get back to you soon.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>First Name *</Form.Label>
                          <Form.Control
                            type="text"
                            {...register('firstName', { required: 'First name is required' })}
                            isInvalid={!!errors.firstName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.firstName?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Last Name *</Form.Label>
                          <Form.Control
                            type="text"
                            {...register('lastName', { required: 'Last name is required' })}
                            isInvalid={!!errors.lastName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.lastName?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Email *</Form.Label>
                          <Form.Control
                            type="email"
                            {...register('email', { 
                              required: 'Email is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                              }
                            })}
                            isInvalid={!!errors.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="tel"
                            {...register('phone')}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Subject *</Form.Label>
                          <Form.Select
                            {...register('subject', { required: 'Please select a subject' })}
                            isInvalid={!!errors.subject}
                          >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="partnership">Partnership</option>
                            <option value="media">Media Inquiry</option>
                            <option value="support">Support</option>
                            <option value="other">Other</option>
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors.subject?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>How did you hear about us?</Form.Label>
                          <Form.Select {...register('source')}>
                            <option value="">Select an option</option>
                            <option value="social-media">Social Media</option>
                            <option value="search">Search Engine</option>
                            <option value="referral">Referral</option>
                            <option value="advertisement">Advertisement</option>
                            <option value="other">Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        {...register('message', { 
                          required: 'Message is required',
                          minLength: {
                            value: 10,
                            message: 'Message must be at least 10 characters'
                          }
                        })}
                        isInvalid={!!errors.message}
                        placeholder="Tell us more about your inquiry..."
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message?.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg"
                      className="submit-btn"
                    >
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Information */}
            <Col lg={4}>
              <div className="contact-info-sidebar">
                {/* USA Office */}
                <Card className="contact-info-card mb-4">
                  <Card.Body>
                    <div className="contact-office-header">
                      <i className="fas fa-flag-usa contact-office-icon"></i>
                      <h3 className="contact-office-title">USA Headquarters</h3>
                    </div>
                    <div className="contact-details">
                      <div className="contact-item">
                        <i className="fas fa-map-marker-alt contact-icon"></i>
                        <span>{contactInfo.usa.address}</span>
                      </div>
                      <div className="contact-item">
                        <i className="fas fa-phone-alt contact-icon"></i>
                        <span>{contactInfo.usa.phone1}</span>
                      </div>
                      <div className="contact-item">
                        <i className="fas fa-phone-alt contact-icon"></i>
                        <span>{contactInfo.usa.phone2}</span>
                      </div>
                      <div className="contact-item">
                        <i className="fas fa-envelope contact-icon"></i>
                        <a href={`mailto:${contactInfo.usa.email}`} className="contact-link">
                          {contactInfo.usa.email}
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                {/* India Office */}
                <Card className="contact-info-card">
                  <Card.Body>
                    <div className="contact-office-header">
                      <i className="fas fa-flag contact-office-icon"></i>
                      <h3 className="contact-office-title">India Office</h3>
                    </div>
                    <div className="contact-details">
                      <div className="contact-item">
                        <i className="fas fa-map-marker-alt contact-icon"></i>
                        <span>{contactInfo.india.address}</span>
                      </div>
                      <div className="contact-item">
                        <i className="fas fa-phone-alt contact-icon"></i>
                        <span>{contactInfo.india.phone}</span>
                      </div>
                      <div className="contact-item">
                        <i className="fas fa-envelope contact-icon"></i>
                        <a href={`mailto:${contactInfo.india.email}`} className="contact-link">
                          {contactInfo.india.email}
                        </a>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                {/* Business Hours */}
                <Card className="business-hours-card mt-4">
                  <Card.Body>
                    <h4 className="business-hours-title">
                      <i className="fas fa-clock me-2"></i>
                      Business Hours
                    </h4>
                    <div className="business-hours">
                      <div className="hours-item">
                        <span className="day">Monday - Friday:</span>
                        <span className="time">9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="hours-item">
                        <span className="day">Saturday:</span>
                        <span className="time">10:00 AM - 4:00 PM EST</span>
                      </div>
                      <div className="hours-item">
                        <span className="day">Sunday:</span>
                        <span className="time">Closed</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .contact-hero {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
        }
        
        .contact-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .contact-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .contact-form-card {
          border: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border-radius: 15px;
        }
        
        .form-title {
          font-size: 2rem;
          font-weight: 600;
          color: #1e3c72;
        }
        
        .submit-btn {
          background: linear-gradient(135deg, #f4891d 0%, #f68b1f 100%);
          border: none;
          padding: 0.75rem 2rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .submit-btn:hover {
          background: linear-gradient(135deg, #e67e1a 0%, #e57a1a 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(244, 137, 29, 0.3);
        }
        
        .contact-info-card {
          border: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border-radius: 15px;
          transition: transform 0.3s ease;
        }
        
        .contact-info-card:hover {
          transform: translateY(-5px);
        }
        
        .contact-office-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .contact-office-icon {
          font-size: 1.5rem;
          color: #f4891d;
        }
        
        .contact-office-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #1e3c72;
          margin: 0;
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        
        .contact-icon {
          color: #f4891d;
          font-size: 1rem;
          min-width: 16px;
          margin-top: 0.2rem;
        }
        
        .contact-item span {
          color: #666;
          line-height: 1.4;
          font-size: 0.9rem;
        }
        
        .contact-link {
          color: #f4891d;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .contact-link:hover {
          color: #e67e1a;
          text-decoration: none;
        }
        
        .business-hours-card {
          border: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border-radius: 15px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .business-hours-title {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1e3c72;
          margin-bottom: 1rem;
        }
        
        .business-hours {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .hours-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid #dee2e6;
        }
        
        .hours-item:last-child {
          border-bottom: none;
        }
        
        .day {
          font-weight: 600;
          color: #1e3c72;
        }
        
        .time {
          color: #666;
          font-size: 0.9rem;
        }
        
        .form-label {
          font-weight: 600;
          color: #1e3c72;
        }
        
        .form-control, .form-select {
          border: 2px solid #e9ecef;
          border-radius: 8px;
          padding: 0.75rem;
          transition: border-color 0.3s ease;
        }
        
        .form-control:focus, .form-select:focus {
          border-color: #f4891d;
          box-shadow: 0 0 0 0.2rem rgba(244, 137, 29, 0.25);
        }
        
        @media (max-width: 991.98px) {
          .contact-title {
            font-size: 2.5rem;
          }
          
          .contact-subtitle {
            font-size: 1.1rem;
          }
          
          .form-title {
            font-size: 1.8rem;
          }
        }
        
        @media (max-width: 767.98px) {
          .contact-title {
            font-size: 2rem;
          }
          
          .contact-subtitle {
            font-size: 1rem;
          }
          
          .hours-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact; 