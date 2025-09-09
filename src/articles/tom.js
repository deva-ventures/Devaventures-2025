import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const Tom = () => {
  return (
    <>
     
            <Card.Body>
               {/* Top Notice Section */}
 
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
              I believe in using your past as a measure of how far you've come — but not as a place to live in.
              </q>{" "}
              – <strong>Tom Lawrence</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/tomArticle.png" // <-- second image here
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
    href="https://youtu.be/qTACgjL39tM"
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
    window.open("https://youtu.be/qTACgjL39tM", "_blank");
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
    window.open("https://youtu.be/qTACgjL39tM", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://youtu.be/qTACgjL39tM"
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
      src="/tomConvo.jpg" // replace with your image path
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
            Tom Lawrence, a passionate leadership coach, author, and former engineering leader, joined Devika Majumder, Founder of Global Influencers Hub, for a deeply authentic and inspiring conversation. Known for his grounded approach to leadership and his unwavering focus on people, Tom opened up about his personal transformation — from navigating the challenges of authority and stress in corporate life to becoming a coach who empowers others to lead with clarity, compassion, and courage. His journey is one of self-discovery, humility, and service. Through stories of growth, failure, and quiet victories, Tom reflects on what it means to lead not by telling, but by listening — and how influence begins with self-awareness. 
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
      src="/tomRapid.mp4"
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

            

    <p><strong>Devika Majumder:</strong> Hi, Tom. Welcome to Global Influencers Hub. Here, we love diving into the bigger picture — not just where creators are today, but where it all began. So let’s rewind a bit. Tell us, what was Tom like as a child?</p>
            <p><strong>Tom Lawrence:</strong> I’d say I was quite a quiet kid — definitely more on the introverted side. But I had a decent group of friends, and I was involved in a few clubs growing up. I was part of the Cubs and the Scouts, which taught me a lot. I’m from Liverpool, as you might guess from the accent — and I’ve always been a huge Liverpool Football Club fan.</p>
            
            <p><strong>Devika:</strong> Of course!</p>
            <p><strong>Tom:</strong> Yeah, it’s been in the blood since childhood. I used to go to matches with my dad, and later on, with my brothers or friends. I’m the youngest of four boys — I’ve got three older brothers — and I think that had a big influence on me. Not in a bad way, they weren’t bullies or anything, but with three older siblings around, I naturally ended up being the quieter one.</p>

            <p><strong>Devika:</strong> You were probably someone who looked up to all three of them?</p>
            <p><strong>Tom:</strong> Exactly. There’s quite a bit of an age gap too. My oldest brother is twelve years older than me, and the others are spaced out by about five and three years. So while we got along really well — lots of laughs, and, as you’d expect, a few arguments — I was definitely the youngest, and maybe a bit more protected and looked after than the rest.</p>

            <p><strong>Devika:</strong> That makes total sense.</p>
            <p><strong>Tom:</strong> Yeah. I’d say I had a really good childhood. I enjoyed life — I loved football, played golf, and learned the guitar too. Music was always a big part of my life.</p>

            <p><strong>Devika:</strong> Quite the talented kid, I must say.</p>
            <p><strong>Tom:</strong> I wouldn’t say I was naturally talented — I just practiced a lot. That’s something I learned early on. If I wanted to get good at something, I had to put in the work. I was pretty determined that way. I did well in school too — studied hard, got good grades — and I had a great bunch of friends. Looking back, it was a happy and fulfilling time.</p>

            <p><strong>Devika:</strong> Was there anyone during those years who influenced you a lot? Someone you really looked up to?</p>
            <p><strong>Tom:</strong> Definitely my parents, first and foremost. Especially my dad — he always emphasized the importance of helping others. I remember him asking me once, “Do you want to be a doctor? They help people.” Becoming a doctor wasn’t really for me, but that idea of doing something meaningful, something that helps others — it stuck with me.</p>
            <p>And from about age nine to seventeen, I had a mentor named May Kennan. She lived on our street and ran a local drama club. She introduced me to public speaking and coached me through various exams. Thanks to her, I became quite comfortable speaking in front of people, which later helped a lot in my career — especially during presentations and leadership roles.</p>

            <p><strong>Devika:</strong> That’s wonderful. Such mentorship at an early age can make a huge difference.</p>
            <p><strong>Tom:</strong> Absolutely. And my brothers were also a big influence — especially with music. They introduced me to bands like Van Halen, and I just ran with it. Eddie Van Halen became a real hero for me — not just because of how he played guitar, but because of the way he inspired so many others to pick it up. That kind of impact really stuck with me. It made me want to inspire others through whatever I chose to do.</p>

            <p><strong>Devika:</strong> I love that. It really does feel like a full circle.</p>
            <p><strong>Tom:</strong> Yeah, it does.</p>

            <p><strong>Devika:</strong> Here's a fun one — if we asked your childhood friends what they thought Tom would grow up to be, what do you think they’d say?</p>
            <p><strong>Tom:</strong> Haha, maybe a rockstar — like Eddie! But realistically, probably an engineer. My dad was an engineer. So was my brother. And I eventually followed that path too, starting my engineering career at sixteen. So that would’ve been the logical guess.</p>
            <p>But I think they might’ve also said I’d end up in some kind of leadership role. Even as a kid in Cubs or Scouts, I naturally tried to help others — push them to be their best. I always had that sense of encouraging people, even back then.</p>

            <p><strong>Devika:</strong> That’s really interesting. Sounds like the leadership spark was always there. So, talk to us about your biggest career detour. Was there a turning point that really shifted the trajectory?</p>
            <p><strong>Tom:</strong> I’d say one of the biggest detours came when I was around 22. That’s when I joined the rail industry in the UK and started working in the engineering department. That was back in 2005. My first role was as a Technical Officer — not a senior position, more like an entry point to get my foot in the door.</p>

            <p><strong>Devika:</strong> Okay.</p>
            <p><strong>Tom:</strong> This was still in Liverpool, my hometown. I worked really hard to prove myself and eventually convinced the company to sponsor my engineering degree. I went through university with their support and completed my degree in 2009. That’s when I got accepted onto a graduate scheme within the industry.</p>
            <p>As part of that program, I was assigned a mentor named Ron. After a couple of years, he pulled me aside and said, “You know, you’ve done a lot in the rail sector. You’ve got your degree. And even without a formal title, you’re already leading people.” That really stuck with me.</p>

            <p><strong>Devika:</strong> So he nudged you toward leadership?</p>
            <p><strong>Tom:</strong> Exactly. He helped me see something in myself that I hadn’t fully acknowledged. I always wanted to step into leadership, so when the opportunity came up, I was ready. But at the time, the company didn’t have any open leadership positions. I waited — but after a couple of years, still nothing.</p>
            <p>That’s when I decided to look beyond Liverpool. I applied for a job in Edinburgh with ScotRail and after the interview, they offered me the role.</p>

            <p><strong>Devika:</strong> So that was your first big move?</p>
            <p><strong>Tom:</strong> Yes — in 2011, I left Liverpool and moved to Scotland for my first leadership position. I didn’t know anyone there. I didn’t know the city or the people. It was a big leap. That’s why I’d call it my first major career detour — not just professionally, but personally as well.</p>

            <p><strong>Devika:</strong> That must’ve been quite the transition.</p>
            <p><strong>Tom:</strong> It really was. The role was as a Production Manager, and it was the first time I worked rotating shifts — night shifts, back shifts, day shifts — all with different teams. I had to build relationships fast. I had to learn how to influence and lead people I barely knew, and who didn’t always work on the same shift as me.</p>
            <p>I stayed in Edinburgh for two years, and then moved to Glasgow for a similar position. It was another opportunity to push myself, expand my network, and experience leadership in a different environment.</p>

            <p><strong>Devika:</strong> So you were constantly stepping out of your comfort zone.</p>
            <p><strong>Tom:</strong> Definitely. And after two years in Glasgow, I was ready for something new again. That’s when I found an opportunity in London. I went through the process, got the job, and moved there in 2015. I’ve been in London ever since.</p>
            <p><strong>Devika:</strong> Wonderful. That’s quite a journey. And you did it all on your own.</p>
            <p><strong>Tom:</strong> Yeah. Looking back, each move came with new lessons — not just about leadership, but about myself.</p>

            <p><strong>Devika:</strong> Would you say corporate life taught you the most valuable lessons before you transitioned to working on your own?</p>
            <p><strong>Tom:</strong> One of the most important lessons I learned in the corporate world was how to lead yourself. A lot of people associate leadership with managing others — which it is — but it really starts with you.
            When you move to a new city, start a new job, or enter unfamiliar territory, your ability to stay grounded, to adapt, and to manage your own emotions becomes crucial. Outside of work, you're still living a life — and you have to be confident, capable, and calm in that too.</p>

            <p><strong>Devika:</strong> So, learning to navigate the environment as a whole.</p>
            <p><strong>Tom:</strong> Exactly. Leading yourself well creates the foundation to lead others effectively. That understanding really shaped how I approached leadership later on. I started asking myself: how can I become the most valuable version of myself — not just for personal growth, but so others can learn from my journey too?</p>

            <p><strong>Devika:</strong> And now, you help others become more effective leaders. How did that clarity come to you?</p>
            <p><strong>Tom:</strong> It really came through experience — especially during the tougher chapters. In 2017, I moved into a new role in London — a Deputy Head of Engineering position. It was a senior leadership job, and on paper, it looked great.
            But the reality was very different. The people above me — my direct boss and his boss — were not strong leaders. They operated more like dictators and micromanagers. They'd call you at 1:00 in the morning if something went wrong. And they pushed me to manage my team the same way — controlling, rigid, and fear-driven.</p>

            <p><strong>Devika:</strong> That sounds extremely difficult.</p>
            <p><strong>Tom:</strong> It was. And honestly, I didn’t have the strength back then to push back. I wasn’t the leader I am today. I wanted to prove myself, so I managed my team the way I was told to. I didn’t lead — I just followed instructions, even when I knew it wasn’t right.
            I was afraid — afraid of being seen as weak, afraid of losing the job. But that experience taught me something powerful. When I finally left that role, I reflected deeply. I realized I never wanted to make anyone on my team feel the way I had felt. And I knew others out there might be going through the same thing.
            That’s when it clicked — maybe I could help people become better leaders by sharing what I went through. Show them the mistakes I made, the lessons I learned — so they don’t have to make the same ones.</p>

            <p><strong>Devika:</strong> That’s powerful — turning pain into purpose.</p>
            <p><strong>Tom:</strong> Yeah, it became a mission of sorts. And that’s really where the journey of building leadership content and coaching others started for me.</p>

            <p><strong>Devika:</strong> Tom, how do you stay connected to your purpose — especially on the tough days?</p>
            <p><strong>Tom:</strong> My “why” is very clear: it’s to help current and future leaders become highly effective — so that they can, in turn, help others do the same. It’s a ripple effect.
            So when I’m having a difficult day, or I find myself in a challenging situation — say, coaching someone going through a rough patch — I always ask myself: Is this action I’m about to take, or this question I’m about to ask, aligned with my purpose? If the answer is no — if it doesn’t help that person or enhance my purpose — I won’t do it.
            I used to take actions just to keep the peace or to meet expectations, especially when I wasn’t confident in myself as a leader. But now, I’ve learned that everything I do must feed into that bigger mission. That’s how I stay connected — by filtering everything through the lens of my purpose.</p>

            <p><strong>Devika:</strong> That’s powerful. So what does success look like to you? Not in terms of titles or numbers — but real success?</p>
            <p><strong>Tom:</strong> For me, success isn’t about titles, accolades, or earning loads of money. It’s about impact. If I can share my message every single day — whether it’s through free content, my books, or coaching sessions — and if that helps even one person become a better leader, that’s success.
            This isn’t just a career anymore — it’s my life’s work. Unlike traditional jobs, where you might retire at 65, I don’t see myself ever stopping. I’ll be doing this until the day I can’t. Because this is my passion. And I believe when passion and purpose come together, you’ve found your true calling.</p>

            <p><strong>Devika:</strong> So true. It’s like a beautiful marriage between passion and purpose.</p>
            <p><strong>Tom:</strong> Absolutely. And when that happens, you don’t even want to stop.</p>

            <p><strong>Devika:</strong> I love that. So when did you first realize you wanted to write a book?</p>
            <p><strong>Tom:</strong> That came after a tough phase in early 2018. I just left a job and took three months off. That really broke me down, because I took these 3 months to find a job. But after the first month, something shifted. I realized I needed to share what had just happened to me — not to complain, but to help others learn from it.
            So I started writing. I created a blog site called highlyeffectiveleader.com in January 2019 and began posting once a week. Back then, I told myself: If I can write a paragraph a day, that’s progress. But honestly, I had so much to say, the words just poured out of me.
            After about six months, I looked at all the content I had and thought — this could be a book.</p>

            <p><strong>Devika:</strong> That’s amazing. So how did you go from blog to book?</p>
            <p><strong>Tom:</strong> I joined a program called Self-Publishing School, which taught me how to structure my book, create an outline, and typeset everything properly. It gave me a framework.
            That first book was called Manager to Leader. I chose that title because the job I had just left had me titled as a manager — but in truth, I should’ve been a leader. That realization became the heart of the book: helping people grow out of just managing and into truly leading, no matter what their title says.</p>

            <p><strong>Devika:</strong> So Manager to Leader was born from a very personal realization.</p>
            <p><strong>Tom:</strong> Exactly. And once I started, I didn’t want to stop. I realized I had enough material — and enough lived experience — to write a whole series. So I kept going. It’s been five years since I published the first book in 2021, and now the Highly Effective Leader series is available on Amazon.</p>

            <p><strong>Devika:</strong> That’s such an accomplishment. Congratulations!</p>
            <p><strong>Tom:</strong> Thank you so much.</p>

            <p><strong>Devika:</strong> What were some of the biggest challenges you faced while writing?</p>
            <p><strong>Tom:</strong> The biggest one was making sure I wasn’t just repeating what other leadership gurus were saying — but actually living it. I’ve learned a lot from people like John Maxwell, Simon Sinek, and others, but I knew I couldn’t just echo their ideas. I had to apply them. Test them. Fail at them. Practice them in real life.
            So for every principle I wanted to write about, I’d first try it out — whether with my team, friends, or even family. I needed to experience it, see what worked, what didn’t, and then write about it. That was the real challenge: making the writing authentic, not theoretical.</p>

            <p><strong>Devika:</strong> That makes so much sense. After all, leadership is about life — not just work.</p>
            <p><strong>Tom:</strong> Exactly. Leadership isn’t a job title — it’s a way of living. And that’s the lens through which I continue to write and teach today.</p>

            <p><strong>Devika:</strong> What’s the biggest myth about leadership that your work tries to break?</p>
            <p><strong>Tom:</strong> Across all five of my books, there’s a clear thread that runs through each one. They’re connected — like a continuous conversation. And the central myth I try to challenge is the belief that leadership is about control, power, or position.</p>
            <p><strong>Tom:</strong> So many people still think leadership means micromanaging, dictating, or simply holding a high-ranking title. But that’s not leadership. Real leadership is about inspiring, influencing, and empowering others. Leadership is influence — and influence is leadership. And the truth is, everyone has the ability to influence. That means everyone has the potential to be a leader — regardless of job title.</p>

            <p><strong>Devika:</strong> That’s such an important perspective. It’s so true — people often confuse job titles with leadership.</p>

            <p><strong>Tom:</strong> Exactly. Being a manager doesn’t automatically make someone a leader. But a good manager can be a great leader. It’s about how you show up for people, how you guide, support, and lift others — not what your title says on paper.</p>

            <p><strong>Devika:</strong> I always believe that real leaders create other leaders. It’s about passing on the torch and inspiring others to lead too.</p>

            <p><strong>Tom:</strong> Absolutely. And that’s part of the responsibility. Once you know how to lead effectively, you have a duty to help others do the same.</p>

            <p><strong>Devika:</strong> Beautifully said. So, switching gears a bit — what does your typical morning routine look like? How do you keep your leadership engine running?</p>

            <p><strong>Tom:</strong> I start my day early — 5 AM, every morning.</p>

            <p><strong>Devika:</strong> Wow. That’s impressive.</p>

            <p><strong>Tom:</strong> Yeah, it’s early — but it works for me. The first thing I do is head to the living room, make myself a cup of coffee, and sit down at my laptop. I head straight to LinkedIn — check what’s happening, engage with people — and then I write my first post of the day.</p>
            <p><strong>Tom:</strong> That post usually includes a link to some of the free resources I’m sharing at the time. Right now, it could be a free eBook called <em>Increase Your Influence</em>, a sample chapter from my latest book <em>Highly Effective Team</em>, or access to my free online course <em>How Leaders Lead Change</em>.</p>
            <p><strong>Tom:</strong> Once I post that, it’s time to head out for work. I currently support an engineering company in the rail industry, and the site is about an hour and a half away by train. I spend the day working closely with their team, and when I get back home, I post my second update on LinkedIn.</p>

            <p><strong>Devika:</strong> You post twice a day? That’s consistent!</p>

            <p><strong>Tom:</strong> Yes, and I write every single day. I have a rule — at least one paragraph a day, no matter what. Sometimes it’s more, but never less. That’s how I keep building my material. And throughout the day, if someone reaches out to talk — whether it’s coaching-related or just a leadership discussion — I always make myself available.</p>

            <p><strong>Devika:</strong> Your day is structured completely around your leadership purpose. That’s inspiring.</p>

            <p><strong>Tom:</strong> That’s what keeps the fire burning. It’s more than a routine — it’s a commitment to helping others grow, every day.</p>

            <p><strong>Devika:</strong> Now, Tom, you've coached so many people over time. What’s one moment that moved you deeply?</p>

            <p><strong>Tom:</strong> I’d have to say it was during my very first coaching session. It wasn't long ago that I officially became a coach — I’d just completed my coaching diploma and was starting to work with clients. Naturally, I was really nervous. You know how it is when you’re stepping into something new.</p>
            <p><strong>Tom:</strong> The client I worked with was from the same organization I was in at the time. I didn’t know her personally, but I knew the team she worked in and the kind of role she had. She approached me with a clear challenge — she wanted to be promoted but had no idea how to go about it. She expected me to hand her the answers, to tell her exactly what to do. But as a coach — and a leader — my job isn’t to give solutions. It’s to help someone find them for themselves.</p>

            <p><strong>Devika:</strong> Of course, that’s the heart of coaching.</p>

            <p><strong>Tom:</strong> Exactly. So we had a few sessions, and she started taking real steps toward her goal. Eventually, she got an interview for a position she never thought she’d qualify for — and she got the job. She was promoted.</p>
            <p><strong>Tom:</strong> Now, I won’t claim all the credit — this was her achievement, absolutely. But knowing I played a part in her journey, even a small one, really hit home for me. It made me realize, “I can actually do this. I’m good at this.” That moment validated so much for me.</p>

            <p><strong>Devika:</strong> Of course. These are the moments when you discover your own strength too.</p>

            <p><strong>Tom:</strong> Exactly. Sure, I’ve worked with teams before, and we’ve achieved great things. We’ve also had our failures — that’s just life. But helping someone unlock something in themselves, that’s powerful. That moment with her was a turning point — for both of us, I think.</p>

            <p><strong>Devika:</strong> Beautiful. Now, what’s one personal failure that turned out to be a powerful teacher in your leadership journey?</p>

            <p><strong>Tom:</strong> I’ve spoken about it before, but it still stands as one of my biggest lessons. There was a particular job I had — a leadership role — where I completely failed to manage negativity. And the worst part? That negativity was coming from me.</p>
            <p><strong>Tom:</strong> I didn’t see it at the time, but I was micromanaging my team, telling them exactly what to do and how to do it, with no room for their ideas or input. If someone disagreed or suggested a different approach, I’d shut it down immediately. I’d say things like, “I don’t care. Just do it.” I became dismissive — even harsh.</p>

            <p><strong>Devika:</strong> That kind of blindness can happen to the best of us, especially under pressure.</p>

            <p><strong>Tom:</strong> Exactly. I was under a lot of stress myself. My own line managers were micromanaging me, and I didn’t have the strength back then to push back. I felt like I had no choice but to pass that pressure down to my team — and I regret that deeply.</p>
            <p><strong>Tom:</strong> To cope, I started drinking more — going to the pub frequently. I wasn’t an alcoholic, but I was using alcohol as a crutch, and it was clearly the wrong way to deal with what I was going through.</p>

            <p><strong>Devika:</strong> That must’ve been tough.</p>

            <p><strong>Tom:</strong> It was. But for nearly a year now, I’ve given up alcohol completely. I realized if I truly want to help people — to lead people — I have to do it right. That means making sacrifices. It means showing up with clarity and integrity. No more numbing the stress — I needed to feel it and learn from it.</p>
            <p><strong>Tom:</strong> I also worked hard on myself. Now, if someone is being negative toward me or my team, I have the confidence to push back — respectfully, but firmly. I’ve learned the power of saying “no.”</p>

            <p><strong>Devika:</strong> And saying no is an art in itself.</p>

            <p><strong>Tom:</strong> It really is. Another big shift for me was in how I lead. I no longer tell people exactly what to do. If someone on my team has a new idea — one that might even be better than mine — I give them full permission to try it. I empower them. And if it works, great. If it doesn’t, we talk about it and come up with something else together.</p>

            <p><strong>Devika:</strong> That’s true empowerment — giving people the space to learn and grow, just like you did.</p>

            <p><strong>Tom:</strong> Yes. Leadership isn’t about barking orders. It’s about giving people the opportunity to discover their own strengths. It’s about creating space for learning, for experimenting, and for evolving — together.</p>

            <p><strong>Devika:</strong> So, Tom, what’s one thing about you that people would be surprised to learn?</p>

            <p><strong>Tom:</strong> Well… I’m not married.</p>
            <p><strong>Devika:</strong> Okay!</p>
            <p><strong>Tom:</strong> I don’t have a girlfriend either. I live alone in London — which I’m actually quite happy about. I’m not lonely or anything.</p>
            <p><strong>Devika:</strong> Oh my god — sounds like you're more into your purpose, probably.</p>
            <p><strong>Tom:</strong> Exactly. I mean, if I eventually meet someone, great. I’m not against it. But I’m very content where I am right now, focused on what I love doing.</p>
            <p><strong>Devika:</strong> That’s probably something that would surprise people — “Hey, Tom? Really?” Interesting! Alright, what’s one quote that never fails to inspire you?</p>
            <p><strong>Tom:</strong> “Leadership is about others, but it starts with you.” I use that quite a lot. And another one I love is: “Be the leader you always wish you had.”</p>
            <p><strong>Devika:</strong> Oh, that’s a good one. I really like that.</p>
            <p><strong>Tom:</strong> It’s powerful, right? It kind of touches you. Helps you stay grounded, keeps you improving. I believe in using your past as a measure of how far you've come — but not as a place to live in. If you did something a certain way yesterday, do it better today. And then even better tomorrow.</p>
            <p><strong>Devika:</strong> Absolutely. So, have you ever had a fan moment?</p>
            <p><strong>Tom:</strong> Yeah, I’ve had a few. Mostly from people who’ve read my books or followed my work. I remember being at a networking event once when someone recognized me as the author of “From Manager to Leader” — my first book.</p>
            <p><strong>Devika:</strong> That must’ve felt special.</p>
            <p><strong>Tom:</strong> It did! This guy wasn’t even from the UK originally — he was from India, working in the rail industry in England. He’d found my book through LinkedIn and bought it. Then, by chance, he saw me at this event and came over. He didn’t have the book on him, so I couldn’t sign it, but I told him — if we ever crossed paths again or if he ever needed help, I’m just a message away.</p>
            <p><strong>Devika:</strong> That’s so cool. Now tell me, if you weren’t a leadership coach, what alternate career would you have picked — and enjoyed?</p>
            <p><strong>Tom:</strong> I think I know what you’re going to say… rockstar, right?</p>
            <p><strong>Devika:</strong> (laughs) Yes! I had a feeling!</p>
            <p><strong>Tom:</strong> Yeah, I still play the guitar. I’m not in a band or anything now, but music has always been a part of me. So if I hadn’t been in engineering, and then leadership and coaching… yeah, probably a rockstar. That would’ve been fun.</p>
        

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
          Rapid Fire with Tom
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
            src="/tomRapid.mp4" // <-- use your vertical video file
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














            <p><strong>Devika:</strong> Wonderful. Alright, let’s jump into some rapid fire now, shall we?</p>
            <p><strong>Tom:</strong> Let’s go!</p>
             <p><strong>Devika:</strong> What’s the last thing you Googled?</p>
            <p><strong>Tom:</strong> Ticketmaster. I was looking for Led Zeppelin tickets! I think they’re coming back on tour. That was last night around 9 PM when I got home.</p>
            <p><strong>Devika:</strong> Oh wow, that’s cool! Alright, a book you recommend the most?</p>
            <p><strong>Tom:</strong> Can I say one of my own?</p>
            <p><strong>Devika:</strong> Of course!</p>
            <p><strong>Tom:</strong> Then it would be my latest one — Highly Effective Teams. It’s all about how to lead and grow a highly effective team. It focuses not just on personal leadership, but the development of others as well.</p>
            <p><strong>Devika:</strong> Love that. Leadership in one word?</p>
            <p><strong>Tom:</strong> Influence.</p>
            <p><strong>Devika:</strong> Most used app on your phone?</p>
            <p><strong>Tom:</strong> LinkedIn.</p>
            <p><strong>Devika:</strong> Mountains or beaches?</p>
            <p><strong>Tom:</strong> Beaches.</p>
            <p><strong>Devika:</strong> Would you rather talk to a fictional character or speak every language in the world?</p>
            <p><strong>Tom:</strong> Speak every language in the world.</p>
            <p><strong>Devika:</strong> Inspiring leader or great listener?</p>
            <p><strong>Tom:</strong> That’s a tough one… Can I say both?</p>
            <p><strong>Devika:</strong> I’ll allow it! If you were a superhero, what would your superpower be?</p>
            <p><strong>Tom:</strong> Great listener.</p>
            <p><strong>Devika:</strong> Nice. If you could do only one thing for the rest of your life, what would that be?</p>
            <p><strong>Tom:</strong> Be a leadership coach.</p>
            <p><strong>Devika:</strong> Would you rather have a personal assistant or a private chef?</p>
            <p><strong>Tom:</strong> Personal assistant.</p>
            <p><strong>Devika:</strong> Three words your clients use to describe you?</p>
            <p><strong>Tom:</strong> Inspiring, influencing, and growing.</p>
            <p><strong>Devika:</strong> Fantastic. So, what’s next for Tom?</p>
            <p><strong>Tom:</strong> Well, I’m currently in the middle of writing my sixth book. The plan is to publish it in January next year. I’ve almost wrapped it up, but I’m aiming to do a book a year now.</p>
            <p><strong>Devika:</strong> That’s a solid goal.</p>
            <p><strong>Tom:</strong> Alongside that, I’m also taking on new coaching clients. So, if anyone’s interested, they can connect with me through LinkedIn or visit my website: highlyeffectiveleader.com. There’s a coaching page on there where people can reach out.</p>
            <p><strong>Devika:</strong> Awesome. Expanding your leadership practice in multiple directions?</p>
            <p><strong>Tom:</strong> Yes! I’m also developing myself into a leadership speaker. The idea is to use three main platforms to share my leadership message — writing, coaching, and now, speaking.</p>
            <p><strong>Devika:</strong> Oh, you’re stepping into speaking now?</p>
            <p><strong>Tom:</strong> I am! I recently joined Toastmasters. Been to three meetings already. I’m giving my icebreaker speech this Wednesday.</p>
            <p><strong>Devika:</strong> That’s incredible! I’ve heard such good things about Toastmasters. So many people I know have grown tremendously with it.</p>
            <p><strong>Tom:</strong> Same here. The people I’ve met there are really warm, encouraging, and genuinely interested in what I do. When they hear I’ve written books, they’re always surprised — because, well, it’s not every day you meet an author!</p>
            <p><strong>Devika:</strong> Absolutely not. It’s rare.</p>
            <p><strong>Tom:</strong> I might not be a New York Times bestselling author, but that’s okay. That’s not the goal.</p>
            <p><strong>Devika:</strong> It doesn’t matter. What matters is impact. As long as you’re changing lives — even one at a time — it’s all worth it.</p>
            <p><strong>Tom:</strong> Exactly. That’s what drives me.</p>
            <p><strong>Devika:</strong> So now, if your legacy could be summed up in one principle, what would it be?</p>
            <p><strong>Tom:</strong> My vision is this — I see a world where our leaders focus on people. They create environments that help others learn to lead, grow, and increase their influence — not for personal gain, but for the good of other people. That’s what I want my legacy to be. That, for me, is what defines a highly effective leader.</p>
            <p><strong>Devika:</strong> To flourish.</p>
            <p><strong>Tom:</strong> Exactly. That’s the word. That’s what I want to leave behind — not just in leadership, but in humanity.</p>

            <p><strong>Devika:</strong> Fantastic, Tom. It was so nice chatting with you today. I think we’ve pretty much covered everything, and this has been such a rich and inspiring exchange.</p>
            <p><strong>Tom:</strong> Likewise, Devika. I really enjoyed it.</p>

            <p><strong>Devika:</strong> But before we wrap, I’d love to know your thoughts. What did you think about Global Influencers Hub?</p>
            <p><strong>Tom:</strong> First of all, it was great to meet you. The entire conversation really inspired me. I think Global Influencers Hub is one of the best platforms I’ve come across — especially when it comes to supporting influencers and helping them get their message out into the world. It’s not just about exposure — it’s about alignment. About spreading the right kind of leadership.</p>

            <p><strong>Devika:</strong> Absolutely.</p>
            <p><strong>Tom:</strong> We’re all aiming for the same thing — to help people. And Global Influencers Hub is doing that in a truly impactful way. I think it’s one of the best places to do that.</p>

            <p><strong>Devika:</strong> Thank you so much, Tom. Wishing you a beautiful day and all the best for everything from our entire team.</p>
            <p><strong>Tom:</strong> Thank you very much, and all the best to you too.</p>

            <p><strong>Devika:</strong> Take care. Bye!</p>
            <p><strong>Tom:</strong> Bye!</p>

          









              
           
    </Container>

            </Card.Body>
        
    </>
  );
};

export default Tom ;
