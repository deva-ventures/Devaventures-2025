import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const Umang = () => {
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
              To keep things human in this evolving landscape, one crucial thing organizations must do is make learning a lifestyle, not a luxury. 
              </q>{" "}
              – <strong>Umang Shah</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/umangArticle.png" // <-- second image here
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
    href="https://youtu.be/7yNKPQ_JVHI"
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
    window.open("https://youtu.be/7yNKPQ_JVHI", "_blank");
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
    window.open("https://youtu.be/7yNKPQ_JVHI", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://youtu.be/7yNKPQ_JVHI"
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
      src="/umangConvo.jpeg" // replace with your image path
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
            Umang Shah, a seasoned HR professional and LinkedIn growth strategist, brings a unique blend of logic, leadership, and creativity to everything he does. In a candid conversation with Devika Majumder, co-founder of Global Influencers Hub, Umang opened up about his decade-long journey—from starting with zero followers to becoming a trusted voice for over 120K professionals on LinkedIn. Hailing from a small town and driven by a deep passion for empowering others, his story weaves together insights on rookie mistakes, rapid career growth, financial freedom, and personal evolution. Whether it’s decoding career pivots or navigating the dynamic world of HR, Umang's journey is a masterclass in reinvention and impact.
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
      src="/umangRapid.mp4"
      controls
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover", // fills container, may crop sides
      }}
    />
  </div>
</Col>
        </Row>
      </Container>
    </div>


    <Container className="my-5">
    <p><strong>Devika Majumder:</strong> Welcome to Global Influencers Hub, Umang. Here, we explore the life journeys of creators and changemakers across the world. And today, we’re excited to deep dive into your story.</p>

<p><strong>Devika Majumder:</strong> To begin with, let’s rewind a little. Tell us about your childhood. What was little Umang like?</p>
<p><strong>Umang Shah:</strong> Oh, as a child? I’d say I was a mix of both — mischievous and studious. I always excelled in academics, especially in maths and science. Those were my favorite subjects. I still tell my friends, family, and even colleagues stories from my mischievous school days. There was a whole era of playful chaos balanced by my dedication to studies. In fact, I scored 100 out of 100 in Maths in my board exams!</p>

<p><strong>Devika Majumder:</strong> Wow, that’s impressive! After school, what path did you choose?</p>
<p><strong>Umang Shah:</strong> I pursued engineering. I completed my degree in Electronics and Telecommunication with first-class distinction. So yes, I’m an engineer by qualification.</p>

<p><strong>Devika Majumder:</strong> And as a child, what was your dream? What did you want to become when you grew up?</p>
<p><strong>Umang Shah:</strong> To be honest, my dream was pretty common — like 80% of Indian boys, I wanted to become a cricketer. Cricket is almost a religion in Indian households. As a child, you simply dream of doing what you love, and for me, that was sports — especially cricket. I played a lot, and genuinely believed I’d pursue it seriously. But life had other plans. Destiny steered me elsewhere.</p>

<p><strong>Devika Majumder:</strong> Still, having that sportsman mindset probably helped a lot in life.</p>
<p><strong>Umang Shah:</strong> Absolutely. A lot. Sports teaches you discipline, resilience, and teamwork — all of which I carry with me even today.</p>

<p><strong>Devika Majumder:</strong> So when did the spark for HR first ignite in you?</p>
<p><strong>Umang Shah:</strong> That’s a story in itself. As I said, I was an engineer by degree. I worked as one for about three months. During that short time, I realized that while I was good at scoring marks, I wasn’t passionate about engineering. I took a break for around three months to figure things out. At that point, I had two options in mind — HR and Marketing. I’ve always been deeply interested in marketing. Even in my free time, I’d research branding strategies, explore what companies were doing on social media — be it LinkedIn or Instagram — to grow their presence. I come from a town called Halol, near Ahmedabad. I traveled to Ahmedabad, about 150 kilometers away, and had four job interviews lined up — two in HR and two in marketing.</p>

<p><strong>Devika Majumder:</strong> And how did those interviews go?</p>
<p><strong>Umang Shah:</strong> Surprisingly, I got selected in all four. So I had options. The compensation across all four roles was the same. Two were HR roles, and two were in marketing. Eventually, I chose HR — but the reason wasn’t the role itself. It was the culture of the organization that offered me the HR position. The moment I stepped into the office, I sensed something unique. The interviewers, the environment, the questions they asked — it struck a chord. There was something different about that space, something that just felt right. That experience made me say yes. If I hadn’t had that particular interaction, I might have ended up in marketing. But that organization gave me my start in HR, and that’s how my journey began — almost a decade ago now.</p>

