import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const Parminder = () => {
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
              – <strong>Perminder Singh Malik</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/parminderArticle.png" // <-- second image here
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
    href="https://www.youtube.com/watch?v=UinMdMWfLKU&feature=youtu.be"
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
    window.open("https://www.youtube.com/watch?v=UinMdMWfLKU&feature=youtu.be", "_blank");
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
    window.open("https://www.youtube.com/watch?v=UinMdMWfLKU&feature=youtu.be", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://www.youtube.com/watch?v=UinMdMWfLKU&feature=youtu.be"
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
      src="/parminderConvo.png" // replace with your image path
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
            In an intimate and thought-provoking conversation with Devika Majumder, Founder of Global Influencers Hub, Perminder Singh Malik—an unwavering advocate for social good and community-led change—offered more than insights; he offered perspective. Known not just for his work in the nonprofit sector but for the relationships he nurtures and the values he stands for, Perminder’s life is a testament to leadership rooted in empathy and service. He speaks not in soundbites, but in stories—about family, friendship, and the quiet but powerful desire to bring people together. His journey reminds us that real influence isn’t about standing out; it’s about standing up—for others, for purpose, and for a better world.



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
      src="/parminderTeaser.mp4"
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
    <p><strong>Devika Majumder:</strong> Welcome, Mr. Perminder Singh, to Global Influencers Hub. Here, we talk about the life journeys of social media influencers and changemakers—and we’re excited to deep dive into yours. Let’s start at the beginning. What was your childhood like?</p>

          <p><strong>Perminder Singh Malik:</strong> Thank you so much for having me, Devika. Just to introduce myself—I'm Perminder Singh Malik, founder of Scope for Change. Coming to my childhood, I was born into a financially struggling family, so things weren’t very glamorous back then. Life was simple and focused mostly on studies. I was a bit naughty as a kid—especially with my sister. We used to fight a lot (laughs). But despite that, I was always inclined towards academics. I knew early on that I had to do something meaningful—something that could shift us away from poverty. My mother worked incredibly hard, and I was determined to build something that could honor that.</p>

          <p><strong>Devika:</strong> That’s really inspiring. Were you a curious child? Did any particular subjects spark your interest?</p>

          <p><strong>Perminder:</strong> Absolutely. I was very drawn to the technical side of things. I always leaned toward science. Even as a child, I was interested in building or creating things with my own hands. That curiosity eventually led me to engineering.</p>

          <p><strong>Devika:</strong> So how did your academic journey unfold after school?</p>

          <p><strong>Perminder:</strong> I completed my schooling up to the tenth grade at Guru Teg Bahadur Public School in Delhi. After that, I enrolled in a three-year diploma course in civil engineering. At the same time, I completed my twelfth through open schooling. Later, I pursued a Post Graduate Diploma in Business Management from Bharati Vidyapeeth University in Delhi—while working full-time. In fact, I started working right after my diploma. It was a necessity, both financially and personally.</p>

          <p><strong>Devika:</strong> That’s a lot of responsibility at such a young age. How did that early career experience shape you?</p>

          <p><strong>Perminder:</strong> I had to start working early because, as I mentioned, supporting my family was a priority. But once I entered the workforce, I became hungry to grow. My first job sparked a deep desire to succeed, and thankfully, I was quite successful in the corporate world. I worked until 2010 before taking the leap into entrepreneurship. That decision was a turning point.</p>

          <p><strong>Devika:</strong> And before that, you worked in a highly specialized field—tell us about DLP India and your technical background.</p>

          <p><strong>Perminder:</strong> Yes, before moving into education, I was in a highly technical role. I worked in a domain called photogrammetry, which is closely related to remote sensing. We used aerial photographs—taken from airplanes—to create 3D maps by overlapping images. I was part of projects that mapped areas across England, Denmark, the U.S., and India. For ten years, this was my world. It was fascinating work, but my long-term dream was always to build something of my own. Once I had the financial stability to support my family, I felt it was time to pursue that dream.</p>

          <p><strong>Devika:</strong> And that dream eventually pulled you toward education, right?</p>

          <p><strong>Perminder:</strong> Exactly. You see, education runs in my family. My mother was a vice principal before retiring, my wife is a teacher, my sister and sister-in-law are also teachers. So I was surrounded by educators and felt a natural affinity toward the field. In 2008, I took my first step toward this new path. I left my technical job and joined ILM University in Gurugram as a Marketing Manager. That role marked my transition into the education sector.</p>

          <p><strong>Devika:</strong> That’s a big switch—from photogrammetry to education marketing. What made you feel ready?</p>

          <p><strong>Perminder:</strong> Well, around that time, I also did a course in Piping Design from MIT Pune—still a technical field. After the course, the institute approached me with an unexpected offer: to market their programs in North India. At first, I hesitated. I wasn’t from a marketing background. But deep inside, I had this urge to do something independently. So, I took the leap. They supported me initially—provided an office and one staff member—and within two years, I became their main representative for North India. I was enrolling thousands of students in their distance learning programs. That experience gave me the confidence to fully embrace the education sector and eventually start something of my own.</p>

          <p><strong>Devika:</strong> I'm gonna stop you right there for a moment. Just so we know—what was your mantra at that time? Because you were coming completely from a technical background, and succeeding in marketing isn't easy. Especially when you yourself didn’t think it was your natural domain. So, what were you doing differently?</p>

          <p><strong>Perminder:</strong> To be honest, there were two things. First, I had a strong zeal from the beginning that I wanted to do something on my own. That fire was always there. Second, I developed a deep interest in digital marketing as early as 2007—when very few people even knew what digital marketing really was. Back then, there were websites like ClickIndia where we’d post content, and we started getting inquiries through those platforms. That’s when I realized how powerful digital marketing could be.</p>

          <p><strong>Devika:</strong> So digital marketing became your differentiator?</p>

          <p><strong>Perminder:</strong> Yes. It clicked with me naturally. I became obsessed with trying things, experimenting, and working really hard to understand how it all worked. Alongside my regular job, I kept exploring digital marketing. Eventually, it earned me a solid reputation at the university where I worked. Although I was initially hired as a Marketing Manager, I was later given responsibility to head their digital marketing team too. It was my passion and consistent effort that made it successful.</p>

          <p><strong>Devika:</strong> That’s amazing. So tell us, how did DLP India come into the picture?</p>

          <p><strong>Perminder:</strong> DLP stands for Distance Learning Programs. From the start, my main focus was always on promoting online and distance education. After about two years of support from MIT Pune—who had initially helped me with space and a team—they told me, “Perminder, now you have to take it forward on your own.” And that’s how DLP India was born. I expanded my partnerships beyond MIT, collaborating with other universities to promote distance education programs. The company still exists today.</p>

          <p><strong>Devika:</strong> Fantastic. So DLP India is still in existence?</p>

          <p><strong>Perminder:</strong> Yes, it is.</p>
          <p>
              <strong>Devika:</strong> Wonderful. And what exactly does it do now? Is it still focused on digital learning programs?
            </p>

            <p>
              <strong>Perminder:</strong> Not exactly. We’ve shifted away from distance learning. At the time, there were a lot of regulatory challenges. For instance, UGC made abrupt decisions like requiring international students enrolled in distance learning programs to physically come to India for exams. That caused many students to drop out. Amity was one of our major partners then, and even they eventually ended the partnership model. So I paused that side of the business. Now, I’m in the process of revamping DLP India to focus on international volunteering programs.
            </p>

            <p>
              <strong>Devika:</strong> That’s a wonderful pivot.
            </p>

            <p>
              <strong>Perminder:</strong> Now we’re focusing on inviting international students to India and engaging them in meaningful social causes.
            </p>

            <p>
              <strong>Devika:</strong> That’s fantastic. Truly a great blend of social good and sustainability.
            </p>

            <p>
              <strong>Perminder:</strong> Absolutely. And it’s also a good business. Many foreign universities actively encourage their students to go abroad for volunteering work as part of their curriculum or community engagement goals.
            </p>

            <p>
              <strong>Devika:</strong> I was just about to say that. I did my bachelor’s in the U.S., and we had similar work-study programs where we could go abroad and contribute. U.S. universities are very open to these kinds of collaborations.
            </p>

            <p>
              <strong>Perminder:</strong> Yes, exactly. That’s why I’m actively building networks and systems to scale this through DLP India. We've already had students come through Scope for Change. For example, we had two Watson Scholars who did a 15-day session with children here. The interest is already there—I just want to grow it bigger now.
            </p>

            <p>
              <strong>Devika:</strong> Okay. So now tell us—what sparked the creation of Scope for Change?
            </p>

            <p>
              <strong>Perminder:</strong> Honestly, I never planned to start a nonprofit. It happened organically. There was a group called EducationLangar, started by a friend of mine. It was a group of about 100 Sikh individuals, all contributing money to support students who couldn’t afford their fees. We used to pool funds and directly pay schools or colleges on behalf of the students. But then, that friend moved to the U.S., and the group went dormant. It felt like all our efforts had come to a standstill.
            </p>

            <p>
              <strong>Devika:</strong> That must have been tough.
            </p>

            <p>
              <strong>Perminder:</strong> Yes. I still remember—I was on a road trip to Chandigarh with three friends. We stopped to have tea in the car and started talking about how everything we had started had just faded away. That’s when someone said, “Why don’t we do something in the nonprofit space formally?” That was the moment when the idea for Scope for Change was born—while sipping tea in a car.
            </p>

            <p>
              <strong>Devika:</strong> That’s how it often happens! Ideas sneak up on you when you’re least expecting it.
            </p>

            <p>
              <strong>Perminder:</strong> Exactly! We had actually gone to Chandigarh for a hotel deal that didn’t work out—but instead, Scope for Change happened.
            </p>

            <p>
              <strong>Devika:</strong> And that’s what matters—execution. Ideas come and go, but it’s about taking action.
            </p>

            <p>
              <strong>Perminder:</strong> Absolutely. Once we had the idea, we knew we had to formalize it—to collaborate with more organizations and make a bigger, lasting impact. Supporting 10–12 kids was great, but we wanted to do much more. That’s why we started Scope for Change.
            </p>

            <p>
              <strong>Devika:</strong> So what was one of the early risks that you took on? What’s one you’re really glad you took?
            </p>

            <p>
              <strong>Perminder:</strong> I had just started working when I switched to entrepreneurship. My family came from a job-oriented background, so they were completely against it. For them, it was always "job, job, job." But I felt if I didn't take the plunge then, I never would. And I didn’t just do it once—I’ve taken that leap twice. First, when I quit my job to start DLP India, and then again when I began Scope for Change.
            </p>

            <p>
              <strong>Devika:</strong> That must have been really difficult—especially without full family support.
            </p>

            <p>
              <strong>Perminder:</strong> Absolutely. Especially when they found out I’d be going house to house asking for donations. It wasn’t easy to convince them, but now they’re completely on board.
            </p>

            <p>
              <strong>Devika:</strong> So you've really been an entrepreneur at heart.
            </p>

            <p>
              <strong>Perminder:</strong> Always, yes. I always wanted to do something on my own.
            </p>

            <p>
              <strong>Devika:</strong> If your family had the resources early on, would you have still done a job?
            </p>

            <p>
              <strong>Perminder:</strong> Honestly, no. But at the time, there was an urgent need—we had to shift our house. That’s what made me take up a job. And now, years later, I’ve turned that same childhood home into a Learning Center.
            </p>

            <p>
              <strong>Devika:</strong> That must be so emotional for you, so full circle.
            </p>

            <p>
              <strong>Perminder:</strong> It really is. I lost my father during the second wave of COVID. He was hoping to generate some rental income from that house. After he passed, I went there for some renovations, and while I was inspecting the space, I noticed a lot of underprivileged children walking past. That gave me the idea—why chase a little rent when I could build something meaningful? Since it was my childhood home, there’s a deep emotional connection. I decided to make it a Learning Center instead.
            </p>

            <p>
              <strong>Devika:</strong> Absolutely beautiful. Tell us a little more about Scope for Change. What exactly do you do?
            </p>

            <p>
              <strong>Perminder:</strong> We started in February 2020, and by March, the COVID lockdown hit. Starting a nonprofit is already tough—funding is critical—and the pandemic made it even harder. Originally, our vision wasn’t to run our own projects. We wanted to support smaller NGOs doing great work on the ground but struggling with resources—be it funding, volunteers, or event support.
            </p>

            <p>
              <strong>Devika:</strong> But COVID changed the game?
            </p>

            <p>
              <strong>Perminder:</strong> Completely. We had to start projects of our own to meet urgent needs. We organized book donation drives, distributed masks and sanitizers, and conducted ration distribution drives. That’s how it began. Once we started, there was no turning back.
            </p>

            <p>
              <strong>Devika:</strong> And eventually, you brought it back to education?
            </p>
            <p><strong>Perminder:</strong> Yes. Education has always been close to me—my family is from that field. Post-COVID, in March 2022, we started our first Learning Center. It’s still running, and currently supports around 120 children. This center is supported by Volkswagen.</p>

      <p><strong>Devika:</strong> That’s amazing. What do you teach at the Learning Center?</p>

      <p><strong>Perminder:</strong> Initially, we taught English and computer skills. But we noticed the kids coming from government schools were struggling academically. So we pivoted. Now, we focus on core academic subjects. The children come for three hours a day, and they’re taught by paid interns we hire every six months.</p>

      <p><strong>Devika:</strong> That’s wonderful. Actually, there’s an alignment here—I had also started an NGO focused on teaching English and computers to children in slums.</p>

      <p><strong>Perminder:</strong> That’s great! We still teach English, but computers are now only for senior students—11th and 12th graders who are preparing for employment. For younger kids, the priority is academics.</p>

      <p><strong>Devika:</strong> My NGO has been paused for a while now, but I’ve been thinking about restarting it.</p>

      <p><strong>Perminder:</strong> If you ever need support—knowledge, resources—anything at all, please feel free to reach out.</p>

      <p><strong>Devika:</strong> 100%. I’ll definitely connect with you.</p>

      <p><strong>Perminder:</strong> I’ve been doing this for five years now, taken all the necessary certifications, and gained a lot of hands-on knowledge on how to run a nonprofit.</p>

      <p><strong>Devika:</strong> That’s truly inspiring. I’ll absolutely reach out when I’m ready to get it going again.</p>

      <p><strong>Devika:</strong> So now tell me—what are the social issues that are closest to your heart right now?</p>

      <p><strong>Perminder:</strong> Like I mentioned before, education is our core focus. I believe education has the power to break generational cycles. Children whose parents work as domestic help or rickshaw pullers can have a different future if they’re educated. That’s why we continue to work so hard on this front.</p>

      <p><strong>Perminder:</strong> Apart from education, we’re also deeply involved in women empowerment and menstrual hygiene. We have a dedicated project for that called Garima. And then we have Prakriti, which focuses on environmental issues. But our flagship program is Humein Padhao, which is at the heart of what we do—and we also integrate internships into this project.</p>

      <p><strong>Devika:</strong> That’s amazing. So these students are getting hands-on skills very early in life. That’s a great initiative.</p>

      <p><strong>Perminder:</strong> Yes, and it’s not just about teaching the children. These student interns from schools—like recently, we had 50 students from one of Delhi’s top international schools—they also explore and develop their own skills during the process.</p>

      <p><strong>Devika:</strong> Exactly. It’s transformational for them too.</p>

      <p><strong>Perminder:</strong> Absolutely. I asked a few of them if anything had changed for them after doing the internship. One student told me, “Sir, I wasn’t confident teaching my younger brother before, but now I feel like I can.” That shift is powerful.</p>

      <p><strong>Devika:</strong> It truly is. These experiences aren’t just beneficial for the children being taught—they change the mindset of the interns too.</p>

      <p><strong>Perminder:</strong> Yes, it’s about shaping holistic individuals. We’re trying to instill the idea of giving back at a young age. Our goal is not just to educate the children but also to connect these young people with social causes in a meaningful way. We encourage them not to do internships just for certificates or school credit, but to genuinely connect with the cause. Because when you feel the impact yourself, it changes something inside you.</p>

      <p><strong>Devika:</strong> That’s such an important message. Like you said, as an individual or an NGO, it may feel like a drop in the ocean—but if everyone contributes, it becomes a wave.</p>

      <p><strong>Perminder:</strong> Exactly. We want these students to see firsthand how privileged they are and understand that there are children who don’t even have a chair to sit on at home. That awareness builds empathy.</p>

      <p><strong>Devika:</strong> I’d love to speak with you more on this offline. I have some thoughts to share as well.</p>

      <p><strong>Perminder:</strong> Absolutely. Anytime.</p>

      <p><strong>Devika:</strong> How do you choose the projects or communities you work with under Scope for Change?</p>

      <p><strong>Perminder:</strong> Like I mentioned, we have three key areas: education (Humein Padhao), environmental sustainability (Prakriti), and women empowerment (Garima). These are ongoing projects. Other efforts are usually event-based, but our long-term focus stays rooted in these three pillars.</p>

      <p><strong>Devika:</strong> And what’s your vision for the next five years?</p>

      <p><strong>Perminder:</strong> We want to take Scope for Change to the global level. For that, we’ve applied for FCRA certification to allow us to accept international funding. That support would allow us to scale meaningfully across India and make a wider impact.</p>

      <p><strong>Devika:</strong> That’s fantastic—and I have no doubt you’ll get there. Now tell me, what’s your approach to leading with purpose?</p>

      <p><strong>Perminder:</strong> For me, Scope for Change is heart-led. The purpose is simple—do what we set out to do. That’s what keeps us grounded. We don’t wake up wondering what to do; we wake up knowing why we’re doing it.</p>
      <p><strong>Devika:</strong> That’s what makes a purpose-driven life so different. Challenges feel like stepping stones rather than setbacks.</p>

          <p><strong>Perminder:</strong> Exactly. Even when challenges come, they push us deeper into our purpose. We see so many smiling faces at our centers—whether it’s interns or students—and that alone gives us so much motivation. It keeps us going. The main aim is to bring as much impact as we can.</p>

          <p><strong>Devika:</strong> That was going to be my next question. When progress feels slow, how do you stay motivated?</p>

          <p><strong>Perminder:</strong> Like I said, motivation comes from those smiles and the feedback we get. For example, in a recent PTM, a parent told us that a foreign family stays at their home every year, and for the first time, their daughter could communicate with them in English because of our center. That’s a real change.<br />
          Another parent told us, “I haven’t had to ask my child to get ready for class even once. He’s always ready half an hour early.” Usually, we have to push kids toward education—but here, they come willingly because they enjoy the process. We’re trying to make learning something they love, not something they’re forced into.</p>

          <p><strong>Devika:</strong> That’s incredible. Truly, truly inspiring. Now how do you encourage social responsibility in young professionals? What is your approach?</p>

          <p><strong>Perminder:</strong> Like I mentioned earlier, we run a lot of internships. We're connected with various colleges and schools, and young people come in and we introduce them directly to these communities. It's not just about teaching; they participate in distribution drives, social media activities, and even on-ground verification work. This is our way of connecting them with real issues. The kind of feedback we receive is very moving. I’ve had students from affluent backgrounds come to me emotional, saying, "Sir, we didn’t know this also happens in Delhi." That moment of realization—that’s the connection we strive to create.</p>

          <p><strong>Devika:</strong> Absolutely. Now tell me, how did it feel to be recognized as one of EY’s Top 30 Entrepreneurs?</p>

          <p><strong>Perminder:</strong> Honestly, it just happened. I came across a form, filled it in, and at that time, it was just DLP India—not even Scope For Change yet. They did their background checks, looked into our work, and felt that DLP India was worthy of that recognition. It was actually the first award I received, and it came at a time when I had just left a high-paying job. Back then, I often wondered if I made the right decision. I was earning ₹80,000 in 2010, working just two days a week. But that recognition gave me a lot of confidence and reaffirmed that I had chosen the right path.</p>

          <p><strong>Devika:</strong> It makes it easier to take the next step. Do you think India is ready for impact-driven entrepreneurship?</p>

          <p><strong>Perminder:</strong> Yes, absolutely. In fact, I think India is uniquely positioned for it. When I entered the nonprofit sector, I met so many individuals working across a range of social causes. At college events, workshops—wherever I go—I meet young people who genuinely want to contribute. I’ve had MBA students intern with us, and recently, I judged a competition at Delhi University’s Sukhdev College of Business Studies. I saw firsthand how students are learning early on that contributing to social good matters. Plus, we now have more mentors and impact investors involved in this space than ever before. India has a strong foundation for social innovation.</p>

          <p><strong>Devika:</strong> That’s very encouraging. Now, getting personal—how do your weekends look given your packed schedule?</p>

          <p><strong>Perminder:</strong> My weekend is essentially just Sunday—we work six days a week at Scope For Change. Sunday starts with a game or two of badminton. I'm a regular player; we have a court in our society and play for about an hour or so. After that, it’s all about routine maintenance, catching up on a Netflix series, and spending quality time with my family. I’m very close to my mother. I’ve seen her work extremely hard when we were kids—she was a teacher and used to give home tuitions. She’s 77 now, and I feel it’s my time to be there for her. She doesn’t have material needs anymore; she just needs someone to talk to. That’s where I find joy—just being there for her.</p>

          <p><strong>Devika:</strong> That’s beautiful. God bless you.</p>

          <p><strong>Perminder:</strong> You know, I had several opportunities to settle abroad. I’ve been to the U.S., Ireland, and the UK, but I didn’t pursue them because I wanted to stay with my parents—especially my mom. My father passed away during COVID, and now, I just want to spend as much meaningful time with her as possible.</p>

          <p><strong>Devika:</strong> Absolutely wonderful. Now, what’s your take on work-life balance?</p>

          <p><strong>Perminder:</strong> Work-life balance is a challenge we all face. But I believe it’s about setting priorities. If your presence is needed at home, then you must be there fully. And if you're needed at work, you give your full there too. It’s about being mindful and present, wherever you're needed most.</p>

          <p><strong>Devika:</strong> Very true. Who has shaped your outlook in life the most?</p>

          <p><strong>Perminder:</strong> My mom, without a doubt. She’s my mentor. Watching her dedicate herself to educating us, even through tough times, has been my biggest inspiration. I owe her everything, and I hope I can repay even a fraction of what she’s done for us.</p>

          <p><strong>Devika:</strong> And what’s one life lesson you’d want to share with others?</p>

          <p><strong>Perminder:</strong> People often chase profit endlessly. I was talking to a wealthy friend just yesterday who asked me what I was doing these days. He’s well-off, but he admitted he now wants to do something meaningful. I think at some point, no matter how many zeros you add to your bank balance, you have to pause and find the real purpose of your life.</p>

          <p><strong>Devika:</strong> That's a powerful thought, especially in today's fast-paced world. Finally, what legacy do you hope to leave behind?</p>
          <p>
              <strong>Perminder:</strong> I want to inspire young people to stay
              connected to social causes. Everyone, in their individual capacity,
              can contribute—beyond jobs, careers, and family. Doing good shouldn't
              be something you fit into your schedule; it should be part of your
              everyday routine.
            </p>

            
            
           

            
            
            
            
            
            
    



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
          Rapid Fire with Perminder
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
            src="/parminderRapid.mp4" // <-- use your vertical video file
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



    <p>
              <strong>Devika:</strong> Now let's jump into some rapid fire!
            </p>

            <p>
              <strong>Perminder:</strong> Yes, yes. Sure!
            </p>

            <p>
              <strong>Devika:</strong> A quote that keeps you going?
            </p>

            <p>
              <strong>Perminder:</strong> There's this one quote in Sikhism — “मानस की जात सबे एकै पहि हि चानबो” — 
              which means recognizing the entire human race as one. That’s something I live by.
            </p>

            <p>
              <strong>Devika:</strong> That’s so beautiful. One book everyone should read?
            </p>

            <p>
              <strong>Perminder:</strong> I’ve honestly never been into reading books. I’m a very technically 
              inclined person, so I prefer exploring innovations online. I can’t really comment on a book.
            </p>

            <p>
              <strong>Devika:</strong> Fair enough! Something you never travel without?
            </p>

            <p>
              <strong>Perminder:</strong> A hairdryer.
            </p>

            <p>
              <strong>Devika:</strong> Ah, okay! (laughs)
            </p>

            <p>
              <strong>Perminder:</strong> I have a long beard, and if you’re traveling to colder places, it takes 
              a lot of time to get it right. So yes, I always carry it with me.
            </p>

            <p>
              <strong>Devika:</strong> Makes sense! The most underrated quality in a person?
            </p>

            <p>
              <strong>Perminder:</strong> Empathy.
            </p>

            <p>
              <strong>Devika:</strong> Very true. One habit you swear by?
            </p>

            <p>
              <strong>Perminder:</strong> Always being ready for a meeting. For instance, I recently met the 
              Deputy Chief Minister of Delhi. These calls come unexpectedly, and I believe one meeting 
              can change everything. You should always be prepared—you never know which door opens where.
            </p>

            <p>
              <strong>Devika:</strong> That’s a very different and very real insight. You’re right—you never 
              know where opportunity strikes. Favorite way to disconnect?
            </p>

            <p>
              <strong>Perminder:</strong> Just keep quiet.
            </p>

            <p>
              <strong>Devika:</strong> That’s true… although it’s difficult for women, you know! (laughs)
            </p>

            <p>
              <strong>Devika:</strong> One change you’d love to see in the world?
            </p>

            <p>
              <strong>Perminder:</strong> We should stop destroying nature for personal benefit.
            </p>

            <p>
              <strong>Devika:</strong> Agreed. One piece of advice you’d give your 20-year-old self?
            </p>

            <p>
              <strong>Perminder:</strong> Take risks earlier.
            </p>

            <p>
              <strong>Devika:</strong> But you were a risk-taker early on, right?
            </p>

            <p>
              <strong>Perminder:</strong> I was, but with the resources I had, I had to stick with a job 
              for 12 years. Maybe if I had taken the leap earlier, I’d be in a different place now. 
              That said, I’m still very content—connected deeply to Scope for Change, my team, my 
              family. I’m satisfied. But yes, perhaps that satisfaction would’ve arrived sooner 
              if I had started earlier.
            </p>

            <p>
              <strong>Devika:</strong> That’s very real. Would you rather build something that changes 
              100 lives or inspires a million?
            </p>

            <p>
              <strong>Perminder:</strong> Inspire a million. Through our internship programs, we’re creating 
              a chain of young people who’ll go on to do good work in the world. So yes, it’s about 
              inspiring the masses.
            </p>

            <p>
              <strong>Devika:</strong> First word that comes to mind when you hear the word change?
            </p>

            <p>
              <strong>Perminder:</strong> Yourself.
            </p>

            <p>
              <strong>Devika:</strong> Have you ever had a moment when giving up seemed easier than moving on?
            </p>

            <p>
              <strong>Perminder:</strong> No. I’ve never felt like giving up. That’s just not me.
            </p>

            <p>
              <strong>Devika:</strong> That’s exactly what I sensed from the beginning—you’ve always had the 
              true entrepreneurial spirit. Founders have that grit. Others may come and go, but we 
              hold on to the vision till the very end.
            </p>

            <p>
              <strong>Perminder:</strong> Exactly. For example, when I left my job, two of my friends did the 
              same. But within a year, they went back to their jobs. If you don’t have that level of 
              commitment and belief in yourself, you can’t sustain the journey.
            </p>

            <p>
              <strong>Devika:</strong> True. One person you’d love to collaborate with?
            </p>

            <p>
              <strong>Perminder:</strong> Diljit Dosanjh and his foundation.
            </p>

            <p>
              <strong>Devika:</strong> Oh, love that! If your life were a documentary, what would the title be?
            </p>

            <p>
              <strong>Perminder:</strong> Be the Change.
            </p>

            <p>
              <strong>Devika:</strong> A superpower you wish you had?
            </p>

            <p>
              <strong>Perminder:</strong> One-click, real-time solutions. It takes a lot of effort to create 
              impact in the social sector. If only I could solve things with a single click!
            </p>

            <p>
              <strong>Devika:</strong> You have one free hour—meditation music or Netflix?
            </p>

            <p>
              <strong>Perminder:</strong> Netflix.
            </p>

            <p>
              <strong>Devika:</strong> A project that felt like a rollercoaster?
            </p>

            <p>
              <strong>Perminder:</strong> Our distribution drive during COVID. Managing the pressure from 
              family and logistics—it wasn’t easy. That was a rollercoaster for sure.
            </p>

            <p>
              <strong>Devika:</strong> A mindset mantra you live by?
            </p>

            <p>
              <strong>Perminder:</strong> A sense of positivity.
            </p>

            <p>
              <strong>Devika:</strong> A mistake that taught you something priceless?
            </p>
            <p>
            <strong>Perminder:</strong> Lack of patience.
          </p>

          <p>
            <strong>Devika:</strong> One dream you're still chasing?
          </p>

          <p>
            <strong>Perminder:</strong> You know, I really want to have a two-day
            get-together with my entire family—my immediate and extended
            family. Some are in Canada, some in the US. My dream is to bring
            everyone together in one place and just spend quality time. That’s
            the one thing I’m still chasing.
          </p>

          <p>
            <strong>Devika:</strong> That’s beautiful. And absolutely, it will
            happen. Given your personality and your commitment to everything you
            take up, I have no doubt that it’ll come true on your personal front
            as well.
          </p>

          <p>
            <strong>Perminder:</strong> Yeah.
          </p>

          <p>
            <strong>Devika:</strong> Now, tell me this—biking solo in the
            mountains or a weekend badminton tournament?
          </p>

          <p>
            <strong>Perminder:</strong> Definitely a weekend badminton
            tournament. I’m not really a solo person. I’m more of a networking
            guy. I have a lot of friends—from different walks of life. My
            college friends, my first job friends, second job friends, business
            contacts, biking friends, even my Edmonton friends. I’m very
            people-oriented. Doing something solo doesn’t excite me as much as
            doing it with people I care about.
          </p>

          <p>
            <strong>Devika:</strong> That’s exactly like me! I’m also someone
            who thrives around friends and people. Wonderful. It’s been so nice
            talking to you. I think we’ve covered most of it, and if there’s
            anything else or we need any additional details, my team will reach
            out to you.
          </p>

          <p>
            <strong>Perminder:</strong> Sure.
          </p>

          <p>
            <strong>Devika:</strong> I’ll personally be in touch with you too
            for a separate project I’m working on.
          </p>

          <p>
            <strong>Perminder:</strong> Absolutely, looking forward to it.
          </p>

          <p>
            <strong>Devika:</strong> And before we wrap, can you tell me how it
            was talking to Global Influencers Hub today? That would be really
            special for our platform.
          </p>

          <p>
            <strong>Perminder:</strong> Yes, definitely. I think it’s a
            wonderful initiative. The questions were long, yes, but they were
            meaningful—deep and very relevant. They touched on different stages
            of life, from childhood to professional milestones. It wasn’t just a
            corporate conversation or just a personal one—it was a beautiful
            blend of both. My best wishes to Global Influencers Hub. I genuinely
            hope you’ll be able to reach out to many more influencers, and
            eventually become a global platform in the true sense.
          </p>

          <p>
            <strong>Devika:</strong> Thank you so much, Perminder. It’s been
            lovely speaking with you, and I look forward to connecting again
            soon.
          </p>

          <p>
            <strong>Perminder:</strong> Thank you, Devika.
          </p>

          <p>
            <strong>Devika:</strong> Thanks. Bye!
          </p>

          <p>
            <strong>Perminder:</strong> Bye. Take care.
          </p>
        
            
            
            
            
            
           
            
          
            

            
           
    </Container>
           
            </Card.Body>
          
    </>
  );
};

export default Parminder ;
