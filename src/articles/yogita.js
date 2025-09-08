import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const Yogita = () => {
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
              If you don’t care for your mind and body, you can’t care for your child either.
              </q>{" "}
              – <strong>Yogita Aggarwal</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/yogitaArticle.png" // <-- second image here
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
    href="https://youtu.be/pSwAvBBWTlU?si=jUKmDoTJEHJIXexq"
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
    window.open("https://youtu.be/pSwAvBBWTlU?si=jUKmDoTJEHJIXexq", "_blank");
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
    window.open("https://youtu.be/pSwAvBBWTlU?si=jUKmDoTJEHJIXexq", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://youtu.be/pSwAvBBWTlU?si=jUKmDoTJEHJIXexq"
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
      src="/yogitaConvo.jpg" // replace with your image path
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
            In a world that celebrates hustle, Yogita Aggarwal reminds us of the magic in slowing down. A content creator, mother, blogger, author, and entrepreneur — Yogita’s journey is anything but linear, and yet it flows with grace. In this heartfelt conversation with Devika Majumder, Co-founder of Global Influencers Hub, she opens up about her childhood joys, the spontaneous rise of her influencer career, mom-life meltdowns, viral reels, the power of gratitude, and the quiet courage it takes to grow at your own pace. What unfolds is not just the story of an influencer, but of a woman who leads with honesty, connection, and a lot of chai.
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
      src="/vaidehiArticleVideo.mp4"
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
              

    <p><strong>Devika Majumder:</strong> Hi Yogita, welcome to Global Influencers Hub! Here, we love diving into the life journeys of influencers — not just the content but the person behind it. And we’re so excited to explore yours. Let’s start right at the beginning — childhood.</p>
            <p><strong>Yogita Aggarwal:</strong> Oh my God!</p>

            <p><strong>Devika:</strong> Yes — that’s where it all starts, doesn’t it?</p>
            <p><strong>Yogita:</strong> I guess you're right. [smiles] Yes, that’s the origin of it all.</p>

            <p><strong>Devika:</strong> So, tell us — what was little Yogita like?</p>
            <p><strong>Yogita:</strong> Well, I wasn’t expecting this! But I love it. I’d say I was a bright child. People loved being around me, and I had a lot of friends. I wasn’t the kind who got 99 out of 100, but I was definitely in the merit list. I was that child who participated in everything — studies, fun, mischief. I got scolded at times too, but I think I had a well-balanced childhood.</p>

            <p><strong>Devika:</strong> That sounds like a very full and expressive early life. Was there anyone who deeply influenced you back then?</p>
            <p><strong>Yogita:</strong> Back then, not really consciously. But today, when I look back — it’s my mother. She’s such a strong woman. She's been through so much and handled everything with grace. I think a lot of who I am today is a reflection of her. She’s my biggest inspiration.</p>

            <p><strong>Devika:</strong> That’s beautiful. So, walk us through your journey after childhood. What happened next? What shaped your path?</p>
            <p><strong>Yogita:</strong> Honestly, my only life mantra has always been — go with the flow. Even back in 9th or 10th grade, when most girls were busy dreaming about boyfriends or wedding outfits, I wasn’t there mentally. I never worried too much about the future. I just took life one step at a time, trusted the moment, and somehow things just kept unfolding in the most surprising ways.</p>

            <p><strong>Devika:</strong> So you were truly living, not overplanning or overthinking?</p>
            <p><strong>Yogita:</strong> Exactly. I wasn’t planning much at all. And now, when I look back, I feel proud. Sometimes families argue or stress over things that may never even happen. I’m glad I didn’t get trapped in all that.</p>

            <p><strong>Devika:</strong> So true. We often get stuck in that loop of overplanning and miss the now. Now switching gears, your content covers everything from fashion to parenting. You have a very diverse audience. How did it all come together? Was there an “aha” moment?</p>
            <p><strong>Yogita:</strong> So, it actually started with digital marketing — that’s where I began. Then I moved into blogging. From there, it naturally flowed into social media. And honestly, as a girl, I’ve always loved jewellery, dressing up, putting on lipstick in the office washroom — you know what I mean? [laughs] After I got married and became a mother, parenting content was not something I planned — it just happened. I started clicking pictures of my daughter, sharing my experiences as a new mom, and people began relating to it. That’s how the transition happened. It was natural.</p>

            <p><strong>Devika:</strong> So, what inspired you to become a fashion and lifestyle creator?</p>
            <p><strong>Yogita:</strong> I think I’ve always had people ask me for advice or admire my choices, whether it was fashion or products. Also, I’ve always been fascinated by the internet. In fact, I remember in school — in 8th grade — when we first got a computer lab...</p>

            <p><strong>Devika:</strong> Ah, yes, those bulky CRT computers!</p>
            <p><strong>Yogita:</strong> Exactly! And I remember being so fascinated. That was my first introduction to the internet and computers. Even back then, I knew I’d do something with the internet. I didn’t know what, but I just knew it was going to be a part of my life.</p>

            <p><strong>Devika:</strong> You literally manifested your journey!</p>
            <p><strong>Yogita:</strong> I guess I did. I just kept taking small steps, and slowly, things started aligning on their own.</p>

            <p><strong>Devika:</strong> So what’s your favourite kind of content to create now? Reels, blogs, photo shoots?</p>
            <p><strong>Yogita:</strong> I really enjoy making reels and doing photo shoots. Before marriage, I used to do a lot of photo shoots — back when static images were the main form of content. Now, video is everything. I still write blogs occasionally, but people have largely moved to Instagram and YouTube for content. But blogging gave me beautiful memories and amazing opportunities I’ll always be grateful for that part of my journey.</p>

            <p><strong>Devika:</strong> And even now, your content, whether it’s video or reels, still carries your voice.</p>
            <p><strong>Yogita:</strong> Yes. Especially when I create content where I’m talking about personal experiences, no brand collaborations, no scripts, just me being me. People might judge you for it, but it’s authentic. It’s who I am. And I think that’s what people connect with.</p>

            <p><strong>Devika:</strong> Absolutely. Staying authentic — that’s the true superpower of being a content creator.</p>
            <p><strong>Yogita:</strong> Totally agree.</p>

            <p><strong>Devika:</strong> So tell me, who’s your ultimate fashion or lifestyle icon?</p>
            <p><strong>Yogita:</strong> I actually love following Bollywood fashion. Deepika Padukone is one of my biggest inspirations. In fact, I recently recreated one of her looks — even though she’s so effortlessly chic and graceful, I still dared to go for it! Then there’s Sushmita Sen — she’s incredibly elegant and I connect deeply with her mindset. And Vita Wallen — the way she drapes sarees and carries herself? Oh my God. She’s pure grace. So yes, I draw a lot from Bollywood — I love creating looks inspired by that vibe.</p>

            <p><strong>Devika:</strong> I love that! You bring that glam in such a relatable, grounded way. Now shifting from glam to giggles (and sometimes tears) — let’s talk about mom life. Parenting content is a big part of your feed. Tell us about the reality — the magic and the madness.</p>
            <p><strong>Yogita:</strong> Honestly, motherhood is just that — magical and messy at the same time. It’s beautiful, but it’s also tiring. Overwhelming. There are moments where you end up crying because you feel like you’ve done something wrong — maybe you scolded your child, or didn’t spend enough time with them.But then, your child gives you a tight hug or says something sweet, and it just melts everything.
Those little moments… they make it all worth it.
</p>
<p><strong>Devika:</strong> Couldn’t agree more. So how has motherhood changed you?</p>
            <p><strong>Yogita:</strong> Motherhood taught me not to stress so much. It’s okay if I’m not a “perfect” mom. It’s okay if I lose patience sometimes. Gentle parenting is great, but we’re human. Every mother’s journey is unique. There’s no universal rulebook. Now I’m learning to go slow… to not panic… to simply enjoy these fleeting little moments.</p>

            <p><strong>Devika:</strong> Beautifully said. Now tell us — three parenting hacks you swear by?</p>
            <p><strong>Yogita:</strong> You’ll notice a pattern — I already said this, but number one: Go slow. Don’t hurry your child’s milestones — or your own. My daughter is moving to first grade soon, and I’m nervous. She’ll leave at 7 AM and return at 4 PM — such a long day! I know I’ll get more time for myself, but I’ll also miss her. So second: Be present and grateful. We often forget to appreciate the now, especially during tough times. And third: Take care of yourself. If you’re kind to yourself, you’ll naturally be kind to your child. When I started giving myself a little space and compassion, I could parent better.</p>

            <p><strong>Devika:</strong> That’s such an important reminder — gentleness starts with ourselves.</p>
            <p><strong>Yogita:</strong> Yes. We moms tend to beat ourselves up constantly — “I didn’t do this, I failed at that…” but it doesn’t work that way. It’s not sustainable.</p>

            <p><strong>Devika:</strong> 100%. So tell me, does your daughter give you feedback on your content?</p>
            <p><strong>Yogita:</strong> Sometimes! She doesn’t really critique, but she enjoys watching some of the content. Once in a while, she’ll say “Mama, this is nice!” She even wants to be part of reels and shorts sometimes. But she’s still young — so I don’t take it too seriously. It’s just fun.</p>

            <p><strong>Devika:</strong> And the big parenting question — screen time: yes or no?</p>
            <p><strong>Yogita:</strong> I’ll be honest — yes, she does have screen time. We try to control the kind of content she watches, make sure it’s age-appropriate. But we can’t eliminate it. Especially during vacations, when we don’t have extended family around — no dadi, chachi, or nani nearby to engage her — it becomes challenging. You can’t play with them all day. And when your kid wakes up at 6 AM shouting, “Play with me!” while you just want to sleep… Yeah. Sometimes, extra screen time happens. And that’s okay.</p>

            <p><strong>Devika:</strong> You’re so right, Yogita — go slow, don’t overthink every detail. There’s such beauty in that simplicity. Now tell us about your book — “It’s Time to Say Thank You.” By the way, I absolutely love the title. It’s beautiful. What’s the story behind it?</p>
            <p><strong>Yogita:</strong> Thank you! Honestly, the book happened because of Dhruvika, my daughter. I never imagined myself as an author. But like I always say — go with the flow. I noticed something. Despite being surrounded by toys, books, outings, and love, she’d still say, “I want something new!” every time we stepped out. And I thought — she’s such a blessed child, and yet, this feeling of wanting more kept surfacing. So I began singing her a little bedtime song, reminding her to be grateful for all she had. That’s how “It’s Time to Say Thank You” came to life. It was initially a night routine — thanking the universe for food, family, toys, school, and teachers. And one night, while on vacation, my husband and daughter were fast asleep, and I was just up, reflecting. I thought, if every parent wants their child to practice gratitude… why not turn this song into a book?</p>

            <p><strong>Devika:</strong> That is so heartwarming. Such a simple yet powerful idea. It’s the kind of book every child (and adult!) needs. So… anything next on the writing front?</p>
            <p><strong>Yogita:</strong> I’m not sure. [laughs] But I’ve actually written a few poems — or kavitas, as we say—for Dhruvika. In fact, while “It’s Time to Say Thank You” is special, there’s another rhyme she’s obsessed with now!</p>

            <p><strong>Devika:</strong> Oh, do tell!</p>
            <p><strong>Yogita:</strong> It’s a family rhyme I made up one night. It goes: “Tall Baba, Tall Baba, what do you see? I see the Short Dadi looking at me. Short Dadi, Short Dadi, what do you see? I see the naughty Cheeku giggling at me…” It’s got the whole family in it. And she’s addicted to it now. She wants me to sing it every night!</p>

            <p><strong>Devika:</strong> That is the cutest thing ever. You’re clearly a natural writer. And what a creative, loving way to bond with your child.</p>
            <p><strong>Yogita:</strong> Thank you! I genuinely enjoy writing. It comes from the heart. I don’t force it. Let me share something — back in 2014 or 2015, I wrote a blog titled “If You Could Reinvent the Earth” — and it won me a ₹1 lakh pass to the India Today Conclave!</p>

            <p><strong>Devika:</strong> Wow — that’s amazing! Congratulations!</p>
            <p><strong>Yogita:</strong> Thank you. That moment made me realize the power of words. That maybe, just maybe, writing is part of my purpose. It’s how I express myself. And it’s how I might influence others.</p>

            <p><strong>Devika:</strong> I absolutely believe that. You don’t just write — you connect. And I feel like that’s the real purpose — whether through content, books, or rhymes. Now, what would you say to other mothers out there, juggling parenting, work, and identity?</p>
            <p><strong>Yogita:</strong> I’d say: take it slow. Be grateful. And please take time for yourself. People might call it selfish, but I believe — if you don’t care for your mind and body, you can’t care for your child either. There’s this outdated idea that once you become a mom, you don’t matter. But your happiness matters. Because when you’re happy and centered, you become a better mother, partner, and person.</p>

            <p><strong>Devika:</strong> That’s so important to normalize. Self-care isn’t selfish. It’s necessary.</p>
            <p><strong>Yogita:</strong> Exactly. And honestly, it’s okay to want joy for yourself. It’s okay to pursue dreams — to write, to create, to rest. That’s something every mother deserves.</p>

            <p><strong>Devika:</strong> So now tell me — what’s your idea of success?</p>
            <p><strong>Yogita:</strong> Hmm… I haven’t achieved it yet. [laughs] Like I said, I don’t plan too much. I go with the flow. But if I had to define it — success, for me, is adding value to someone’s life. Whether it’s through my content, my products, or my words — if I can bring a little happiness or make someone feel seen, that’s success.</p>
            <p><strong>Devika:</strong> I love that. So authentic. So you. Thank you, Yogita, for being so open, grounded, and real. You’re not just influencing through content — you’re touching lives.</p>

<p><strong>Devika:</strong> Yogita, you wear so many hats — from content creator to author, entrepreneur, and blogger. There’s Fab, Let Us Publish, Dream Tech… how do you manage it all?</p>
<p><strong>Yogita:</strong> So I actually run three blogs: DreamTechy.com, LetUsPublish.com, and what started as Fab is now HeSheAndBaby.com. Blogging is slower these days, but I still post when I feel inspired. My main focus now is Instagram, a little YouTube, my book, and my jewellery brand.</p>

<p><strong>Devika:</strong> Oh, really? Tell us more!</p>
<p><strong>Yogita:</strong> It’s called “My First Love by Yogita.” Jewelry has always been my first love. We’re live on Amazon, growing slowly. I design anti-tarnish stainless steel jewelry — durable, affordable, and loved by customers who often return for more.</p>

<p><strong>Devika:</strong> That’s wonderful. I’m a jewellery junkie myself — I have to check out your collection!</p>
<p><strong>Yogita:</strong> Please do! I add little surprises — handwritten notes, tiny candies. Small touches create joy.</p>

<p><strong>Devika:</strong> I love that. It’s about creating a feeling, not just a product.</p>
<p><strong>Yogita:</strong> Exactly.</p>

<p><strong>Devika:</strong> Do you have a message for other women entrepreneurs?</p>
<p><strong>Yogita:</strong> Yes. Go slow. Be gentle with yourself. Be grateful. I’m at peace with my pace, letting go of negativity, and realigning life.</p>

<p><strong>Devika:</strong> That’s powerful. Letting go is one of the hardest — and most freeing — things to do.</p>
<p><strong>Yogita:</strong> Absolutely. I’m learning to release and realign. Life becomes lighter that way.</p>


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
          Rapid Fire with Yogita
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
            src="/yogitaArticleVideo.mp4" // <-- use your vertical video file
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












<p><strong>Devika:</strong> And now for a fun wrap-up — rapid fire?</p>
<p><strong>Yogita:</strong> Let’s go!</p>

<p><strong>Devika:</strong> Coffee or green tea?</p>
<p><strong>Yogita:</strong> Chai. Always tea.</p>

<p><strong>Devika:</strong> One word that describes Yogita in 2025?</p>
<p><strong>Yogita:</strong> Grateful.</p>

<p><strong>Devika:</strong> One thing you never leave home without?</p>
<p><strong>Yogita:</strong> My phone!</p>

<p><strong>Devika:</strong> One mistake you think new influencers make?</p>
<p><strong>Yogita:</strong> Honestly, they’re smart. They’re learning and adapting quickly.</p>

<p><strong>Devika:</strong> Any myth you’d like to bust about influencer life?</p>
<p><strong>Yogita:</strong> That it’s all amazing and easy. We struggle, hustle, and cry behind the scenes. Please be kind to creators.</p>

<p><strong>Devika:</strong> Now, your parenting mantra — is it still “take it slow”?</p>
<p><strong>Yogita:</strong> 100%. Also — it’s okay to ask for help. Let your partner step up. Don’t carry it all.</p>

<p><strong>Devika:</strong> What was the last thing you Googled?</p>
<p><strong>Yogita:</strong> Jewelry wholesalers for a new collection. [laughs]</p>

<p><strong>Devika:</strong> A kids' show you secretly enjoy?</p>
<p><strong>Yogita:</strong> Taarak Mehta Ka Ooltah Chashmah. My daughter loves it, and I enjoy it too.</p>

<p><strong>Devika:</strong> If someone had to write a book about you — what would the title be?</p>
<p><strong>Yogita:</strong> “Chaotic.” Messy, real, but beautiful.</p>

<p><strong>Devika:</strong> Let’s talk a bit about your social media journey. What’s it been like?</p>
<p><strong>Yogita:</strong> Social media has been kind, but growth isn’t linear. I try to create relatable, entertaining, or educational content. Algorithms make it tough, but I adapt.</p>

<p><strong>Devika:</strong> Funniest DM you’ve received?</p>
<p><strong>Yogita:</strong> Random uncles saying, “You’re beautiful” or “Will you go out with me?” I just laugh.</p>

<p><strong>Devika:</strong> And any DM that really touched your heart?</p>
<p><strong>Yogita:</strong> Whenever someone says they relate to my parenting posts — that means the most.</p>

<p><strong>Devika:</strong> Anything else you’d like to share?</p>
<p><strong>Yogita:</strong> This conversation brought back so many memories — like picturing myself in my school uniform. I love that Global Influencers Hub honors journeys, not just highlight reels.</p>

<p><strong>Devika:</strong> Exactly! That’s the heart of this platform. So what message do you have for Global Influencers Hub?</p>
<p><strong>Yogita:</strong> I’m so excited. It reminds me of the Indiblogger days. Please create that community energy again — summits, meet-ups, tea parties!</p>

<p><strong>Devika:</strong> Funny you say that — we are planning an Influencers Summit in December! You’ll be part of it.</p>
<p><strong>Yogita:</strong> That’s amazing. Meeting people in person is a whole different energy. Online is filtered — real conversations over real chai are unmatched.</p>

<p><strong>Devika:</strong> Yogita, thank you so much for this heartfelt, honest conversation. Your journey is inspiring because it’s real. We’ll keep you posted on the summit!</p>
<p><strong>Yogita:</strong> Thank you, Devika. This felt like chatting with a friend, not an interview. Thank you for reminding me how far I’ve come.</p>

<p><strong>Devika:</strong> You’ve come so far — and the best is yet to come.</p>
<p><strong>Yogita:</strong> Oh, that was wonderful. Thank you so much, Devika. And thank you to everyone at Global Influencers Hub. Lots of love!</p>

<p><strong>Devika:</strong> Take care, Yogita, and thank you for sharing your beautiful journey. Until next time — bye!</p>

      









           
           
    </Container>
           
            </Card.Body>
          
    </>
  );
};

export default Yogita ;