<p><strong>Devika Majumder:</strong> That’s such a powerful story. Sometimes, it’s not just about the job or the role — it’s about how the place makes you feel.</p>
<p><strong>Umang Shah:</strong> Exactly. It’s been a long ride filled with learnings, challenges, and a lot of growth. I’ve evolved with every role — from talent acquisition to HR business partnering — and every step has taught me something new.</p>

<p><strong>Devika Majumder:</strong> Wow — a whole decade! That’s incredible. Looking back now, were there any rookie mistakes from those early days that you laugh about?</p>
<p><strong>Umang Shah:</strong> Oh yes, a lot! When you're a fresher entering the professional world, mistakes are inevitable. But I was fortunate to be guided by great leaders — so even when I messed up, it became a learning experience. Most of those mistakes weren’t huge; they were just part of figuring things out. But looking back now, some are definitely funny. One silly thing I remember clearly — I once gave a false explanation while applying for leave. I was so new, I thought I needed to justify everything.</p>

<p><strong>Devika Majumder:</strong> That’s such a relatable one!</p>
<p><strong>Umang Shah:</strong> Right? I think many of us do that in the beginning — we feel guilty about asking for time off. But later I realized that it’s your personal time. You don’t owe anyone an explanation beyond what’s necessary. You don’t have to lie. That understanding comes with maturity and confidence.</p>

<p><strong>Devika Majumder:</strong> And probably with learning to respect your own time too.</p>
<p><strong>Umang Shah:</strong> Exactly. That fear of being judged fades over time.</p>

<p><strong>Devika Majumder:</strong> Now let’s bust some myths. What’s one common misconception about HR that still bothers you?</p>
<p><strong>Umang Shah:</strong> The biggest one — that HR does nothing. That we’re just there to plan rangolis or organize fun activities! I see these jokes on LinkedIn all the time, and while some people laugh them off, I take them seriously.</p>

<p><strong>Devika Majumder:</strong> It’s a very narrow lens through which people see the function.</p>
<p><strong>Umang Shah:</strong> Absolutely. There’s a lot more to HR than engagement. We handle talent acquisition, grievance redressal, conflict management, learning and development, policy design, performance management… the list goes on. There’s a full-blown engine running in the background. But I don’t just complain about this misconception — I try to change it. If I see someone saying “HR does nothing” on LinkedIn, I don’t troll them or ignore them. I message them. I try to understand where they’re coming from and then share my perspective. That’s how you create value — not just by defending your field, but by educating with empathy.</p>

<p><strong>Devika Majumder:</strong> That’s such a mature and constructive approach. One interaction at a time — changing minds.</p>
<p><strong>Umang Shah:</strong> Exactly. And some of those people have now become part of my network. They’ve gone from critics to curious followers.</p>

