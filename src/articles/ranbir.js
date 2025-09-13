import React from 'react';
import { Container, Row, Col, Card,Image,Button} from 'react-bootstrap';

const Ranbir = () => {
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
              If something’s meant to happen, it will, at the right time. You just have to be patient.
              </q>{" "}
              – <strong>Ranbbir Banerjee</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/ranbirArticle.png" // <-- second image here
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
    href="https://youtu.be/xRJyMHSJjzQ"
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
    window.open("https://youtu.be/xRJyMHSJjzQ", "_blank");
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
    window.open("https://youtu.be/xRJyMHSJjzQ", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://youtu.be/xRJyMHSJjzQ"
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
      src="/ranbirConvo.jpg" // replace with your image path
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
            There are dancers — and then there are visionaries who shake the very ground they perform on. Ranbbir Banerjee belongs to the latter. Fearless, unapologetic, and relentlessly committed to his art, he is not just carrying classical dance forward — he’s rewriting its narrative for a new generation.
In his candid conversation with DevikaMajumder, Co-founder of Global Influencers Hub, Ranbbir strips away the noise of “influencer culture” and brings the focus back to what truly matters — authenticity, impact, and building a world where dancers can thrive without compromise. He speaks of influence as responsibility, of success as building ecosystems, and of dance as something far greater than performance — a movement, a calling, a way of life.
This isn’t just an interview. It’s a rare glimpse into the mind of an artist who refuses to dilute his truth — and in doing so, is inspiring countless others to find theirs.

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
      src="/ranbirArticleVideo.mp4"
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

          
       
          
    <p><strong>Devika Majumder:</strong> Hi, Ranbbir. Welcome to Global Influencers Hub. Here, we talk about the life journeys of influencers, and we’re excited to dive deep into yours. Let’s begin with your childhood. Tell us—what was Ranbbir like as a child?</p>
            <p><strong>Ranbbir Banerjee:</strong> I was a very quiet kid. Not expressive, not the kind who loved being on stage. The version of me people see now on Instagram is very different from the child I used to be. Things began to change when I was four—my mother decided I should learn dance. I started with a local teacher, and soon I got the chance to perform on Dance Bangla Dance, a well-known reality show in Bengal. That experience gave me the idea that maybe dance was my thing. Over time, I explored different art forms, but now my focus is mainly on Bharatnatyam.</p>

            <p><strong>Devika:</strong> So would you say dance entered your life at the age of four?</p>
            <p><strong>Ranbbir:</strong> Yes, exactly.</p>

            <p><strong>Devika:</strong> And what about Bharatnatyam specifically?</p>
            <p><strong>Ranbbir:</strong> I started when I was around five. After a year of training, my teacher felt it was the right time for me to begin Bharatnatyam, and that’s how it started.</p>

            <p><strong>Devika:</strong> When did you feel that dance was truly your calling? Who inspired you, and how did your family react?</p>
            <p><strong>Ranbbir:</strong> My family has always been supportive. My mother, especially—she was the one who believed I should pursue dance. But society had its stereotypes. Back then, people thought boys shouldn’t dance, or if they did, it was frowned upon. I don’t blame society entirely—if they saw a boy dancing in a feminine style, of course, people would comment. That’s why I made it my motto: if I perform classical dance, it should carry the essence of a male dancer. I looked up to legends like Birju Maharajji and Kelucharan Mohapatra, whose mastery reflected that strong identity. By 2015, after performing in Bindass Dance, another reality show in Bengal, I realized more clearly that dance was my true path. I was about 13 or 14 then.</p>

            <p><strong>Devika:</strong> That’s beautiful. And Bharatnatyam is known for its discipline. What kind of rigorous routine did you follow?</p>
            <p><strong>Ranbbir:</strong> For me, Bharatnatyam has never been limited to fixed practice hours. Even if I formally rehearse for just an hour or so, it’s part of my whole lifestyle. For instance, if I observe someone’s expressions while sitting in a café, I think about how I can use that for the abhinaya section of my dance. Everything in life influences my Bharatnatyam. It’s more than practice—it’s a way of living.</p>

            <p><strong>Devika:</strong> If you had to describe the essence of Bharatnatyam in one word, what would it be?</p>
            <p><strong>Ranbbir:</strong> Lifestyle. Bharatnatyam is my lifestyle.</p>

            <p><strong>Devika:</strong> That’s powerful. Now, you’re known for blending tradition with innovation. Tell us about how that happened.</p>
            <p><strong>Ranbbir:</strong> Around 2018, I suddenly felt Bharatnatyam might not be for me anymore. I shifted completely into hip hop—joining underground battles, learning house, popping, locking, and different street styles. But on December 25, 2019, I felt an urge to return to Bharatnatyam. That’s when it clicked—I didn’t have to choose one over the other. My real character lies in blending them both. Hip hop gave me a new mindset, new movement vocabulary, even videography styles. But I always connect it back to tradition. That’s my balance.</p>

            <p><strong>Devika:</strong> Was there a particular reason you thought Bharatnatyam wasn’t for you back then?</p>
            <p><strong>Ranbbir:</strong> Honestly, I didn’t see much of a future in hip hop at that time, at least not the way I imagined. But I realized Bharatnatyam, when blended with hip hop, could be powerful. If you see my recent videos, the movements and videography are influenced by hip hop, but the roots are still in tradition.</p>

            <p><strong>Devika:</strong> That’s fascinating. But innovation often attracts criticism. How has your work been received?</p>
            <p><strong>Ranbbir:</strong> In the beginning, especially when I started sharing videos on Instagram, I got criticism—mostly from junior dancers, not senior teachers. But I’ve also received incredible appreciation from masters. For example, a senior Kathakali dancer who received the Natyakala Award once told me he had seen my videos and appreciated my work. Similarly, a well-known Manipuri teacher in my university also praised my content. That kind of feedback means the world to me. Seniors with decades of experience see value in what I’m doing, and that validates my efforts. Of course, in Calcutta, I sometimes face harsh criticism, but I don’t mind. If a senior corrects me, I take it as valuable feedback. But criticism from those who’ve only trained for a couple of years—I don’t let that affect me.</p>

            <p><strong>Devika:</strong> That makes sense. Now let me ask—what’s your favorite hasta?</p>
            <p><strong>Ranbbir:</strong> Katakamukha.</p>

            <p><strong>Devika:</strong> And your favorite mudra?</p>
            <p><strong>Ranbbir:</strong> Dhyana Mudra. Both are different, of course—hasta and mudra have their own essence.</p>

            <p><strong>Devika:</strong> Okay. Right. Now if Bharatnatyam were a person, how would you describe its personality?</p>
            <p><strong>Ranbbir:</strong> That’s a difficult one. I’d say it has a very dynamic personality. For me, Bharatnatyam is futuristic—it holds enormous scope, much of which remains unexplored, especially by the younger generation. When people talk about fusion, I often compare it to a mango milkshake. You don’t taste only the mango or only the milk—you get a new, blended flavor. That’s how fusion in dance should feel. It shouldn’t look like, “Now he’s doing this style, now he’s doing that style.” At the end of the day, it should become one.</p>

            <p><strong>Devika:</strong> Tell us about Kritii Crew.</p>
            <p><strong>Ranbbir:</strong> I started Kritii Crew last year—it’s been almost one year now.</p>

            <p><strong>Devika:</strong> What inspired its creation?</p>
            <p><strong>Ranbbir:</strong> While working on my personal brand and media classes, I realized true growth happens when you grow with others, not just by yourself. If I build something with others, I become a leader. Otherwise, I’m just focusing on myself. In the classical scene, I noticed a very rigid, hierarchical mindset. Many groups run on a “boss mentality,” where the teacher’s word is final, and students have little voice. I wanted to change that. My vision for Kritii Crew is to create a healthy environment where everyone can share their thoughts freely. Of course, I’m the founder, but it shouldn’t mean whatever I say is the last word.</p>

            <p><strong>Devika:</strong> That’s wonderful. And I think that’s why you’ve been able to create something unique. The more interaction and feedback there is, the better the outcome.</p>
            <p><strong>Ranbbir:</strong> Exactly. And since you’re a founder too, you’ll connect with this. A healthy environment is essential. Before this, I worked in many teachers’ crews where students’ opinions weren’t valued.</p>

            <p><strong>Devika:</strong> Right. In many cases, no one listens to the dancers—the teacher has the final say. What you’ve built is futuristic, really. Now, tell us a story about one of your students.</p>
            <p><strong>Ranbbir:</strong> There are many, but let me share one. A student from Kerala had been learning for almost seven to eight years from another teacher. What I often see in classical dance classes is that the focus is mainly on adavus—the foundational steps—and on preparing items for shows. Theoretical depth, abhinaya, and talam are often neglected. So, when she came to me, we first had a structured discussion. I always meet students to understand their mindset and goals. If I feel I can’t help them achieve what they want, I tell them honestly that my class might not be the right fit. But if our visions align, we move forward. She had a hunger to learn theory and talam, not just perform items. She also carried some traumas from her past learning environment, which made her quiet in the beginning. Slowly, over two months, she started opening up. As a mentor, I’ve learned that how you speak matters as much as what you say. Words leave a deep impact. Within three months, I saw remarkable growth in her dancing. After seven months, she set a goal to apply to a university, and we prepared together. Despite her initial doubts, she built confidence, learned adavus properly, and achieved her goal. For me, this showed the importance of combining tradition with a modern teaching approach.</p>
            <p><strong>Devika:</strong> Absolutely. That’s a very powerful message—traditional learning with a modern approach. It’s so important.</p>
            <p><strong>Ranbbir:</strong> Exactly. Another student I’d like to mention is a doctor from Calcutta. Early on, she asked me, “How many days will it take to learn Bharatnatyam?” I told her, “Let’s wait for two months, and then you’ll see.”</p>
            <p>After two months, she admitted her perspective had completely changed. She even continued classes just two weeks before her delivery. I advised her to rest, but she insisted on attending because she felt suffocated without dance. It was truly inspirational.</p>
            <p><strong>Devika:</strong> That shows her passion so beautifully.</p>
            <p><strong>Ranbbir:</strong> Yes. From asking how many days it would take to learn Bharatnatyam, to attending classes during her pregnancy—her journey shows how much the art form can transform someone.</p>
            <p><strong>Devika:</strong> That’s wonderful. Now, tell us about your global journey. Do you also teach internationally?</p>
            <p><strong>Ranbbir:</strong> Yes. Right now, I have over 100 students across more than 15 countries. Different cultures, different backgrounds—but the common thread is love for dance.</p>
            <p>I tell my students that these classes aren’t just about learning steps. It’s about understanding the culture and the nuances. It took me 13–14 years to truly grasp the essence of Bharatnatyam. While I can’t give them everything in two months, my goal is to give them a taste of it.</p>
            <p><strong>Devika:</strong> When did your first global student join?</p>
            <p><strong>Ranbbir:</strong> That was in 2021. She was from Switzerland. It was my first time teaching online—her mother had reached out. She had hearing difficulties and needed a machine to hear, which had made her less confident.</p>
            <p>But when I saw her dance, you wouldn’t know she had any issues. She joined in May, and by December she wanted to reach the finals of a big competition. She had tried three times before without success. We worked on a choreography, and she not only reached the finals—she won.</p>
            <p>She was initially quiet, didn’t know Hindi, and I was a new teacher for her. But when she won, she called me, and I realized once again: anything is possible if you truly want it.</p>
            <p><strong>Devika:</strong> That’s amazing. You really made a difference in her life and gave her confidence.</p>
            <p><strong>Ranbbir:</strong> That’s the real goal. As mentors, we don’t just teach dance—we build confidence. Every student is different, with different patterns and thought processes. The first month is all about building interest and motivation. If a student is on the right path and feels motivated, they can achieve anything.</p>
            <p>As teachers, we often expect students to understand us. But I believe it’s just as important for mentors to understand their students.</p>
            <p><strong>Devika:</strong> And that’s what makes you stand out. Excellent. Now, when you're performing, is there a pre-performance ritual that you go through?</p>
            <p><strong>Ranbbir:</strong> There isn’t a particular ritual, but I do have some habits. First, I always eat something before a performance—it fuels both my body and my soul. Without it, I feel I won’t have the energy I need on stage. But I make sure it’s light—usually South Indian food, since Bengali food is too heavy. Another thing is that I don’t stay quiet before a performance. I talk a lot—it boosts my energy and keeps me charged.</p>
            <p><strong>Devika:</strong> Yeah, okay. So tell us about an unexpected or funny moment you had on stage.</p>
            <p><strong>Ranbbir:</strong> There’s one story I’ll never forget. In April 2021, there was a competition in Kolkata called High Stakes. Before that, I had done reality shows and worked as a backup dancer around 2017, when there wasn’t much work. That’s when I realized how important it is to have a friendly environment in a dance crew.</p>
            <p>At High Stakes, most participants were hip-hop dancers from cities like Bangalore, Mumbai, and Delhi. Since I was known more as a classical dancer, many people were curious—like, “What is he doing here?” After my performance, I received a standing ovation, which was special, but the real moment came afterward. A mother approached me and said her 5-year-old son, who had been running around restlessly all day, sat quietly and watched my entire performance without moving. That touched me deeply—because if a child can sit still and connect with my dance, that means I’ve truly reached someone.</p>
            <p>I always say what I do isn’t “fusion.” Creating an art form is no joke—you need a foundation, a concept, years of depth. What I present is my own voice, my own version of Bharatanatyam. Beginners often rush to create something “new” without understanding tradition. But if your foundation is strong, you can always develop your own voice.</p>
            <p><strong>Devika:</strong> So tell us about your feeling when you're on stage when the lights are on and the music starts. What's your feeling like?</p>
            <p><strong>Ranbbir:</strong> I do feel nervous before stepping on stage, but once the music starts, it’s magical. In recent years, I’ve grown confident as a performer. I no longer think about the audience’s reactions—I just immerse myself in my own world, in my own version of dance.</p>
            <p><strong>Devika:</strong> You're just comfortable in that space.</p>
            <p><strong>Ranbbir:</strong> Yes, in that space.</p>
            <p><strong>Devika:</strong> Is there a mythological character that you've always wanted to play which you haven't yet?</p>
            <p><strong>Ranbbir:</strong> Karna. I have that idea. In the future, I want to create a production around him. He’s a character people don’t focus on as much as Arjun, but he was also extremely talented.</p>
            <p><strong>Devika:</strong> Of course. So now if you could give another younger teacher some advice, what would that be?</p>
            <p><strong>Ranbbir:</strong> Try to understand your student first. Don’t just say, “This is my class structure, this is the timing, this is the fee.” We are not contractors on a bus—we are mentors. If you don’t understand your students’ struggles and goals, you can’t guide them properly.</p>
            <p>In my classes, every six months my team and I personally check in with students. We ask about the problems they’re facing and how we can improve. Their feedback is invaluable. That’s why our structure evolves every six months—it’s not the same as three years ago. Teaching has to grow, just like the students do.</p>
            <p><strong>Devika:</strong> Excellent. I'm so glad that I'm also talking to a person with an entrepreneurial mindset. Because, you know, not too many people actually understand that part. They stick to rules, but the main thing is innovation. I like the innovative part of how you think and apply it, and it’s not easy to bring that mindset to a dance academy.</p>
            <p><strong>Ranbbir:</strong> I feel if these things are not applied, then it’s not right.</p>
            <p><strong>Devika:</strong> Absolutely.</p>
            <p><strong>Ranbbir:</strong> For example, we use ChatGPT a lot for our work. We also use applications like Notion. Without these tools, it would be very difficult for me to manage everything.</p>
            <p><strong>Devika:</strong> Fantastic. Now, what's next for Ranbbir?</p>
            <p><strong>Ranbbir:</strong> Right now, I’m building my team. I’ve realized I can’t do everything myself—shooting, editing, managing—it’s just not possible. So, I’m creating a strong personal team: a manager, a videographer, an editor—about four to five people by this month. Alongside that, I’m establishing a proper SOP for smoother workflows. From June–July onwards, we’ll also focus more on workshops.</p>
            <p>On another front, with my crew Vritii, I’m planning corporate shows and weddings. I’ve noticed that many dance crews in that market lack professionalism. Our approach will be systematic, customized to each event, and infused with Bharatanatyam. And when it comes to my personal brand, I only want to work with the best of the best. Average work won’t cut it. If you want premium quality, you must invest in the right people. That’s my vision—for my personal journey, for Vritii, and for the future.</p>
            <p><strong>Devika:</strong> You want to connect with the best.</p>
            <p><strong>Ranbbir:</strong> Yes. I faced a lot of problems previously. Average people may charge less, but the quality will also be less. If you want excellence, you have to connect with the best and pay them what they deserve. Right now, we’re working, and by July we’ll focus even more on workshops. With Vritii, we’ll create more videos, do more shows, and keep building the team for my personal branding as well.</p>
          
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
          Rapid Fire with Ranbbir
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
            src="/ranbirRapid.mp4" // <-- use your vertical video file
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
          
          
          
          
          
          
          
          
          
          
          
            <p><strong>Devika:</strong> Okay Ranbbir, now we’ll just jump into some fun rapid fire.</p>
            <p><strong>Ranbbir:</strong> Yep. Sure. Cool.</p>

            <p><strong>Devika:</strong> One classical dancer you'd love to collaborate with.</p>
            <p><strong>Ranbbir:</strong> That’s very difficult… but I’d say Prasanth Anna.</p>

            <p><strong>Devika:</strong> Morning raga or evening performance?</p>
            <p><strong>Ranbbir:</strong> Evening performance.</p>

            <p><strong>Devika:</strong> Describe Vritii in three words.</p>
            <p><strong>Ranbbir:</strong> A healthy dance environment.</p>

            <p><strong>Devika:</strong> Cool. If you weren’t a dancer, what would you do?</p>
            <p><strong>Ranbbir:</strong> Maybe I’d be an entrepreneur.</p>

            <p><strong>Devika:</strong> Cool. You already are an entrepreneur.</p>
            <p><strong>Ranbbir:</strong> Yes, true.</p>

            <p><strong>Devika:</strong> The most played song on your playlist right now.</p>
            <p><strong>Ranbbir:</strong> GarajeGaraje—the rock version.</p>

            <p><strong>Devika:</strong> One compliment that you’ll never forget?</p>
            <p><strong>Ranbbir:</strong> I’ve received this many times: “You dance like a male” or “Finally, I see a male dancer.” People say this in comments, DMs, and even face-to-face. That’s something that stays with me.</p>

            <p><strong>Devika:</strong> So the male energy is there, basically. That’s what they mean.</p>
            <p><strong>Ranbbir:</strong> Of course. Yes. That’s my target.</p>

            <p><strong>Devika:</strong> Right. Unlimited travel or unlimited peace of mind?</p>
            <p><strong>Ranbbir:</strong> Peace of mind.</p>

            <p><strong>Devika:</strong> One dish you can eat every day.</p>
            <p><strong>Ranbbir:</strong> Biryani.</p>

            <p><strong>Devika:</strong> One student question that made you go, “Wait, what?”</p>
            <p><strong>Ranbbir:</strong> Oh yes—one student once asked me, “Do we have to pay fees for the class?”</p>

            <p><strong>Devika:</strong> Worst piece of advice you’ve ever received?</p>
            <p><strong>Ranbbir:</strong> “Don’t hurry, wait for the right time.” I believe speed is the key.</p>

            <p><strong>Devika:</strong> Yeah, speed is the currency. See, these things not everyone understands. Okay, one celebrity you’d love to train?</p>
            <p><strong>Ranbbir:</strong> Maybe Ranveer Singh. He’s a very versatile dancer.</p>

            <p><strong>Devika:</strong> One word people use to describe you that makes you laugh.</p>
            <p><strong>Ranbbir:</strong> When people associate terms like “chic classical” with me. I’m just a dancer doing my version.</p>

            <p><strong>Devika:</strong> So, what does success mean to you?</p>
            <p><strong>Ranbbir:</strong> Success means building a team. Always. Creating a revenue system for them. For me, success is when Vritii grows into a structure where dancers earn in a healthy environment, where talented people know they can come, get opportunities, and work continuously. I want my students to see a future in dance without unnecessary stress. Dance is already mentally and physically demanding—I want to make that journey easier for them.</p>

            <p><strong>Devika:</strong> Good thought process. Now if you could leave one message for classical artists, what would that be?</p>
            <p><strong>Ranbbir:</strong> First, focus on your foundation. Spend more time with it instead of rushing into items and choreographies. Build that confidence through a strong base—then move ahead. Second, I’d say to classical artists who look down on forms like hip hop: every art form has its own value. Everyone is right from their own perspective. If someone criticizes me, I don’t mind—it’s their thought process.</p>

            <p><strong>Devika:</strong> Correct. So when was the first time you realized that you’d become an influencer on social media?</p>
            <p><strong>Ranbbir:</strong> Honestly, I don’t call myself an influencer. Because I feel many influencers lose focus. Especially classical dancers—they start as classical artists, but after some time shift into acting, modeling, or other things. They become jacks of all trades, masters of none. I want to stick to classical dance and take it to the next level. That’s my target. First, I was a solo performer. Then I started my dance classes. Then I created Vritii. Now I’m expanding into workshops and more. But I’m not stepping out of classical—I’m growing within it.</p>

            <p><strong>Devika:</strong> Excellent. Any message in your DMs that really stood out?</p>
            <p><strong>Ranbbir:</strong> Yes, there’s one that really touched me. A boy told me that initially, his parents didn’t support his passion for dance. But after he showed them my performances, they became convinced that dance could be a meaningful path, and now they support him wholeheartedly. He wrote me a long paragraph, and that message really hit me.</p>

            <p><strong>Ranbbir:</strong> You see, when we talk about being an influencer, it can go two ways — the right way or the wrong way. If influencing is about showing off luxury lifestyles, endless parties, and materialism, then I don’t want to be that kind of influencer.</p>
            <p><strong>Ranbbir:</strong> For me, real influence is about encouraging people to read, to do good work, to explore multiple aspects of life, and not limit themselves to just one thing — even if it’s dance. I often tell people, don’t just dance, learn other things too. That’s what I believe influence should be: guiding people in a way that helps them grow.</p>
            <p><strong>Ranbbir:</strong> Unfortunately, many influencers promote things like, “buy this dress” or “spend on this product.” If that’s what influence is reduced to, then it’s not right. Instead, influence should empower people to learn how to earn money, build themselves, and truly grow in life.</p>

            <p><strong>Devika:</strong> Those are very good points. I love everything we talked about. I think we’ve covered quite a lot today, and it was truly wonderful speaking with you. My team will also be in touch if we need any more information. But before we wrap up, I’d love to hear your review of the Global Influencers Hub app. Do you have a message for us?</p>

            <p><strong>Ranbbir:</strong> Absolutely. First of all, I want to say how impressed I am with the team. From the very first day of contact, the way your team coordinated with me was excellent. I was facing some scheduling issues, but your team managed everything so smoothly and stayed in constant touch, even before the meeting. It really showed how professional and organized you all are. And I have to say, I loved your vibe too, Devika. It’s been a lovely experience connecting with you. I think in the future, we’ll definitely be able to collaborate and discuss many more things.</p>

            <p><strong>Devika:</strong> That means a lot, thank you. I’ll also take your number from my team and connect with you directly since you’re based in Calcutta.</p>
            <p><strong>Ranbbir:</strong> Surely, we’ll connect.</p>

            <p><strong>Devika:</strong> We’ll have to do that. Thank you so much, Ranbbir. All the best with everything, and we’ll stay in touch.</p>
            <p><strong>Ranbbir:</strong> Thank you so much. Bye-bye.</p>
             

            
              


           









             
           
           
    </Container>
           
            </Card.Body>
         
    </>
  );
};

export default Ranbir;
