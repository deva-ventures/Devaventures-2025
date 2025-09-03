import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const Nishant = () => {
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
              My mantra is simple—keep working, keep moving forward, and embrace what comes your way.
              </q>{" "}
              – <strong>Nishant Kumar</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/nishantArticle.png" // <-- second image here
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
    href="https://youtu.be/Sk07doGfZhw?si=__5mCRSzjoax63oF"
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
    window.open("https://youtu.be/Sk07doGfZhw?si=__5mCRSzjoax63oF", "_blank");
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
    window.open("https://youtu.be/Sk07doGfZhw?si=__5mCRSzjoax63oF", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://youtu.be/Sk07doGfZhw?si=__5mCRSzjoax63oF"
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
      src="/nishantConvo.jpg" // replace with your image path
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
            In the ever-evolving world of finance and education, Nishant Kumar has carved a unique path as a mentor, educator, and content creator. His journey—from being a studious child with a passion for music and theatre to becoming a full-time financial educator—reflects dedication, perseverance, and a keen understanding of the financial world. As the founder of Fintax by Nishant and an instructor at Adda247, he has been instrumental in guiding aspiring professionals toward financial literacy and success. In this engaging conversation with DevikaMajumder, co-founder of Global Influencers Hub, Nishant shares his story, insights, and philosophies that shape his work.
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
      src="/nishantArticleVideo.mp4"
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
                <strong>Devika Majumder:</strong> Hi Nishant, welcome to Global
                Influencers Hub. Here, we explore the journeys of social media
                influencers, and we’re excited to delve into yours. Let’s start
                from the very beginning—your childhood. How were you as a child?
              </p>

              <p>
                <strong>Nishant Kumar:</strong> Well, as a child, I was quite
                studious, but I also had a creative side. I was passionate about
                music and theatre—I played the synthesizer and flute, and I
                actively participated in plays. At the same time, I performed
                well academically, maintaining good grades until about eighth
                grade. However, from ninth grade onward, I got a bit distracted,
                and my grades started slipping. Thankfully, I managed to catch
                up by the time I reached twelfth grade. So, I’d say I was an
                average student with a mix of academic focus and artistic
                interests.
              </p>

              <p>
                <strong>Devika:</strong> That’s an interesting balance! Were
                there any subjects you were particularly drawn to?
              </p>

              <p>
                <strong>Nishant:</strong> Initially, I was deeply interested in
                science, which led me to choose a science stream in my eleventh
                grade, focusing on chemistry, mathematics, and computers. My
                goal was to become a software engineer, so I even prepared for
                JEE and other engineering entrance exams. However, when I didn’t
                secure admission into a top engineering college, I decided to
                switch to commerce. That’s when I pursued a Bachelor of Commerce
                (B.Com) and eventually went on to complete my Chartered
                Accountancy (CA).
              </p>

              <p>
                <strong>Devika:</strong> That’s quite a transition! How was your
                journey through Chartered Accountancy?
              </p>

              <p>
                <strong>Nishant:</strong> CA is quite different from traditional
                degree programs—it’s a self-paced, open learning course. My
                B.Com was also from a distance learning university, so I only
                had to attend college for my exams. The first two levels of CA
                went smoothly, and I cleared them in one or two attempts. I also
                thoroughly enjoyed my three-year practical training, known as
                articleship. However, the final level of CA was quite
                challenging for me, and it took longer than expected to clear.
                Looking back, though, that struggle helped me connect better
                with students when I started teaching. Since I faced difficulties
                myself, I can now relate to and guide aspiring CA professionals
                more effectively.
              </p>

              <p>
                <strong>Devika:</strong> That’s a great perspective! What are
                you currently focused on?
              </p>

              <p>
                <strong>Nishant:</strong> Right now, I’m a full-time educator. I
                teach CA students at Adda247, covering subjects like business
                mathematics, logical reasoning, statistics, and taxation. I also
                run my own company, Fintax by Nishant, where I create
                educational content on stock markets and personal taxation. My
                time is divided between writing books, teaching students, and
                producing finance-related content.
              </p>

              <p>
                <strong>Devika:</strong> That’s fantastic! What does financial
                freedom mean to you?
              </p>

              <p>
                <strong>Nishant:</strong> To me, financial freedom is about
                working not out of necessity but out of passion, knowing that
                even if you don’t earn anything from it, you’ll still be
                financially secure. It also means walking into a store, picking
                up anything you want, and buying it without worrying about the
                price tag. Ultimately, financial freedom is about having the
                ability to pursue your dreams and passions without financial
                constraints.
              </p>

              <p>
                <strong>Devika:</strong> That’s an insightful definition. When
                did you realize you had the ability to guide others toward
                financial freedom?
              </p>

              <p>
                <strong>Nishant:</strong> It all started when a childhood friend
                approached me for investment advice. He was skeptical about
                stock markets, thinking they were pure gambling. I guided him
                through a small investment of ₹10,000, and within a year, he saw
                a 50% return. That was a turning point for me—it made me realize
                that I had a knack for financial education. This led me to
                establish Fintax by Nishant, where I create content to educate
                people about stock markets and personal finance.
              </p>

              <p>
                <strong>Devika:</strong> That’s an incredible story! Between
                taxation and investment, which excites you more?
              </p>

              <p>
                <strong>Nishant:</strong> Both are fascinating in their own
                ways. Taxation is like solving a puzzle—it’s all about legally
                optimizing your tax planning. Investment, on the other hand, is
                about strategic growth. If I had to choose one, I’d go with
                investments because I love the thrill of wealth creation and
                strategic planning.
              </p>

              <p>
                <strong>Devika:</strong> That makes perfect sense! Do you have a
                personal investment strategy or philosophy?
              </p>

              <p>
                <strong>Nishant:</strong> Absolutely. I consider myself a
                risk-taker, but only when I fully understand the risks involved.
                I’m a conservative investor—I thoroughly research before making
                any investment decisions. For instance, I was recently
                considering investing in cryptocurrency. I had done nearly all
                my research and was just one click away from investing. But
                then, I stopped and asked myself—am I investing because I truly
                understand it, or just because everyone is talking about it?
                That moment of self-reflection made me step back. I firmly
                believe in sticking to an investment philosophy that aligns with
                my understanding and risk tolerance.
              </p>

              <p>
                <strong>Devika:</strong> Now, what would you say to someone
                who's fearful of investing in the stock market? What is your
                approach?
              </p>

              <p>
                <strong>Nishant:</strong> If someone is fearful, it's absolutely
                understandable. Even I was scared when I was opening my first
                DMAT account. I hesitated to share my PAN card and bank details
                online. So, I completely understand. To someone who is hesitant,
                I’d say—start small. You can begin with just ₹100 or ₹500 a
                month, an amount that you won’t regret losing. Though, I can
                assure you, if you invest wisely, you won’t lose it. More
                importantly, invest in learning. That’s what I did—I spent a lot
                on authentic courses, webinars, and books on stock markets. As
                you learn, you’ll develop your own investment strategy. Every
                book reflects the author's mindset, and when you study multiple
                perspectives, you’ll find one that resonates with you. Start
                right away—maybe with an index fund like Nifty 50. The stock
                market is a whole new world, and once you step in, you’ll see
                how exciting it can be.
              </p>

              <p>
                <strong>Devika:</strong> What are the top three mistakes you see
                beginners making?
              </p>

              <p>
                <strong>Nishant:</strong> The first mistake is chasing stock
                tips. Many people message me asking if they should sell or hold
                a particular stock. I always tell them—don’t chase tips. The
                stock market isn’t a get-rich-quick scheme. It’s a long-term
                game. People lack patience; they want instant returns without
                putting in the effort to learn.
              </p>

              <p>
                <strong>Nishant:</strong> The second mistake is a lack of
                diversification. Some people put all their money into one stock,
                expecting it to make them rich overnight. That’s risky.
                Diversification is key to minimizing losses.
              </p>

              <p>
                <strong>Nishant:</strong> The third is unrealistic expectations.
                Many assume that investing will make them wealthy instantly. The
                market fluctuates, and patience is essential. If you’re not
                willing to wait, you’re setting yourself up for disappointment.
              </p>

              <p>
                <strong>Devika:</strong> What are some tax-saving strategies
                that most people are unaware of?
              </p>

              <p>
                <strong>Nishant:</strong> One overlooked strategy is Section
                80GG. Salaried employees receive a House Rent Allowance (HRA),
                but self-employed individuals and freelancers can also claim
                rent deductions under this section. Another is the National
                Pension Scheme (NPS). People can claim up to ₹1.5 lakh under
                Section 80C and an additional ₹50,000 under 80CCD(1B). This is a
                great investment for long-term financial security. Another
                underrated strategy is forming a Hindu Undivided Family (HUF)
                for tax planning. This can help in income diversion and tax
                savings. Additionally, people should consider tax-efficient
                investments like Equity-Linked Savings Schemes (ELSS), which
                allow for tax exemptions up to ₹1.5 lakh while helping you build
                wealth.
              </p>

              <p>
                <strong>Devika:</strong> Do you have a favourite underutilized
                tax deduction that people often overlook?
              </p>

              <p>
                <strong>Nishant:</strong> Yes, one is Section 80CCD(2). If you
                talk to your employer, they can contribute a portion of your
                salary to the NPS, and you can claim deductions under this
                section. The best part? Even if you opt for the new tax regime,
                you can still claim this deduction, with a limit of 14% of your
                basic salary.
              </p>

              <p>
                <strong>Devika:</strong> What are some common misconceptions
                about tax planning that hinder people from saving effectively?
              </p>
              <p>
                  <strong>Nishant:</strong> First, people think tax planning is
                  a last-minute task. It’s not. It should be part of your
                  financial strategy from the start of the financial year.
                </p>
                <p>
                  Second, many believe tax-saving instruments don’t offer good
                  returns. That’s not true. ELSS funds, for example, offer tax
                  benefits and good returns.
                </p>
                <p>
                  Third, people assume tax planning is only for the wealthy. In
                  reality, even small tax-saving measures can help individuals
                  across all income levels.
                </p>

                <p>
                  <strong>Devika:</strong> Suppose someone has ₹50,000 to start
                  with. How should they allocate their funds?
                </p>

                <p>
                  <strong>Nishant:</strong> If I had ₹50,000, I’d allocate it as
                  follows:
                </p>
                <p>• ₹10,000 (20%): Emergency fund—this ensures financial security.</p>
                <p>• ₹25,000 (50%): Equity mutual funds—I’m very bullish on these for long-term wealth creation.</p>
                <p>• ₹10,000 (20%): Fundamentally strong growth stocks—blue-chip companies with high growth potential.</p>
                <p>• ₹5,000 (10%): Self-improvement—investing in courses, books, and skill development.</p>
                <p>
                  Investing in yourself is crucial. The more you learn, the
                  better your financial decisions will be.
                </p>

                <p>
                  <strong>Devika:</strong> What are your thoughts on alternative
                  investments like real estate and cryptocurrencies?
                </p>
                <p>
                  <strong>Nishant:</strong> Real estate is a great investment,
                  but it requires a large capital. Instead of directly
                  purchasing property, one can invest in Real Estate Investment
                  Trusts (REITs) to own fractional shares in real estate.
                </p>
                <p>
                  Cryptocurrencies, on the other hand, are highly volatile.
                  Unlike stocks, they don’t have intrinsic value or underlying
                  assets. I invest only what I’m willing to lose in crypto and
                  recommend others do the same. Read, research, and don’t
                  blindly follow the hype.
                </p>

                <p>
                  <strong>Devika:</strong> Can you share any success stories
                  from people who have followed your guidance?
                </p>
                <p>
                  <strong>Nishant:</strong> I’ve had clients who initially
                  hesitated to invest, but after two to three years of
                  disciplined investing, they saw their wealth grow
                  significantly. One client panicked when his stock dropped by
                  10%. I advised him to stay patient, and after two years, his
                  portfolio saw remarkable growth. The key takeaway? Mindset
                  matters more than market fluctuations.
                </p>

                <p>
                  <strong>Devika:</strong> What advice would you give to young
                  people just starting their financial journey?
                </p>



                <div className=" py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Section - Text */}
          <Col xs={12} md={7} className="mb-4 mb-md-0">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#1a1a1a" }}>
              <strong style={{ color: "#002366" }}>Nishant:</strong> Start small but start early. Learn
                  continuously, have a long-term vision, and set clear financial
                  goals. Your goal could be higher education, a Euro trip, or
                  even early retirement—define it and work towards it. Investing
                  in index funds is a great starting point.
            </p>
          </Col>

          {/* Right Section - Image */}
          <Col xs={12} md={5} className="text-center">
            <Image
              src="/nishantArticle2.jpg" // <-- your second image
              alt="Preetha"
              fluid
              rounded
              style={{ maxHeight: "320px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </div>









               

                <p>
                  <strong>Devika:</strong> What role do personal financial
                  habits like saving, budgeting, and expense tracking play?
                </p>
                <p>
                  <strong>Nishant:</strong> Financial habits are crucial. I
                  remember when I was younger, my father always made me set a
                  budget before shopping, which irritated me then, but now I
                  understand its importance.
                </p>
                <p>A great rule to follow is the 50-30-20 rule:</p>
                <p>• 50% for needs (rent, bills, groceries)</p>
                <p>• 30% for wants (entertainment, shopping)</p>
                <p>• 20% for savings and investments</p>
                <p>
                  Tracking expenses is also essential. There are great budgeting
                  apps like YNAB (You Need A Budget) that can help monitor
                  spending. Paying yourself first—saving before spending—is
                  another habit that leads to financial discipline.
                </p>

                <p>
                  <strong>Devika:</strong> Wow! That’s a wealth of knowledge. I
                  hope our readers truly absorb these insights. I’m just
                  mesmerized, and trying to take it all in. So, you’ve worked
                  with thousands of people. What do you think is the one habit
                  that prevents people from succeeding?
                </p>
                <p>
                  <strong>Nishant:</strong> Impatience and lack of consistency.
                  These two factors stop people from making it big. It’s natural
                  to want quick results, but success in any field, especially
                  investing, requires patience and a long-term mindset. People
                  also hesitate to invest in themselves, which is a mistake.
                </p>

                <p>
                  <strong>Devika:</strong> If you had to invest in just one
                  stock for the next ten years, which one would it be? No
                  pressure, we won’t hold you to it!
                </p>
                <p>
                  <strong>Nishant:</strong> Without a doubt, ITC. Most people
                  associate ITC with cigarettes, but it’s much more than
                  that—FMCG, hotels, paper, and so much more. It has a solid
                  track record, and its diversified business model makes it a
                  strong choice for long-term investment.
                </p>

                <p>
                  <strong>Devika:</strong> That makes sense! Now, let’s say you
                  win a massive lottery—millions at your disposal. What’s your
                  investment strategy?
                </p>
                <p>
                  <strong>Nishant:</strong> Let’s say I win $23 million—around
                  24 crore rupees. I’d immediately invest 20 crore in the Nifty
                  50 index and start an SWP (Systematic Withdrawal Plan). With a
                  12% return assumption, I could withdraw 15 lakh rupees every
                  month for the rest of my life without depleting my investment.
                  That’s more than enough to live comfortably. The remaining 4
                  crore? I’d go on a world tour!
                </p>

                <p>
                  <strong>Devika:</strong> Smart and practical! If you could
                  have dinner with any investor, past or present, who would it
                  be?
                </p>
                <p>
                  <strong>Nishant:</strong> Without a doubt, Warren Buffett. He
                  has an incredible way of simplifying complex financial
                  concepts. I’d love to have a conversation with him.
                </p>

                <p>
                  <strong>Devika:</strong> Have you come across any quirky
                  investments that caught your attention?
                </p>
                <p>
                  <strong>Nishant:</strong> Yes! Recently, I read about people
                  investing in rare wines and whiskeys. There’s even a proper
                  wine index that’s been delivering good returns. Since they’re
                  rare, their value appreciates over time. That was an
                  eye-opener for me!
                </p>

                <p>
                  <strong>Devika:</strong> Interesting! Now, let’s talk about
                  your social media journey. How did it start?
                </p>
                <p>
                  <strong>Nishant:</strong> I was initially associated with
                  Groww, conducting sessions for students. Eventually, I decided
                  to start something of my own. I had an Instagram channel
                  dedicated to CS students, but I wanted to focus on investing
                  and taxation, so I launched my new Instagram channel on July
                  1, 2023.
                </p>
                <p>
                  At first, I wasn’t consistent, but in 2024, I became serious
                  about content creation. The audience has been incredibly
                  supportive, and I’ve launched several courses covering stock
                  markets from the basics. It’s been an amazing journey!
                </p>

                <p>
                  <strong>Devika:</strong> That’s fantastic! Have you had any
                  memorable fan moments or interesting DMs?
                </p>
                <p>
                  <strong>Nishant:</strong> Absolutely. The comments on social
                  media are mostly negative, but the likes, shares, and saves
                  show real appreciation. One moment that stood out was when
                  someone from Canada messaged me, asking for financial advice
                  on selling their property and investing in Indian stock
                  markets. That level of trust was truly humbling.
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
          Rapid Fire with Nishant
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
            src="/nishantRapid.mp4" // <-- use your vertical video file
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
                  <strong>Devika:</strong> Now, let’s do a quick rapid-fire
                  round. Stocks or real estate?
                </p>
                <p>
                  <strong>Nishant:</strong> Stocks!
                </p>

                <p>
                  <strong>Devika:</strong> Your number one investment tip in one
                  sentence?
                </p>
                <p>
                  <strong>Nishant:</strong> Look at the long-term horizon and be
                  patient.
                </p>

                <p>
                  <strong>Devika:</strong> The best financial decision you’ve
                  made?
                </p>
                <p>
                  <strong>Nishant:</strong> Investing in myself and learning
                  about stock markets.
                </p>

                <p>
                  <strong>Devika:</strong> One financial myth you love debunking?
                </p>
                <p>
                  <strong>Nishant:</strong> That stock market investing is
                  gambling. It’s a myth!
                </p>

                <p>
                  <strong>Devika:</strong> If you could have a superpower, what
                  would it be?
                </p>
                <p>
                  <strong>Nishant:</strong> Predicting stock prices! It would
                  make investing and content creation so much easier.
                </p>

                <p>
                  <strong>Devika:</strong> What’s the most random thing you’ve
                  bought with your earnings?
                </p>
                <p>
                  <strong>Nishant:</strong> An Oculus Quest 2. I always wanted a
                  high-end gaming device, so I just went for it.
                </p>

                <p>
                  <strong>Devika:</strong> Your dream dinner date—billionaire
                  investor, world-class chef, or an actor?
                </p>
                <p>
                  <strong>Nishant:</strong> Definitely an actor—probably Vicky
                  Kaushal. His versatility in movies like Sanju, Sam Bahadur, and
                  Uri is amazing.
                </p>

                <p>
                  <strong>Devika:</strong> You can only invest in one thing for
                  a year—pets or gadgets?
                </p>
                <p><strong>Nishant:</strong> Gadgets, for sure!</p>
              <p><strong>Devika:</strong> If you could swap places with any celebrity for a day, who would it be?</p>
              <p><strong>Nishant:</strong> Probably an actor.</p>
              <p><strong>Devika:</strong> Your favorite way to spoil yourself after a financial win?</p>
              <p><strong>Nishant:</strong> Pizza!</p>
              <p><strong>Devika:</strong> If you could take a break from finance for a month, what would you do?</p>
              <p><strong>Nishant:</strong> I’d dive into filmmaking. I love movies and would love to learn about the craft.</p>
              <p><strong>Devika:</strong> What’s one piece of financial advice you’d give your 18-year-old self?</p>
              <p><strong>Nishant:</strong> Start investing in stocks as early as possible.</p>
              <p><strong>Devika:</strong> Funniest financial mistake you’ve made?</p>
              <p><strong>Nishant:</strong> I once invested in a penny stock based on a tip at a New Year’s party. Initially, it gave 70-80% returns, but eventually, the company got delisted, and I lost everything. Lesson learned!</p>
              <p><strong>Devika:</strong> If you wrote a book on financial freedom, what would the title be?</p>
              <p><strong>Nishant:</strong> Broke to Boss.</p>
              <p><strong>Devika:</strong> And if you wrote one about your journey?</p>
              <p><strong>Nishant:</strong> Nine Attempts Strong. It took me nine attempts to clear my CA final exams, and I think that journey deserves to be shared.</p>
              <p><strong>Devika:</strong> That’s a strong title! We’ll refine it, but the foundation is solid. Now, what about your life philosophy? What’s your mantra?</p>
              <p><strong>Nishant:</strong> Never say no to any work that comes your way. You see, it’s hard to sum up in just one sentence. But if I had to explain—whatever I thought I’d become, I never actually did. I wanted to be an engineer, then a Bollywood actor. I ended up being neither. And yet, the things I used to be completely against, I now do and enjoy. I never thought I’d get into stock markets—I was actually against it, thanks to movies portraying it as gambling. Yet, here I am. I never imagined I’d take up full-time teaching. But I do. I never thought I’d have two Instagram channels and create content like I do today. But I do. So, my mantra is simple—keep working, keep moving forward, and embrace what comes your way.</p>
              <p><strong>Devika:</strong> Looking back on your journey, is there something you would do differently?</p>
              <p><strong>Nishant:</strong> I would definitely start investing earlier. Also, since it took me nine attempts to clear CA final, maybe I would study harder. I knew what I had to do, but I let laziness and frustration get the better of me. Maybe if I had cleared my CA earlier, I could have started earning, investing, and building wealth sooner. But at the same time, I don’t have regrets. Every mistake teaches you something valuable.</p>
              <p><strong>Devika:</strong> Absolutely! That’s why I don’t like calling setbacks 'failures.' As long as you learn from them, they’re part of your growth. So, what’s next for you?</p>
              <p><strong>Nishant:</strong> Quite a lot of things! I’m currently working on multiple courses that I plan to launch in 2025. One is a trading course for complete beginners, which is ironic because I never thought I’d get into trading, but now I’m learning and practicing it myself. I’m also developing courses on tax planning, mutual funds, and futures & options. Besides that, I’m writing a book on the basics of stock market investing because I feel that practical, actionable steps are missing in most beginner-level stock market guides.</p>
              <p><strong>Devika:</strong> You mean like a step-by-step guide for beginners?</p>
              <p><strong>Nishant:</strong> Exactly! A structured guide that walks beginners through everything they need to know about investing.</p>
              <p><strong>Devika:</strong> That sounds fantastic. Any other exciting projects we should know about?</p>
              <p><strong>Nishant:</strong> These courses and the book are my main focus right now. But who knows? If an exciting opportunity comes my way, I’ll definitely consider it!</p>
              <p><strong>Devika:</strong> Wonderful! It was fabulous talking to you, Nishant.</p>
              <p><strong>Nishant:</strong> Thank you.</p>
              <p><strong>Devika:</strong> Thank you for your time. I really hope this conversation makes a huge impact on people.</p>
              <p><strong>Nishant:</strong> Thank you, Devika. It was lovely talking to you!</p>
            
    </Container>
            
            </Card.Body>
          
    </>
  );
};

export default Nishant ;
