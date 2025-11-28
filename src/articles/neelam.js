import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const Neelam = () => {
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
              Don’t be afraid to try — even the best chefs have burnt a few dishes and had bad days.
              </q>{" "}
              – <strong>Neelam Agarwal </strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/neelamArticle.png" // <-- second image here
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
    href="https://youtu.be/vsPj3Cf0g9M"
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
    window.open("https://youtu.be/vsPj3Cf0g9M", "_blank");
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
    window.open("https://youtu.be/vsPj3Cf0g9M", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://youtu.be/vsPj3Cf0g9M"
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
      src="/neelamConvo.jpg" // replace with your image path
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
            Some people follow recipes — and some create memories. Neelam Agarwal belongs to the rare kind who does both. With her signature warmth and effortless authenticity, she has turned simple home cooking into an experience that touches hearts beyond the kitchen. Her food isn’t just about taste; it’s about stories, emotions, and the love that simmers quietly in every meal.
In an open and laughter-filled chat with DevikaMajumder, Co-founder of Global Influencers Hub, Neelam shares the flavors that shaped her — from quirky food combos and nostalgic family traditions to her dreams of launching a cookbook with her name on it. She speaks not like a “content creator,” but like a friend who invites you to her kitchen table, reminding you that joy often lies in the simplest of spices.
This isn’t a story about fame or followers — it’s about finding happiness in doing what you love, staying grounded in your roots, and serving life, one soulful recipe at a time.




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
    <p><strong>Devika Majumder:</strong> Hi Neelam, welcome to Global Influencers Hub! Here, we explore the life journeys of social media influencers — and we can’t wait to dive into yours.</p>

          <p><strong>Neelam Agarwal:</strong> Hi Devika!</p>

          <p><strong>Devika:</strong> Let’s take you right back to your childhood. How was Neelam as a child?</p>

          <p><strong>Neelam:</strong> (laughs) Do you want me to be completely honest?</p>

          <p><strong>Devika:</strong> Absolutely! This is just a fun conversation.</p>

          <p><strong>Neelam:</strong> Well, I was a very naughty kid! Among all the siblings, my elder sister was the serious, studious one, and I was the complete opposite — full of life, drama, and fun. I even used to help my father with his business. But overall, I was the dramebaaz and fun-loving one in the family — always laughing, always up to something mischievous!</p>

          <p><strong>Devika:</strong> (laughs) That’s adorable! So, what happened after that — after school?</p>

          <p><strong>Neelam:</strong> After school came college, of course. But if you’re talking about my journey — well, childhood was all fun and play, but as I grew up, things started to change. My elder sister was expected to become a doctor, and since I come from a Marwari family, everyone assumed I’d get married early — around 20 or 21. So while my sister was busy studying, my family started preparing me for marriage — teaching me how to cook, how to run a household, all those “necessary” skills. But destiny had a different plan. Somehow, I got into finance. I did my MBA and began my corporate career, working in finance for about 15 years.</p>

          <p><strong>Devika:</strong> That’s such an interesting turn! What came next?</p>

          <p><strong>Neelam:</strong> Then came COVID — and my second daughter! I took a break from work, and during that time, everyone was experimenting with something new — from baking to photography. It was that “let’s-try-everything” phase for everyone.</p>

          <p><strong>Devika:</strong> Exactly! People really started exploring new sides of themselves during that time.</p>

          <p><strong>Neelam:</strong> Yes! I started clicking food pictures just for fun, and I had no idea I would end up loving it so much. That’s how my journey with food photography began. Whenever I shared food photos online, people would ask for recipes. So naturally, that led me to creating food reels — and that’s where it all took off. Everything happened organically. From learning how to hold a camera, to understanding natural lighting, setting up a tripod — everything was self-taught. Over the last two to three years, it’s been a constant process of learning, experimenting, and growing.</p>

          <p><strong>Devika:</strong> Wonderful! And that’s the beauty of it — when you enjoy the journey itself.</p>

          <p><strong>Neelam:</strong> Absolutely!</p>

          <p><strong>Devika:</strong> Now tell me — what’s your earliest memory in the kitchen?</p>

          <p><strong>Neelam:</strong> My earliest memory is of my mom in the kitchen. She used to cook for everyone, and my only job was to serve food to my father and brother. (laughs) We lived in a joint family, so honestly, I didn’t do much cooking myself — it was mostly my mom, chachi, and mami who handled everything. But I always admired how my mom presented food. Even without fancy crockery or ingredients, she would make a simple thali look beautiful. That simplicity — creating magic with minimal resources — has always stayed with me.</p>

          <p><strong>Devika:</strong> That’s such a lovely image. So, were you the kind of student who shared her lunchbox, or did you guard it?</p>

          <p><strong>Neelam:</strong> (laughs) Oh, I was 100% a lunchbox sharer! Sharing tiffins was the highlight of school life — “What did you bring today?” “Let’s swap!” It was such a fun ritual. Since I belonged to a Marwari business family, our tiffins were always packed with fresh, garam-garam food from home. But because we got it every day, it didn’t feel special. So, we would happily exchange tiffins with friends — “Tum hamara le lo, hum tumhara lete hain!”</p>

          <p><strong>Devika:</strong> (laughs) Oh yes, I totally get that! My mom also packed the same things every day. Sharing tiffins made school lunches so much more exciting.</p>

          <p><strong>Neelam:</strong> Exactly! At our home, it was a tradition — my dad always had hot breakfast before leaving for work, so parathas were a must. We would get the same in our tiffins too. But some of my friends brought bhindi, samosas, or other snacks — and that’s where the fun began! There’s even a story my friend still tells everyone. Apparently, whenever he brought bhindi, I used to finish his entire tiffin! I honestly don’t remember it, but he still laughs and says, “Neelam used to finish my bhindi every single time!”</p>

          <p><strong>Devika:</strong> (laughs) That’s hilarious! So, if someone had asked you in childhood what you wanted to become when you grew up — what would your answer have been?</p>

          <p><strong>Neelam:</strong> Definitely not a cook! (laughs) For us, food was just a part of daily life — not something you’d ever think of building a career around. When I was young, my chachi was a Chartered Accountant — she had married into our family. I remember seeing her in beautifully draped cotton saris, holding a file, heading to the office with such confidence. That image inspired me deeply. I dreamt of becoming like her — dressing professionally, carrying a file or a diary, and walking into an office with purpose. So yes, my childhood dream was to work in the corporate world — to be that confident, well-dressed professional woman.</p>

          <p><strong>Devika:</strong> That’s such a vivid picture — and so inspiring! Now, tell me — do you remember any funny kitchen disaster that your family still teases you about?</p>

          <p><strong>Neelam:</strong> (laughs) Oh, plenty! But one that everyone still remembers was during a panipuri evening. It’s our family’s favorite snack. That day, I announced, “I’ll make the pani today!” I wanted it to be super chatpata, so I used tamarind — and thought the more I add, the better it’ll taste. Big mistake! It turned out so tangy that no one could eat even one panipuri! (laughs) Everyone still jokes about it. Even today, if I say, “I’ll make panipuri,” they go, “Please, Neelam, no need! Let someone else make it!”</p>

          <p><strong>Devika:</strong> (laughing) That’s priceless! Every family has at least one such unforgettable kitchen story. So was there a turning point? That moment when you felt — this is more than a hobby? When did you actually start enjoying it — was it during the Covid times?</p>

          <p><strong>Neelam:</strong> You can say yes, around that time. I was still working then, managing my job, taking care of my younger one — she was about one and a half years old — and doing food photography on the side. I really enjoyed that part. But when I started creating reels, I realized how difficult it was to keep up with the corporate world at the same time. Consistency is very important on Instagram, or on any social platform for that matter, and it was becoming tough to balance everything. When I was on sabbatical, my husband told me, “If you want, you can extend your break.” I had just finished my sabbatical and rejoined my corporate job, but I was constantly juggling between three things — family, work, and this growing passion for photography and videography. After six months, he said, “You really need to decide whether this is just a hobby or something you truly want to pursue.” So I took another break. Thankfully, my boss was very understanding. He said, “Go ahead and give it a try for one year. If it doesn’t work out, you can always come back.”</p>
          <p><strong>Devika:</strong> That’s really supportive!</p>

<p><strong>Neelam:</strong> Yes, he was very kind. So, I decided to give it a try. But honestly, that first year went completely unproductive. I was just enjoying the freedom — no deadlines, no pressure. I would shoot once in a while, but it was more like taking a break from work than actually pursuing something seriously.</p>

<p><strong>Neelam:</strong> Then the time came when I had to make a decision — should I go back to the corporate world or continue exploring this path? It was a tough call. Financially, it wasn’t easy. You can imagine someone used to a good salary suddenly earning nothing. But my family was incredibly supportive. They encouraged me to give it a real chance. And gradually, things started falling into place.</p>

<p><strong>Devika:</strong> Fantastic. So that’s when you began sharing your recipes online?</p>

<p><strong>Neelam:</strong> Yes! My first recipe — if I remember correctly — was beetroot juice. I was in this very “healthy living” phase and thought, “Everyone loves healthy recipes, right?” People always say healthy content performs well. I was also trying to lose weight then, so I shared that recipe — a simple, healthy beetroot juice.</p>

<p><strong>Devika:</strong> Very cool! And what happened after that?</p>

<p><strong>Neelam:</strong> I continued posting, but honestly, I wasn’t getting many views initially. It took me quite some time to reach 10K followers. I started feeling disappointed. But my friends and family kept motivating me.</p>

<p><strong>Neelam:</strong> Then one day, I attended an influencer event in Bangalore. One of the creators there had just hit one million followers, and listening to her story really inspired me. She shared that she too had been on the verge of quitting once. A close friend of hers told her, “Start posting every day — no matter what.” That advice changed everything for her.</p>

<p><strong>Neelam:</strong> When I came back from that event, I told myself I’d try the same — post consistently every single day. Within 30 days, my account jumped from 6K to 10K followers. After that, there was no looking back.</p>

<p><strong>Devika:</strong> Wonderful! So the key is to post every day.</p>

<p><strong>Neelam:</strong> Absolutely. Be consistent with your timing and your content. Consistency is everything. Of course, your content should also be something people are genuinely interested in.</p>

<p><strong>Neelam:</strong> For me, the real turning point came when I started sharing tiffin recipes. That’s when things really changed.</p>

<p><strong>Devika:</strong> Oh, really?</p>

<p><strong>Neelam:</strong> Yes! That was just last year. I went from 16K to 300K followers — it was a huge turning point.</p>

<p><strong>Devika:</strong> That’s incredible! Congratulations!</p>

<p><strong>Neelam:</strong> Thank you! What made it even more special was the response I received from mothers. So many of them messaged me saying how helpful my tiffin ideas were. You know, it’s such a daily struggle to decide what to pack for your child’s lunchbox.</p>

<p><strong>Neelam:</strong> Many moms started sending me pictures of their kids’ tiffins, saying, “My child finished everything today!” or “My kid now eats vegetables because of your recipes.” Some even told me their children browse my page in the morning to choose what they want for lunch that day!</p>

<p><strong>Neelam:</strong> That’s when I truly felt like I was helping the community in some way — making a small difference in people’s everyday lives.</p>

<p><strong>Devika:</strong> That’s amazing. Now tell me — what do you enjoy more? Cooking the dish or styling it for Instagram?</p>

<p><strong>Neelam:</strong> (laughs) That’s a tough one! I absolutely love cooking, but presentation matters a lot to me. You can cook the most delicious dish, but if you just put roti and sabzi on a plate and hand it over, it doesn’t create any appeal. Food should be visually inviting — clean, tidy, and aesthetically pleasing.</p>

<p><strong>Neelam:</strong> Colour combinations play a big role too. For example, if I’m making a burger — just a simple aloo patty with bread — it might taste great, but it won’t look exciting. I like to add layers, colours, and textures so that when someone sees it, their first reaction is “Wow!”</p>

<p><strong>Devika:</strong> That’s true — the look of the dish makes you want to eat it.</p>

<p><strong>Neelam:</strong> Exactly. On my page, most of the recipes are simple, everyday dishes — nothing fancy. But the way they’re presented makes all the difference. I have to feel good about it before posting. For me, presentation is everything.</p>

<p><strong>Devika:</strong> I completely agree! Even with food in general — if it looks dull, you don’t feel like checking the recipe or trying it out. But if it’s beautifully presented, it instantly grabs attention. As they say, “Jo dikhtahai, wo biktahai.” (laughs)</p>

<p><strong>Neelam:</strong> (laughs) So true! People always say, “You eat with your eyes first.”</p>

<p><strong>Devika:</strong> Absolutely. One of my friends used to call it “see-food” — like literally, see the food!</p>

<p><strong>Neelam:</strong> (laughs) That’s perfect!</p>

<p><strong>Devika:</strong> So, how do you balance tradition and innovation in your recipes?</p>

<p><strong>Neelam:</strong> Hmm… honestly, for me, it’s not really about balancing. Tradition is always there — it’s the foundation. We’re Marwaris, you know, so we’ve grown up eating the most traditional dishes — besan, chawal, dal — all the basics. But if you ask me to eat just roti and dal every day, I’ll admit, even we get bored of it! It’s comfort food, but you do need some spice in life.</p>

<p><strong>Neelam:</strong> So what I do is — I keep the base traditional but experiment with the form or presentation. For example, one of my most popular recipes is Jowar Tacos — the filling is made with masala chana, and the base is jowar roti. I just cut the roti into small shapes and present it nicely — it becomes a healthy jowar taco! The kids love it.</p>

<p><strong>Neelam:</strong> Similarly, if your child doesn’t want to eat palak paratha, you can make palak pinwheel parathas. The same ingredients — just a creative twist. Kids find it fun, and their tiffins come back empty! So when people ask me how I mix tradition, health, and fusion — I’d say it’s all about innovation.</p>

<p><strong>Neelam:</strong> A lot of this creativity actually came from my elder daughter. She was very picky with food — never finished her tiffin. So, I started experimenting — cutting fruits into fun shapes, making new versions of everyday dishes. My younger one is easy; she eats everything! But my elder one was my real teacher. Because of her, I started being creative with tiffins. We really do learn a lot from our kids — they’re my biggest critics even today!</p>

<p><strong>Devika:</strong> (laughs) That’s so true! Has there ever been a recipe disaster while filming?</p>

<p><strong>Neelam:</strong> (laughs) Oh, not just one — many! Everything looks great in your mind when you plan it. But while shooting, things don’t always go as expected. Recently, I shot a mango crepe. When I tested it earlier with my kids, it came out perfectly. But during the shoot — maybe because of the pressure to get that perfect shot — it just wasn’t working! The crepe kept breaking. Finally, I laughed and said, “Forget it, let’s call it a Mango Pancake instead!” (laughs) It was delicious, just not as thin as a crepe should be.</p>

<p><strong>Devika:</strong> (laughs) That’s the entrepreneurial mindset right there — adapting and moving forward! How was the response?</p>

<p><strong>Neelam:</strong> Oh, people loved it! Surprisingly, it performed really well on Instagram. That recipe was actually shot on my phone after a long break from professional shoots. It wasn’t planned to be perfect — I was shooting all by myself, the setup was minimal — but it ended up doing great.</p>

<p><strong>Devika:</strong> That’s fantastic! So, what’s your favorite type of recipe to create? Comfort food, fusion, desserts?</p>

<p><strong>Neelam:</strong> I’d say a combination of comfort and fusion. Comfort food is very close to my heart — it’s what we crave after a long day. But I also enjoy giving it a twist. So my favorite creations are those that combine the warmth of comfort food with the excitement of fusion.</p>

<p><strong>Devika:</strong> True! Now, your recipes always look so easy and doable. What’s your secret to simplifying food without losing flavor?</p>

<p><strong>Neelam:</strong> My main rule is — cook with what’s already available in your kitchen. Not just mine, but everyone’s. I never want someone to open my reel and think, “Oh no, I don’t have this ingredient.” If a recipe calls for something like avocado and you don’t have it, you might skip trying it altogether.</p>

<p><strong>Neelam:</strong> So I focus on pantry-friendly recipes — simple ingredients, minimal steps, maximum flavor. When someone watches my video, they should feel, “Oh, this is easy. I can make this right now!” It should feel practical and approachable.</p>
<p><strong>Devika:</strong> That’s so relatable. Now tell me — how do you balance health and taste in your recipes?</p>

<p><strong>Neelam:</strong> I think there’s a huge misconception that healthy food is boring. People hear “healthy” and imagine boiled dal or plain tomato-cucumber salads. But that’s not true! Healthy can be delicious — it just needs a bit of innovation.
You don’t have to overload dishes with spices either. Sometimes, just a few basic ingredients can transform a dish. Take rajma, for example. People usually think rajma means rajma chawal. But you can easily make a rajma salad with some chopped veggies — it’s light, healthy, and tasty.
So, yes — health and taste can go hand in hand. It’s all about finding the right balance.</p>

<p><strong>Devika:</strong> Beautifully said. If your recipe style had a personality, what would it be?</p>

<p><strong>Neelam:</strong> (smiles) Definitely Desi Fusion. My food is deeply rooted in Indian traditions — but I love giving it a modern or creative twist. So yes, I’d call it Desi Fusion with a creative soul.</p>

<p><strong>Devika:</strong> Now, for someone who’s scared of the kitchen, what would you suggest to them?</p>

<p><strong>Neelam:</strong> I’d say — start simple. Please don’t begin your kitchen journey by following big chefs or complicated recipes. If you’ve never cooked before, and your first thought is, “Let’s make biryani,” that’s not going to work! (laughs)
Start with baby steps. Begin with something as easy as a sandwich. Let me give you my daughter’s example — my elder one is 13 now, and she can already make sandwiches and dosas.</p>

<p><strong>Devika:</strong> Oh wow, that’s impressive!</p>

<p><strong>Neelam:</strong> Yes! And recently she even learned how to make parathas — proper round ones. (laughs) It took her a few tries though. The first few looked like the map of Australia! But that’s how you learn — with small, confident steps.
So, start simple. Make a sandwich — just bread with a basic filling. When it turns out good, that little appreciation from others gives you confidence. Then move to dal-chawal, or a basic sabzi like aloomatar. Don’t go for complicated dishes right away. Once you start, you’ll realize how therapeutic cooking can be.</p>

<p><strong>Devika:</strong> Oh, I completely agree. Even I went through a phase where I started experimenting with cooking. It really does relax you — you forget about everything else for a while.</p>

<p><strong>Neelam:</strong> Exactly! Cooking is therapy. You stop overthinking, and your focus shifts to creating something. Baking, especially, is my biggest therapy — I absolutely love it.</p>

<p><strong>Devika:</strong> I can imagine! I’ve seen your dessert recipes — they look divine. Now tell me, what’s one thing people don’t realize about being a food content creator?</p>

<p><strong>Neelam:</strong> (laughs) That could be a full one-hour conversation! People often assume it’s just about clicking fancy pictures and posting them online. But behind every post, there’s so much work.
Even if I’m posting 20 recipes a month, that means I’m constantly thinking of new ideas — something different from what others are posting. There’s planning, prepping, shooting, editing, writing captions, engaging with followers — it’s a full-time job.
When you cook a normal sabzi at home, it’s done in 15–20 minutes. But to shoot that same recipe perfectly can take 2–3 hours! Add family responsibilities to that — it’s a lot to juggle. It’s definitely more work than a regular job, but I love it. I enjoy every bit of it, which makes it worth it.</p>

<p><strong>Devika:</strong> Of course, you have to love it to keep doing it! Otherwise, it’s no different from a corporate job.</p>

<p><strong>Neelam:</strong> Exactly! That’s why I left the corporate world in the first place.</p>

<p><strong>Devika:</strong> So what’s your filming setup like? Is it a full studio or more of a minimalist setup?</p>

<p><strong>Neelam:</strong> (laughs) Jugaad! Honestly, it’s a very simple setup. Sometimes I shoot in my kitchen, but most of the time, it’s on my dining table because that’s where I get the best natural light. It might look like a studio setup in my reels, but it’s all done right there in my living room.</p>

<p><strong>Devika:</strong> That’s amazing — so real and relatable. Do you test your recipes with your family and friends before posting them online?</p>

<p><strong>Neelam:</strong> Always! My family is my first feedback panel. They’re brutally honest — if they don’t like something, they’ll say it right away. (laughs)</p>

<p><strong>Devika:</strong> (laughs) Perfect! Now, if your life were a dish, what would you call it and why?</p>

<p><strong>Neelam:</strong> (smiles) Hmm… I think I’d call it Masala Khichdi!</p>

<p><strong>Devika:</strong> (laughs) Why’s that?</p>

<p><strong>Neelam:</strong> Because there’s so much happening all at once — family, work, creativity, chaos, love, challenges — all mixed together. So yes, definitely Khichdi!</p>

<p><strong>Devika:</strong> (laughs) True! Khichdi it is!</p>

<p><strong>Devika:</strong> Now, if you had to invite three chefs to a potluck dinner, who would they be — and what would you want them to bring?</p>

<p><strong>Neelam:</strong> Oh, this is interesting! First would definitely be Chef Sanjeev Kapoor. He’s been my inspiration since childhood — his TV shows were a big part of my growing-up years. Recently, I even saw him live at an event, and it was such a surreal moment. Imagine meeting someone you’ve admired since you were little!
I’d ask him to bring his Dal Makhani. It’s rich, flavorful, and classic — just like him. And I’d love to watch how he presents it too — his presentation skills are unmatched.</p>

<p><strong>Devika:</strong> Absolutely. I’m sure you’d be studying his presentation closely! (laughs)</p>

<p><strong>Neelam:</strong> (laughs) Of course! I’d be taking notes.
My second guest would be Pankaj Bhadouria — the first MasterChef India winner. She has such a graceful, motherly aura — so composed and elegant. Her recipes have warmth and creativity, and her wraps are amazing. I’d definitely ask her to bring those!
And the third person — she’s not a celebrity chef, but she’s the most important one in my life — my mom. Everything I’ve learned about cooking began with her. So she has to be there.</p>

<p><strong>Devika:</strong> Aww, that’s beautiful. You’ve clearly been inspired by her for a long time.</p>

<p><strong>Neelam:</strong> Yes, always. She’s my first and forever teacher in the kitchen.</p>

<p><strong>Devika:</strong> What’s a weird food combo that you secretly love?</p>

<p><strong>Neelam:</strong> If I tell you this, people might unfollow me! (laughs) I love McDonald’s fries dipped in chocolate ice cream. I literally dip the fries into the ice cream and have them together.</p>

<p><strong>Devika:</strong> Oh wow! (laughs) Please, no one’s unfollowing you for this! That actually sounds fun. Everyone has their quirky side — that’s what makes you unique. So tell me, how does it taste?</p>

<p><strong>Neelam:</strong> Really good! You should give it a try sometime.</p>

<p><strong>Devika:</strong> I can imagine!</p>

<p><strong>Neelam:</strong> There’s another weird combo too — a very Marwari one. Back at home, we used to have chai with bhujiya. You just put bhujiya inside your hot tea and eat it with a spoon. It sounds strange, but it’s delicious.</p>

<p><strong>Devika:</strong> Wow, that’s a new one! So now we have two weird combos! (both laugh)</p>

<p><strong>Neelam:</strong> Yes! The second one, many Marwaris might already know, but the first one — I think that’s just me.</p>

<p><strong>Devika:</strong> (laughs) When I first came to India after living in the US for a while, my husband used to eat muri — you know, puffed rice — with full gravy curry. I used to find that so strange! I never dared to try it.</p>

<p><strong>Neelam:</strong> Oh my God, that would be completely soggy!</p>

<p><strong>Devika:</strong> Exactly! But he would say, “That’s how we eat it where I come from.” People have such fascinating food combinations!</p>
<p><strong>Neelam:</strong> Yes! You must tell him to try chai with bhujiya next time. (laughs)</p>

            <p><strong>Devika:</strong> (laughs) I will! Now, if you had to describe your cooking style in three words?</p>

            <p><strong>Neelam:</strong> Comfort. Simple. Presentable.</p>

            <p><strong>Devika:</strong> Okay, now imagine this — you have only 15 minutes to cook something. What would you make?</p>

            <p><strong>Neelam:</strong> Easy! I’d make a grilled paneer or chicken steak with a yogurt dip and a side salad. Quick and satisfying.</p>

            <p><strong>Devika:</strong> Lovely! Now if you’re homesick, what’s your go-to comfort meal?</p>

            <p><strong>Neelam:</strong> Definitely khichdi — hot, steamy khichdi with a dollop of ghee and papad on the side. That’s all I need.</p>

            <p><strong>Devika:</strong> Classic! And if you had to impress someone with your cooking?</p>

            <p><strong>Neelam:</strong> Dal Baati! If it’s family or friends, it has to be Dal Baati. I even posted a reel about it recently. But honestly, being from a Marwari family raised in U.P., I also love Litti Chokha. So I often make a mix — Litti Chokha, Choorma, Dal, and spicy garlic chutney. Whoever comes home gets this full combo, and trust me, they’re always impressed!</p>

            <p><strong>Devika:</strong> That sounds divine — especially that garlic chutney!</p>

            <p><strong>Neelam:</strong> Oh, it’s amazing! I roast the garlic on flame, add red chili, coriander, and a few spices — it’s so flavorful.</p>

            <p><strong>Devika:</strong> Sounds incredible. Now, if your cooking journey were a Bollywood movie, what would it be called?</p>

            <p><strong>Neelam:</strong> Andaz Apna Apna! (laughs) It’s my all-time favorite movie — fun, chaotic, and full of flavor, just like my kitchen.</p>

            <p><strong>Devika:</strong> (laughs) Love that! And what would your dream cookbook be titled?</p>

            <p><strong>Neelam:</strong> What’s in the Box?</p>

            <p><strong>Devika:</strong> That’s such a fun title! Any plans of actually writing a book soon?</p>

            <p><strong>Neelam:</strong> Yes, I’m planning to. I’m giving myself about six more months — after that, I’ll be launching my cookbook.</p>

            <p><strong>Devika:</strong> Amazing! Now tell us about your social media — is there a particular DM that has stayed with you?</p>

            <p><strong>Neelam:</strong> Oh, there are many beautiful messages, but one that truly touched me was from a lady in the UK. She wrote, “Neelam, I usually don’t follow many people on Instagram, but I found your page and my seven-year-old, who never finishes his tiffin, now brings it back empty!” She said my recipes were so easy, healthy, and fun that even they started making them for breakfast. Messages like that — especially from mothers — really motivate me.</p>

            <p><strong>Devika:</strong> That’s so heartwarming. It must feel wonderful knowing your content is helping families and kids eat better.</p>

            <p><strong>Neelam:</strong> Absolutely. That’s the real reward — to know that what I share makes a difference.</p>

            <p><strong>Devika:</strong> Beautiful. So what’s next for Neelam Agarwal?</p>

            <p><strong>Neelam:</strong> First, the cookbook. But beyond that, I don’t want to limit myself to just Instagram. I want to expand across platforms and eventually create something under my own name — something personal, meaningful, and impactful. Let’s see where this journey leads.</p>

            <p><strong>Devika:</strong> Wonderful! I’m sure it’ll be amazing.</p>

            <p><strong>Neelam:</strong> Thank you so much!</p>

           
            
           

            
            
            
            
            
            
    



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
          Rapid Fire with Neelam
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
            src="/neelamRapid.mp4" // <-- use your vertical video file
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



    <p><strong>Devika:</strong> Let’s jump into a fun rapid fire round!</p>

            <p><strong>Neelam:</strong> Sure, let’s go!</p>

            <p><strong>Devika:</strong> Spicy tooth or sweet tooth?</p>
            <p><strong>Neelam:</strong> Spicy cravings, any day!</p>

            <p><strong>Devika:</strong> One ingredient you’re currently obsessed with?</p>
            <p><strong>Neelam:</strong> Coriander leaves — dhaniya! It has to be everywhere. Dhaniya everywhere!</p>

            <p><strong>Devika:</strong> (laughs) The last thing you Googled?</p>
            <p><strong>Neelam:</strong> “How to present yourself for a podcast.”</p>

            <p><strong>Devika:</strong> (smiles) That’s a good one! Okay, chai with biscuits or chai with pakoras? Although I already know you’re a chai-with-bhujiya person!</p>
            <p><strong>Neelam:</strong> (laughs) True! But if I have to pick, then chai with biscuits.</p>

            <p><strong>Devika:</strong> A dish you can make blindfolded?</p>
            <p><strong>Neelam:</strong> Chai! Of course.</p>

            <p><strong>Devika:</strong> Mountains or beaches?</p>
            <p><strong>Neelam:</strong> Mountains, always.</p>

            <p><strong>Devika:</strong> Your dream collaboration?</p>
            <p><strong>Neelam:</strong> Definitely something with Sanjeev Kapoor.</p>

            <p><strong>Devika:</strong> If you had a cooking superpower, what would it be?</p>
            <p><strong>Neelam:</strong> I’d love to just close my eyes and have all the vegetables chopped exactly how I want! That’s the most time-consuming part of cooking.</p>

            <p><strong>Devika:</strong> (laughs) True, I feel you on that one! One thing that instantly ruins a dish for you?</p>
            <p><strong>Neelam:</strong> Too much salt.</p>

            <p><strong>Devika:</strong> Create a three-word food mantra for yourself.</p>
            <p><strong>Neelam:</strong> Cook. Taste. Burp. (laughs)</p>

            <p><strong>Devika:</strong> (laughs) That’s iconic! One spice you’d marry if you could?</p>
            <p><strong>Neelam:</strong> Garam masala. Without a doubt.</p>

            <p><strong>Devika:</strong> What’s your 3 a.m. craving?</p>
            <p><strong>Neelam:</strong> Chocolate ice cream. My husband and I are partners in crime for this — he has vanilla, and I have chocolate.</p>

            <p><strong>Devika:</strong> Aww, that’s adorable! What’s your food creator green flag?</p>
            <p><strong>Neelam:</strong> For me, it’s transparency. I don’t keep anything to myself. If I know a hack or trick, I’ll share it with my audience. Even in my voiceovers, I mention when an ingredient is optional. A true creator should share knowledge, not gatekeep it.</p>

            <p><strong>Devika:</strong> Absolutely, I love that. Now, one comment that made you laugh out loud?</p>
            <p><strong>Neelam:</strong> Recently, people started calling me “Tiffin Queen”! (laughs) Some even ask if I’ll start making dabbas. In fact, some said I should be called Neelam Dabbewali! I told them the only thing left now is to start a tiffin service. Imagine that movie — The Dabbewali!</p>

            <p><strong>Devika:</strong> (laughs) That’s hilarious! The one recipe you’d serve to impress your childhood self?</p>
            <p><strong>Neelam:</strong> A perfectly baked brownie. When I was growing up in a small town, we never had access to proper pastries or brownies. Now that I can make them myself, my younger self would be so proud.</p>

            <p><strong>Devika:</strong> That’s so sweet. Now, one non-food thing that you’re surprisingly good at?</p>
            <p><strong>Neelam:</strong> Event management! I love hosting parties and organizing events. If not food, I would’ve definitely pursued something in that field.</p>

            <p><strong>Devika:</strong> I can totally see that! Alright, if food is love, what’s your recipe for a happy life?</p>
            <p><strong>Neelam:</strong> Whatever you cook, cook it from the heart. Don’t obsess over measurements or perfection — just cook with happiness. Mann se banao aur mann se khao — that’s my mantra.</p>
            <p><strong>Devika:</strong> I couldn’t agree more. The energy we put into food truly reflects in its taste.</p>

<p><strong>Neelam:</strong> Exactly! If you cook thinking it’s just a task, it won’t come out well. But when you do it joyfully — play music, dance a little, enjoy the process — that’s when magic happens.</p>

<p><strong>Devika:</strong> 100%! Now tell me, what’s your life mantra?</p>

<p><strong>Neelam:</strong> Be happy — genuinely happy. When you’re happy from within, it shows in your work and everything you do. But to stay that way, it’s very important to choose your circle wisely.</p>

<p><strong>Devika:</strong> Absolutely.</p>

<p><strong>Neelam:</strong> Family will always be your biggest support system, but good friends matter too. I’ve had days when I felt so low I wanted to quit everything — and in those moments, my husband and daughters were my biggest cheerleaders. My friends, too, have lifted me up when I needed it most. So yes, choose your friends wisely. They play a very important role in your happiness.</p>

<p><strong>Devika:</strong> That’s such a powerful note.100% Spot on. I love that. And now, if you had to talk to your younger self — say, your 17-year-old version — what advice would you give her?</p>

<p><strong>Neelam:</strong> I’d tell her not to be scared. You will fall, and that’s okay — you just have to try. We often hold ourselves back because we fear failure. But everyone fails. We only see the success stories, not the struggles behind them. Whether it’s a top chef, a player, or anyone successful, they’ve all faced failures — big or small. So don’t be afraid. Try things. Let them go wrong. Try again. Because one day, you will succeed. That’s how we grow — by learning from what didn’t work.</p>

<p><strong>Devika:</strong> That’s such an important perspective — to see failure not as a dead end, but as part of the process.</p>

<p><strong>Neelam:</strong> Exactly. I always say — a failure isn’t really a failure if you’ve learned something from it. As long as you’re learning, you’re growing. I also think we should be more open about these moments — our vulnerabilities, our setbacks, our fears.</p>

<p><strong>Devika:</strong> Yes! Because people often see only the highlights online.</p>

<p><strong>Neelam:</strong> True. Many people look at me and think, “Oh, she’s an Instagram star,” but they don’t see the messy side — the recipes that failed, the ideas that didn’t work. Sometimes a dish turns out to be a complete disaster! But we rarely show that. We only post the perfect pictures. I think it’s important to show the real moments too — because that’s what makes us human, and honestly, that’s what sets us apart.</p>

<p><strong>Devika:</strong> Absolutely. That authenticity is what connects people. Well, Neelam, I had such a lovely time talking to you. I think we’ve wrapped up quite a lot today! If my team has any additional questions or follow-ups — maybe regarding the videos — we’ll reach out to you. But before we end, could you share how your experience was speaking with us at Global Influencers Hub?</p>

<p><strong>Neelam:</strong> Oh, I’d love to! This was actually my first experience doing something like this, and honestly, I was so nervous before we began. I kept thinking, “How will I do this?” But it turned out to be such a comfortable and fun conversation. You made it so easy, Devika — you really made me feel at ease throughout.</p>

<p><strong>Devika:</strong> That means a lot, thank you! I also had such a great time chatting with you — we laughed so much, it felt like talking to a friend.</p>

<p><strong>Neelam:</strong> Exactly! It didn’t feel like an interview at all — more like a friendly chat over chai.</p>

<p><strong>Devika:</strong> Absolutely wonderful. Thank you again, Neelam. We’ll let you know once your interview goes live.</p>

<p><strong>Neelam:</strong> Thank you so much, Devika. It was truly a pleasure.</p>

<p><strong>Devika:</strong> Bye, Neelam!</p>

<p><strong>Neelam:</strong> Bye, bye!</p>

        
            
            
            
            
            
           
            
          
            

            
           
    </Container>
           
            </Card.Body>
          
    </>
  );
};

export default Neelam ;
