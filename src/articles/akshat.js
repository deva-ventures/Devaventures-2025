import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const Akshat = () => {
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
              – <strong>Dr. Akshat Chadha </strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/akshatArticle.png" // <-- second image here
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
    href="https://youtu.be/eNgruHubBmI "
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
    window.open("https://youtu.be/eNgruHubBmI ", "_blank");
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
    window.open("https://youtu.be/eNgruHubBmI ", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://youtu.be/eNgruHubBmI "
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
      src="/akshatConvo.jpg" // replace with your image path
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
            Dr. Akshat Chadha, a visionary in the realm of lifestyle medicine and holistic health, recently shared his inspiring journey in an engaging interview. From his early days as a junior doctor to becoming a pioneer in preventive healthcare and lifestyle management, Dr. Chadha discussed the pivotal moments, challenges, and innovative approaches that have shaped his path. In conversation with Devika Majumder, he opened up about his unique journey, his philosophy of reducing medications through lifestyle changes, and how he seamlessly integrates his passions into his professional life. Here’s a glimpse into their enlightening exchange.




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
      src="/akshatTeaser.mp4"
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
    <p>
          <strong>Devika Majumder:</strong> Dr. Chadha, let’s start with something intriguing—the twist in your professional journey. Could you tell us how that began?
        </p>

        <p>
          <strong>Dr. Chadha:</strong> The twist started when I ventured into the profession of reducing medications rather than prescribing them. I focused on something foundational: lifestyle. You see, lifestyle is essentially what you do every day—your routines and habits repeated over time. When you make intentional changes to these patterns, you can prevent, manage, or even reverse certain diseases. That realization led me to work closely with my patients to not only improve their health but also reduce their dependence on medicines.
          <br /><br />
          The real turning point came when I started integrating my passion for dance into my work. It started as a fun initiative on Instagram—using dance to teach health principles—and it just clicked! Whether people call me "Doctor with a Twist" or "The Dancing Doctor," it’s become a unique way for me to engage with health and wellness.
        </p>

        <p>
          <strong>Devika:</strong> That’s so refreshing and unique! It’s incredible how you’ve combined two seemingly unrelated passions. So, you have to create a signature dance just for us at Global Influencers.
        </p>

        <p>
          <strong>Dr. Chadha:</strong> Absolutely! I’d be happy to. Let’s plan it out.
        </p>

        <p>
          <strong>Devika:</strong> Amazing! Now, stepping back, tell us how it all began for you. What inspired you to become a doctor?
        </p>

        <p>
          <strong>Dr. Chadha:</strong> Honestly, I became a doctor by default. Back then, the options were straightforward—become a doctor or an engineer. Fields like commerce or the arts were often looked down upon. Coming from a family of doctors, the path felt almost inevitable.
          <br /><br />
          Interestingly, my parents did give me a choice, at least on paper. They even took me to an engineering class once. But after sitting through a four-hour mechanics class—and bolting at the two-hour break—I knew engineering wasn’t for me! I decided to pursue medicine instead, and the preparation for MBBS began.
        </p>

        <p>
          <strong>Devika:</strong> And once you were in the thick of it, how did you find the experience?
        </p>

        <p>
          <strong>Dr. Chadha:</strong> I enjoyed studying and practicing medicine, but once I completed my MBBS, I felt under confident about handling the responsibility of treating patients. The medical oath of “do no harm” weighed heavily on me. The idea of unintentionally hurting someone terrified me, especially when I observed the quick decision-making required in emergency and ICU settings.
          <br /><br />
          So, I decided to step away from clinical practice and pursued an MBA in healthcare management instead. It felt like a safer way to stay connected to healthcare while learning about the broader system.
        </p>

        <p>
          <strong>Devika:</strong> That’s an interesting pivot. What happened after completing your MBA?
        </p>

        <p>
          <strong>Dr. Chadha:</strong> After finishing the MBA, I worked at Hinduja Hospital in Mumbai for a year in healthcare management. While it was a valuable experience, something felt incomplete. Despite being on the management side, I found myself drawn to the clinical aspect. Even during patient rounds—where managers aren’t required to delve into medical details—I couldn’t resist asking questions.
          <br /><br />
          That made me realize I missed the direct connection with patients. So, I left Hinduja and joined my parents' practice in Navi Mumbai as a junior doctor.
        </p>

        <p>
          <strong>Devika:</strong> And what was that transition like? Did it feel like coming full circle?
        </p>

        <p>
          <strong>Dr. Chadha:</strong> In a way, yes. As a junior doctor, my primary role was to take patient histories—understanding why they came, noting their medications, and asking basic lifestyle questions. It’s funny now, but back then, I didn’t fully grasp the importance of lifestyle in medicine. I would ask simple questions like, “What do you eat?” or “Do you go for walks?”
          <br /><br />
          But I noticed something interesting. When patients followed the small changes I suggested, their health metrics—like blood sugar and cholesterol—began improving. My dad, who handled the primary treatment, started reducing their medications. That was when I realized the power of lifestyle medicine, though it wasn’t yet a recognized field.
        </p>

        <p>
          <strong>Devika:</strong> That’s fascinating. It seems like you were ahead of your time! How did you continue building on that realization?
        </p>

        <p>
          <strong>Dr. Chadha:</strong> I worked with a nutritionist for six to seven years, learning extensively about diet and its role in managing chronic diseases. Over time, I refined my understanding of lifestyle medicine, and today, it’s become my passion and focus.
        </p>

        <p>
          <strong>Devika:</strong> Wonderful! Now, Dr. Chadha, breaking the stereotype, what do you think is the most common misconception about being a doctor? Is there something you’d love to say straight?
        </p>

        <p>
          <strong>Dr. Chadha:</strong> Oh, absolutely. One of the most common stereotypes is that doctors are grumpy—serious, unapproachable, and always in a hurry. People picture this grim person, regardless of gender, who’s ready to rush you out of the cabin in five to ten minutes.
        </p>

        <p>
          <strong>Devika:</strong> But that’s also true sometimes, isn’t it?
        </p>

        <p>
          <strong>Dr. Chadha:</strong> Yes, I agree—it can be true for many doctors. The profession is heavy, with immense pressure. But I hope more of us can break that mold by welcoming patients with a smile. That small gesture can boost a patient’s morale and encourage their healing. It’s about the mind-body connection, you know?
        </p>

        <p>
          <strong>Devika:</strong> Absolutely! A doctor’s approach can make a huge difference. When patients get thoughtful replies and feel heard, it builds trust and confidence.
        </p>

        <p>
          <strong>Dr. Chadha:</strong> Exactly. It’s crucial. Patients feel more empowered to recover when they have that confidence in their doctor.
        </p>

        <p>
          <strong>Devika:</strong> Let’s shift gears a bit. How has technology changed your practice and helped patients?
        </p>

        <p>
          <strong>Dr. Chadha:</strong> Oh, it’s been a game-changer. Technology has made healthcare more accessible, affordable, and efficient. It has brought doctors and patients closer, breaking geographic barriers. I’ve had consultations with people from the U.S., Canada, or even smaller cities like Ahmednagar—places I wouldn’t have had access to otherwise.
          <br /><br />
          That said, there’s still a mindset block. Some people feel online consultations are shortcuts. But COVID helped break that barrier significantly.
        </p>
        <p><strong>Devika:</strong> That’s true. Technology has made the world so much smaller.</p>

          <p><strong>Dr. Chadha:</strong> Absolutely. And it’s not just consultations. Devices like CGMS (Continuous Glucose Monitoring Systems), glucometers, portable ECGs—they’ve made healthcare monitoring more accessible. Sure, there can be slight variations in accuracy, but it’s far better than having no access at all.</p>

          <p><strong>Devika:</strong> Do you think online consultations can fully replace in-person visits?</p>

          <p><strong>Dr. Chadha:</strong> Not entirely. About 5–7% of cases require in-person consultations, like when I need to examine a patient physically—check their pulse, use a stethoscope, or assess abdominal tenderness. But for the majority of cases, online consultations are sufficient. In fact, with experience, I’ve become confident in diagnosing and managing most conditions virtually.</p>

          <p><strong>Devika:</strong> That’s reassuring. So people worldwide can seek advice from “The Dancing Doctor!”</p>

          <p><strong>Dr. Chadha:</strong> (Laughs) Absolutely! Whether it’s for second opinions or guidance for chronic conditions, online consultations have made healthcare more inclusive. But it’s crucial to consult good doctors. That’s non-negotiable.</p>

          <p><strong>Devika:</strong> Speaking of rewarding moments, what’s been the most fulfilling experience in your career so far?</p>

          <p><strong>Dr. Chadha:</strong> It’s hard to pick one—it’s all about patient feedback. Whether it’s someone saying, “Thanks to you, I conceived naturally after struggling for years,” or a mother telling me, “You gave me my child back,” it’s all deeply fulfilling. One moment that stands out is when a patient said, “You didn’t just save my life—you gave me a new one.” Hearing things like that makes every challenge worth it.</p>

          <p><strong>Devika:</strong> That’s so powerful. Your work directly impacts lives, and the gratitude you receive must be incredibly rewarding.</p>

          <p><strong>Dr. Chadha:</strong> It truly is. This profession is rewarding, but it’s also risky. If you don’t deliver well, patients won’t hold back their disappointment.</p>

          <p><strong>Devika:</strong> That’s life, though, isn’t it? It’s not limited to doctors—it happens across professions.</p>

          <p><strong>Dr. Chadha:</strong> True. The stakes are just higher in healthcare because we deal with lives. But I’ve learned to take it in stride—it’s all part of the journey.</p>

          <p><strong>Devika Majumder:</strong> Dr. Akshat, let’s move away from the white coat for a moment. Can you tell us about your hobbies and interests outside of work?</p>

          <p><strong>Dr. Akshat Chadha:</strong> Absolutely! I’ve always had a deep love for music. It’s not just a hobby; it’s my stress buster, my companion through life’s highs and lows. I wouldn’t call myself a singer, though—don’t get me wrong, I’ll sing if you ask me—but I genuinely enjoy music. It’s been a source of solace during my darkest times, and I know it’ll always stay with me.</p>

          <p><strong>Dr. Akshat Chadha:</strong> As for physical activities, I used to be quite the athlete. Basketball was my game back in the day. But over time, life got in the way. You know how it goes—friends got busy, started families, and the routine fell apart. I haven’t been on a court in ages.</p>

          <p><strong>Devika:</strong> That must be tough. Do you miss it?</p>

          <p><strong>Dr. Chadha:</strong> I do, but I’ll admit I haven’t made enough effort to bring it back into my life. It’s that classic struggle—work-life balance. It’s not just about finding time; it’s about organizing a group and committing to it. I think this conversation might just be the nudge I needed to rethink that.</p>

          <p><strong>Devika:</strong> That’s interesting. Speaking of balance, technology seems to have taken over so much of our lives. Do you think people are losing touch with real connections?</p>

          <p><strong>Dr. Chadha:</strong> Definitely. Look at social media—it was meant to reconnect us with friends, but now, people spend hours scrolling even when their friends are sitting across the table. It’s a strange paradox. And the worst part is how deeply phones have penetrated our lives. People used to struggle with being alone, but now they’re perfectly fine being by themselves—as long as they have their phone. Take the phone away, and suddenly they’re uncomfortable, unsure of what to do with themselves. It’s an alarming shift.</p>

          <p><strong>Devika:</strong> That’s so true. Let’s pivot to health. Are there any health myths you’d like to debunk?</p>

          <p><strong>Dr. Chadha:</strong> Oh, plenty! One of the biggest myths is this obsession with food as a miracle cure or a fix-all. People treat food like medicine or the ultimate solution to every health problem. They cut out carbs entirely, overdo the protein, load up on supplements, and then wonder why their body rebels.</p>

          <p><strong>Dr. Chadha:</strong> What they’re missing is the bigger picture—it’s not just about food. It’s about your lifestyle, your habits. Crash dieting, for example, might help you lose weight temporarily, but it wrecks your metabolism, and the weight inevitably comes back. The key is balance, not extremes.</p>

          <p><strong>Devika:</strong> That’s fascinating. What’s one unconventional piece of health advice you’d share with everyone?</p>

          <p><strong>Dr. Chadha:</strong> Don’t chase perfection. Perfect health, perfect habits, or a perfect lifestyle—it’s a recipe for failure. Life is about balance, moderation, and flexibility.</p>

          <p><strong>Dr. Chadha:</strong> Take the four main pillars of lifestyle: food, exercise, sleep, and stress. If you try to keep all four in perfect alignment, something’s bound to give. It’s okay if you miss a workout today—just make sure you don’t miss it tomorrow. Didn’t sleep well one night? Adjust when you can. The moment you let go of rigid expectations, you’ll find it easier to maintain healthy habits.</p>

          <p><strong>Devika:</strong> That’s such a refreshing perspective. What about health trends? If you could start one, what would it be?</p>
          <p>
            <strong>Dr. Chadha:</strong> I’d focus on habits, specifically two key ones.
            First, eating slowly and mindfully—chewing your food thoroughly
            without screens. This simple habit can work wonders for your gut
            health. It can help with digestion, reduce acidity, prevent
            constipation, and even improve your relationship with food.
          </p>

          <p>
            Second, post-meal walks. About 30 minutes after a meal, take a
            10-minute walk. It’s fantastic for lowering post-meal blood sugar
            levels, whether you’re diabetic or not. It also helps preserve
            insulin sensitivity, which is crucial for overall health. These two
            habits alone can make a world of difference.
          </p>

          <p>
            <strong>Devika:</strong> That’s incredible advice! Eating slowly is something
            I’ve heard before but never really stuck to.
          </p>

          <p>
            <strong>Dr. Chadha:</strong> It’s harder than it sounds, especially in today’s
            fast-paced world. But when you eat slowly, your brain has time to
            catch up with your stomach. You’ll feel full sooner, which helps
            with portion control and prevents overeating. And yes, your gut
            health improves significantly too.
          </p>

          <p>
            <strong>Devika:</strong> What about busy individuals? Do you have a quick life
            hack for them?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> Breathing. It’s simple, but we underestimate its
            power. Taking a few deep breaths can improve oxygenation, reduce
            brain fog, enhance focus, and calm your mind. You can do it
            anywhere—whether you’re commuting, sitting at your desk, or about to
            sleep. Incorporate 10 deep breaths into your daily routine. It’s
            such a small change, but the effects are profound. You’ll find
            yourself feeling more centered and less overwhelmed.
          </p>

          <p>
            <strong>Devika:</strong> That’s so practical! And lastly, any unique self-care
            advice you’d like to share?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> Prioritize yourself without guilt. People often
            associate self-care with selfishness, but it’s not the same. Putting
            yourself first doesn’t mean you’re neglecting others. For instance,
            women often sacrifice their needs for their families. They skip
            meals, delay workouts, and overextend themselves. It’s time to
            change that mindset. Self-care isn’t selfish—it’s necessary for your
            well-being and, in turn, for those who depend on you.
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
          Rapid Fire with Akshat
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
            src="/akshatRapid.mp4" // <-- use your vertical video file
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
            <strong>Devika:</strong> That’s such a powerful message, Dr. Chadha. Alright,
            let’s lighten things up with a rapid-fire round. Tea or coffee?
          </p>

          <p>
            <strong>Dr. Akshat Chadha:</strong> Both—or none! Honestly, I like both, but I
            don’t care much for either. If you give me tea or coffee, I’m happy,
            but I’ll never have it on an empty stomach or to wake me up. That’s
            a big no for me.
          </p>

          <p>
            <strong>Devika:</strong> That’s interesting! Most people actually drink tea or
            coffee first thing in the morning.
          </p>

          <p>
            <strong>Dr. Chadha:</strong> And that’s one of the biggest problems. Starting
            your day with tea and biscuits or coffee on an empty stomach is
            terrible for your system.
          </p>

          <p>
            <strong>Devika:</strong> So what should people have instead?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> Water, for starters. Have a glass of water when you
            wake up. You can follow it with almonds, a fruit, or something light
            to line your stomach before putting acidic beverages like tea or
            coffee inside.
          </p>

          <p>
            <strong>Devika:</strong> Makes sense! Speaking of mornings, what’s the first
            thing you do when you wake up?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> A warm glass of water—every single day. Then it’s
            either a fruit or almonds, sometimes pumpkin seeds.
          </p>

          <p>
            <strong>Devika:</strong> One food you could eat forever?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> Honestly, bread or bakery items. I love them! But I
            have a strong self-imposed rule—no family packs of bread, brownies,
            cookies, or biscuits are allowed in my house. If my grandmother sends
            me rusk from Delhi, I portion it out and hide the rest!
          </p>

          <p>
            <strong>Devika:</strong> That’s such disciplined indulgence! So if you weren’t a
            doctor, what would you be?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> Probably an actor.
          </p>

          <p>
            <strong>Devika:</strong> Interesting! What’s one book you’d recommend to
            everyone?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> I’m not much of a reader, and I’m not a fan of
            self-help books. But <em>Rich Dad Poor Dad</em> by Robert Kiyosaki is one I read
            on my dad’s recommendation. It helped me understand finances better,
            and I think it’s a good read for anyone.
          </p>

          <p>
            <strong>Devika:</strong> Great pick! Now, your biggest pet peeve?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> Wet bathrooms. I can’t stand them. My bathrooms have
            ceiling fans to keep them dry, and my maid knows it must be spotless
            and dry after cleaning.
          </p>

          <p>
            <strong>Devika:</strong> That’s a unique one! What’s one thing you’d tell your
            younger self?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> It’s okay not to be busy 24/7.
          </p>

          <p>
            <strong>Devika:</strong> Dream travel destination?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> Wherever my wife takes me.
          </p>

          <p>
            <strong>Devika:</strong> Aww, that’s sweet! One word to describe your day?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> Different. My days are always varied—sometimes
            hectic, sometimes relaxed.
          </p>

          <p>
            <strong>Devika:</strong> Any surprising skill?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> I can almost read my patients’ minds.
          </p>

          <p>
            <strong>Devika:</strong> Wow, that’s an incredible skill to have as a doctor!
            Late-night Netflix or early morning workouts?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> Early morning workouts, always. I’ve never skipped
            one for Netflix.
          </p>

          <p>
            <strong>Devika:</strong> One influencer you’d like to collaborate with?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> I’d say Rujuta Diwekar. Her one-liners and approach
            to health make a lot of sense. Masala Lab is another great pick.
          </p>

          <p>
            <strong>Devika:</strong> Do you have a guilty pleasure snack?
          </p>

          <p>
            <strong>Dr. Chadha:</strong> Nothing that makes me feel guilty. If I feel guilty,
            I don’t eat it!
          </p>
          <p>
              <strong>Devika:</strong> That’s a strong mindset! Best compliment you’ve ever received?
            </p>

            <p>
              <strong>Dr. Chadha:</strong> “You’re the best doctor I’ve ever met.”
            </p>

            <p>
              <strong>Devika:</strong> That’s well-deserved! Do you have a hot take on the health industry?
            </p>

            <p>
              <strong>Dr. Chadha:</strong> It’s an industry—a business. People need to be very careful about who they listen to and 
              where they get their information. Everyone’s pushing content, but the authenticity and intent behind it 
              are often questionable.
            </p>

            <p>
              <strong>Devika:</strong> That’s a valid point. So, what are three things always in your work bag?
            </p>

            <p>
              <strong>Dr. Chadha:</strong> Water, earphones—for calls—and a pen.
            </p>

            <p>
              <strong>Devika:</strong> Most used emoji?
            </p>

            <p>
              <strong>Dr. Chadha:</strong> A simple smiley face.
            </p>

            <p>
              <strong>Devika:</strong> A song that always puts you in a good mood?
            </p>

            <p>
              <strong>Dr. Chadha:</strong> Recently, Guzah by Natania. It’s a beautiful song with an uplifting message.
            </p>

            <p>
              <strong>Devika:</strong> Favorite medical TV show?
            </p>

            <p>
              <strong>Dr. Chadha:</strong> Grey’s Anatomy.
            </p>

            <p>
              <strong>Devika:</strong> Lastly, any parting advice?
            </p>

            <p>
              <strong>Dr. Chadha:</strong> Don’t strive for perfection in health or lifestyle. Build sustainable habits, avoid 
              mindlessly popping supplements, and always consult a reliable expert before trying anything new.
            </p>

            <p>
              <strong>Devika:</strong> Thank you so much, Dr. Chadha! This was a wonderful and insightful conversation.
            </p>

            <p>
              <strong>Dr. Chadha:</strong> Thank you, Devika. It was a pleasure being here.
            </p>
            
    



           

        
            
            
            
            
            
           
            
          
            

            
           
    </Container>
           
            </Card.Body>
          
    </>
  );
};

export default Akshat ;
