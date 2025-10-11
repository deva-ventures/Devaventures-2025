import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const Roshan = () => {
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
              – <strong>Roshan Agni SreedharBachan</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/roshanArticle.png" // <-- second image here
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
    href="https://youtu.be/DGfQk5JWeps"
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
    window.open("https://youtu.be/DGfQk5JWeps", "_blank");
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
    window.open("https://youtu.be/DGfQk5JWeps", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://youtu.be/DGfQk5JWeps"
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
      src="/roshanConvo.jpg" // replace with your image path
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
            From the tracks of early morning training grounds to the echo of cheers at national championships, Roshan Agni SreedharBachan’s story is one of quiet strength and unstoppable purpose. A national sprinter, coach, and mentor to rising stars, Roshan embodies what it truly means to build from the ground up — with discipline as his foundation and passion as his fuel.
In his conversation with DevikaMajumder, Co-founder of Global Influencers Hub, Roshan reflects on his journey of transforming struggle into mentorship, and personal loss into motivation. Through his words, you don’t just hear an athlete speak — you feel the conviction of a man determined to restore focus, patience, and pride in Indian athletics.
His voice carries a message far beyond the sports field — about belief, balance, and the courage to run your own race, no matter how long the track ahead.


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
      src="/roshanRapid.mp4"
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
    <p>
              <strong>Devika Majumder:</strong> Hi Roshan, welcome to Global Influencers Hub! Here, we talk about the life journeys of social media influencers — and we’re so excited to hear yours. Let’s start from your childhood — where it all began. Tell us, how was Roshan as a child?
            </p>

            <p>
              <strong>Roshan Agni Sreedhar Bachan:</strong> (laughs) Honestly, I was a very naughty kid! My mom was always fed up with me because I could never sit still. I was constantly running around, jumping everywhere — always full of energy. I still remember once, I was cycling on the road and my dad and uncle saw me. They told my mom, “Why don’t you take him to the ground? Let him use all that energy in sports.”<br />
              At that time, I was very fond of cricket. My uncle even joked that I looked like Courtney Walsh, the West Indian fast bowler! So, my mom decided to take me to a sports ground — even though none of us came from a sports background. My dad, my mom, my grandfather — no one had any connection with sports. But that’s how it all began.<br />
              Slowly, I started exploring different activities — swimming for two years, basketball for another two. But deep down, I always felt drawn to running. I think I was about five or six when I first went to the ground, and from there, my journey truly began.<br />
              Then one day, when I was about eight years old, a man saw me running and told my mom, “He’s got great legs! You should put him in athletics.” His name was Arjun Devaiah — a former national athlete. My mom agreed, and I joined a club called Yuva Club under the guidance of Sunil Sir. That’s where I really got into sports.<br />
              I wasn’t much into studying as a kid — I was always more interested in running, cycling, and being active. That was pretty much my childhood — full of energy and movement!
            </p>

            <p>
              <strong>Devika:</strong> That’s such a lively beginning! Tell us about your parents — how supportive were they of your passion for sports?
            </p>

            <p>
              <strong>Roshan:</strong> My dad and mom honestly had no idea about sports in the beginning. But my uncle was quite aware — he was a writer and used to read a lot about sports. Back in 1992, when Ben Johnson broke the 100-metre world record, my uncle used to say, “He looks like Ben Johnson! Look at his eyes! Cut his hair short — he’ll look just like him!” (laughs)<br />
              My mom, on the other hand, was skeptical at first. She’d say, “We don’t know anything about sports, we don’t even know who the right coach is!” But my uncle insisted, “Just take him to the ground — he’ll learn.”<br />
              There was a ground near our house, so my mom started taking me there every day after school. Over time, I joined a small club where Mr. Anand Shetty — an international coach — was training athletes. He noticed me and took me into their group.<br />
              By the time I was ten, I participated in my first competition — the KPMG Meet — where I broke records in the 100m and 400m races. That was the turning point. My parents began to see potential in me. My mom became very supportive, though my dad was still unsure initially. But gradually, as I kept winning medals, they started believing that I could make something out of it.
            </p>

            <p>
              <strong>Devika:</strong> That’s wonderful. But how did your studies fit into all of this? Were you able to balance school and sports?
            </p>

            <p>
              <strong>Roshan:</strong> (smiles) Not really! I was studying at St. Paul’s School initially, but since I was too focused on sports and not on academics, they eventually asked me to leave. Then I joined another school and stayed there for two years. I continued to do well in sports but not in studies.<br />
              Back in 2001 or 2002, sports wasn’t given much importance in Karnataka. But eventually, one school recognized my talent and offered to support me. They allowed me to come late to classes, leave early for practice — things like that.<br />
              Since I was winning medals at the state and national level, the school was getting recognition too. So it became a win-win — I was getting to focus on athletics, and the school was proud to have my name associated with them. That was the first real encouragement I received for sports from an institution.
            </p>

            <p>
              <strong>Devika:</strong> Wonderful, wonderful. That’s amazing. Now walk us through how the international athletics journey began — and your first medal at the Asian level.
            </p>

            <p>
              <strong>Roshan:</strong> So, I was training for Nationals at my Bangalore Sports Club. It had already been ten years of coaching under my trainer. But then, my coach decided to move to another city — Mangalore — and suddenly, I was left without a coach.<br />
              That’s when I came across an Army coach named Muralidharan. He had trained India’s fastest athlete, Anil Kumar, who was also a national record holder. My mom approached him, and he recognized me instantly. But he said, “He’s an outsider. I can’t train him unless he joins the Army.”<br />
              I was nervous because, honestly, the idea of joining the Army was intimidating. Their training, their discipline — everything seemed tough. I wasn’t sure I’d be able to handle it. But then a man named K.V. Karnal Prasad helped me get into the Army setup. That’s where my real training began.<br />
              After that, I won my Nationals medal — and soon after, I began giving Paralympic training as well. I started training two athletes, Radha and Dakshita, and together, we achieved my first international success. I won my first medal in Dubai in 2018, and then again in 2019.
            </p>

            <p>
              <strong>Devika:</strong> Wonderful! How did that feel — your first international medal?
            </p>

            <p>
              <strong>Roshan:</strong> That moment was very emotional for me. It was my mother’s dream that I would win a gold medal someday and make it to the Olympics. But she passed away in 2010, taking that dream with her. Before she died, she told me, “Don’t leave sports. You’re not made for education or business — you belong in sports.” Those were her last words.<br />
              So when I stood there with my medal, I could only think of her. That medal belonged to her. She was the one who believed in me, who made me what I am. The credit goes entirely to her.
            </p>

            <p>
              <strong>Devika:</strong> She must have been your biggest strength throughout your journey.
            </p>

            <p>
              <strong>Roshan:</strong> Absolutely! I always tell my students that every athlete should have a mother like mine. She was my biggest supporter. Every single day, she motivated me — she took me to the ground, stayed during my practice, took me to the physio, arranged massages, everything. She was there for every little thing.<br />
              If that kind of support had continued, I truly believe I could’ve made it to the Olympics. That’s how big her presence was in my life — she was my foundation.
            </p>

            <p>
              <strong>Devika:</strong> That’s beautiful, Roshan. Did you have any childhood role models growing up?
            </p>

            <p>
              <strong>Roshan:</strong> Oh yes, my childhood idol was Ben Johnson. I was fascinated by him! I used to copy his hairstyle and style of running. I also admired Carl Lewis, but Ben Johnson was a massive inspiration. Though he ran the 100 and 200 metres, I specialized in the 400 metres — but he was the one who made me fall in love with sprinting.
            </p>

            <p>
              <strong>Devika:</strong> Amazing. Now tell us, how do you mentally prepare yourself before a competition?
            </p>

            <p>
              <strong>Roshan:</strong> My coach was always very strict with me, but my mom balanced everything. She was incredibly organized. She would note down the names of all my competitors — their timings, their states, their rankings — everything. She had this detailed sheet that helped me understand where I stood.<br />
              Before a race, she would tell me, “This athlete is fast at the start, that one picks up speed midway — so catch up here, and finish strong there.” She was literally strategizing my races! And she always kept small rewards as motivation — “If you win this medal, I’ll get you a PS5, or AirPods.” (laughs)<br />
              That was her way of pushing me — and I loved it. She made training fun and rewarding.
            </p>

            <p>
              <strong>Devika:</strong> Wow, she sounds like the perfect coach!
            </p>
            
            <div className=" py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Section - Text */}
          <Col xs={12} md={7} className="mb-4 mb-md-0">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#1a1a1a" }}>
              <strong style={{ color: "#002366" }}>Roshan:</strong> Yes, she was my real coach! When I won my first Nationals, she got me a PSP — I still have it with me. Later, when I won the School Nationals, she gifted me an iPod. Back then, those things were a big deal!
            </p>
          </Col>

          {/* Right Section - Image */}
          <Col xs={12} md={5} className="text-center">
            <Image
              src="/roshanArticle2.jpg" // <-- your second image
              alt="Preetha"
              fluid
              rounded
              style={{ maxHeight: "320px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </div>

            
            
            
            
            
            
    <p>She never let me go anywhere alone — not even with friends. She used to say, “Whatever you want, I’ll get it for you. I’m your friend, I’m your coach, I’m everything. Just stay with me and keep winning medals.” (laughs)</p>

<p><strong>Devika:</strong> And you did win medals too! (laughs) That’s wonderful. Now, Roshan, we’ve heard about your training and achievements — but let’s talk about the other side of being an athlete. What were some of the struggles you faced? Injuries, challenges — the things people don’t usually see?</p>

<p><strong>Roshan:</strong> Ma’am, the truth is — in any sport, not just athletics, you need to enjoy what you do. I always loved running, and I still do. We have three seasons — the off-season, the mid-season, and the competition or speed season. I genuinely enjoy every part of it — the drills, the workouts, the steps, everything.</p>
<p>Of course, there were tough times. I’ve lost many competitions, but I never got disappointed. I’d just say to myself, “Okay, next time I’ll come back stronger.” But injuries — that’s what really hurt. When I got injured, the recovery was slow and painful. I lost an entire year once because of it.</p>
<p>Being an athlete means being mentally strong enough to face those setbacks — injuries, exhaustion, and maintaining discipline. Diet and routine are everything. If you’re disciplined 100%, you can truly become a great athlete.</p>
<p>Sometimes you train for months — say, three months of off-season, one month of speed training — and still, the results don’t show immediately. You just have to be patient and wait for the next year. That’s the life of an athlete — full of effort, faith, and resilience.</p>

<p><strong>Devika:</strong> Okay, okay — that’s powerful, Roshan. Now, tell us how you started the Indian Athlete Academy.</p>

<p><strong>Roshan:</strong> After my coach retired from the Army, I began training again under his guidance. But in 2010, I lost my mom — and that changed everything. My interest in sports started fading. I wasn’t eating well, I missed her terribly, and I just couldn’t bring myself to practice again.</p>
<p>For almost two years, I struggled to get back on track. My dad, family, and friends kept pushing me, saying, “You still have time, don’t give up so soon. You’ve come this far — just a few steps more and you could reach the Commonwealth Games, World Championships, or even the Olympics.”</p>
<p>But somehow, I couldn’t find the same drive again. That’s when, in 2015, I decided to channel my energy into something meaningful. I thought, “If I can’t get back to competing, maybe I can build something that helps others chase their dreams.” That’s how Indian Athlete Academy was born — starting as a small summer camp.</p>
<p>Whatever I had learned from my coaches over the years, I began teaching the kids. Slowly, it grew. Within a year or two, I started getting great results — more students joined, and many began winning medals.</p>
<p>Then in 2018, something incredible happened. I started coaching a blind student — a para-athlete. She went on to win medals at the national and international levels. Soon, both my able-bodied and para-athletes were excelling — one of them even went on to compete in the Asian Games, Junior Asian Games, and the World Championships, bringing home medals.</p>
<p>That’s when I realized coaching was my true calling. I hadn’t done any formal certifications — but whatever I learned from experience, I poured into my training. I observed how each child learned differently — one needed more patience, another needed more challenge — and I adapted my methods. Seeing them win came so naturally to them, it made me feel proud and grateful.</p>
<p>This year, two of my girls qualified for the Olympics held in Paris — one finished fourth, and the other made it to the finals. That was an unbelievable moment. I’ve since opened a hostel and a private gym for my athletes — both regular and visually impaired — and we even have our own track now.</p>
<p>The truth is, I never got the chance to win an Olympic medal myself. But I want my students to achieve what I couldn’t. That’s my dream now — to see them bring home that medal for India.</p>

<p><strong>Devika:</strong> That’s truly inspiring. And they absolutely will — if it’s a coach’s dream, it’s already half accomplished. According to you, what’s the difference between a good athlete and a great athlete?</p>

<p><strong>Roshan:</strong> A good athlete has limited focus — they want to win nationals, impress their parents, or make their coach proud. But a great athlete? They want to impress themselves — and their nation.</p>
<p>A great athlete doesn’t stop when it gets hard. They run till the very end — until they’ve given everything they have. That’s what sets them apart.</p>
<p>Today, athletes have access to everything — advanced technology, nutrition, recovery support — but what really matters is focus. Once an athlete learns to tune out distractions and focus purely on performance, they cross that line from good to great.</p>
<p>A good athlete performs for recognition.</p>
<p>A great athlete performs for purpose.</p>

<p><strong>Devika:</strong> So it’s all about vision, right?</p>

<p><strong>Roshan:</strong> Exactly. Vision and consistency. A true athlete doesn’t think, “I’ll train for two years,” or “I’ll give it five years.” No. You never wait for the perfect day or time — you just keep going, every single day, till the very end.</p>

<p><strong>Devika:</strong> Wonderful. Absolutely. So, what has been your most fulfilling coaching moment so far?</p>

<p><strong>Roshan:</strong> I’ve had many, honestly. Some of my students went on to win national-level medals — which made me proud. But my para-athletes, especially my visually impaired students, gave me a different kind of joy. They’re so focused, so undistracted — their commitment is pure.</p>
<p>One of my proudest moments was when a student named Ganga — a javelin thrower — made history by becoming the first Indian woman to throw in the World Para Games. She won a bronze medal there. But that’s not all — she was also a cricketer and once scored 128 runs in a match in London.</p>
<p>Moments like that make me incredibly happy. Seeing my students shine on international stages, receiving awards, and making India proud — that’s the real reward.</p>
<p>But I’ll tell you this — the day one of my students wins an Olympic medal… that will be the happiest day of my life.</p>

<p><strong>Devika:</strong> And we have no doubt that day is coming soon. What’s your advice to parents whose kids show potential in sports?</p>

<p><strong>Roshan:</strong> The biggest challenge with parents today is that they aren’t consistent — and neither are their kids. Children these days have a flickering mind. One day they’re playing tennis, the next day it’s football, and the week after, it’s something else.</p>
<p>If a child chooses one sport, they must stay committed to it. And if parents have selected a coach, they should stick with that coach. A good coach understands a child’s progress — what to do in the first two to three years and how to shape their path. But what happens now is that parents keep switching. If someone in their circle wins a medal, they immediately shift their child to that sport or that coach.</p>
<p>So today, a child might be in athletics, next year in badminton, and then cricket the year after. This doesn’t work. Parents need to understand — when you plant a mango tree, you can’t expect apples to grow from it. Every sport, like every tree, needs time to mature and bear fruit.</p>
<p>Parents should support and motivate their child, not try to coach them. Many parents watch YouTube videos and start acting like coaches themselves — trying to correct techniques or set routines. But coaching is an art; every coach has their own secret methods, built on years of experience. Parents must trust that process and let the coach do their job.</p>
<p>Too many parents today make their kids jump from sport to sport — from karate to MMA to cycling — and keep changing coaches. That’s the biggest mistake. Indian kids have immense potential, but lack of focus holds them back.</p>
<p>Look at the Paralympic athletes — India won around 30–32 medals recently. Why? Because they’re focused on one thing. They don’t get distracted. Able-bodied kids, on the other hand, are juggling sports, studies, and sometimes even business aspirations. Their minds are all over the place.</p>

<p><strong>Devika:</strong> That’s such a strong point. But I have a curious question — as a parent myself, how do we identify which sport is right for our child?</p>
<p><strong>Roshan:</strong> That’s a great question. Up to the age of ten, parents shouldn’t force kids into any one sport. Don’t say, “PV Sindhu won, so my child must play badminton.” Instead, expose them to different sports — gymnastics, swimming, karate, football — two classes of each, here and there. Let them explore.</p>

            <p><strong>Roshan:</strong> By the age of 12 or 13, their personality starts showing. If a child is aggressive, they might be good for MMA or wrestling. A calmer, softer kid might prefer swimming or running. You’ll notice what they enjoy naturally. The key is to talk to your child — ask them what they like.</p>

            <p><strong>Roshan:</strong> When I was young, my uncle once asked me, “What do you enjoy the most?” I said, “Running.” That one choice shaped my entire life for the next 20 years.</p>

            <p><strong>Roshan:</strong> So, talk to them, observe them, and once they pick a sport — stick to it. Don’t give up too soon. PV Sindhu didn’t switch sports every few years; she stayed with one and mastered it. The same with Neeraj Chopra — before the Olympics, hardly anyone knew him. But he had been focused on javelin since childhood.</p>

            <p><strong>Roshan:</strong> Give your child time. If they stay consistent, their moment will come.</p>

            <p><strong>Devika:</strong> 100%. That makes perfect sense. Now, tell me — what does your daily fitness routine look like?</p>

            <p><strong>Roshan:</strong> My routine depends on my students’ schedule. When they don’t have competitions, I work out alongside them — stretching, running, training together. But when competition season starts, my energy goes entirely into them — guiding, motivating, monitoring their performance, even taking them for treks or outings to refresh their minds.</p>

            <p><strong>Roshan:</strong> My fitness now is about being active with them, not chasing my old athletic form. A coach’s role is different — if I focus too much on maintaining my own body, I’ll lose focus on theirs.</p>

            <p><strong>Roshan:</strong> Even Usain Bolt’s coach wasn’t a world-class runner — but he had the knowledge and the eye for excellence. That’s what truly matters. People often mistake muscles for expertise — but training champions requires understanding, not abs.</p>

            <p><strong>Devika:</strong> That’s such a real perspective. Do you believe in cheat meals?</p>

            <p><strong>Roshan:</strong> (smiles) Absolutely! You have to live a little. We’ve grown up eating good food, and food is part of our joy. Of course, athletes should follow a proper diet during training seasons — but it’s okay to enjoy desi ghee, eggs, or chicken once in a while. Balance is the key. Eat well, rest well, and run strong.</p>

            <p><strong>Devika:</strong> I love that attitude — totally agree. Now, suppose someone only has 15 minutes a day — what would you suggest they do activity-wise?</p>

            <p><strong>Roshan:</strong> If you’ve got just 15 minutes, that’s fine! Go for a brisk walk, do some stretching, or a few basic body movements. Just keep your body active — that’s more than enough. No need to strain yourself too much. The goal is consistency, not exhaustion.</p>

            <p><strong>Devika:</strong> Got it — simple and practical as always. So Roshan, how did your journey into acting begin?</p>

            <p><strong>Roshan:</strong> Because my dad is a writer. He has written quite a few books—one was My Days in the Underworld and another was The Gangster’s Gita. Based on those stories, he often makes movies. So, you could say we come from a filmmaking background. This was actually our tenth movie, I think.</p>

            <p><strong>Roshan:</strong> During COVID, when everything was in lockdown, people would come to our place to work out for the movie. I got influenced by them. They said, “Come on, you don’t have anything else to do—no competitions, nothing—so get into movies at least!” I thought, Why not? I was already working out, gaining good muscle. So, I decided to give it a try and did a South Indian movie. That movie did well, and things just went on from there.</p>

            <p><strong>Roshan:</strong> After that, I did another film two years later, but then I told them I needed a break—my kids were waiting for me. I have commitments, you know. I don’t have just one or two kids… I have around 40 to 60 students who are like my children. So, I told them, “We’ll see in the future. If I get time, I’ll come back.”</p>

            <p><strong>Devika:</strong> Oh, nice! So how was it, facing the camera for the first time?</p>

            <p><strong>Roshan:</strong> It was very hard. I had never been in front of a camera before, never spoken to media or crowds. I had a bit of fear—what if I said something wrong? It could be misinterpreted. In training, we’re straightforward and speak from the heart, but in media, you have to be careful and calculative.</p>

            <p><strong>Roshan:</strong> Everyone said, “If you say something wrong, it’ll go viral in a bad way,” and that scared me. But my cousins motivated me a lot. It was a family movie—my brother Abhishek was there, my uncle too—so everyone supported me and said, “Don’t worry, we’re all here. Just do it.”</p>

            <p><strong>Devika:</strong> Wonderful, wonderful. Now, a little fun question for you—what do you think people often get wrong when they meet you?</p>

            <p><strong>Roshan:</strong> (laughs) First thing—they get scared of me! The way I look or the way I talk during training. When parents come to see me, they ask, “Who’s your coach? He looks so rude!” That’s the first impression. So, I ask my students to talk to them first and make them comfortable. Then I go and speak to them myself. Some parents even left saying, “This coach is too strict, let’s find someone else.”</p>

            <p><strong>Devika:</strong> (laughs) That’s funny. How do you keep yourself grounded among all these achievements?</p>

            <p><strong>Roshan:</strong> It’s not easy, ma’am. I do get hyper sometimes, especially when I’m training my students. So I try to balance it out—I work out in the mornings, play with my students, sometimes play cricket, go out, or just talk to people to calm myself down.</p>

            <p><strong>Devika:</strong> That’s a good approach. How do you define success?</p>

            <p><strong>Roshan:</strong> There’s nothing called “success.” We all just have to keep working. My kids need to get settled, and so do I. Their goal is to qualify internationally, get good jobs, and make a name for themselves. Success doesn’t have a full stop—you just keep going every day.</p>

            <p><strong>Devika:</strong> True, true. So what’s next for you?</p>

            <p><strong>Roshan:</strong> Ma’am, my next target is only one—to get a gold medal for our country. I want to make Karnataka and India proud. That’s my biggest motivation. Because with one medal, everything changes—the recognition, the respect, the opportunities.</p>

            <p><strong>Roshan:</strong> Our academy is private, not affiliated with the government, and we’ve had no support from them. There’s one man, the Sports Minister of Karnataka, but he hasn’t been available for the past year. We’re facing a lot, but we can’t stop. The Olympics come every four years, and if we miss one, it’s a lost opportunity for our students. So we’re pushing hard—to win a medal for our academy, our country, our state, and personally for myself.</p>

            <p><strong>Devika:</strong> Wonderful. Absolutely. And I’m sure you will!</p>

            <p><strong>Roshan:</strong> Thank you, thank you—absolutely!</p>

            <p><strong>Devika:</strong> Now, let’s move to a quick rapid fire!</p>



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
          Rapid Fire with Roshan
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
            src="/roshanRapid.mp4" // <-- use your vertical video file
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



            <p><strong>Roshan:</strong> Yeah, yeah, let’s go!</p>

            <p><strong>Devika:</strong> Acting or coaching?</p>
            <p><strong>Roshan:</strong> Coaching—any day.</p>

            <p><strong>Devika:</strong> Favourite film of all time?</p>
            <p><strong>Roshan:</strong> KGF.</p>

            <p><strong>Devika:</strong> One word your students use to describe you?</p>
            <p><strong>Roshan:</strong> (laughs) They call me “Hitler” sometimes! (both laugh)</p>

            <p><strong>Devika:</strong> If we open your gym bag, what will we find?</p>
            <p><strong>Roshan:</strong> (laughs) Some weird stuff for kids!</p>

            <p><strong>Devika:</strong> What’s the most bizarre DM you’ve received?</p>
            <p><strong>Roshan:</strong> Oh, I get plenty! Some boys text saying they run 100 metres in 7 seconds—and then argue the track is short! (laughs) They’re so confident while saying it too.</p>

            <p><strong>Devika:</strong> Tell us a little bit about your social media journey—when did that start, and how has it been going?</p>

            <p><strong>Roshan:</strong> Honestly, I used social media very little. My friend used to handle everything. He told me, “You’ve achieved so much, people should know you!” But I was always busy with training—from morning to evening, with short breaks in between. So I didn’t really get the time for social media.</p>

            <p><strong>Roshan:</strong> My friend was managing it and said, “You’re getting good traction, why not build it up more?” Then after my movie came out, suddenly my social media blew up. That’s when I started becoming more active—talking to my students and keeping things updated. One of my students, Divya, who’s a cricketer and played for India, gave me another boost. You see, we’re 90s kids—we weren’t raised on social media; we were focused on the ground, on real-world training. But now, everything revolves around it. You have to record everything—every workout, every session. I wasn’t comfortable with that at first, so I just let my friend handle it all. Even today, he maintains all my accounts.</p>
            <p><strong>Devika:</strong> That’s great! Do you interact with your followers yourself?</p>
            <p><strong>Roshan:</strong> Sometimes I do. When someone asks something related to sports or training, my friends let me know, and I reply personally. But most of the time, my schedule is packed. Between training and family, I hardly get the time to keep messaging everyone.</p>

            <p><strong>Devika:</strong> Understandable. Any memorable follower interaction you’d like to share?</p>
            <p><strong>Roshan:</strong> Yes, actually. Back in 2018, a girl named Divya messaged me saying, “Sir, I want to get trained under you.” I told her, “Okay, come anytime.” Then COVID hit, and everything got delayed. After that, she messaged me again—she just wanted to train with me once. At that time, I had just opened a new gym model. She came for the first class, the second day too, and on the third day she left for the India camp. And later, she got selected for the Indian cricket team. It’s memorable for me because our journey started from just one message.</p>

            <p><strong>Devika:</strong> Wow, that’s wonderful! It’s always special to look back on such moments. Now tell me, if there was a biopic made on your life, what would it be called?</p>
            <p><strong>Roshan:</strong> Mom’s Dream: Son Chasing the Dream.</p>

            <p><strong>Devika:</strong> Aww, how sweet. One thing you’d ban from all gyms?</p>
            <p><strong>Roshan:</strong> Phones! That’s the first thing I’ll take away. I actually give my students basic phones—just enough to make calls, nothing else.</p>

            <p><strong>Devika:</strong> (laughs) That’s a smart idea! What’s the best advice a coach has ever given you?</p>
            <p><strong>Roshan:</strong> My coach once told me, “You have great potential—you’ll become a very good runner.” Later, I met PT Usha ma’am. She told me I looked fit and had a good body for athletics. Since I had started a girls’ academy, she connected me with Captain Murali sir. He told me, “You have what it takes, but you need to keep a little distance from your mother.” At that time, my mom had cancer. I was emotionally weak and couldn’t take that advice. When she passed away, I broke down completely and lost focus on my goals. That advice—though I couldn’t follow it—was one of the most important lessons I’ve ever received.</p>

            <p><strong>Devika:</strong> That’s really emotional… but I’m sure she’d be proud of you today.</p>
            <p><strong>Roshan:</strong> Yeah, I believe so.</p>

            <p><strong>Devika:</strong> What’s the biggest mistake most young athletes make?</p>
            <p><strong>Roshan:</strong> Not trusting their coaches. Many start listening to friends or competitors instead. This is a competitive field—your coach sees your growth from a higher perspective, but your peers might not. Some students get easily influenced—if someone says, “You’re not improving, maybe change your coach,” they start doubting everything. Athletes need patience, belief, and trust. That’s what separates champions from the rest.</p>

            <p><strong>Devika:</strong> So true. Now tell me, what’s your superhero power during training?</p>
            <p><strong>Roshan:</strong> (laughs) Definitely Hulk! I want to be like the Hulk when I’m training—strong, focused, and unstoppable. But outside the track, I’m calm and normal. Even in my dreams, I often imagine myself as Hulk before competitions.</p>

            <p><strong>Devika:</strong> (laughs) That’s amazing! Any embarrassing moment on the track you can recall?</p>
            <p><strong>Roshan:</strong> Oh yes, one during a national competition. I was so exhausted that I stopped before the finish line! My coach was yelling from the side, shouting all kinds of words, “Finish it! Finish it!” And I was like, “Sir, my legs are paining, I can’t!” He shouted back, “You haven’t even crossed the line yet!” (laughs) I walked the rest of it and still came third. That was definitely embarrassing!</p>

            <p><strong>Devika:</strong> (laughing) That’s hilarious! One superstition you secretly follow before competitions?</p>
            <p><strong>Roshan:</strong> Every time before a competition, I talk to my mom. Even now, I still do. I tell her, “You’re with me, please push my student to run faster today.” It’s my little ritual—and I truly feel her presence every time.</p>

            <p><strong>Devika:</strong> That’s beautiful, Roshan. And I’m sure she’s always with you. What’s the most empowering habit you’ve built over the years?</p>
            <p><strong>Roshan:</strong> Honestly, ma’am, I wouldn’t say there’s anything particularly empowering yet. I’m still learning every day.</p>

            <p><strong>Devika:</strong> Fair enough. So, what’s your message to every young Indian dreaming to make it big—whether on the track or on the screen?</p>
            <p><strong>Roshan:</strong> My message is simple—stay calm and be patient. These days, kids want quick results. They don’t understand that just like building a house takes two or three years, building a career takes time too. You have to work hard and wait for your turn. Even if you fail in a competition, don’t give up. Stand up, work harder, and try again next year. Most kids today lack patience. They win a state-level medal and immediately want to win at nationals. But nationals don’t come so easily—there are athletes all over India, all over the world, training day and night. You have to wait, prepare, and earn your moment. Success in sports doesn’t come overnight. Maturity in athletics comes between the ages of 26 and 30. Some achieve greatness at 21 or 22, but many of them disappear by the time they reach their peak. I’ve seen so many athletes winning back-to-back national and international medals at a young age, but when they hit 27 or 28, they’re not even in the rankings anymore. There’s a graph every athlete needs to follow—slow and steady growth. Many rise too fast, fall hard, and lose their way. That never works. Students should focus on one field and stay consistent instead of getting distracted.</p>

            <p><strong>Devika:</strong> So true. And I think social influence plays a big part in that distraction, right?</p>
            <p><strong>Roshan:</strong> Absolutely, ma’am. Social media and peer pressure affect them the most. Students see their friends buying bikes, traveling, posting pictures—and they start feeling left behind. They lose focus and confidence. I always tell my students—use your friends to learn and grow, not for comparison. Spend time with them, talk to them, help them, but don’t let anyone demotivate you. Some kids get influenced and leave sports at the final stage to take up jobs paying ₹10,000–20,000. They could have earned ₹1 lakh in a government job if they had just stayed patient. It’s sad to see talent wasted because of impatience or comparison.</p>

            <p><strong>Devika:</strong> You’re absolutely right. This culture needs to change. And people like you can really make that difference by speaking out more.</p>
            <p><strong>Roshan:</strong> I’d love to. My message is clear—kids who are building a career don’t need social media. Every student in my academy has a basic phone—just for calling their parents or me. That’s it. If they get bored, they can talk to friends who motivate them. But I tell them—don’t scroll to see what others are doing. Social media only shows what others want you to see. If you focus on becoming something great, the world will post your photo one day. When you succeed, everyone will talk about you. But till then, focus on your craft, not others. I use social media because I run a business. But they’re in the building phase of life—they don’t need it. If you really have something important to say, post it. Otherwise, why waste time? Time is running fast these days. And you know what’s interesting? All the kids with basic phones in my academy are the ones winning medals. The ones active on social media aren’t even focused. They’re distracted, comparing, frustrated—“Sir, he got new spikes… Sir, he got sponsorship…” and so on. They’re thinking about others and losing themselves.</p>

            <p><strong>Devika:</strong> You’re so right, Roshan. They’re focusing outward instead of inward.</p>
            <p><strong>Roshan:</strong> Exactly, ma’am. After practice, they’re glued to their phones. If I ask them what they did in training on Monday, they go blank. Earlier, we used to write down our workouts. It became part of our body’s muscle memory—and our mind remembered too. Today, they’ve lost that curiosity—nobody wants to know how someone became great, what they ate, or what their training looked like. Everyone’s just chasing short-term satisfaction. We need to bring back that culture of learning and discipline.</p>

            <p><strong>Devika:</strong> I couldn’t agree more. And I think what you’re doing—mentoring and guiding these kids—is exactly what India needs right now. We’d love to help spread your message further. Maybe someday we can go live together and talk about it more publicly.</p>
            <p><strong>Roshan:</strong> Sure, ma’am. I’d love that. The message needs to reach every young athlete out there.</p>
            <p><strong>Devika:</strong> It’s been such a pleasure talking to you, Roshan. I think we’ve covered most of the questions.</p>
            <p><strong>Roshan:</strong> Sure, ma’am.</p>
            <p><strong>Devika:</strong> In case my team feels there’s more to explore, would it be okay if they reach out to you again?</p>
            <p><strong>Roshan:</strong> Absolutely, ma’am. Anytime.</p>
            <p><strong>Devika:</strong> I genuinely had a lot of fun during this conversation.</p>
            <p><strong>Roshan:</strong> Thank you, ma’am. I really appreciate you reaching out and recognizing my work in sports. I also want to thank your team. My motivation has always been to bring sports education to children — that’s what truly drives me.</p>
            <p><strong>Devika:</strong> That’s wonderful, Roshan.</p>
            <p><strong>Roshan:</strong> You know, ma’am, I have blind athletes who are fully focused on sports. They’re achieving medals because their minds are completely dedicated. Others, however, often get distracted. That’s the main challenge. Otherwise, everything else is fine.</p>
            <p><strong>Devika:</strong> That’s such a powerful perspective. You’re right — distractions are one of the biggest hurdles today.</p>
            <p><strong>Roshan:</strong> Exactly, ma’am.</p>
            <p><strong>Devika:</strong> I think it’s so important to keep spreading this message — consistently. People need to hear it again and again.</p>
            <p><strong>Roshan:</strong> Absolutely, ma’am.</p>
            <p><strong>Devika:</strong> Before we wrap up, I’d love to know — how did you feel talking to Global Influencers Hub?</p>
            <p><strong>Roshan:</strong> Ma’am, I was very happy. When my friend told me about your message, the first thing I said was, talk to them! He had been checking your page, and we were both thrilled to see that you’re giving a platform to sportspeople and coaches.</p>
            <p><strong>Roshan:</strong> In India, we rarely get this kind of recognition because we’re always busy coaching and don’t spend much time on social media. I truly appreciate this opportunity. Thank you so much for interviewing me — and a special thanks to you, ma’am, for taking the time to understand my childhood, my parents, and my career. I’m really grateful.</p>
            <p><strong>Devika:</strong> Thank you, Roshan. It was truly lovely talking to you, and we’ll definitely stay in touch.</p>
            <p><strong>Roshan:</strong> Thank you, ma’am. I appreciate it.</p>
            <p><strong>Devika:</strong> Bye-bye.</p>
            <p><strong>Roshan:</strong> Bye-bye, ma’am.</p>

          

           

            
            
            
            
            
           
            
          
            

            
           
    </Container>
           
            </Card.Body>
          
    </>
  );
};

export default Roshan ;
