import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const Punita = () => {
  return (
    <>
     
            <Card.Body>
         
            <div style={{ backgroundColor: "#7a879b", padding: "60px 0" }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Quote */}
          {/* <Col xs={12} md={6} className="mb-4 mb-md-0 text-center text-md-start"> */}
            <p
              style={{
                fontSize: "1.2rem",
                color: "#fff",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              <q>
              Success doesn’t have a full stop—you just keep going every day.
              </q>{" "}
              – <strong>Punita Parekh</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/punitaArticle.jpg" // <-- second image here
              alt="Preetha Athrey"
              fluid
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
    <div
      style={{
        padding: "90px 70px",
     
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* LEFT CONTENT */}
          <Col xs={12} md={7} className="text-center text-md-start mb-4 mb-md-0">
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "400",
                color: "#1d3557",
              }}
            
>
We couldn't put the best moments in writing. See for yourself. <br/>   
This conversation🔊 got too real for the blog.  <br />
           
            </p>

          
          
            <p
  style={{
    fontSize: "1.7rem",
    fontWeight: "700",
    color: "#1d3557",
  }}
>
  Watch the uncut version on 👉{" "}
  <a
    href="https://www.youtube.com/watch?v=7WhwZAamotM"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#e63946", textDecoration: "none" }}
  >
    YouTube
  </a>{" "}
  and Feel the Vibe before the buzz blows up! <br />
</p>
           
            <div className="d-flex align-items-center gap-3 mt-4">
            <Button
  style={{
    backgroundColor: "#1d3557",
    border: "none",
    padding: "10px 20px",
    borderRadius: "30px",
  }}
  onClick={() => {
    window.open("https://www.youtube.com/watch?v=7WhwZAamotM", "_blank");
  }}
>
  Learn More
</Button>

<Button
  variant="light"
  style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "1px solid #ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
    marginLeft: "10px",
  }}
  onClick={() => {
    window.open("https://www.youtube.com/watch?v=7WhwZAamotM", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://www.youtube.com/watch?v=7WhwZAamotM"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none" }}
>
  <div
    style={{
      borderRadius: "30% 30% 30% 30%",
      padding: "20px",
      display: "inline-block",
      position: "relative",
    }}
  >
    <img
      src="/punitaConvo.jpg" // replace with your image path
      alt="Personality"
      style={{
        width: "100%",
        maxWidth: "550px",
        borderRadius: "20px",
        objectFit: "cover",
      }}
    />

    {/* Decorative elements */}
    <span
      style={{
        position: "absolute",
        top: "-20px",
        right: "20%",
        fontSize: "2rem",
        color: "#8b3e3e",
      }}
    >
      ✦
    </span>
  </div>
</a>
          </Col>
        </Row>
      </Container>
    </div>

    <div style={{ backgroundColor: "#d3d3d3", padding: "60px 0" }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <p style={{ fontSize: "1.1rem", color: "#1d3557", lineHeight: "1.6" }}>
            Punita Parekh’s story is one of quiet resilience, bold transitions, and the steady rise of a woman who turned content into impact. From her roots in Mumbai as a shy, observant psychology student to a commanding presence in India’s media and marketing landscape, Punita’s path has been defined by clarity of purpose and an unrelenting commitment to growth.
With nearly two decades of experience at industry giants like CNBC TV18 and Times Network, Punita built a solid foundation in marketing, leadership, and brand communication. However, it was the decision to leave the corporate world at the height of her career that marked a turning point. Stepping into the world of entrepreneurship, she leveraged her knowledge, honed her storytelling skills, and emerged as a leading voice on LinkedIn—mentoring professionals, crafting digital identities, and shaping personal brands with precision and heart.
In this rich and personal conversation with Devika Majumder,Co-founder of Global Influencers Hub, Punita reflects on the lessons learned, the myths debunked, and the strategies that have guided her evolution. Her narrative is not just about personal success—it is about empowering others to own their voice, define their niche, and build a digital legacy with intention and authenticity.



            </p>
          </Col>

          {/* Right Side - Video */}
          <Col xs={12} md={6} className="text-center text-md-start">
  <div
    style={{
      width: "100%",
      maxWidth: "640px",
      height: "360px", // same as container height
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    }}
  >
    <video
      src="/punitaTeaser.mp4"
      controls
      style={{
        width: "100%",
        height: "200%",
        objectFit: "cover", // fills container, may crop sides
      }}
    />
  </div>
</Col>
        </Row>
      </Container>
    </div>


    <Container className="my-5">
    <p>
          <strong>Devika Majumder:</strong> Hi Punita, welcome to Global Influencers Hub. 
          Here, we dive into the life journeys of social media influencers, and we’re really excited to explore yours. 
          So when we say deep dive, we actually mean all the way back to the beginning. 
          Tell us, what was young Punita like?
        </p>

        <p>
          <strong>Punita Parekh:</strong> Thank you, Devika. I'm really happy to be here. 
          So, my journey formally began in 2004 when I entered the corporate world. 
          But if we go further back, well, I was born and brought up in Mumbai. I'm a Gujarati by background and have 
          spent my entire life in this vibrant city—studied here, worked here, lived here.
          As a child, I was extremely shy and reserved. I remember feeling underconfident in school, especially when 
          teachers asked me to speak in front of the class. That kind of public speaking used to terrify me. 
          But things began to shift in college, where I majored in psychology. That’s when I first became curious 
          about how people think, understanding behaviour, emotions, and communication.
          After graduation, I started working at CNBC TV18. I spent a decade there, dealing with pressure, deadlines, 
          intense competition—everything that comes with the media industry. And it was in that chaos that I discovered 
          my strength. I learned how to multitask, lead, strategize—and more importantly, I started believing in myself.
          The once-shy girl was now confidently speaking in front of cameras, leading projects, and tackling challenges 
          head-on. After CNBC, I spent another ten years at Times Network in Mumbai, continuing to build my career in 
          marketing and content strategy. In total, I spent close to 18–19 years in the corporate world before taking 
          the leap into entrepreneurship.
          For the past five years, I’ve been working independently with founders, SMEs, and startups—primarily through 
          LinkedIn, helping them shape their personal and business brands.
        </p>

        <p>
          <strong>Devika:</strong> That’s amazing. Was there a defining moment that made you realize, this is it—this is 
          what I want to do now?
        </p>

        <p>
          <strong>Punita:</strong> Yes, there definitely was. After working for nearly two decades, I reached a point 
          where I felt completely burned out. Despite having a solid career and strong credentials, I felt mentally 
          exhausted. And in March 2020, I made a bold decision—I quit.
          All I had was my experience and the reputation of the brands I’d worked with. But I knew what I was good 
          at—marketing and content. So, I started marketing myself. I took all that I had learned and began creating 
          content around branding, strategy, and digital communication. And LinkedIn became my platform of choice.
          The more I shared my knowledge, the more people started recognizing me for my expertise. Soon, people were 
          reaching out, asking for help, consultations, and collaborations. That’s how the transition from corporate 
          employee to solopreneur and eventually entrepreneur happened.
        </p>

        <p>
          <strong>Devika:</strong> That’s such an empowering story. Now that you’re deeply involved in personal 
          branding on LinkedIn, what’s one big misconception people have about it?
        </p>

        <p>
          <strong>Punita:</strong> I think the biggest misconception is that LinkedIn is only for job seekers or 
          corporate folks. The truth is, anyone—a doctor, a lawyer, a freelancer, a creative, even someone in 
          housekeeping—can build a personal brand on LinkedIn.
          As long as you know who you are and what you want to be known for, you can start educating and adding value 
          to your audience. That’s what builds trust and visibility. It's all about identifying your niche and owning it.
        </p>

        <p>
          <strong>Devika:</strong> Beautifully said. So, what would be your go-to strategy for someone who wants to 
          truly stand out on LinkedIn in today’s crowded digital space?
        </p>

        <p>
          <strong>Punita:</strong> I believe in a simple three-step process:<br />
          Step one: Optimize your LinkedIn profile. Your profile is your digital first impression. It should clearly 
          tell people who you are, what you do, and how you can help.<br />
          Step two: Build a content strategy. This means identifying topics related to your domain and thinking about 
          how you can add value through those topics. It’s about knowing your strengths and aligning your content with them.<br />
          Step three: Start creating content—posts, videos, articles, anything that shares your knowledge and positions 
          you as a thought leader in your space. The key is consistency and clarity.
          When you follow these steps, your audience begins to see you not just as a professional but as a trusted expert.
        </p>

        <p>
          <strong>Devika:</strong> Okay, Punita—let’s talk features. Which LinkedIn feature do you think is totally 
          underrated?
        </p>

        <p>
          <strong>Punita:</strong> I’d say video content. It’s still vastly underutilized. So many professionals hesitate 
          to put themselves out there on video, but I truly believe video is where the magic happens. It’s personal, it’s 
          powerful, and it builds credibility like nothing else. The more you show up on video, the more your audience 
          connects with you and remembers you.
        </p>

        <p>
          <strong>Devika:</strong> That’s such a great point—and yes, not enough people are doing that right now.
        </p>

        <p><strong>Punita:</strong> Absolutely.</p>

        <p>
          <strong>Devika:</strong> Now, let’s imagine a hypothetical scenario—if LinkedIn were to disappear tomorrow, 
          where would you go?
        </p>

        <p><strong>Punita:</strong> Twitter.</p>

        <p>
          <strong>Devika:</strong> Twitter—love that. Quick, sharp, and real-time. Makes sense. Alright, so what's one 
          piece of advice you'd give to aspiring marketers today?
        </p>

        <p>
          <strong>Punita:</strong> I’d say—don’t try to do everything. Marketing is a vast field, and it’s important to 
          niche down. Whether it’s content marketing, SEO, or performance marketing, figure out what you’re best at and 
          then optimize your profile accordingly. Once you know your domain, start creating content around it on LinkedIn. 
          You never know who’s watching. Opportunities often come when you least expect them.
        </p>
        <p><strong>Devika:</strong> Right. And speaking of common pitfalls—what’s the biggest mistake you think young professionals make when building their personal brand?</p>

        <p><strong>Punita:</strong> Trying to be everything at once. One day they're a digital marketer, the next day a life coach, and then a yoga instructor! That confuses the audience. If people visit your page and can't figure out what you do or what they can hire you for, you’ve lost their attention. Clarity is key. Pick a niche, stay consistent, and communicate that clearly.</p>

        <p><strong>Devika:</strong> Exactly. So that when someone lands on your page, they immediately know, “Ah, this is her expertise.”</p>

        <p><strong>Punita:</strong> Precisely.</p>

        <p><strong>Devika:</strong> What’s the most unexpected lesson you've learned from being in this space of personal branding?</p>

        <p><strong>Punita:</strong> That no client is permanent. You can be doing great work and still see clients come and go. But as a marketer, you can’t slow down. You’ve got to keep showing up—every single day, regardless of setbacks or dry spells. The hustle is constant.</p>

        <p><strong>Devika:</strong> Wow. That’s so real. Now for a fun one—if marketing were a sport, which position would you play?</p>

        <p><strong>Punita:</strong> I’d be a batsman. In marketing, you have to keep showing up, keep swinging, even if you miss. Consistency and resilience are everything.</p>

        <p><strong>Devika:</strong> Love that metaphor! What’s one piece of branding advice you always give… but still sometimes struggle with yourself?</p>

        <p><strong>Punita:</strong> Showing up consistently. It sounds simple, but being visible every day takes a lot of energy and discipline. We all have off days, but consistency truly separates those who grow from those who give up.</p>

        <p><strong>Devika:</strong> So true. It’s almost a superpower. Speaking of which, if you could have any superpower, what would it be?</p>

        <p><strong>Punita:</strong> To get into the client’s mind! I’d love to instantly understand their vision, their pain points, their expectations. That would make everything so much smoother, from pitching to execution.</p>

        <p><strong>Devika:</strong> Alright, let’s kick things up with something wild—what’s the most unique personal branding transformation you’ve ever helped someone with?</p>

        <p><strong>Punita:</strong> I once helped a psychologist go from zero to 3,000 followers. We created content around his expertise and positioned him clearly as a child psychologist on LinkedIn. That clarity helped him attract young parents who became clients. It was such a rewarding transformation to watch.</p>

        <p><strong>Devika:</strong> That’s brilliant! Now, turning the spotlight on you, what’s one branding mistake you made early on that you now look back at and smile?</p>

        <p><strong>Punita:</strong> Using way too many colours in one creative! It was chaotic. But it was part of the learning curve.</p>

        <p><strong>Devika:</strong> Time for some rapid-fire questions. Ready?</p>

        
            
           

            
            
            
            
            
            
    



            <div style={{  padding: "60px 0" }}>
      <Container className="d-flex flex-column align-items-center">
        {/* Title */}
        <h4
          style={{
            color: "#1d3557",
            fontWeight: "700",
          
            textAlign: "center",
          }}
        >
          Rapid Fire with Punita
        </h4>

        {/* Video container with same size as video */}
        <div
          style={{
            width: "360px",  // portrait width
            height: "640px", // portrait height
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            src="/punitaRapid.mp4" // <-- use your vertical video file
            controls
            style={{
              width: "360px",
              height: "440px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              objectFit: "cover",
            }}
          />
        </div>
      </Container>
    </div>



    <p><strong>Punita:</strong> Let’s do it!</p>

<p><strong>Devika:</strong> Describe your LinkedIn journey in one word.</p>
<p><strong>Punita:</strong> Challenging—but full of opportunities.</p>

<p><strong>Devika:</strong> The best LinkedIn post you've written?</p>
<p><strong>Punita:</strong> A personal story—about building my weekend home in Alibag at the age of 40.</p>

<p><strong>Devika:</strong> Congratulations, that’s huge! Now, what would you choose—speaking at a TEDx event or mentoring aspiring marketers?</p>
<p><strong>Punita:</strong> Mentoring aspiring marketers, without a doubt.</p>

<p><strong>Devika:</strong> Love it. A hobby that has nothing to do with marketing?</p>
<p><strong>Punita:</strong> Sleeping!</p>

<p><strong>Devika:</strong> We all need that one! One LinkedIn creator you admire?</p>
<p><strong>Punita:</strong> Justin Welsh.</p>

<p><strong>Devika:</strong> Your go-to stress buster?</p>
<p><strong>Punita:</strong> Being with my newborn twins.</p>

<p><strong>Devika:</strong> Oh wow, double the joy! Alright—great content or great networking?</p>
<p><strong>Punita:</strong> Networking.</p>

<p><strong>Devika:</strong> Accidentally liking an old post or messaging the wrong person?</p>
<p><strong>Punita:</strong> Liking an old post.</p>

<p><strong>Devika:</strong> Honestly, you never know—maybe even that post leads to a new connection! If you had just 30 seconds to pitch yourself, what would you say?</p>
<p><strong>Punita:</strong> I’m Punita Parekh, a content marketer helping brands and individuals build a powerful presence on LinkedIn.</p>

<p><strong>Devika:</strong> One thing LinkedIn users should stop doing immediately?</p>
<p><strong>Punita:</strong> raprapid</p>

<p><strong>Devika:</strong> If you could ban one social media platform?</p>
<p><strong>Punita:</strong> Instagram.</p>

<p><strong>Devika:</strong> Bold! One marketing myth you’d love to bust?</p>
<p><strong>Punita:</strong> That marketing doesn’t require consistency. It only works when you’re consistent.</p>

<p><strong>Devika:</strong> Absolutely. If you could choose one superpower—mind reading or invisibility?</p>
<p><strong>Punita:</strong> Mind reading, for sure.</p>

<p><strong>Devika:</strong> If you woke up tomorrow with zero followers, what’s the first thing you’d do?</p>
<p><strong>Punita:</strong> Optimize my profile using niche keywords and start posting valuable content.</p>

<p><strong>Devika:</strong> If you wrote a book about your life, what would the title be?</p>
<p><strong>Punita:</strong> “The Risk Taker and The Hustler.”</p>

<p><strong>Devika:</strong> Is a book in the works?</p>
<p><strong>Punita:</strong> Not yet.</p>

<p><strong>Devika:</strong> So what’s next for you?</p>
<p><strong>Punita:</strong> I want to build a company with 50–60 people—content marketers, writers, designers—and help build at least 500 LinkedIn profiles a year.</p>

<p><strong>Devika:</strong> That’s incredible. Your all-time favorite quote?</p>
<p><strong>Punita:</strong> “Keep going.”</p>

<p><strong>Devika:</strong> If someone Googled you, what’s the one thing you’d want them to see first?</p>
<p><strong>Punita:</strong> That I’m a content marketer who helps brands build on LinkedIn.</p>

<p><strong>Devika:</strong> One marketing guru you’d love to debate with?</p>
<p><strong>Punita:</strong> None. I’m here to learn, not debate.</p>
<p>
    <strong>Devika:</strong> A hashtag for your life?
  </p>

  <p>
    <strong>Punita:</strong> #Hustler.
  </p>

  <p>
    <strong>Devika:</strong> And finally, if you could leave the audience with one golden rule for personal branding, what would it be?
  </p>

  <p>
    <strong>Punita:</strong> Identify your niche. That one step sets the foundation for everything else.
  </p>

  <p>
    <strong>Devika:</strong> Punita, this was such a fun and insightful conversation. Thank you for sharing your story with us.
  </p>

  <p>
    <strong>Punita:</strong> My pleasure, Devika. Thank you for having me.
  </p>

  <p>
    <strong>Devika:</strong> Wishing you a wonderful day!
  </p>

  <p>
    <strong>Punita:</strong> You too. Bye!
  </p>
          

           

            
            
            
            
            
           
            
          
            

            
           
    </Container>
           
            </Card.Body>
          
    </>
  );
};

export default Punita ;
