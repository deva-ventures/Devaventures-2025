import React from 'react';
import { Container, Row, Col, Card,Image,Button} from 'react-bootstrap';

const Sarina = () => {
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
              I wanted to achieve a great physique so badly that everything else started falling into place. 
              </q>{" "}
              – <strong> Sarina Pani</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/sarinaArticle.png" // <-- second image here
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
    href="https://youtu.be/iKTxQk0GkpA?si=GTki-fVHFeg6mtw4"
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
    window.open("https://youtu.be/iKTxQk0GkpA?si=GTki-fVHFeg6mtw4", "_blank");
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
    window.open("https://youtu.be/iKTxQk0GkpA?si=GTki-fVHFeg6mtw4", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://youtu.be/iKTxQk0GkpA?si=GTki-fVHFeg6mtw4"
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
      src="/sarinaConvo.jpg" // replace with your image path
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
            Sarina Pani, a passionate fitness coach and professional athlete, recently sat down for an insightful conversation with Devika Majumder, co-founder of Global Influencers Hub. Sarina’s journey is one of perseverance, self-discovery, and breaking societal norms. From working in IT for over seven years to becoming a Zumba instructor, and eventually making her mark as an IFBB Pro Bikini Athlete, her story is a testament to the power of resilience and self-belief. In this engaging discussion, she delves into the pivotal moments of her journey, the challenges she faced, and the mindset that helped her push through barriers. Here’s a glimpse into their conversation:
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
      src="/sarinaArticleVideo.mp4"
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
                <strong>Devika Majumder:</strong> Hi, Sarina. Welcome! We’re here
                to talk about the life journeys of social media influencers.
                Let’s dive right into your story. What was that defining moment
                when you realized fitness was your true calling?
              </p>
              <p>
                <strong>Sarina Pani:</strong> It wasn’t something I actively
                sought out at first. I come from Odisha, where the conventional
                path for a girl is to study, get a job, get married, and settle
                down. That’s the societal expectation. But I always had a keen
                interest in dancing and yoga, even though I never received
                formal training.
              </p>
              <p>
                It all changed when my husband—who was my boyfriend at the
                time—fell seriously ill and was hospitalized for a week due to an
                unhealthy lifestyle. That was my wake-up call. I realized I
                needed to focus on fitness, not just for myself but for my family
                and friends as well. That’s when I decided to become a Zumba
                instructor. I always loved dancing, and this gave me an
                opportunity to blend passion with purpose. And that decision
                truly transformed my life.
              </p>

              <p>
                <strong>Devika:</strong> That’s incredible! From there, you went
                on to win Fit Factor in India and make a mark as a female
                athlete. Tell us more about that experience and your key
                takeaways from it.
              </p>
              <p>
                <strong>Sarina:</strong> I was working in IT for about seven and
                a half years while teaching Zumba on the side. By 2015-2016, I
                was earning well from my group classes, so I decided to take a
                sabbatical from IT to explore fitness full-time. And then, COVID
                hit.
              </p>
              <p>
                During the lockdown, gyms shut down, and my classes stopped
                completely. That was a turning point for me. I started
                experimenting with home workouts, reading more about fitness, and
                weight training using YouTube tutorials. I even set up a small
                home gym. In 2021, a coach noticed my progress and encouraged me
                to step into bodybuilding competitions. I was hesitant—coming
                from a conservative background, the idea of standing on stage in
                a bikini was daunting. But I decided to give it a shot.
              </p>
              <p>
                In 2021, I competed in Fit Factor Beachbody, won, and by the end
                of the year, I became an IFBB Pro—one of the highest honors in
                bodybuilding. It was surreal! I initially thought I’d do one
                competition and be done with it, but winning changed my
                perspective. Now, I represent India in the bikini bodybuilding
                category on global platforms.
              </p>

              <p>
                <strong>Devika:</strong> Wow, that’s an extraordinary journey.
                What’s your current challenge or goal in the industry?
              </p>
              <p>
                <strong>Sarina:</strong> Right now, I’m focusing on competing in
                pro shows as an Olympia qualifier. Winning any of these would
                give me a direct entry to Olympia, the biggest stage in
                bodybuilding, held in Las Vegas. No Indian female athlete has
                made it to Olympia yet, and I want to be the first!
              </p>

              <p>
                <strong>Devika:</strong> That’s ambitious and inspiring! Speaking
                of challenges, what was the biggest obstacle you had to overcome
                on this journey?
              </p>
              <p>
                <strong>Sarina:</strong> Surprisingly, it wasn’t the workouts or
                the discipline—it was the attire. Coming from a traditional
                background, stepping onto a stage in a bikini was mentally
                challenging. I kept questioning myself—was this the right thing
                to do? What would people say? My family, relatives, everyone was
                going to see me on a national platform.
              </p>
              <p>
                Overcoming that mental block was tougher than any physical
                training. But once I did, I realized that confidence comes from
                within, not from external validation. It was a form of mental
                conditioning as much as physical training.
              </p>

              <p>
                <strong>Devika:</strong> That makes so much sense. Mental
                resilience plays a huge role in achieving such milestones. Did
                you practice any form of meditation during your training?
              </p>
              <p>
                <strong>Sarina:</strong> I believe that working out itself is a
                form of meditation. When I’m lifting weights, my focus is
                undivided—nothing else matters except my form, my progress, and
                my limits. I train alone, without a personal trainer or workout
                buddies, because I wanted to build complete independence in my
                routine. COVID taught me that I couldn’t rely on anyone else for
                my fitness. It had to be all me.
              </p>

              <p>
                <strong>Devika:</strong> That’s an interesting perspective! Many
                people, including myself, struggle with motivation and often look
                for fitness buddies to keep us accountable. What advice would you
                give to someone like me?
              </p>
              <p>
                <strong>Sarina:</strong> When I started, I was also dependent on
                others. But COVID forced me to adapt. If you’re always relying on
                external motivation, what happens when your workout buddy is
                unavailable? You need to find that internal drive. Ultimately, no
                one else can do the work for you.
              </p>
              <p>
                Training alone taught me discipline and self-reliance. It became
                a meditative experience—I had to push myself, rack my weights,
                finish my sets, and stay committed. That built a kind of mental
                resilience that helped me not just in fitness but in life.
              </p>

              <p>
                <strong>Devika:</strong> That’s powerful! Speaking of resilience,
                bodybuilding demands extreme discipline, especially in terms of
                diet. What did your nutrition plan look like?
              </p>
              <p>
                <strong>Sarina:</strong> It was a high-protein diet, and towards
                the end of my competition prep, my carbs were almost negligible.
                Sleep was crucial—I made sure to get at least nine hours of rest.
                There were times when I felt completely drained, questioning why
                I was putting myself through this. But when I stepped onto the
                stage, I knew it was worth it.
              </p>
              <p>
                During the process, I realized that fitness was my most loyal
                companion. Unlike people who may disappoint you, fitness never
                does. It’s always there for you, and in your darkest moments, it
                can be the thing that keeps you grounded.
              </p>

              <p>
                <strong>Devika:</strong> That’s such a beautiful way of looking
                at it. This perspective on fitness being a loyal friend is
                something that will stick with me for a long time. Now, there’s a
                lot of noise in the fitness industry. How do you ensure you stay
                authentic with your coaching and content?
              </p>
              <div className=" py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Section - Text */}
          <Col xs={12} md={7} className="mb-4 mb-md-0">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#1a1a1a" }}>
              <strong style={{ color: "#002366" }}>Sarina:</strong> Continuous learning. As certified
                fitness professionals, we have access to resources and courses
                that we must update every six months. Staying informed helps me
                provide factual, authentic content rather than clickbait reels
                promising “five magic exercises to get lean.” My goal is to
                educate, not mislead.
            </p>
          </Col>

          {/* Right Section - Image */}
          <Col xs={12} md={5} className="text-center">
            <Image
              src="/sarinaArticle2.jpg" // <-- your second image
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
              <strong>Devika:</strong> That’s fantastic! Authenticity is key in this
              industry. Now, we’ve talked a lot about physical strength. But how
              important do you think mental fitness is in shaping who you are
              today?
            </p>

            <p>
              <strong>Sarina:</strong> Mental fitness is everything. If I’m not
              mentally strong, I won’t be able to handle the physical challenges
              that come my way. For me, mental strength is even more crucial
              because if my mind isn’t in the right place, I can’t endure the
              physical pain that training brings.
            </p>
            <p>
              Lately, I’ve been exploring spirituality as well. I’ve started
              meditating regularly—fifteen to twenty minutes a day. On weekends,
              I attend kirtan sessions. People might not guess it by looking at
              me, but I’m a spiritual person. It started with my workouts, which
              felt like a form of meditation, and gradually extended into a
              deeper spiritual practice.
            </p>

            <p>
              <strong>Devika:</strong> That’s fascinating! You’ve mentioned before how
              tough competition prep can be. Was there a particular moment that
              really tested your mental strength?
            </p>

            <p>
              <strong>Sarina:</strong> Absolutely! During my competition prep, when my
              calorie intake was really low, I had moments of intense mental
              battles. I remember one instance when I went out shopping and saw
              pani puri—one of my favourite foods. I literally cried standing
              there, knowing I couldn’t eat it. The same thing happened with
              aloo paratha and chole bhature. Even though chole bhature was
              never a favourite of mine, my mind was playing tricks on me,
              making me crave everything I couldn’t have.
            </p>
            <p>
              That’s when I realized how powerful the mind is. If I didn’t
              control it, I would sabotage all the hard work I had put in over
              the years. So, I learned to divert my focus. Instead of thinking
              about food, I’d clean my house, reorganize my wardrobe—anything to
              shift my attention. My house becomes exceptionally tidy during
              competition prep!
            </p>

            <p>
              <strong>Devika:</strong> I’m sure your husband must appreciate that!
            </p>

            <p>
              <strong>Sarina:</strong> Oh, he definitely does! He loves it when I’m in
              that mode.
            </p>

            <p>
              <strong>Devika:</strong> Now, you hold the title of Beach Body Female.
              What does having a ‘beach body’ mean to you, and how do you
              redefine it for your followers?
            </p>

            <p>
              <strong>Sarina:</strong> For me, a beach body is all about confidence. I
              believe that every body is a beach body. It’s not about having the
              “perfect” physique but about feeling comfortable in your own skin.
              Confidence is what truly makes a woman shine.
            </p>
            <p>
              When I first started this journey, I was hesitant to wear a
              bikini—even in front of my coach. I had never seen myself in one
              before. So, I took a trip to Goa, where thousands of people were
              wearing bikinis, and I decided to wear one too. That experience
              helped me realize that it wasn’t a big deal—it was just another
              piece of clothing. Once I embraced that, my confidence skyrocketed.
              That’s the message I want to pass on to others: wear what makes you
              feel good and own it.
            </p>

            <p>
              <strong>Devika:</strong> That’s such a powerful way to look at it! As a
              fitness coach, what’s your favourite type of workout to teach?
            </p>

            <p>
              <strong>Sarina:</strong> I always vouch for weight training. While I do
              incorporate flexibility, agility, and mobility drills for a
              holistic approach, weight training is my personal favourite. I’ve
              seen firsthand how it has transformed my body. I used to have a
              completely different frame, but weight training has helped me
              sculpt the physique I always wanted.
            </p>

            <p>
              <strong>Devika:</strong> Do you coach online as well?
            </p>

            <p>
              <strong>Sarina:</strong> Yes! Fitter is a completely online platform, so
              all my coaching is virtual.
            </p>

            <p>
              <strong>Devika:</strong> That’s great! Could you tell us more about
              Fitter? If someone listening to this interview wants to become a
              coach, how can they do that?
            </p>

            <p>
              <strong>Sarina:</strong> To become a coach at Fitter, you need to
              complete the INFS diploma course. After that, you go through a
              four-week transformation project where you coach four to five
              clients. The transformation isn’t just about weight loss—it
              includes factors like improved sleep, better blood reports, and
              overall well-being. If your clients show positive changes, you
              qualify for an interview with Fitter. Once you pass, you officially
              become a Fitter coach.
            </p>

            <p>
              <strong>Devika:</strong> That sounds like an incredible journey in
              itself! Now, what’s one thing that people often get wrong about
              fitness?
            </p>

            <p>
              <strong>Sarina:</strong> People try to do too much at once. They overload
              themselves with unrealistic expectations—going to the gym for two
              hours, hitting step counts, tracking every calorie. It’s
              overwhelming! Instead of chasing perfection, people should focus on
              consistency. Small, sustainable changes make the biggest
              difference.
            </p>
            <p>
              For example, a working mom can’t be expected to juggle work,
              family, and an intense fitness routine all at once. Instead, she
              should start with small steps—maybe a short workout, a simple
              dietary change. Over time, those little efforts compound into a
              big transformation.
            </p>

            <p>
              <strong>Devika:</strong> That makes so much sense! Now, I have a personal
              question—consistency is my biggest struggle. I start strong, get
              results, but then fall off track. How do I fix this?
            </p>

            <p>
              <strong>Sarina:</strong> That’s actually the most common problem people
              face! The key is to find a rhythm that fits your lifestyle. Fitness
              isn’t about being perfect—it’s about showing up, even if it’s just
              in small ways.
            </p>

            <p>
              <strong>Devika:</strong> What is the mantra of consistency when it comes
              to fitness?
            </p>

            <p>
              <strong>Sarina:</strong> First, you have to understand how your mind
              works. The reason most people struggle with consistency is that
              they think, “I’m going to the gym, I’m going to do so many
              exercises,” and then the first few days feel like torture. Your
              body starts aching, and getting out of bed the next morning becomes
              difficult. Even I would have given up if I had started like that.
            </p>
            <p>
              The way I became consistent was by simply showing up at the gym
              every day. I didn’t tell myself, “I have to work out.” Instead, I
              told myself, “This is my time to go to the gym.” Even if it’s just
              for half an hour, just getting up, putting on my gym clothes, and
              stepping into that space is the first step. Your mind automatically
              trains itself that the next step is a workout. When I started, I
              would go to the gym, play PUBG with my trainers for an hour, and
              then leave. Slowly, that hour turned into half an hour of gaming
              and half an hour of working out. Then it became ten minutes of
              gaming and fifty minutes of exercise. Eventually, I eliminated the
              gaming and focused entirely on my workouts.
            </p>

            <p>
              <strong>Devika:</strong> That’s a fantastic strategy! Now, if I were to
              follow you around for a day, what would your daily routine look
              like?
            </p>

            <p>
              <strong>Sarina:</strong> My day starts with two or three black coffees
              before I even open my eyes—it’s a bad habit, I know! Then I take
              my morning client calls, shower, do my pooja and meditation, and
              prepare my meals. My client calls are spaced throughout the day—in
              the morning, afternoon, and night. I work out in the afternoon,
              prep my meals in between, and spend time with my pets. If I’m
              traveling, I always make sure to carry my protein or meal preps
              with me.
            </p>
            <p><strong>Sarina:</strong> My day starts with two or three black coffees before I even open my eyes—it’s a bad habit, I know! Then I take my morning client calls, shower, do my pooja and meditation, and prepare my meals. My client calls are spaced throughout the day—in the morning, afternoon, and night. I work out in the afternoon, prep my meals in between, and spend time with my pets. If I’m traveling, I always make sure to carry my protein or meal preps with me.</p>

              <p><strong>Devika:</strong> What’s your favorite cheat meal?</p>

              <p><strong>Sarina:</strong> I actually don’t do cheat meals because I’ve incorporated my favorite foods into my diet. If I want pizza, I make a healthy version at home. If I crave noodles, I prepare them within my macros. This way, I don’t feel the need to cheat.</p>

              <p><strong>Devika:</strong> That’s a great approach! Do you prefer homemade food over eating out?</p>

              <p><strong>Sarina:</strong> Yes, I prefer homemade food because I control the ingredients and calories. If I do eat out, I choose places where calorie counts are listed on the menu. You’d be surprised—many restaurants, even Mainland China and movie halls, now mention calorie counts.</p>

              <p><strong>Devika:</strong> That’s interesting! Do you have a dream destination for fitness workouts?</p>

              <p><strong>Sarina:</strong> I would love to go to Dubai! The gyms there are amazing, and they have some fantastic machines, especially for glutes. I’d love to spend a month working out there.</p>

              <p><strong>Devika:</strong> Have you ever faced a crazy fitness challenge while traveling?</p>

              <p><strong>Sarina:</strong> Not while traveling, but once at home, I locked myself out. I live on the garden floor, and I had to do a pull-up and tricep dip to get inside. One of my neighbors saw me and thought I was a thief! He started shouting until I smiled and explained the situation.</p>

              <p><strong>Devika:</strong> That’s hilarious! What does your perfect rest day look like?</p>

              <p><strong>Sarina:</strong> My rest days involve watching my favorite movies, cleaning, and doing all the chores I missed during the week. Sometimes, I treat myself to an ice massage, a hair spa, or self-care activities.</p>

              <p><strong>Devika:</strong> Have you ever received any weird requests from clients?</p>

              <p><strong>Sarina:</strong> All the time! Some clients want to look like Disha Patani or Katrina Kaif. Others ask to lose fat from only specific areas while keeping their cheeks plump. Some myths just never go away!</p>

              <p><strong>Devika:</strong> Speaking of myths, what’s one fitness myth that drives you crazy?</p>

              <p><strong>Sarina:</strong> The idea that you can spot-reduce fat. I’ve seen influencers post things like “5 must-do exercises to lose arm fat” or “Best workout for inner thigh fat.” I saw one girl waving her arms and claiming it would reduce arm fat. It would take seven lifetimes for that to work! And yet, millions of people follow such advice.</p>

              <p><strong>Devika:</strong> That’s unfortunate but true. If you weren’t a fitness coach, what would you be doing?</p>

              <p><strong>Sarina:</strong> I’d probably still be in my IT job, hiding behind a desk!</p>

              <p><strong>Devika:</strong> Have you ever had an embarrassing moment at the gym?</p>

              <p><strong>Sarina:</strong> Yes! Once, I wore tight leggings for leg day, and they tore right in the middle while I was doing a leg press. I had no spare clothes. Thankfully, the gym owner saw me, gave me a trainer’s jacket to wrap around, and one of the trainers dropped me home. It was embarrassing, but I still finished my workout!</p>

              <p><strong>Devika:</strong> That’s dedication! What’s your go-to workout if you only have 15 minutes?</p>

              <p><strong>Sarina:</strong> I’d do a high-intensity interval training (HIIT) session, Zumba, or a quick dumbbell workout based on whatever muscle group I need to train that week.</p>

              <p><strong>Devika:</strong> If you could train a celebrity, who would it be?</p>

              <p><strong>Sarina:</strong> I’d love to train Vidyut Jammwal!</p>

              <p><strong>Devika:</strong> What’s one fitness challenge you haven’t conquered yet but want to?</p>

              <p><strong>Sarina:</strong> A handstand! I have a fear of being upside down, and I’m still working on balancing myself.</p>

              <p><strong>Devika:</strong> Lastly, what advice would you give to fitness beginners?</p>

              <p><strong>Sarina:</strong> Just keep going. Don’t overthink perfect squats or lunges—just show up and do something. The key is consistency.</p>

              <p><strong>Devika:</strong> Sarina, is there anything else you’d like to share about your life? Something that would help people get to know you better?</p>

              <p><strong>Sarina:</strong> I’ve always had this belief that I was meant for something bigger, even though I came from a small town and a conservative family. I never gave up on my dreams. Honestly, my dream was simple—I wanted to look good, wear nice clothes, and go out confidently. It might sound naive, but I held onto that thought tightly.</p>

              <p><strong>Sarina:</strong> That small dream fuelled me to keep going. I wanted to achieve a great physique so badly that everything else started falling into place. My passion became my profession, and I built a career around fitness. It all merged naturally.</p>

              <p><strong>Devika:</strong> Exactly! That’s how the universe works sometimes. If you truly want something, things just start aligning.</p>

              <p><strong>Sarina:</strong> Yes, absolutely!</p>

              <p><strong>Devika:</strong> Wonderful!</p>

              <p><strong>Devika:</strong> One of the biggest reasons we wanted to share your journey is to inspire others. Hopefully, people will be motivated to reach out to you, start working out, and take control of their fitness journey. I know I’ve been inspired myself!</p>

              <p><strong>Sarina:</strong> That means a lot to me! Thank you so much.</p>

              <p><strong>Devika:</strong> Thank you for sharing your story, Sarina. I look forward to staying connected!</p>

              <p><strong>Sarina:</strong> Anytime! Thanks again.</p>

              <p><strong>Devika:</strong> Bye!</p>
 
          </Container>
            </Card.Body>
        
    </>
  );
};

export default Sarina;