<p><strong>Devika Majumder:</strong> Now tell me — out of all the HR hats you’ve worn, which one’s your favorite?</p>
<p><strong>Umang Shah:</strong> Hands down — Talent Acquisition. That’s where it all started for me, and it still holds a special place in my heart. It’s not just hiring — it’s about connecting with people, understanding their goals, telling them about your organization, and finding that perfect match. You become the face of the company.You also get to build your personal brand — because how you communicate and build relationships stays with people long after the interview.
It’s incredibly fulfilling. You get to meet new people every day, learn from them, share your own stories, and create long-term impact.
</p>
<p><strong>Devika:</strong> And you clearly bring so much heart into it. Now let’s talk about one of your most rewarding HR growth projects. Tell us about that.</p>
            <p><strong>Umang:</strong> Sure. In one of my previous organizations, I was working as an HR Manager. It was a small-sized company, and in such setups, you typically find fewer policies, limited frameworks, and very little structured strategy in place. Everyone’s focused on their own functional areas — sales does sales, marketing does marketing — but there’s usually a lack of internal coordination.</p>
            <p><strong>Umang:</strong> I got an immense opportunity there to actually design frameworks and build policies from scratch. We were short on formal systems, and I was able to introduce several new policies that really transformed how the organization operated. These policies not only created structure internally but also helped us attract better talent.</p>
            <p><strong>Devika:</strong> That’s pretty amazing.</p>
            <p><strong>Umang:</strong> Exactly. When candidates evaluate an organization, the first thing they look at is compensation — but the second is always the policies. They ask: What are the leave policies? What are the benefits? Do you have a POSH policy? And so on.</p>
            <p><strong>Umang:</strong> I believe the work I did placed the company in a different league altogether. Instead of just saying, “We have three or four policies,” we could now have meaningful conversations with candidates, and that gave them more confidence in joining us.</p>
            <p><strong>Devika:</strong> You were essentially positioning the organization for long-term growth through policy-building. That’s significant.</p>
            <p><strong>Umang:</strong> Yes, I still consider that project a personal milestone. I was the single point of contact for the entire implementation — right from designing to executing. It was challenging but extremely rewarding.</p>
            <p><strong>Devika:</strong> That’s a whole different ballgame altogether. And being the sole person responsible — that must have been intense.</p>
            <p><strong>Umang:</strong> Absolutely, yes.</p>

            <p><strong>Devika:</strong> Now in today’s era of AI, remote work, and Gen Z entering the workforce, how do you keep HR authentic and human? What’s your tip for that?</p>
            <p><strong>Umang:</strong> I would say AI is an enabler. I still see a lot of posts where people claim AI is going to replace our jobs, but I don't agree. Just like HR is not here to take anyone’s job but to enable people, AI serves the same purpose — it enhances, it doesn’t replace.</p>
            <p><strong>Umang:</strong> To keep things human in this evolving landscape, one crucial thing organizations must do is make learning a lifestyle, not a luxury. I see a lot of companies say, “We’re doing this learning session, please attend,” as if it’s a special one-off event. But in today’s world, especially with AI evolving so quickly, learning and development must be embedded into everyday work. It should be part of your routine, just like any other task.</p>

            <p><strong>Devika:</strong> That’s a very important point you made. Now tell me — if HR had a personality, would it be a coach, a cheerleader, a counselor, or something else?</p>
            <p><strong>Umang:</strong> I’d say somewhere between a coach and a cheerleader. Over the years, I’ve coached a lot of people across different phases of their careers — directly or indirectly — and many of them have grown significantly. That’s very fulfilling.</p>
            <p><strong>Umang:</strong> At the same time, I’ve had to play the cheerleader role too. In corporate life, there are always deadlines, pressure, and ups and downs. I try to build a mindset in my team that it’s okay to make mistakes or miss a deadline — what matters is that you show up the next day without carrying yesterday’s baggage. Start fresh, start from zero, and move forward. That’s the kind of energy I believe HR should bring to the table.</p>

            <p><strong>Devika:</strong> That’s a wonderful combination — I really like that blend of coach and cheerleader. Now, who are some mentors or peers who have actually impacted your career growth or just your mindset overall?</p>
            <p><strong>Umang:</strong> Honestly, as I mentioned earlier, I chose HR because of my first organization. That’s where I found real leaders. I’ll give you a small example. I was working with one of the leaders, and in recruitment, we often face a situation where candidates back out. That’s quite normal. But when you're a fresher and a candidate backs out on the date of joining, you feel like you've lost a billing. It’s a major setback.</p>
            <p><strong>Umang:</strong> I remember losing a huge billing because of such a dropout. I went to my manager expecting to be scolded. I was prepared to hear harsh words because the company had lost revenue. But all she said was, “So what? Focus on next.” I was stunned. I was ready for reprimand, but she didn’t even flinch. She told me it wasn’t my fault—that maybe the candidate got a better opportunity or compensation elsewhere. That’s the nature of talent acquisition.</p>
            <p><strong>Umang:</strong> That moment taught me how to be a leader, not just a manager. From that day, I started referring to her as a leader. Later, when I led my own team and one of my team members faced a similar situation, I knew exactly how to respond—calmly and with empathy. I owe that to her. I still cherish her leadership.</p>
            <p><strong>Umang:</strong> The other person who has had a big impact is someone I haven’t even met in person—Nishith, a well-known LinkedIn influencer. Around five to six years ago, when I started sharing posts on LinkedIn, I was very focused on likes and comments. One day, I reached out to him via chat and said I wasn’t getting much engagement. He asked me one simple question: “Are you creating value?” I said yes. He said, “That’s it.”</p>
            <p><strong>Umang:</strong> That shifted my mindset entirely. Now, I don’t chase likes or comments. I focus on whether my content is valuable. When I get messages from people saying my posts have helped them, that’s when I feel like I’m doing something worthwhile. His two or three-minute chat has stayed with me for seven years and continues to inspire how I show up on social media.</p>
            <p><strong>Umang:</strong> These are the two key individuals who have shaped my professional mindset. Of course, I’ve had many other leaders along the way, but these moments are the ones I continue to share with my own team—examples of how to react with grace and perspective in tough situations.</p>

            <p><strong>Devika:</strong> Correct. That’s such a powerful takeaway. Now, what soft skills do you think will dominate in the next five to ten years?</p>
            <p><strong>Umang:</strong> I would say networking, communication, and personal branding. I may not categorize all of them strictly as soft skills, but they will significantly impact an individual’s career in the coming years. These will be differentiators.</p>
            <p><strong>Devika:</strong> Absolutely. I also don’t believe that AI will take away all our jobs, but we’ll definitely need to become friends with AI.</p>
            <p><strong>Umang:</strong> Exactly.</p>
            <p><strong>Devika:</strong> And it’s these human aspects that you just mentioned—networking, personal branding, communication—that will actually make someone stand out in an AI-powered world.</p>
            <p><strong>Umang:</strong> Yes, definitely.</p>

            <p><strong>Devika:</strong> So, what advice would you give to young professionals entering HR today?</p>
            <p><strong>Umang:</strong> Explore yourself. Don’t limit yourself. I get a lot of messages on LinkedIn like, “Hi Umang, I’ve got this job, but the compensation isn’t what I expected,” or “I got this profile, but it’s not really what I was aiming for.”</p>
            <p><strong>Umang:</strong> I always tell them—forget the compensation, forget the profile. Ask yourself, is this what you really want to do? If the answer is yes, then go and explore. I spent three months in engineering before realizing it wasn’t for me. Then I switched to HR—initially thinking about marketing—but HR worked out really well for me.</p>
            <p><strong>Umang:</strong> You have to go out and explore, get out of your shell. Jobs or organizations won’t always come with all the benefits or boxes ticked. As a fresher, it’s absolutely fine if 70% or 80% of your criteria are being met. Go ahead, take that opportunity, and then decide what truly fits you.</p>
            <p><strong>Devika:</strong> True. At least start.</p>

            <p><strong>Umang:</strong> At least start.</p>
            <p><strong>Devika:</strong> The main thing is to start.</p>
            <p><strong>Umang:</strong> Yes.</p>
            <p><strong>Devika:</strong> I think once you start, you’ll figure things out on the way.</p>
            <p><strong>Umang:</strong> Exactly.</p>

            <p><strong>Devika:</strong> So now let’s talk about Umang outside of work. What are you most passionate about when you’re not working? Any hobbies or hidden talents?</p>
            <p><strong>Umang:</strong> I’m very passionate about finances. I made my first investment at the age of 19 using my pocket money. I’ve been interested in equities ever since. If I’m free, you’ll probably find me researching the next stock or mutual fund I want to invest in. <br />
            Even my favorite book is Rich Dad Poor Dad. I’ve read it three or four times, and it’s still in my cupboard. Whenever I get some free time, I just open up a random page and read it. It keeps me grounded and motivated. <br />
            I also love marketing and branding. That’s another niche I follow closely. I write on Quora too, mostly about finances and marketing—how companies position themselves on social media and other platforms. <br />
            And of course, in my free time, I Netflix and chill. I don’t overcomplicate it.</p>

            <p><strong>Devika:</strong> Good! So then, if you had an entire weekend to yourself, how would you spend that?</p>
            <p><strong>Umang:</strong> Netflix! But if I exclude stocks and marketing, I’d be doing two things. One, I’d go to a nearby sports hub to play basketball or arcade games—I’m very much into gaming. And second, once I’m tired from that, I’d come back home and Netflix and chill. That’s my ideal weekend.</p>

            <p><strong>Devika:</strong> It’s sorted then! So, what is that one non-HR skill that you believe HR professionals should adopt?</p>
            <p><strong>Umang:</strong> Personal branding. Honestly, not just HR—every individual should develop this skill. It’s about how you showcase yourself. And it’s not limited to social media. <br />
            Say I’m attending a networking event. How do I personally brand myself? How do I position myself among ten people from ten different backgrounds? That’s important. <br />
            Let me share a story. Warren Buffett is known for his charity lunches. Once, he offered a 30-minute lunch to the highest bidder. One person won the bid and went for lunch—and later, Buffett actually hired him. <br />
            So many people had lunch with Warren, but this one person used that opportunity to personally brand himself. That’s the power of putting your best foot forward. Personal branding is extremely important.</p>

            <p><strong>Devika:</strong> Absolutely. There’s nothing more important right now than personal branding, especially with the AI boom. It’s the only way to stand out.</p>
            <p><strong>Umang:</strong> Exactly. That’s the only way to really stand out today.</p>

            <p><strong>Devika:</strong> So, what's that one life lesson that you're very grateful for? Something you’ve learned over time?</p>
            <p><strong>Umang:</strong> Honestly, I can’t recall one particular lesson at the moment, but I’m grateful for many. I’ve come from a small hometown and reached where I am today. I started from zero followers on LinkedIn and now have 123K. So there have been countless moments and instances that taught me something valuable.</p>


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
          Rapid Fire with umang
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
            src="/umangRapid.mp4" // <-- use your vertical video file
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










            <h5 className="text-primary mt-4">Rapid Fire Round</h5>
            <p><strong>Devika:</strong> Work from home or office buzz?</p>
            <p><strong>Umang:</strong> Work from home, anytime.</p>
            <p><strong>Devika:</strong> If HR professionals had a superhero name, what would be yours?</p>
            <p><strong>Umang:</strong> Batman. I think I relate to Batman because he’s very logical, very strategic. He plans ahead. That’s how I try to operate too—using logic and structure.</p>
            <p><strong>Devika:</strong> One app that you can’t live without?</p>
            <p><strong>Umang:</strong> Any mutual fund or finance app.</p>
            <p><strong>Devika:</strong> If you could swap jobs with anyone for a day, who would that be?</p>
            <p><strong>Umang:</strong> Not the Prime Minister of India—that’s too intense. But maybe the top banker of India. I’d love to step into their shoes for a day and understand how the world works from the financial center.</p>
            <p><strong>Devika:</strong> Read minds or be invisible in a meeting?</p>
            <p><strong>Umang:</strong> Read minds, obviously. I’ve often wished I had that ability.</p>
            <p><strong>Devika:</strong> If LinkedIn had a dating version, would you swipe right on it?</p>
            <p><strong>Umang:</strong> Nope. I wouldn’t.</p>
            <p><strong>Devika:</strong> If not HR, what else would you be doing right now?</p>
            <p><strong>Umang:</strong> Marketing for sure. Branding and marketing are my next best passions.</p>
            <p><strong>Devika:</strong> One HR jargon you wish would disappear?</p>
            <p><strong>Umang:</strong> “HR doesn’t do anything.” That stereotype needs to go.</p>
            <p><strong>Devika:</strong> A book, movie, or TED Talk that changed your perspective?</p>
            <p><strong>Umang:</strong> Rich Dad, Poor Dad by Robert Kiyosaki. And a couple of movies like Badmaash Company, among others.</p>
            <p><strong>Devika:</strong> Any go-to song on a rough day?</p>
            <p><strong>Umang:</strong> Summer of '69.</p>
            <p><strong>Devika:</strong> Three words your team would use to describe you?</p>
            <p><strong>Umang:</strong> Logic, coach, and leader—maybe.</p>
            <p><strong>Devika:</strong> Guilty pleasure when working from home?</p>
            <p><strong>Umang:</strong> Being able to take a bath at my own time!</p>
            <p><strong>Devika:</strong> If you had a remote control for life, would you pause, rewind, or fast forward?</p>
            <p><strong>Umang:</strong> Rewind—and invest all my savings in Bitcoin. That would sort everything out!</p>
            <p><strong>Devika:</strong> What’s one compliment that gave you a real sense of fulfillment?</p>
            <p><strong>Umang:</strong> Any compliment I receive on LinkedIn where someone says I’ve created value. Even today, I received two such messages. Every message like that really inspires me.</p>
            <p><strong>Devika:</strong> If your life was a book, what would the title be?</p>
            <p><strong>Umang:</strong> That’s a tough one… maybe Logic, Creator, Advisor.</p>

            <p><strong>Devika:</strong> Fair enough! I think we’ve covered pretty much everything. And since you’re in a bit of a hurry, if we need anything else, we’ll reach out. But before we wrap up—what did you like about talking to Global Influencers Hub?</p>
            <p><strong>Umang:</strong> It was great. And Devika, we’ve known each other from LinkedIn, but I wasn’t aware of Global Influencers Hub until I looked it up recently. I did a bit of research, and I must say—it’s always a pleasure to connect with great minds. Kudos to you!</p>
            <p><strong>Devika:</strong> Thank you so much, Umang. We’ll definitely stay connected—on LinkedIn and beyond. Wishing you all the best in everything you do.</p>
            <p><strong>Umang:</strong> Thank you! Take care.</p>
    























           
           
    </Container>
           
            </Card.Body>
          
    </>
  );
};

export default Umang ;
