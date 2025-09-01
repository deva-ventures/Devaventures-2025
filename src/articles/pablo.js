import React from "react";
import { Container, Row, Col, Card,Image } from "react-bootstrap";

const Pablo = () => {
  return (
    <>
      
            <Card.Body>
            <div style={{ backgroundColor: "#7a879b", padding: "105px 0" }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col xs={12}>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "#1d3557",
                  margin: 0,
                }}
              >
                📺 Watch the video on YouTube –{" "}
                <a
                  href="https://youtu.be/-oq8VYhFcHw?si=3IYTfci-7ylCfV1s"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
               Click Here 
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>

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
              That’s my advice to musicians—don’t create distance; connect with your audience authentically.
              </q>{" "}
              – <strong>  Pablo Montana</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/pabloArticle.webp" // <-- second image here
              alt="Preetha Athrey"
              fluid
              style={{ maxWidth: "100%", height: "auto" }}
            />
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
            Pablo Montana, a dynamic musician and storyteller, takes us on a captivating journey through the beats of his life in this exclusive interview with Devika Majumder, co-founder of Global Influencers Hub. From performing in salsa and bachata bands across Central America to forging his unique musical identity, Pablo’s story is one of passion, persistence, and artistic evolution. With a deep love for adventure, culture, and human connection, he shares the defining moments that have shaped his career, his approach to music, and the philosophy that keeps him grounded. Here’s a deep dive into his world, where melodies meet memories, and every note tells a story.
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
      src="/pabloArticleVideo.mp4"
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
                <strong>Devika Majumder:</strong> Welcome to Global Influencers Hub! Here, we talk about the live journeys of social media influencers, and today, we are excited to have you. So, let’s dive right into your journey! Tell us, where did it all begin for you?
              </p>

              <p>
                <strong>Pablo Montana:</strong> Thank you, Devika. My English is not very good because my mother tongue is Spanish, but if you speak slowly, I can understand and respond better.
              </p>

              <p>
                <strong>Devika:</strong> Of course! I’ll speak slowly. So, tell us about your life journey. Where were you born, and how did it all start?
              </p>

              <p>
                <strong>Pablo:</strong> I was born in a small town in Colombia, where the main opportunity for people is farming. But at 21 years old, I left for Panama in search of better opportunities. That’s where I found music. I discovered my love for music through instruments, and that’s when I started dreaming.
              </p>

              <p>
                <strong>Devika:</strong> That’s wonderful! What kind of music spoke to you the most?
              </p>

              <p>
                <strong>Pablo:</strong> I always wanted to create music with a good message—something that makes people believe in something greater. Growing up in Colombia is hard. Many people struggle to find good education and opportunities, so they move to different countries. We are a nation of 45 million people with immense talent, and we have to fight for our opportunities.
              </p>

              <p>
                <strong>Devika:</strong> That’s really inspiring. After 15 years abroad, you returned to Colombia. What motivated you to come back?
              </p>

              <p>
                <strong>Pablo:</strong> I had always planned to return and work on my music in my home country. My goal was to share my music with the people here and live with my family. Now is the moment for me to truly focus on that.
              </p>

              <p>
                <strong>Devika:</strong> That’s beautiful. Now, can you pronounce your full name for us?
              </p>

              <p>
                <strong>Pablo:</strong> My full name is Juan Pablo Martinez. It’s a very Latin name! But I chose the stage name Pablo Montana because of a phrase I found on my town’s flag, which translates to, “I am from the mountains, and my soul is free.” That phrase really resonated with me.
              </p>

              <p>
                <strong>Devika:</strong> That’s a powerful meaning behind your name! Who has been the biggest influence in your journey?
              </p>

              <p>
                <strong>Pablo:</strong> In my personal life, my mother has been my biggest influence. She raised me alone and did everything for me—she’s like Wonder Woman. In music, my biggest inspiration is David Crosby. His words and music touched my heart. I even got to see him perform in Switzerland a few months ago, which was an unforgettable experience.
              </p>

              <p>
                <strong>Devika:</strong> That’s amazing! So, was there a defining moment when you realized music was not just a passion but something you could pursue professionally?
              </p>

              <p>
                <strong>Pablo:</strong> Yes, but I started late. I first played an instrument—the violin—when I was 19 years old. Many people told me it was too late because violinists usually start as kids. When I was around 23 or 24 in Panama, I tried to join a music school, but they didn’t accept me because I was considered too old. It was hard, but I didn’t give up. I taught myself everything—violin, piano, guitar, and singing. YouTube became my best teacher.
              </p>

              <p>
                <strong>Devika:</strong> That’s incredible! Learning music on your own takes a lot of dedication. Were there any other apps or tools you used aside from YouTube?
              </p>

              <p>
                <strong>Pablo:</strong> No, just YouTube. Now, I can learn by listening. My ear has become my best tool. In music, listening is more important than reading notes.
              </p>

              <p>
                <strong>Devika:</strong> That’s very true! I’ve always wanted to learn to sing, but I never found the time.
              </p>

              <p>
                <strong>Pablo:</strong> You should try! Everyone can sing, especially in a relaxed environment like a bar or a gathering with friends.
              </p>

              <p>
                <strong>Devika:</strong> Maybe someday! So, how do people book you for performances?
              </p>

              <p>
                <strong>Pablo:</strong> Right now, my music is gaining popularity in Colombia. My genre is most popular in December, during the festive season. People reach out to me through social media or my booking manager. I recently toured Switzerland, which was an incredible experience. Seeing people who aren’t familiar with Cumbia still feel the rhythm and dance was a huge moment for me. In February, I’ll be touring Bolivia.
              </p>

              <p>
                <strong>Devika:</strong> That sounds exciting! What has been the biggest challenge in your journey, and how did you overcome it?
              </p>

              <p>
                <strong>Pablo:</strong> My biggest challenge is bringing Cumbia music to the global stage. Cumbia is a traditional Colombian genre, but people here only listen to it in December. Many of our famous artists, like Maluma and J Balvin, are known for reggaeton, but I want to bring our true national music to the world. My goal is to modernize Cumbia and make it known worldwide.
              </p>
              <p>
                <strong>Devika:</strong> That’s a great mission! Looking at your
                journey, was there a moment when you truly felt, ‘This is it—
                this is my calling’?
              </p>

              <p>
                <strong>Pablo:</strong> Yes. Three years ago, I made a bad
                decision by signing a contract with a label that took 80% of my
                earnings. I stopped making music for three years because of that
                contract. During that time, I moved to a small island in the
                Pacific near Panama and lived there, waiting for the contract to
                expire. Every day, I swam with sharks and whales, completely
                disconnected from the world.
              </p>

              <p>
                But during that time, something clicked inside me. Underwater, I
                found my purpose. A voice in my head told me, ‘Pablo, make
                Cumbia. This is your path.’ As soon as the contract ended, I
                returned to Colombia and started touring again. Now, I know my
                mission is to influence people through my music and keep our
                culture alive.
              </p>

              <p>
                <strong>Devika:</strong> That’s incredible! Finding your purpose
                while being underwater is almost spiritual.
              </p>

              <p>
                <strong>Pablo:</strong> Yes, it felt like a divine moment. The
                ocean gave me clarity. Life is about learning from failures,
                growing, and moving forward. That’s my philosophy now—keep
                going, no matter what.
              </p>

              <p>
                <strong>Devika:</strong> Keep going and have hope—these are two
                key principles for all of us pursuing our purpose and journey.
                Now, tell me something—what does a typical day in your life look
                like?
              </p>

              <p>
                <strong>Pablo:</strong> Well, when I’m in Colombia, my typical
                day starts with a cup of coffee. It’s usually late, but I need
                my coffee to wake up. After that, I spend time on my music—I
                start with some training on the keyboard, then play the guitar,
                and read something.
              </p>

              <p>
                I don’t like strict routines, you know? I don’t want my days to
                look exactly the same. Of course, I have responsibilities,
                especially as a student—I dedicate three to four hours daily to
                studying. But beyond that, my day depends on what life brings
                me.
              </p>

              <p>
                I prefer peaceful surroundings. I love visiting museums, being
                in nature, and exploring art. In Medellín, there’s a special
                place called Comuna 13—it’s filled with art, and I love spending
                time there. Right now, though, my focus is music. Some friends
                recently came to Panama, and they asked me to help them navigate
                the Colombian music industry. So that’s where my energy is at
                the moment. And now, after our conversation, I’ll probably head
                back to my home studio and try something new.
              </p>

              <p>
                <strong>Devika:</strong> Wow! So, there’s no fixed schedule—you
                just create music whenever inspiration strikes?
              </p>

              <p>
                <strong>Pablo:</strong> Exactly. I have a home studio, and it’s
                right in front of my bed. Whenever I feel like creating, I just
                get up and start making music.
              </p>

              <p>
                <strong>Devika:</strong> That sounds amazing! After a busy day,
                how do you relax? Or is music itself your way of unwinding?
              </p>

              <p>
                <strong>Pablo:</strong> Music is definitely part of how I relax,
                but I also love spending time in nature. I grab my ukulele, meet
                up with friends, and just chill by the river. My lifestyle is
                very relaxed—I don’t like stress. I believe in taking things one
                step at a time while still being responsible. I go with the
                flow, but with purpose. I guess you could say I’m a beach boy at
                heart.
              </p>

              <p>
                <strong>Devika:</strong> That’s wonderful! Now, let’s talk about
                your social media journey. What was the first video you posted,
                and how do you determine which music resonates most with your
                audience?
              </p>

              <p>
                <strong>Pablo:</strong> I feel like I’ve had multiple “first
                videos.” My professional career started about eight years ago
                when I began making my own music. Before that, I spent five
                years playing the violin in a Bachata band that toured Central
                America. Before that, I was part of a salsa group as a backup
                vocalist.
              </p>

              <p>
                So, I recorded bachata and salsa tracks before deciding to
                pursue my solo career. At that time, I wasn’t the best singer,
                but I had a strong desire to make music. Sometimes in life, you
                just have to follow that inner voice, even if you’re not perfect
                yet. That was the best decision I ever made—stepping out of my
                comfort zone and creating my own music. Now, I can’t imagine
                stopping.
              </p>
              <p><strong>Devika:</strong> That’s inspiring! You have a great fan following on social media. How do you engage with them? Do you respond directly?</p>

<p><strong>Pablo:</strong> In the beginning, I didn’t know much about social media. I hired agencies to manage my accounts, post content, and handle my image. But I realized later that it was a mistake. The most important thing for an artist is direct contact with fans.</p>

<p><strong>Pablo:</strong> Now, I personally respond to messages, interact with fans who share my music, and engage with my community. When someone mentions me or posts my music, I make sure to reply and thank them. Fans feel a stronger connection when they know their support is appreciated. That’s my advice to musicians—don’t create distance; connect with your audience authentically.</p>

<p><strong>Devika:</strong> That’s a great approach! If you were to write a book about your life, what would the title be?</p>

<p><strong>Pablo:</strong> Underwater.</p>

<p><strong>Devika:</strong> That’s an intriguing title! Why Underwater?</p>

<p><strong>Pablo:</strong> Because that’s where I truly found my purpose. I’ve always been drawn to the ocean, and my most profound moments of reflection have happened underwater. I actually keep a notebook where I jot down thoughts and experiences. Maybe one day, I’ll write a book, and if people read it, that would be incredible.</p>

<p><strong>Pablo:</strong> Another possible title could be <em>The Song of the Whales</em> because I’ve had life-changing experiences listening to whale songs underwater. It’s something deeply personal to me.</p>

<p><strong>Devika:</strong> That’s fascinating! Now, let’s play a quick game. If you had to describe your life using a hashtag, what would it be?</p>

<p><strong>Pablo:</strong> #DiasBuenos—it means “Good Days.” My social media is filled with positivity, good vibes, and healthy habits, so this hashtag represents my outlook on life.</p>

<p><strong>Devika:</strong> I love that! Now, some rapid-fire questions for you. Adventure or luxury?</p>
<p><strong>Pablo:</strong> Adventure! I don’t like standing in line and following the expected path—I prefer exploring and taking risks. Luxury is nice, but adventure is way more fun.</p>

<p><strong>Devika:</strong> What’s the last thing you Googled?</p>
<p><strong>Pablo:</strong> Probably a song’s chords! Whenever I hear a song I love, I immediately search for the chords so I can play it on my guitar or keyboard.</p>

<p><strong>Devika:</strong> TikTok dance or Instagram Reel?</p>
<p><strong>Pablo:</strong> Instagram Reel! I recently started using TikTok, but I’m still not into the whole dancing-on-camera thing. I love cameras, but not for TikTok dances.</p>

<p><strong>Devika:</strong> If you were a cocktail, what would you be called?</p>
<p><strong>Pablo:</strong> Moscow Mule. I used to be a bartender, and I love this cocktail—it’s a mix of bitter and sweet, just like life.</p>

<p><strong>Devika:</strong> Late-night snack—pizza or ice cream?</p>
<p><strong>Pablo:</strong> Pizza! I always have some in my fridge, ready for the perfect moment. Leftover pizza tastes even better!</p>

<p><strong>Devika:</strong> Describe your ideal weekend in one word.</p>
<p><strong>Pablo:</strong> Sex and rock & roll! (laughs)</p>

<p><strong>Devika:</strong> (laughs) Alright! Would you rather have your DMs filled with collaboration requests or compliments?</p>
<p><strong>Pablo:</strong> Compliments! Collaborations are great, but knowing people truly connect with my music means everything.</p>

<p><strong>Devika:</strong> Travel for love or love to travel?</p>
<p><strong>Pablo:</strong> Wow. At this moment, I have both! My girlfriend is from Switzerland, and we travel together. We were living in Panama, on a beautiful island, and then I traveled to be with her. So, I guess I travel for love and love to travel.</p>

<p><strong>Pablo:</strong> In the past few months, when I was a tourist in Switzerland and Europe, we traveled in a small van—sleeping in it, going to different shows, and living the musician’s life on the road. I absolutely love it.</p>

<p><strong>Devika:</strong> That sounds amazing! Now, tell me—what was the most embarrassing moment caught on camera?</p>
<p><strong>Pablo:</strong> Oh, this one is from about seven years ago, during a big carnival in Panama City. I was performing on stage, but the crowd wasn’t really into my music. They were expecting something more intense, something darker, but my music is soft, romantic.</p>
<p><strong>Pablo:</strong> Then, people started throwing coconuts at me! At first, I didn’t even realize what was happening, but my team and my teacher were shouting, “Hey, be careful! They’re throwing coconuts at you!” That was definitely one of the most embarrassing moments of my career. But, well, it’s all part of the game.</p>

<p><strong>Devika:</strong> Wow! That must have been quite the experience. Alright, one song that’s always on repeat for you?</p>
<p><strong>Pablo:</strong> Right now, it’s a Lenny Kravitz song. Wait, let me remember the name—ah! <em>Again</em>. That song is always on repeat for me these days.</p>

<p><strong>Devika:</strong> Oh, great choice! Now, we would love for you to record something special exclusively for our platform. You can send it to us whenever you’d like.</p>
<p><strong>Pablo:</strong> Oh, absolutely! I’ll record something just for you. I actually have a song that’s gaining a lot of popularity right now—it’s playing on multiple radio stations and TV channels. I’d love to share it with you.</p>

<p><strong>Devika:</strong> That would be amazing! Also, if we need any additional material, like pictures or videos, can we reach out to you?</p>
<p><strong>Pablo:</strong> Of course! Feel free to ask for anything—photos, videos, whatever you need. I’d love to share more about myself, my music, my country, and the music scene in Colombia.</p>

<p><strong>Devika:</strong> That’s fantastic! And yes, I’m based in India, but I’ve also lived in the U.S. This platform is a global initiative, so we’re bringing stories from all over the world.</p>
<p><strong>Pablo:</strong> That’s super cool! Thank you so much for reaching out to me.</p>

<p><strong>Devika:</strong> Thank you for sharing your story! It was wonderful learning more about your journey, your music, and your passion.</p>
<p><strong>Pablo:</strong> Absolutely! When I’m 50, I’ll probably have enough stories to write a book! And sharing the music of Colombia with your platform is an honor.</p>

<p><strong>Devika:</strong> We’d love to spread that love!</p>
<p><strong>Pablo:</strong> I hope you get to visit someday. Colombia has so much to offer!</p>

<p><strong>Devika:</strong> I would love that! Thank you again, Pablo.</p>
<p><strong>Pablo:</strong> Thank you, Devika. And thank you to everyone who tuned in! I’ve been looking forward to this interview for a week. It was an absolute pleasure!</p>

<p><strong>Devika:</strong> The pleasure was all ours! Take care, and we’ll be in touch.</p>
<p><strong>Pablo:</strong> Absolutely! Have a great night!</p>

<p><strong>Devika:</strong> Good night, Pablo!</p>
<p><strong>Pablo:</strong> Good night!</p>
              </Container>
            </Card.Body>
          
    </>
  );
};

export default Pablo;
