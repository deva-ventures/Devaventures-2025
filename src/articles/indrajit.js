import React from 'react';
import { Container, Row, Col, Card ,Image,Button} from 'react-bootstrap';

const Indrajit = () => {
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
              Tough times never last, tough people do”—it actually works.
              </q>{" "}
              – <strong> Indrajit Lahiri</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/indrajitArticle.png" // <-- second image here
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
    href="https://youtu.be/aps1v6sNFWw?si=3pdK_2xTXA_GwV2B"
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
    window.open("https://youtu.be/aps1v6sNFWw?si=3pdK_2xTXA_GwV2B", "_blank");
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
    window.open("https://youtu.be/aps1v6sNFWw?si=3pdK_2xTXA_GwV2B", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://youtu.be/aps1v6sNFWw?si=3pdK_2xTXA_GwV2B"
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
      src="/indrajitConvo.jpg" // replace with your image path
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
            Indrajit Lahiri, a passionate storyteller, author, IT professional, and one of the most loved food content creators in Bengal, recently joined Devika Majumder, co-founder of Global Influencers Hub, for a heartwarming conversation. Best known for Foodka, his digital avatar that captures Bengal’s food culture with wit and depth, Indrajit’s journey from a book-loving child to an influential voice in India’s culinary content space is rooted in authenticity, simplicity, and deep love for food and culture. In this candid chat, he opens up about his early life, the values that shaped him, and the organic evolution of Foodka. Here’s a glimpse into their conversation:
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
      src="/indrajitArticleVideo.mp4"
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
                <strong>Devika Majumder:</strong> Welcome, Indrajit, to Global
                Influencers Hub! Here, we explore the life journeys of social
                media influencers. This is the creator economy, and today is
                about getting to know you. From Indrajit Lahiri to Foodka, it’s
                been an amazing journey. Let’s go back a bit and start with your
                childhood.
              </p>

              <p>
                <strong>Indrajit Lahiri:</strong> Hmm… sure. I was a regular
                Bengali kid, growing up in the late 70s and 80s. There was no
                internet then, but life was fun. We had a lot of friends and
                spent time outdoors. It was a good time—simple and joyful.
              </p>

              <p>
                <strong>Devika:</strong> Were you the mischievous one, the
                bookworm, or the adventurous type?
              </p>

              <p>
                <strong>Indrajit:</strong> Definitely a bookworm. Very much so.
                Though honestly, my mother would’ve been the best person to
                answer that! (laughs) But yes, books were a big part of my
                childhood.
              </p>

              <p>
                <strong>Devika:</strong> That’s sweet. Is there a cherished
                memory from your school days that really stands out?
              </p>

              <p>
                <strong>Indrajit:</strong> Nothing very specific, to be honest.
                I went to a regular Bengali medium school, but we had a good
                group of friends. Some of them are still close even today.
              </p>

              <p>
                <strong>Devika:</strong> That’s lovely! Were there any
                particular teachers or friends who left a strong impact?
              </p>

              <p>
                <strong>Indrajit:</strong> Not really—no one in particular comes
                to mind. It was more about the collective experience.
              </p>

              <p>
                <strong>Devika:</strong> Were there any hobbies or passions from
                childhood that still influence you today?
              </p>

              <p>
                <strong>Indrajit:</strong> Books, without a doubt. They’ve
                stayed with me through every phase of life.
              </p>

              <p>
                <strong>Devika:</strong> Wow. Any favorite book that you go back
                to, something that lifts you up?
              </p>

              <p>
                <strong>Indrajit:</strong> I read a lot of Bengali literature. A
                few English books here and there, but mostly Bengali. Two that
                have stayed with me over decades are <em>Madhukori</em> and{" "}
                <em>Shabnam</em>. They’ve really left a mark.
              </p>

              <p>
                <strong>Devika:</strong> Beautiful. Now, what’s a value or
                lesson your family instilled in you that you still carry?
              </p>

              <p>
                <strong>Indrajit:</strong> Patience. That everything happens at
                its right time. It won’t happen earlier, and it won’t happen
                later. It’s one of those life truths that has stayed with me.
              </p>

              <p>
                <strong>Devika:</strong> Timing is everything. I completely
                agree. It’s amazing how that realization deepens with time.
              </p>

              <p>
                <strong>Indrajit:</strong> Exactly.
              </p>

              <p>
                <strong>Devika:</strong> Now since this is Foodka’s story, we
                have to talk about food! What’s your fondest childhood memory
                related to food?
              </p>

              <p>
                <strong>Indrajit:</strong> Back then, eating out wasn’t common.
                It wasn’t like now, where people order in or go out twice a
                week. Eating out was an event. Maybe once a month or every two
                months, our family would go out—my father, mother, and I. We’d
                have a nice meal and come back. It was about the experience, not
                just the food.
              </p>

              <p>
                <strong>Devika:</strong> So, it was really about the joy of
                going out as a family?
              </p>

              <p>
                <strong>Indrajit:</strong> Absolutely. The outing itself was
                more exciting than the food sometimes!
              </p>

              <p>
                <strong>Devika:</strong> That sounds so wholesome. Who was the
                biggest foodie in your family?
              </p>

              <p>
                <strong>Indrajit:</strong> (laughs) See, back then the term
                “foodie” didn’t even exist. But everyone in a Bengali family
                appreciates good food. So, I’d say all of us were food lovers in
                our own way.
              </p>

              <p>
                <strong>Devika:</strong> That’s so true. Any particular
                dish—“maa ke haath ka khana”—that still stays with you?
              </p>

              <p>
                <strong>Indrajit:</strong> Oh yes, definitely. My mom and my
                Jethima (aunt) cooked all our meals. We didn’t have a cook or
                anything fancy. It was humble, everyday Bengali food, but made
                with love. I’ve grown up on that. Maybe <em>macher jhol</em> or{" "}
                <em>luchi torkari</em>—simple but full of warmth.
              </p>

              <p>
                <strong>Devika:</strong> That sounds delicious! So, tell
                us—before Foodka, what did life look like for Indrajit Lahiri?
              </p>

              <p>
                <strong>Indrajit:</strong> Foodka is quite new—it’s just 7 years
                old. I’ve been working for over 22-23 years. My main career has
                always been in IT. I still run an IT company. Before that, I
                worked at Hewlett Packard for about 6-7 years. So, yes, I was
                deep into the corporate world before Foodka happened.
              </p>

              <p>
                <strong>Devika:</strong> And what was that journey like—from
                college to corporate?
              </p>

              <p>
                <strong>Indrajit:</strong> I started in college in Bhubaneswar.
                My first job was at Hyatt Regency—I thought I’d be a chef! But
                within 8 months, I realized that was not for me. I’d make a
                terrible chef (laughs). So, I moved to sales and marketing,
                worked in various companies, and eventually left HP to start my
                own venture—Pickle Solutions. It’s an IT firm and we’re strong
                partners with big players like HP even today.
              </p>

              <p>
                <strong>Devika:</strong> That’s amazing. So how did Foodka
                begin? What was that defining moment?
              </p>

              <p>
                <strong>Indrajit:</strong> There wasn’t really a dramatic
                moment. I met Mir Afsar Ali during a food trail organized by the
                Times Group. He’s a foodie, I’m a foodie—we connected instantly.
                He wanted a partner for a new idea, and I was the choice. I had
                already been writing my blog <em>Moha Mushkil</em> since 2010—
                it’s still active, by the way. Then in September 2017, Foodka
                was born. It just… happened.
              </p>

              <p><strong>Devika:</strong> So, how was that very first experience of Foodka? Do you remember what the first episode was?</p>
          <p><strong>Indrajit:</strong> Oh yes, I remember. Honestly, I was learning the ropes back then because I had never been in showbiz before. I was always a corporate guy. So, for maybe the first 10–15 episodes, I was just figuring things out. I’d say I was only 20% there at that time. Even now, I’m still learning. It’s not a problem—but back then, adapting to the new setup was definitely a challenge.</p>

          <p><strong>Devika:</strong> The whole process—shooting, scripting, everything?</p>
          <p><strong>Indrajit:</strong> The entire learning curve, yes. It’s still ongoing. We’re always evolving, trying to get better.</p>

          <p><strong>Devika:</strong> Learning never stops. I think we’re all lifelong learners in this journey. Speaking of which, was there a defining moment in your journey where everything changed?</p>
          <p><strong>Indrajit:</strong> Probably the day I met Mir on that food trail. If not for that, we may have never crossed paths. He was already a celebrity back then. That meeting changed everything. I’d say that was the turning point.</p>

          <p><strong>Devika:</strong> Absolutely, that kind of connection can be life-changing. What would you say has been the biggest risk you’ve taken in life so far?</p>
          <p><strong>Indrajit:</strong> Leaving my stable job at Hewlett Packard when my son was barely one-and-a-half or two years old. That was a huge leap of faith. I had no clue whether it would turn out good, bad, or ugly. But yes, it was the boldest move I’ve ever made. And here we are—my company is almost 12 years old now. In fact, I’m talking to you right now from that same office!</p>

          <p><strong>Devika:</strong> That’s amazing. And I can tell you’re proud of that decision. Fantastic! Now, we all face setbacks. Is there one failure that taught you a powerful life lesson?</p>
          <p><strong>Indrajit:</strong> Oh, many—countless, actually. Failures happen every single day. I’m in my mid-forties, and I’ve seen plenty. But they’re not always bad. In fact, they’re great teachers. The key is to learn from them and grow. You may avoid the same mistake next time… or maybe not. But the effort matters.</p>

          <p><strong>Devika:</strong> Was there one particular failure that left a lasting lesson?</p>
          <p><strong>Indrajit:</strong> Yes—my 12th board exams. I didn’t do well at all. I had started enjoying life a bit too much after Class 10, got distracted, and didn’t put in the effort. That regret has stayed with me. It wasn’t anyone else’s fault—it was completely mine.</p>

          <p><strong>Devika:</strong> It’s great that you take ownership of it. Not everyone does.</p>
          <p><strong>Indrajit:</strong> It has to be that way. No one else is to blame.</p>

          <p><strong>Devika:</strong> True. If you could relive one day from your past, which one would it be?</p>
          <p><strong>Indrajit:</strong> None, actually. I don’t want to go back. What’s done is done.</p>

          <p><strong>Devika:</strong> That’s a wonderful way to look at life. Let’s talk a bit about your personal life. Who has been the biggest influence in your life?</p>
          <p><strong>Indrajit:</strong> My son. He’s 14 now, and he has completely changed my life.</p>

          <p><strong>Devika:</strong> That’s beautiful. Can you share more about how he’s influenced you?</p>
          <p><strong>Indrajit:</strong> Something shifted in me when he came into our lives. It was transformative. He completed us. You know, I feel “influencer” is a highly overused term today—but if I had to choose someone, it would be him.</p>

          <p><strong>Devika:</strong> That’s truly moving. Now here’s a fun one—if you could have dinner with three people from history, who would they be and why?</p>
          <p><strong>Indrajit:</strong> Hmm… Charlie Chaplin, Adolf Hitler, and Kishore Kumar. One was a genius of planned madness. One—Hitler—we still can’t fully understand. And Kishore Kumar, well… he was brilliantly unpredictable.</p>

          <p><strong>Devika:</strong> That’s a very unique trio! What about your personal philosophy—what keeps you going during tough times?</p>
          <p><strong>Indrajit:</strong> Just stay. Just be there. Keep evolving, keep learning. It may sound cliché, but “tough times never last, tough people do”—it actually works. Stay afloat. Keep your mind steady. Somehow, things always work out.</p>

          <p><strong>Devika:</strong> That’s powerful. Now, how do you manage to balance everything—your content creation, running your IT company, family life?</p>
          <p><strong>Indrajit:</strong> I think I operate in a “switch-on, switch-off” mode. Like right now, I’m here at Global Influencers Hub, doing this interview. At this moment, I’m not thinking about Foodka, or Pickle Solutions, or home. I focus on one thing at a time. Otherwise, it’s impossible to juggle it all. We men can usually handle only one thing at a time, right? (laughs) So, I finish one, switch off, and move on to the next.</p>

          <p><strong>Devika:</strong> That’s a great strategy. The switch-on, switch-off approach really does seem effective.</p>
          <p><strong>Indrajit:</strong> It works for me. Maybe others can try it too. It might help.</p>

          <p><strong>Devika:</strong> Definitely. A great takeaway for many! Now, when we think about the books and movies we grew up with, which one do you think had a profound impact on your life?</p>
          <p><strong>Indrajit:</strong> Charlie Chaplin’s Modern Times. That one really stayed with me. And of course, Sholay.</p>

          <p><strong>Devika:</strong> Sholay, classic!</p>
          <p><strong>Indrajit:</strong> Just to clarify, Sholay isn’t by J.P. Dutta—just mentioning, in case anyone gets confused. But yeah, Sholay and Modern Times. Timeless.</p>

          <p><strong>Devika:</strong> Absolutely. You know, I was thinking about the same question while I was asking you. For me, it’s Life is Beautiful. Such a powerful film.</p>
          <p><strong>Indrajit:</strong> Oh yes, brilliant movie.</p>

          <p><strong>Devika:</strong> It really shaped how I think about life.</p>
          <p><strong>Indrajit:</strong> I don’t understand why it’s not available on any OTT platform in India. It’s on Telegram if you really want to find it, but nowhere legally.</p>

          <p><strong>Devika:</strong> That’s so true. I used to own a copy, but I’m not sure where it is now. It’s such a shame—it should be easily accessible.</p>
          <p><strong>Indrajit:</strong> Right? That film deserves to be seen by everyone. It’s that impactful.</p>

          <p><strong>Devika:</strong> Now, if your life were a movie, what would the title be? And who would play you?</p>
          <p><strong>Indrajit:</strong> Hmm. That’s a tough one. It really depends on someone else’s perspective. But if I had to name it—maybe Ebong Indrajit. Or even better, Ebong Foodka.</p>
          <p><strong>Devika:</strong> Interesting! What does Ebong Foodka mean?</p>
        <p><strong>Indrajit:</strong> I like short names. Monosyllables. So Ebong Foodka feels right. If something comes out of it, I’m game.</p>

        <p><strong>Devika:</strong> I love that. Now tell me—what’s a hidden talent or skill that people don’t usually know about you?</p>
        <p><strong>Indrajit:</strong> I’m a great toilet singer.</p>

        <p><strong>Devika:</strong> Oh wow, there you go!</p>
        <p><strong>Indrajit:</strong> I mean, I don’t always stay in tune, but that doesn’t matter. I enjoy it, and that’s what counts.</p>

        <p><strong>Devika:</strong> Exactly. If it makes you happy, that’s all that matters.</p>
        <p><strong>Indrajit:</strong> Also, I’m a pampering father. I spoil my kid silly.</p>

        <p><strong>Devika:</strong> That’s so sweet. Okay, now tell me the three things you absolutely need with you—apart from your phone.</p>
        <p><strong>Indrajit:</strong> Oh, I actually switch off my phone data often. So I’d say—a good book, silence, and my bike. Definitely not the car. The bike gives me freedom.</p>

        <p><strong>Devika:</strong> Love that. Now, if you could swap lives with anyone for a day, who would it be?</p>
        <p><strong>Indrajit:</strong> My son. I’d love to relive his school days—he’s in Class 8 now. I want to feel that carefree, curious energy again.</p>

        <p><strong>Devika:</strong> That’s so heartfelt. What’s the most adventurous or spontaneous thing you’ve ever done?</p>
        <p><strong>Indrajit:</strong> Well, once I drove around 500 kilometers—Bhubaneswar to Kolkata—overnight. I was young and in my prime. It was crazy. I wouldn’t dare try that now.</p>

        <p><strong>Devika:</strong> That’s wild!</p>
        <p><strong>Indrajit:</strong> Yeah, but I survived! And I’ve got the story to prove it.</p>

        <p><strong>Devika:</strong> That’s the beauty of adventure, right? The stories stay with us.</p>
        <p><strong>Indrajit:</strong> They do. They keep us alive.</p>

        <p><strong>Devika:</strong> So what would your younger self say if they saw where you are today?</p>
        <p><strong>Indrajit:</strong> Probably—“Glad you survived.” And I’d tell them, “Think rationally. Don’t just follow your heart—it’s nonsense. Use your brain. That top floor exists for a reason.”</p>

        <p><strong>Devika:</strong> I hear you! Now, switching gears to food again. What’s the craziest or most adventurous thing you’ve eaten during your Foodka travels?</p>
        <p><strong>Indrajit:</strong> When we were in Meghalaya, we tried fried insects. Didn’t show it on camera, but we did try them. Their local food is fascinating—Northeast cuisine is extreme and incredibly diverse.</p>

        <p><strong>Devika:</strong> That’s amazing. Food really does have its own stories. Which dish you’ve covered had the most fascinating story?</p>
        <p><strong>Indrajit:</strong> Honestly, the simplest meals. Everyday dal. Everyday machher jhol. These humble dishes are full of soul. They are the true stories, the ones that matter.</p>

        <p><strong>Devika:</strong> That’s a beautiful thought.</p>
        <p><strong>Indrajit:</strong> Every machher jhol has a story. Every dal, every sambar—each one tells a tale. That’s what food is all about.</p>

        <p><strong>Devika:</strong> Now tell me—do you think there’s a street food gem in Kolkata or anywhere in India that deserves international recognition?</p>
        <p><strong>Indrajit:</strong> Honestly, there’s nothing that qualifies as a hidden gem anymore. Everything’s been discovered. Content creators, bloggers, TV shows—they’ve covered it all. But yes, Kolkata is definitely one of the street food capitals of India. No doubt about that.</p>

        <p><strong>Devika:</strong> Fair point. But is there one dish in particular that you feel should’ve gotten international attention?</p>
        <p><strong>Indrajit:</strong> Jhal muri. Absolutely. It’s vegan, DIY, and suits almost every palate. It’s versatile, flavorful, and uniquely Indian—especially Kolkata.</p>

        <p><strong>Devika:</strong> True, true. Now, you’ve got a huge fan following. Has there been a message or a gesture from a fan that truly touched you?</p>
        <p><strong>Indrajit:</strong> Many. So many, actually. We’ve received love in ways that very few people have.</p>

        <p><strong>Devika:</strong> Would you like to share a couple of those moments?</p>
        <p><strong>Indrajit:</strong> One that stays with me—there was a small kid who recognized me and just kept shouting “Foodka! Foodka!” Kids like that, they always melt my heart.</p>

        <p><strong>Devika:</strong> That’s really sweet. There’s something special about that kind of innocent admiration. So, what advice would you give to aspiring food influencers?</p>
        <p><strong>Indrajit:</strong> Just define why you’re here. That one sentence. Why are you doing what you’re doing? Once that’s clear, you’re sorted.</p>

        <p><strong>Devika:</strong> So essentially—be authentic.</p>
        <p><strong>Indrajit:</strong> Be authentic to yourself, at least.</p>

        <p><strong>Devika:</strong> And what about trends? Do you believe in them?</p>
        <p><strong>Indrajit:</strong> Nope. Not really. There are patterns we should adapt to over time, sure. But trends? No, they come and go. Nothing substantial there.</p>

        <p><strong>Devika:</strong> What’s next for Foodka?</p>
        <p><strong>Indrajit:</strong> Travel. That’s the single-point agenda. Across India. Across the world. Just travel.</p>

        <p><strong>Devika:</strong> Given that, if you could explore and cover the food culture of one country, which would it be?</p>
        <p><strong>Indrajit:</strong> Istanbul. That’s the place.</p>

        <p><strong>Devika:</strong> That’s an excellent choice—very rich, diverse food culture. Now here’s a fun one—if you had to describe your life journey so far using one dish, what would it be?</p>
        <p><strong>Indrajit:</strong> A sandwich. You don’t really know what’s gone inside, but it’s tasty anyway.</p>

        <p><strong>Devika:</strong> (laughs) So there’s a mystery there.</p>
        <p><strong>Indrajit:</strong> There should be. That’s what keeps life interesting.</p>

        <p><strong>Devika:</strong> What’s one life lesson you’ve learned from food?</p>
        <p><strong>Indrajit:</strong> Timing is everything. That’s the key. You can’t beat time. Everything depends on it.</p>

        <p><strong>Devika:</strong> So true. And what’s one thing about Indrajit Lahiri that people don’t usually know, but would find fascinating?</p>
        <p><strong>Indrajit:</strong> There’s nothing hidden anymore. Life is out in the open. In this digital era, there’s no space to hide.</p>

        <p><strong>Devika:</strong> Very true. So, how would you like to be remembered? What’s the legacy you want to leave behind?</p>
        <p><strong>Indrajit:</strong> Storyteller.</p>

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
          Rapid Fire with Indrajit
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
            src="/indrajitArticleVideo.mp4" // <-- use your vertical video file
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

       
       



        <p><strong>Devika:</strong> Love it. Now, let’s do a quick rapid fire!</p>
            <p><strong>Indrajit:</strong> Let’s go for it.</p>

            <p><strong>Devika:</strong> One word that describes you?</p>
            <p><strong>Indrajit:</strong> Human.</p>

            <p><strong>Devika:</strong> Describe your life in a hashtag?</p>
            <p><strong>Indrajit:</strong> #Mohamushkil. That’s what I use for my blog.</p>

            <p><strong>Devika:</strong> Dream destination you haven’t visited yet?</p>
            <p><strong>Indrajit:</strong> Mongolia.</p>

            <p><strong>Devika:</strong> Last thing you binge-watched?</p>
            <p><strong>Indrajit:</strong> Dahaad—on Prime.</p>

            <p><strong>Devika:</strong> One thing you can’t live without?</p>
            <p><strong>Indrajit:</strong> My son.</p>

            <p><strong>Devika:</strong> I knew that one. First thing you do when you wake up?</p>
            <p><strong>Indrajit:</strong> Have some water, settle down, and check the time.</p>

            <p><strong>Devika:</strong> Guilty pleasure?</p>
            <p><strong>Indrajit:</strong> Let’s not go there—too many.</p>

            <p><strong>Devika:</strong> A superstition you secretly believe in?</p>
            <p><strong>Indrajit:</strong> None. I’m an atheist—superstitions don’t work on me.</p>

            <p><strong>Devika:</strong> Go-to comfort food?</p>
            <p><strong>Indrajit:</strong> Biryani.</p>

            <p><strong>Devika:</strong> One person who can always make you laugh?</p>
            <p><strong>Indrajit:</strong> My son, Gibbs.</p>

            <p><strong>Devika:</strong> If you were a dish, what would your tagline be?</p>
            <p><strong>Indrajit:</strong> Tasty.</p>

            <p><strong>Devika:</strong> What’s more difficult—finding the perfect biryani or parallel parking?</p>
            <p><strong>Indrajit:</strong> Finding the perfect biryani. Parallel parking is so western—we barely even do it here in India.</p>

            <p><strong>Devika:</strong> True that! If your phone battery is at 1%, what’s the last thing you’d do?</p>
            <p><strong>Indrajit:</strong> Find a charging point. Or just switch it off to reserve it.</p>

            <p><strong>Devika:</strong> You have to pick one—no internet for a week or no food delivery for a week?</p>
            <p><strong>Indrajit:</strong> No internet and no food delivery. I’ll survive both.</p>

            <p><strong>Devika:</strong> What’s more dangerous—a spicy food challenge or reading YouTube comments?</p>
            <p><strong>Indrajit:</strong> Reading YouTube comments, no doubt.</p>

            <p><strong>Devika:</strong> If you had to rename Foodka, what would you call it?</p>
            <p><strong>Indrajit:</strong> I wouldn’t. It stays Foodka.</p>

            <p><strong>Devika:</strong> If you could replace all meetings with something else, what would it be?</p>
            <p><strong>Indrajit:</strong> Silence. Or maybe sitting by a mountain creek in the sun.</p>

            <p><strong>Devika:</strong> Nice. You have 10 seconds to invent a new dish—what’s it called and what’s in it?</p>
            <p><strong>Indrajit:</strong> No clue. Ten seconds is too short. Maybe I’ll just call it Gossip—that’s something we can always cook up.</p>

            <p><strong>Devika:</strong> (laughs) If life gave you lemons—what would you make? Lemonade, margarita, or just return them?</p>
            <p><strong>Indrajit:</strong> Lemonade. Something for everyone to enjoy.</p>

            <p><strong>Devika:</strong> That’s perfect. This was such a fun conversation! Is there anything you’d like to add that we missed?</p>
            <p><strong>Indrajit:</strong> Nothing at all. You did a brilliant job with this interview. I’m genuinely looking forward to watching this episode.</p>

            <p><strong>Devika:</strong> Thank you so much! We’ll definitely keep you in the loop on everything.</p>
            <p><strong>Indrajit:</strong> Absolutely. Looking forward to it. Bye!</p>

            <p><strong>Devika:</strong> Bye!</p>
          </Container>
            </Card.Body>
       
    </>
  );
};

export default Indrajit;
