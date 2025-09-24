import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const Arpit = () => {
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
              “Let’s stay focused.” That’s my favorite phrase. I keep telling everyone because it’s more than a word—it’s a theme, a mantra.
              </q>{" "}
              – <strong>Dr.Arpit Bansal</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/arpitArticle.png" // <-- second image here
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
    href="https://youtu.be/TVc93BIofMs"
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
    window.open("https://youtu.be/TVc93BIofMs", "_blank");
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
    window.open("https://youtu.be/TVc93BIofMs", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://youtu.be/TVc93BIofMs"
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
      src="/arpitConvo.png" // replace with your image path
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
          Some people practice medicine. Others transform it into a movement. Dr.Arpit Bansal is one of those rare voices who refuses to be boxed into titles. Surgeon, thinker, biohacker, storyteller — he wears them all, but with a single mission: to remind us that health is not just about survival, it’s about thriving.
In conversation with DevikaMajumder, Co-founder of Global Influencers Hub, Dr.Arpit opens up about a journey that blurs the lines between science and spirituality, discipline and flow. He talks about water as his superpower, about loss as a teacher, and about resilience as the muscle every human must build. He bridges Medicine 2.0 with Medicine 3.0, not as theory, but as lived practice.
This is not the story of a doctor in a white coat. This is the story of a man who dives into the depths — of health, nature, and the human spirit — and emerges with insights that challenge, heal, and inspire.

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
      src="/arpitRapid.mp4"
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
    <p><strong>Devika Majumder:</strong> Hi Dr. Arpit, welcome to Global Influencers Hub. Here we talk about the life journeys of social media influencers, and we cannot wait to deep dive into yours. What I mean by deep dive is actually taking you back to your childhood. So tell us about Arpit as a child.</p>

<p><strong>Dr. Arpit Bansal:</strong> I grew up in Allahabad. Both my parents were doctors, and my father was always my first hero because he was a surgeon like me. At that time, he was a very famous, bold surgeon who saved countless lives. Coincidentally, we lived inside our hospital—our home was just one floor above—so I grew up watching my father in action every day. I was always a curious child, constantly asking questions—why, how. My name also means “a giver,” literally “to offer,” and that defined me early on. I saw patients touch my father’s feet, calling him God because he saved their lives. That inspired me deeply and shaped my childhood.</p>

<p><strong>Devika:</strong> Wonderful. So walk us a little bit through that part of the journey. Give us some examples of the “what” and “how” questions as well—we would love to hear those during your early childhood.</p>

<p><strong>Dr. Arpit:</strong> As I mentioned, my father and mother started a family-run hospital. I was born in 1986, and the hospital was established in 1988—so just two years later. In Allahabad, which is a tier-3 city, the hospital grew as I grew, and the patient load kept increasing. At that time, UP had a bit of a criminal mindset in many areas, so we often received gunshot patients and trauma cases. My father would wake up early in the morning or late at night, perform massive surgeries, and save lives.</p>

<p><strong>Dr. Arpit:</strong> Many times, as a child, I would walk into the OT with him. He would make me wear a gown, and instead of being scared of blood, I was amazed by how someone critical could still be saved. To me, my father was truly like God, my idol. There was also a personal incident. Around class four, while playing with my brother, I got injured by glass. I still carry a big scar on my face and my right wrist. The glass pieces had cut into my hand, and I could literally see the nerves and arteries bleeding.</p>

<p><strong>Dr. Arpit:</strong> Coincidentally, both my parents were out of town in Lucknow that day. So I walked barefoot into the OT, pulled out a few glass pieces myself, and, though I was in shock, I don’t remember feeling pain. One of my father’s surgeon friends came and stitched my hand. Today, as a surgeon, I operate with the same right hand that carries that scar.</p>

<p><strong>Devika:</strong> Wow, so it’s in the blood.</p>
<p><strong>Dr. Arpit:</strong> Absolutely, I believe it’s in the blood. But ultimately, you also follow your own destiny. I feel the universe had chosen this path for me, and I am very happy with what I am today.</p>

<p><strong>Devika:</strong> So your childhood ambition was also to be a doctor?</p>
<p><strong>Dr. Arpit:</strong> Yes, medicine was always my dream. Seeing my father, I never really had a plan B. In early childhood, I did dream of becoming an astronaut for a while, but my attitude of wanting to help people always took over.</p>

<p><strong>Dr. Arpit:</strong> As I’ve grown as a doctor, I realized that I don’t just want to help people—I also want to help the planet, my Mother Earth. I openly say that nature has been my biggest teacher. During childhood, since we lived in a hospital, I had no outdoor activities. My mother noticed how stressful life around the hospital was, so she made a brilliant decision to send me to Mayo College, Ajmer, in class four. I stayed there for four years.</p>

<p><strong>Dr. Arpit:</strong> At Mayo, my connection with nature began. I discovered birdwatching and developed hobbies that truly changed me as a person. Before Mayo, I was very introverted. Coming back, I was more extroverted but deeply connected to nature. Over time, I realized I wanted to help not just people but also Mother Nature. That’s why today my journey includes surgery, but also concepts like Medicine 3.0, longevity, scuba diving, and birdwatching. Everything connects.</p>

<p><strong>Dr. Arpit:</strong> For instance, I see how the gut plays a central role. Most chronic issues begin in the gut. When medicine advanced, we developed antibiotics, but around the same time, we also developed pesticides, fertilizers, and chemicals. Both have destroyed biodiversity—inside us and on the planet. If we work to conserve both our gut microbiome and the planet’s biodiversity together—as one superorganism—we can remain healthy and also heal Earth. Humans are selfish, but they must realize that conserving biodiversity doesn’t just indirectly benefit them—it directly helps their survival.</p>

<p><strong>Devika:</strong> I think that’s a great message. Very powerful, of course. So tell us about the first time you were in the OT. What kind of feeling was that?</p>
<p><strong>Dr. Arpit:</strong> I remember clearly—my father was about to operate on a critical case. He asked me casually, “Do you want to come in?” I immediately said yes. The moment I walked into the OT, seeing the precision, the silence, and the atmosphere of hope come alive—I knew this was my path. I wasn’t scared of blood at all. In fact, I was excited. Perhaps because I had grown up watching my father, it felt natural. That moment sealed my destiny—I knew I belonged there.</p>

<p><strong>Devika:</strong> Wonderful, that is fantastic. So how old were you at that time?</p>
<p><strong>Dr. Arpit:</strong> I was in Class 5, so around maybe 8 or 9 years old.</p>

<p><strong>Devika:</strong> Wow, that’s amazing. A very fortunate kid, I must say. That’s wonderful. After your schooling, what happened? Did you go through the traditional path of becoming a doctor?</p>
<p><strong>Dr. Arpit:</strong> Correct. After my schooling, I did my 11th and 12th from DPS in Delhi. After that, I went to medical college in Mumbai. During my medical college years, laparoscopy was slowly gaining ground. My father was an open surgeon, and laparoscopy was just emerging during his peak years. I, on the other hand, loved technology, so I always wanted to stay updated. I am also a robotic-ready surgeon and have completed my robotic fellowship in the UK. My natural inclination to take on challenges pushed me towards areas most people are scared of.</p>

<p><strong>Dr. Arpit:</strong> That’s how I picked cancer as my specialization—because people often feel hopeless when they hear the word. But I believe this era is one of hope. Nobody should fear cancer today. What we need is awareness of our bodies. If you raise awareness at the cellular level, you can actually avoid it. Cancer is rooted in very basic imbalances, and if we work to achieve that awareness, we can also address lifestyle diseases for which traditional medicine doesn’t provide root-cause solutions—like diabetes, hypertension, obesity, Alzheimer’s, and other brain-related conditions.</p>

<p><strong>Dr. Arpit:</strong> Current medicine often just gives pills to suppress symptoms rather than targeting the root cause. That’s why I delved deeply into gut health—to heal at the root. You might have heard of Ayurveda or clinics that focus on diabetes reversal. Absolutely, they exist, and I have traveled the world studying this. I’ve been to Vegas, LA, and recently gave a keynote talk at one of Europe’s biggest biohacking and longevity summits. Over the past few years, I’ve been practicing root-cause medicine—working on reversing diabetes, obesity, and even addressing mental fog and anxiety through science-based hacks. What shocks me most is how young people, even 18- or 20-year-olds, often come to my clinic with gut-brain issues.</p>

<p><strong>Devika:</strong> Of course, a lot of people come to you with gut issues since you’re a gut specialist.</p>
<p><strong>Dr. Arpit:</strong> Yes, but when I dig deeper, they often reveal struggles with anxiety. And the first thing they’re given are anti-anxiety pills. While these medicines can save lives in some cases, I believe prescribing them to a 20- or 25-year-old without addressing the root cause is almost criminal. Many times, natural supplements like magnesium, which are harmless, work better.</p>
<p><strong>Devika:</strong> Absolutely. Could you expand a little more on what you mentioned earlier—about mental fog? It’s something very common globally.</p>
            <p><strong>Dr.Arpit:</strong> Yes, mental fog and anxiety are extremely common. They often begin when our inflammatory cycles get disrupted. We consume so many foods marketed as “superfoods”—like avocado or strawberries. And yes, they are superfoods, but whether they truly benefit you depends on your body’s inner ecosystem...</p>

            <p><strong>Devika:</strong> That’s fascinating. And since you mentioned youngsters, could you explain how lifestyle factors connect with mental fog?</p>
            <p><strong>Dr.Arpit:</strong> Yes. Today’s youngsters often party at night, disrupting natural cycles. But when nature designed us as hunter-gatherers, we rose with the sunrise and moved throughout the day...</p>

            <p><strong>Devika:</strong> That’s such a powerful reminder, and something all of us need to take more seriously. You were talking about how certain foods can be beneficial only for some people. Now, is there a way for someone to know if they fall into that group?</p>
            <p><strong>Dr.Arpit:</strong> There are two ways to find out. The first is through self-awareness. If you eat an avocado—or not just avocado, it could be milk or any other food—you should observe your body for the next 24 to 48 hours.If you’re truly aware, your body will give you signals. It might whisper instead of scream, but it will always tell you if something’s wrong. Pain, bloating, discomfort—these are subtle cues. But sadly, most people today are not that aware of their bodies, partly because nutrition deficiencies make these signs vague. Unless you ask the right questions and stay in sync with your biology, it’s hard to catch them.
That’s why I often say the hunter-gatherer approach is the best example. Back then, humans were fully in tune with their biology. We flowed with our breath and lived naturally. But that connection has been lost today.
</p>

            <p><strong>Devika:</strong> Exactly. Quick fixes don’t really work in the long run. Is there one patient story that has stayed with you?</p>
            <p><strong>Dr.Arpit:</strong> Yes, there is. During my early days, I had a young girl with colon cancer. She was only 25 or 26... I’ll never forget that hug—it’s etched in my memory forever.</p>

            <p><strong>Devika:</strong> That’s beautiful. I’m so glad you’re talking about the softer side of being a doctor too, because the mind-body connection is just as important.</p>
            <p><strong>Dr.Arpit:</strong> Absolutely.</p>

            <p><strong>Devika:</strong> What is one piece of advice you carry with you from a senior surgeon, your father, or anyone you looked up to?</p>
            <p><strong>Dr.Arpit:</strong> The most important advice I received—from my father and also from my HOD during my MS surgery days—was this: the moment you panic, your patient loses hope.A surgeon must remain balanced no matter what.</p>

            <p><strong>Devika:</strong> That’s incredible. What’s the most unexpected thing that has ever happened during a procedure?</p>
            <p><strong>Dr.Arpit:</strong> A few years back, I was performing a gallbladder surgery. The patient was extremely anxious, and while being given anesthesia, she suddenly began singing bhajans—Hanuman prayers. Suddenly, the OT felt like a bhajansandhya (prayer gathering). The entire atmosphere shifted. I even asked my anesthetist to play the Hanuman Chalisa so that she could relax better. It was an unusual, yet deeply moving moment of flow inside the OT.</p>

            <p><strong>Devika:</strong> That’s wonderful. Now, why do you call the gut the real MVP of our body?</p>
            <p><strong>Dr.Arpit:</strong> You must have heard the phrase “gut is the second brain.” But in my opinion, it’s even more powerful than that... For me, connecting these dots is one of the most fascinating parts of my journey.</p>

            <p><strong>Devika:</strong> That’s truly fascinating. Tell me, what’s your non-negotiable daily habit?</p>
            <p><strong>Dr.Arpit:</strong> Movement. Just as we eat daily and drink water daily, we must move daily... That singular focus takes me into flow naturally.</p>        
            <p><strong>Devika:</strong> Fantastic, Dr.Arpit. Is there a lifestyle hack you use that people would be surprised to know actually works wonders for the gut?</p>
            
            <div className=" py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Section - Text */}
          <Col xs={12} md={7} className="mb-4 mb-md-0">
            <p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "#1a1a1a" }}>
              <strong style={{ color: "#002366" }}>Dr.Arpit:</strong> One crazy thing that works for me is eating more fermented food. Gut health is highly personalized, but fermented foods are a biohack that give me a biodiversity boost. Being North Indian, I’ve grown up with a different food palette, yet I love South Indian food — especially fermented rice with curry leaves. Biodiversity in the gut is everything; we must conserve it to stay healthy. Probiotics are good, but even something as simple as curd provides 3–4 strains of healthy bacteria like Lactobacillus and Bifidobacterium. If you’re eating curd daily, continue doing so. But to get healthier, you must diversify your diet. Eat more chutneys, drink kanji in the summer, enjoy fermented beetroot drinks, eat cucumbers, and explore South Indian dishes. If you’re traveling, try kimchi or sauerkraut. Every fermented food brings in different beneficial bacteria. Curd is my all-time favorite food, but the real secret is keeping your fermented food choices diverse. That’s my biggest gut hack.
            </p>
          </Col>

          {/* Right Section - Image */}
          <Col xs={12} md={5} className="text-center">
            <Image
              src="/arpitArticle2.jpg" // <-- your second image
              alt="Preetha"
              fluid
              rounded
              style={{ maxHeight: "320px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </div>

            
            
            
            
            
            
            <p><strong></strong> </p>

            <p><strong>Devika:</strong> That’s a great takeaway on gut diversity. Now, if you had to give another TEDx talk, what would the topic be?</p>
            <p><strong>Dr.Arpit:</strong> I’d call it “Biohack Your Inner Ocean — The Blue Mind Code.” I’m just going with the flow, but the idea is to dive deep into balancing our inner states.</p>

            <p><strong>Devika:</strong> Interesting. If the human body is a universe, which part fascinates you the most?</p>
            <p><strong>Dr.Arpit:</strong> The vagus nerve — the gut-brain connection nerve. It’s like a spiritual WiFi connecting the mind, body, and emotions. Mastering the vagal nerve is like mastering your gut feeling. I track this through wearables like the Oura ring, Ultrahuman ring, Apple Watch, and WHOOP band. I’m a biohacker, but I do it with a calm mindset — what I call the “blue mind,” not the stressed “red mind.” After all, you can’t improve what you don’t measure. For context, our nervous system is divided into voluntary and involuntary. The involuntary is further split into sympathetic (stress, activity — the red mind) and parasympathetic (calm, rest, digest — the blue mind). Most people today live in the red mind — constantly triggered by notifications, financial pressures, and daily stress. That’s why balancing it with blue mind activities is crucial. Sympathetic mode isn’t bad — it gives us focus and alertness when needed. But living there constantly creates burnout. That’s why I practice underwater meditation and ice baths to balance resilience. It’s all measured by heart rate variability. If this feels like a lot of science, listeners may even want to play this interview twice to take notes — it’s worth exploring further.</p>

            <p><strong>Devika:</strong> That’s such an eye-opening perspective. When you’re not saving lives or teaching gut science, where can we usually find you?</p>
            <p><strong>Dr.Arpit:</strong> In nature — scuba diving underwater, walking or running barefoot, hugging trees, or meditating in the wild. I’m deeply spiritual, but not religious. I find the same vibration in a mosque, a church, or a temple. I respect all Hindu gods — Shivji is my favorite — but my biggest teacher has always been Nature.</p>

            <p><strong>Devika:</strong> Shivji is my favorite too. So tell me, what are the three apps you use most often?</p>
            <p><strong>Dr.Arpit:</strong> Apple Podcasts, Apple Notes, and Duolingo — because I’m constantly working on my neuroplasticity. I also use Audible a lot, since I love listening to books while running or traveling. It helps me maximize my time.</p>

            <p><strong>Devika:</strong> That’s inspiring. Now, what’s one health myth you wish people would stop believing?</p>
            <p><strong>Dr.Arpit:</strong> The idea that you need milk for calcium or strong bones. Milk can be good, but today most of it comes from processed sources and cows injected with hormones. Unless it’s organic, over-reliance on milk isn’t healthy. Nature is the true healer — green leafy vegetables, morning sunlight, and spending time outdoors give far more benefit. A morning walk in nature brings optical flow and natural rhythm back into life.</p>

            <p><strong>Devika:</strong> That really changes the way we look at health. Tell me, what’s your guilty pleasure food when you’re working late nights as a doctor?</p>
            <p><strong>Dr.Arpit:</strong> Dark chocolate with sea salt — it’s my gut-friendly indulgence.</p>

            <p><strong>Devika:</strong> I love that! And if your life were a Netflix series, what would it be called?</p>
            <p><strong>Dr.Arpit:</strong> “The Aquaman Biohacker.” I call myself that, and many people across the globe do too. Another title could be “Flow State Chronicles.” Recently, I even used AI to create my own biohacking song in just two hours. It’s called “Go With the Flow” and is available on Apple Music and Spotify.</p>

            <p><strong>Devika:</strong> That’s amazing! We’ll look it up and share it here as well. Now, you’ve had over 15 years in this field. What’s been the most fulfilling part of your journey?</p>
            <p><strong>Dr.Arpit:</strong> Seeing patients not just cured, but transformed. Many still come expecting quick fixes with medicines, but I prefer root-cause treatment for those willing to commit. I’ve helped people reverse diabetes, IBS, even cancers by combining medical treatment with nature-based healing and lifestyle changes. When patients return with renewed health and inspiration — that’s my greatest satisfaction.</p>

            <p><strong>Devika:</strong> That’s truly moving, Dr.Arpit. What’s that one message you would give to a young medical student or aspiring surgeon?</p>
            <p><strong>Dr.Arpit:</strong> Always be inspired. Always nurture your curiosity—you’ve probably heard me say this a lot because curiosity drives passion, and passion drives motivation. Be a doctor, be a surgeon if that’s what you truly want. Don’t force it, and don’t choose a field just because it’s easier or more profitable. Follow your intuition. It won’t scream, but it will always whisper the right answer if you listen.</p>

            <p><strong>Devika:</strong> That’s such a profound message, and I can sense your spiritual side reflecting in it as well. Since you’re such a spiritual person, what’s something you would tell your younger self today?</p>
            <p><strong>Dr.Arpit:</strong> I’d just stand next to my younger self and say, “Dude, we did it. We’re actually living the life of our dreams.”</p>

            <p><strong>Devika:</strong> That’s beautiful. Now, let’s move on to our comments reading segment, where we go through some fun reactions from your reels and posts.</p>
          

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
          Rapid Fire with Arpit
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
            src="/arpitRapid.mp4" // <-- use your vertical video file
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

            
            
            
            
            
            <p><strong>Devika:</strong> Now, let’s jump into some rapid fire. What’s the most used phrase in the OT?</p>
            <p><strong>Dr.Arpit:</strong> “Let’s stay focused.” That’s my favorite phrase. I keep telling everyone because it’s more than a word—it’s a theme, a mantra. I use it to keep my team grounded and focused, even in the most intense moments.</p>

            <p><strong>Devika:</strong> That’s incredible. And one wellness trend you secretly love?</p>
            <p><strong>Dr.Arpit:</strong> No doubt, cold plunges, ice baths, and these biohacking glasses. They’re trendy, sure, but I don’t use them just because they look cool. For example, during interviews like this, there’s a lot of screen light. Post-sunset, I wear blue-light-blocking glasses to protect my eyes and stay in sync with my biology. Back in the hunter-gatherer days, humans would wake with the sunrise and sleep after sunset. Following this rhythm naturally supports metabolism and enhances sleep quality. Yes, it may cost a little, but it’s worth it.</p>

            <p><strong>Devika:</strong> You just mentioned ice plunges. I’m curious—do you follow something like Wim Hof, or do you have your own method?</p>
            <p><strong>Dr.Arpit:</strong> I met Wim Hof’s daughter, Laura, at a conference. But I’ve created my own hack. Typical ice baths with purchased ice are not energy-efficient; the ice melts, and it’s environmentally wasteful. Some spas use ice chillers, but they cost around three lakh rupees. So I devised my own method: I use a Dycon or Godrej chest freezer—similar to a commercial ice cream freezer—fill it with water, surround it with ice, and use it as an ice bath. I vary the water temperatures—some days zero degrees, some days two degrees—to challenge my body and mind. I even combine it with infrared sauna sessions at home. This has been a core part of my recovery protocol for a couple of years, and it’s truly changed the game for me. I was always an overachiever, always multitasking, constantly running in my mind. What ice baths have taught me goes beyond physical recovery—though those benefits are huge—they’ve built my mental, emotional, and spiritual resilience.</p>
            <p><strong>Devika:</strong> Fantastic, Dr.Arpit. Is there a lifestyle hack you use that people would be surprised to know actually works wonders for the gut?</p>
            <p><strong>Dr.Arpit:</strong> One crazy thing that works for me is eating more fermented food. Gut health is highly personalized, but fermented foods are a biohack that give me a biodiversity boost. Being North Indian, I’ve grown up with a different food palette, yet I love South Indian food — especially fermented rice with curry leaves. Biodiversity in the gut is everything; we must conserve it to stay healthy. Probiotics are good, but even something as simple as curd provides 3–4 strains of healthy bacteria like Lactobacillus and Bifidobacterium. If you’re eating curd daily, continue doing so. But to get healthier, you must diversify your diet. Eat more chutneys, drink kanji in the summer, enjoy fermented beetroot drinks, eat cucumbers, and explore South Indian dishes. If you’re traveling, try kimchi or sauerkraut. Every fermented food brings in different beneficial bacteria. Curd is my all-time favorite food, but the real secret is keeping your fermented food choices diverse. That’s my biggest gut hack.</p>

            <p><strong>Devika:</strong> That’s a great takeaway on gut diversity. Now, if you had to give another TEDx talk, what would the topic be?</p>
            <p><strong>Dr.Arpit:</strong> I’d call it “Biohack Your Inner Ocean — The Blue Mind Code.” I’m just going with the flow, but the idea is to dive deep into balancing our inner states.</p>

            <p><strong>Devika:</strong> Interesting. If the human body is a universe, which part fascinates you the most?</p>
            <p><strong>Dr.Arpit:</strong> The vagus nerve — the gut-brain connection nerve. It’s like a spiritual WiFi connecting the mind, body, and emotions. Mastering the vagal nerve is like mastering your gut feeling. I track this through wearables like the Oura ring, Ultrahuman ring, Apple Watch, and WHOOP band. I’m a biohacker, but I do it with a calm mindset — what I call the “blue mind,” not the stressed “red mind.” After all, you can’t improve what you don’t measure. For context, our nervous system is divided into voluntary and involuntary. The involuntary is further split into sympathetic (stress, activity — the red mind) and parasympathetic (calm, rest, digest — the blue mind). Most people today live in the red mind — constantly triggered by notifications, financial pressures, and daily stress. That’s why balancing it with blue mind activities is crucial. Sympathetic mode isn’t bad — it gives us focus and alertness when needed. But living there constantly creates burnout. That’s why I practice underwater meditation and ice baths to balance resilience. It’s all measured by heart rate variability. If this feels like a lot of science, listeners may even want to play this interview twice to take notes — it’s worth exploring further.</p>

            <p><strong>Devika:</strong> That’s such an eye-opening perspective. When you’re not saving lives or teaching gut science, where can we usually find you?</p>
            <p><strong>Dr.Arpit:</strong> In nature — scuba diving underwater, walking or running barefoot, hugging trees, or meditating in the wild. I’m deeply spiritual, but not religious. I find the same vibration in a mosque, a church, or a temple. I respect all Hindu gods — Shivji is my favorite — but my biggest teacher has always been Nature.</p>

            <p><strong>Devika:</strong> Shivji is my favorite too. So tell me, what are the three apps you use most often?</p>
            <p><strong>Dr.Arpit:</strong> Apple Podcasts, Apple Notes, and Duolingo — because I’m constantly working on my neuroplasticity. I also use Audible a lot, since I love listening to books while running or traveling. It helps me maximize my time.</p>

            <p><strong>Devika:</strong> That’s inspiring. Now, what’s one health myth you wish people would stop believing?</p>
            <p><strong>Dr.Arpit:</strong> The idea that you need milk for calcium or strong bones. Milk can be good, but today most of it comes from processed sources and cows injected with hormones. Unless it’s organic, over-reliance on milk isn’t healthy. Nature is the true healer — green leafy vegetables, morning sunlight, and spending time outdoors give far more benefit. A morning walk in nature brings optical flow and natural rhythm back into life.</p>

            <p><strong>Devika:</strong> That really changes the way we look at health. Tell me, what’s your guilty pleasure food when you’re working late nights as a doctor?</p>
            <p><strong>Dr.Arpit:</strong> Dark chocolate with sea salt — it’s my gut-friendly indulgence.</p>

            <p><strong>Devika:</strong> I love that! And if your life were a Netflix series, what would it be called?</p>
            <p><strong>Dr.Arpit:</strong> “The Aquaman Biohacker.” I call myself that, and many people across the globe do too. Another title could be “Flow State Chronicles.” Recently, I even used AI to create my own biohacking song in just two hours. It’s called “Go With the Flow” and is available on Apple Music and Spotify.</p>

            <p><strong>Devika:</strong> That’s amazing! We’ll look it up and share it here as well. Now, you’ve had over 15 years in this field. What’s been the most fulfilling part of your journey?</p>
            <p><strong>Dr.Arpit:</strong> Seeing patients not just cured, but transformed. Many still come expecting quick fixes with medicines, but I prefer root-cause treatment for those willing to commit. I’ve helped people reverse diabetes, IBS, even cancers by combining medical treatment with nature-based healing and lifestyle changes. When patients return with renewed health and inspiration — that’s my greatest satisfaction.</p>

            <p><strong>Devika:</strong> That’s truly moving, Dr.Arpit. What’s that one message you would give to a young medical student or aspiring surgeon?</p>
            <p><strong>Dr.Arpit:</strong> Always be inspired. Always nurture your curiosity—you’ve probably heard me say this a lot because curiosity drives passion, and passion drives motivation. Be a doctor, be a surgeon if that’s what you truly want. Don’t force it, and don’t choose a field just because it’s easier or more profitable. Follow your intuition. It won’t scream, but it will always whisper the right answer if you listen.</p>

            <p><strong>Devika:</strong> That’s such a profound message, and I can sense your spiritual side reflecting in it as well. Since you’re such a spiritual person, what’s something you would tell your younger self today?</p>
            <p><strong>Dr.Arpit:</strong> I’d just stand next to my younger self and say, “Dude, we did it. We’re actually living the life of our dreams.”</p>

            <p><strong>Devika:</strong> That’s beautiful. Now, let’s move on to our comments reading segment, where we go through some fun reactions from your reels and posts.</p>
            <p>(This segment is exclusively available on our YouTube channel, where Dr.Arpit’s full interview is posted. Don’t miss out—head over to YouTube and watch it there!)</p>

            <p><strong>Devika:</strong> Now, let’s jump into some rapid fire. What’s the most used phrase in the OT?</p>
            <p><strong>Dr.Arpit:</strong> “Let’s stay focused.” That’s my favorite phrase. I keep telling everyone because it’s more than a word—it’s a theme, a mantra. I use it to keep my team grounded and focused, even in the most intense moments.</p>

            <p><strong>Devika:</strong> That’s incredible. And one wellness trend you secretly love?</p>
            <p><strong>Dr.Arpit:</strong> No doubt, cold plunges, ice baths, and these biohacking glasses. They’re trendy, sure, but I don’t use them just because they look cool. For example, during interviews like this, there’s a lot of screen light. Post-sunset, I wear blue-light-blocking glasses to protect my eyes and stay in sync with my biology. Back in the hunter-gatherer days, humans would wake with the sunrise and sleep after sunset. Following this rhythm naturally supports metabolism and enhances sleep quality. Yes, it may cost a little, but it’s worth it.</p>

            <p><strong>Devika:</strong> You just mentioned ice plunges. I’m curious—do you follow something like Wim Hof, or do you have your own method?</p>
            <p><strong>Dr.Arpit:</strong> I met Wim Hof’s daughter, Laura, at a conference. But I’ve created my own hack. Typical ice baths with purchased ice are not energy-efficient; the ice melts, and it’s environmentally wasteful. Some spas use ice chillers, but they cost around three lakh rupees. So I devised my own method: I use a Dycon or Godrej chest freezer—similar to a commercial ice cream freezer—fill it with water, surround it with ice, and use it as an ice bath. I vary the water temperatures—some days zero degrees, some days two degrees—to challenge my body and mind. I even combine it with infrared sauna sessions at home. This has been a core part of my recovery protocol for a couple of years, and it’s truly changed the game for me. I was always an overachiever, always multitasking, constantly running in my mind. What ice baths have taught me goes beyond physical recovery—though those benefits are huge—they’ve built my mental, emotional, and spiritual resilience.</p>
            <p><strong>Devika:</strong> That’s powerful.</p>
            <p><strong>Dr.Arpit:</strong> Absolutely. If you do ice baths regularly, maybe five times a week, it’s like choosing your pain. If you choose your pain, you master it. Then you master resilience. That’s a very, very powerful lesson.</p>

            <p><strong>Devika:</strong> If you choose your pain, you master it. I love that. Fantastic. Scrubs or suits?</p>
            <p><strong>Dr.Arpit:</strong> Scrubs. Suits don’t save lives.</p>

            <p><strong>Devika:</strong> True. What’s a weird question that was asked by one of your patients?</p>
            <p><strong>Dr.Arpit:</strong> One patient actually asked me, “Can you put a six-pack in my abdomen after surgery?”</p>

            <p><strong>Devika:</strong> Haha! Wow, that’s a good one. And what did you say?</p>
            <p><strong>Dr.Arpit:</strong> Obviously, no. It doesn’t work like that.</p>

            <p><strong>Devika:</strong> I see. And what’s your superpower?</p>
            <p><strong>Dr.Arpit:</strong> My superpower is water. That’s why I call myself the Aquaman Biohacker. Water teaches so many lessons in life. Whenever you face difficulties, just be like water. If there’s an obstacle, water keeps flowing. If there are three paths, it distributes itself among them. That’s my main superpower.</p>

            <p><strong>Devika:</strong> That’s beautiful. Rewind button or pause?</p>
            <p><strong>Dr.Arpit:</strong> Always pause. Rewind takes you back to an overthinking mind, where you dwell on what you cannot change. Pausing lets you soak in gratitude—gratitude for life, for our breath, for being alive.</p>

            <p><strong>Devika:</strong> Absolutely. Have you ever cried after a case?</p>
            <p><strong>Dr.Arpit:</strong> Definitely. When I lost one of my young patients, I cried. Over time, I’ve become more emotionally resilient, so I don’t show my emotions outwardly all the time. But when I feel deeply connected to nature, I still get goosebumps—and sometimes I even cry during my runs.</p>

            <p><strong>Devika:</strong> That makes sense. A spiritual person’s connection with nature is so profound. Now, if you could invent any medical device, what would it be?</p>
            <p><strong>Dr.Arpit:</strong> Aqua lungs. I’m genuinely thinking about working on something that allows us to breathe underwater.</p>

            <p><strong>Devika:</strong> Interesting! Who’s your go-to person for grounding advice?</p>
            <p><strong>Dr.Arpit:</strong> My daughter. She’s eight years old. And of course, my ice bath is another grounding tool for me.</p>

            <p><strong>Devika:</strong> A moment that tested your patience, but you’re grateful for it?</p>
            <p><strong>Dr.Arpit:</strong> Covid. Surgeries were difficult during the pandemic, and it tested everyone’s patience. But that period helped me start building resilience. Those were formative years for me.</p>

            <p><strong>Devika:</strong> And what’s next for Dr.Arpit?</p>
            <p><strong>Dr.Arpit:</strong> Keep going with the flow, changing the world, and being a bridge between Medicine 2.0 and 3.0. I want to connect more people to nature and biohacking. There’s also a book coming up—but I don’t want to reveal too much yet.</p>

            <p><strong>Devika:</strong> That’s fine. Just by talking to you, I can tell that’s definitely the next step.</p>
            <p><strong>Dr.Arpit:</strong> Absolutely, I’m already on it.</p>

            <p><strong>Devika:</strong> Arpit, it’s been such a pleasure talking to you today. I think we’ve covered so much, and if there’s anything else, our team will reach out.</p>
            <p><strong>Dr.Arpit:</strong> Sure.</p>

            <p><strong>Devika:</strong> Before we wrap up, how was your experience talking to Global Influencers Hub?</p>
            <p><strong>Dr.Arpit:</strong> It was a very interactive and flowing session. I’m happy to be associated with Global Influencers Hub. I think this is just our start. This interview is not just a one-off thing—it’s the beginning of something bigger. I always believe in universal synchronicities, and I’m a very, very busy person. I usually say yes to a lot of things, but sometimes when I’m really busy, it doesn’t work out. So, I believe that if things do work out, they are meant to be. There are bigger things involved—maybe opening a company together, or creating small moments that bring smiles to people. Even small actions can be significant. This is what makes collaborations meaningful.</p>

            <p><strong>Devika:</strong> That’s wonderful. You just made my day! It’s been lovely talking to you. All the best in everything you do, and big hugs to your daughter.</p>
            <p><strong>Dr.Arpit:</strong> Thank you so much.</p>
            <p><strong>Devika:</strong> Take care!</p>

            
            
          
            

            
           
    </Container>
           
            </Card.Body>
          
    </>
  );
};

export default Arpit ;
