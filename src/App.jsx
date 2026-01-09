import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, Menu, X, ChevronRight } from 'lucide-react';

export default function RecruitmentPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    resume: null,
    coverLetter: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: 'Head of Business Development',
      department: 'Sales',
      location: 'Dubai, UAE / Remote',
      type: 'Full-time',
      salary: '$75k - $110k',
      posted: '2 days ago',
      description: {
        about: "We're looking for a Senior Business Development Manager to lead partnerships and GTM efforts at Syncrate. You'll work closely with the founding team to build strategic relationships with RWA issuers, protocols, and ecosystem partners, helping shape the adoption of critical infrastructure for onchain real-world assets.\n\nThis role offers the opportunity to define our commercial strategy from the ground up, influence product direction, and play a key role in scaling Syncrate in a fast-moving, founder-led environment.",
        responsibilities: [
          'Lead and execute Syncrate’s partnerships and go-to-market strategy across RWA issuers, protocols, and ecosystem partners',
          'Source, negotiate, and close strategic partnerships that drive real usage and routed volume on the network',
          'Work closely with the founders and product team to align commercial needs with product and protocol design',
          'Represent Syncrate in high-level discussions with partners, investors, and industry stakeholders',
          'Build and manage early BD processes, pipelines, and key partnership metrics as the company scales',
        ],
        requirements: [
          '5+ years of experience in business development, partnerships, or strategy within Web3, fintech, or financial infrastructure',
          'Strong understanding of tokenization, RWAs, DeFi, or blockchain interoperability (direct experience preferred)',
          'Proven track record of sourcing and closing high-value partnerships or commercial deals',
          'Ability to operate in a fast-moving, early-stage environment and work closely with founders',
          'Strong communication, negotiation, and relationship-building skills with senior stakeholders',
          "Bachelor's degree in Business Manager or equivalent experience"
        ],
        niceToHave: [
          'Existing relationships with RWA issuers, DeFi protocols, or Web3 infrastructure teams',
          'Experience working with early-stage startups or helping take a product from pre-launch to market',
          'Familiarity with token-based business models, ecosystem growth, or go-to-market strategy in crypto'
        ],
        benefits: [
          'Competitive salary and token equity package',
          'Comprehensive health, dental, and vision insurance',
          'Unlimited PTO and flexible working hours',
          'Remote-first culture with optional office access',
          'Professional development budget',
          'Opportunity to travel around the world and attend some of the biggest blockchain conferences',
          'Home office stipend'
        ]
      }
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Design',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      salary: '$120k - $170k',
      posted: '5 days ago',
      description: {
        about: "We're seeking a talented Product Designer to help shape the future of our platform. You'll work closely with product managers and engineers to create intuitive, beautiful experiences that delight our users.\n\nThis role offers the opportunity to work on challenging design problems and make a meaningful impact on millions of users.",
        responsibilities: [
          'Design end-to-end user experiences for web and mobile platforms',
          'Create wireframes, prototypes, and high-fidelity mockups',
          'Conduct user research and usability testing',
          'Collaborate with engineers to ensure design implementation quality',
          'Maintain and evolve our design system',
          'Present design concepts to stakeholders'
        ],
        requirements: [
          '4+ years of product design experience',
          'Strong portfolio demonstrating UX/UI design skills',
          'Proficiency in Figma and other design tools',
          'Experience with design systems and component libraries',
          'Strong understanding of user-centered design principles',
          'Excellent communication and collaboration skills',
          'Experience designing for both web and mobile'
        ],
        niceToHave: [
          'Experience with motion design and prototyping',
          'Basic understanding of HTML/CSS',
          'Experience in B2B SaaS products',
          'Background in user research methodologies'
        ],
        benefits: [
          'Competitive salary and equity package',
          'Comprehensive health, dental, and vision insurance',
          'Unlimited PTO and flexible working hours',
          'Remote-first culture with optional office access',
          'Professional development budget',
          '401(k) with company matching',
          'Home office stipend'
        ]
      }
    },
    {
      id: 3,
      title: 'Head of Marketing',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$150k - $200k',
      posted: '1 week ago',
      description: {
        about: "Join Syncrate to lead our marketing function and shape how the protocol is positioned to the world. You’ll define and execute go-to-market and brand strategy across multiple channels, working closely with the founder and ecosystem partners.\n\nThis is a high-impact leadership role with full ownership, autonomy to experiment, and direct influence on Syncrate’s growth and narrative.",
        responsibilities: [
          'Own and execute Syncrate’s overall marketing and brand strategy',
          'Lead go-to-market planning for product launches, testnet, and partnerships',
          'Manage content, social, and community growth across Web3 channels',
          'Work closely with BD and ecosystem partners on co-marketing initiatives',
          'Track performance metrics and continuously optimize campaigns and messaging',
          'Build and grow our social media presence'
        ],
        requirements: [
          '5+ years of marketing experience, preferably in B2B2C and RWA tokenization ',
          'Proven track record of successful campaign execution',
          'Strong analytical skills and data-driven mindset',
          'Experience with marketing automation tools',
          'Excellent written and verbal communication',
          'Project management and organizational skills',
          "Bachelor's degree in Marketing or related field"
        ],
        niceToHave: [
          'Experience with SEO and content marketing',
          'Knowledge of design tools like Figma or Canva',
          'Background in SaaS or tech industry',
          'Experience with paid advertising campaigns'
        ],
        benefits: [
          'Competitive salary and token equity package',
          'Comprehensive health, dental, and vision insurance',
          'Unlimited PTO and flexible working hours',
          'Remote-first culture with optional office access',
          'Professional development budget',
          '401(k) with company matching',
          'Home office stipend'
        ]
      }
    }
  ];

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.resume) {
      alert('Please fill in all required fields');
      return;
    }
    alert("Application submitted successfully! We'll be in touch soon.");
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      linkedin: '',
      portfolio: '',
      resume: null,
      coverLetter: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedJob(null);
  };

  return (
    <div style={{ fontFamily: '-apple-system, "SF Pro Display", "SF Pro Text", system-ui, sans-serif', backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <style>{`
        @media (max-width: 768px) {
          .desktop-grid { display: block !important; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .sticky-sidebar { position: static !important; }
          .job-header { padding: 24px !important; }
          .job-description { padding: 24px !important; }
          .application-form { padding: 24px !important; }
          .page-container { padding: 24px 16px !important; }
          .job-meta { flex-direction: column !important; gap: 12px !important; align-items: flex-start !important; }
          .job-title { font-size: 28px !important; }
          .job-card { padding: 20px !important; }
        }

        input:focus, textarea:focus, button:focus {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
        
        button:hover {
          background-color: #1d4ed8;
          transition: background-color 0.2s;
        }
        
        button:active {
          background-color: #1e40af;
        }

        .job-card {
          cursor: pointer;
          transition: all 0.2s;
        }

        .job-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
        }

        .back-button:hover {
          background-color: #f3f4f6 !important;
        }
      `}</style>

      {/* Header */}
      <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '16px 0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '24px', fontWeight: '600', color: '#111827' }}>TechCorp</div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '32px', fontSize: '14px' }}>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Jobs</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>About</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Culture</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          >
            {mobileMenuOpen ? <X size={24} color="#111827" /> : <Menu size={24} color="#111827" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav style={{ 
            backgroundColor: 'white', 
            borderTop: '1px solid #e5e7eb', 
            padding: '16px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '14px' }}>Jobs</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '14px' }}>About</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none', fontSize: '14px' }}>Culture</a>
          </nav>
        )}
      </header>

      <div className="page-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
        {!selectedJob ? (
          // Jobs List View
          <div>
            <div style={{ marginBottom: '32px' }}>
              <h1 style={{ fontSize: '36px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>Open Positions</h1>
              <p style={{ fontSize: '16px', color: '#6b7280' }}>Join our team and help us build the future</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {jobs.map(job => (
                <div
                  key={job.id}
                  className="job-card"
                  onClick={() => handleJobClick(job)}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '24px'
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '8px' }}>
                      <span style={{ 
                        display: 'inline-block', 
                        padding: '4px 12px', 
                        backgroundColor: '#dbeafe', 
                        color: '#1e40af', 
                        borderRadius: '6px', 
                        fontSize: '13px', 
                        fontWeight: '500' 
                      }}>
                        {job.department}
                      </span>
                    </div>
                    <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#111827', marginBottom: '12px' }}>
                      {job.title}
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', color: '#6b7280', fontSize: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Briefcase size={16} />
                        <span>{job.type}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <DollarSign size={16} />
                        <span>{job.salary}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Clock size={16} />
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={24} color="#9ca3af" />
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Job Detail View
          <div>
            <button
              onClick={handleBackToList}
              className="back-button"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                marginBottom: '24px',
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#6b7280',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              <ChevronRight size={16} style={{ transform: 'rotate(180deg)' }} />
              Back to all jobs
            </button>

            <div className="desktop-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
              {/* Main Content */}
              <div>
                {/* Job Header */}
                <div className="job-header" style={{ backgroundColor: 'white', borderRadius: '12px', padding: '40px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: '#dbeafe', color: '#1e40af', borderRadius: '6px', fontSize: '13px', fontWeight: '500' }}>
                      {selectedJob.department}
                    </span>
                  </div>
                  <h1 className="job-title" style={{ fontSize: '36px', fontWeight: '600', color: '#111827', margin: '16px 0' }}>
                    {selectedJob.title}
                  </h1>
                  
                  <div className="job-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '24px', color: '#6b7280', fontSize: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MapPin size={18} />
                      <span>{selectedJob.location}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Briefcase size={18} />
                      <span>{selectedJob.type}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <DollarSign size={18} />
                      <span>{selectedJob.salary}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={18} />
                      <span>Posted {selectedJob.posted}</span>
                    </div>
                  </div>
                </div>

                {/* Job Description */}
                <div className="job-description" style={{ backgroundColor: 'white', borderRadius: '12px', padding: '40px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>About the role</h2>
                    <p style={{ color: '#4b5563', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                      {selectedJob.description.about}
                    </p>
                  </section>

                  <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>What you'll do</h2>
                    <ul style={{ color: '#4b5563', lineHeight: '1.8', paddingLeft: '20px' }}>
                      {selectedJob.description.responsibilities.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: '12px' }}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>What we're looking for</h2>
                    <ul style={{ color: '#4b5563', lineHeight: '1.8', paddingLeft: '20px' }}>
                      {selectedJob.description.requirements.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: '12px' }}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>Nice to have</h2>
                    <ul style={{ color: '#4b5563', lineHeight: '1.8', paddingLeft: '20px' }}>
                      {selectedJob.description.niceToHave.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: '12px' }}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>Benefits</h2>
                    <ul style={{ color: '#4b5563', lineHeight: '1.8', paddingLeft: '20px' }}>
                      {selectedJob.description.benefits.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: '12px' }}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                {/* Application Form */}
                <div className="sticky-sidebar" style={{ position: 'sticky', top: '100px' }}>
                  <div className="application-form" style={{ backgroundColor: 'white', borderRadius: '12px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '24px' }}>Apply for this position</h3>
                    
                    <div>
                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>First name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Last name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>LinkedIn URL</label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Portfolio URL</label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleChange}
                          placeholder="https://yourportfolio.com"
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Resume/CV *</label>
                        <input
                          type="file"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
                        />
                        <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '6px' }}>PDF, DOC, or DOCX (max 5MB)</p>
                      </div>

                      <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Cover letter</label>
                        <textarea
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleChange}
                          rows="4"
                          placeholder="Tell us why you're interested in this role..."
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', resize: 'vertical', boxSizing: 'border-box' }}
                        />
                      </div>

                      <button
                        onClick={handleSubmit}
                        style={{ width: '100%', padding: '12px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}
                      >
                        Submit application
                      </button>
                    </div>
                  </div>

                  {/* Team Info */}
                  <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#6b7280', fontSize: '14px' }}>
                      <Users size={18} />
                      <span>{selectedJob.department} Team</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>
                      Join a team of talented professionals building the future of our platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
