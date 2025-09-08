import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const AakashShukla = () => {
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
              Listen more than you talk. Observe before you speak.
              </q>{" "}
              – <strong>Aakash Shukla</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/aakashShuklaArticle.png" // <-- second image here
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
    href="https://youtu.be/KqfT6xMd8lY"
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
    window.open("https://youtu.be/KqfT6xMd8lY", "_blank");
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
    window.open("https://youtu.be/KqfT6xMd8lY", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://youtu.be/KqfT6xMd8lY"
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
      src="/aakashShuklaConvo.jpg" // replace with your image path
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
            What began as a childhood curiosity turned into a mission of compassion and communication. Raised in a family that valued academics over animals, Aakash carved his own path — one paw print at a time. From decoding his rescued dog’s trauma to gaining global recognition as a canine behaviour expert, his story is not just about dog training — it’s about empathy, healing, and building bridges between species. In this heart-to-heart with Devika Majumder, Co-founder of Global Influencers Hub, Aakash opens up about his early days, biggest challenges, and the purpose-driven journey that transformed not just dogs, but the humans who love them.
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
      src="/aakashShuklaArticleVideo.mp4"
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
    <p><strong>Devika Majumder:</strong> Hi Aakash! Welcome to Global Influencers Hub.</p>
            <p>Here, we talk about the life journeys of social media influencers — and we can’t wait to deep dive into yours.</p>
            <p>And when I say deep dive, I mean right back to your childhood. So let’s start from the beginning. Tell us — what were those early years like?</p>

            <p><strong>Aakash Shukla:</strong> Thanks, Devika. Happy to be here.</p>
            <p>So, about my childhood... It’s interesting because if you look at my parents, you'd never guess I’d end up working with dogs. My mom and dad? They’re not particularly dog people. I’d say neutral at best — like, “Okay, you’ve got a dog? Cool.” But that’s it.</p>
            <p>But the real shift happened because of someone special — I’ll get to her later. She was the reason this journey even started. When she passed, my mom actually stopped being indifferent. That emotional connection kicked in. But still, if I ever said, “Let’s adopt another dog,” they wouldn’t. That wasn’t them.</p>
            <p>But on my mother’s side, especially my Massi, it’s a different world. She’s always been obsessed with dogs. Same with many relatives from that side of the family.</p>

            <p><strong>Devika:</strong> Ah — so the maternal line was where the “crazy dog love” gene came from?</p>

            <p><strong>Aakash:</strong> Exactly! And here’s the wild part — I was born right here in Sawantwadi, where I’m sitting right now. This is my mom’s hometown. We’ve got a deep connection to this place.</p>
            <p>Back when my mom and Massi were unmarried, they rescued a tiny Indie puppy, barely a week old. It was during peak monsoon. They found him under the car parked in our garage. The ignition had just started when they heard soft whimpering... no mother in sight. The pup had been left behind.</p>

            <p><strong>Devika:</strong> Oh wow. That must’ve been heartbreaking.</p>

            <p><strong>Aakash:</strong> It was. But they didn’t give up. There were no vets or facilities around, so they fed him with cotton dipped in diluted milk, did everything they could. That pup lived for 14–15 beautiful years.</p>
            <p>And by the time I was born, he was already in his final years. I don’t have a clear memory of him, but I’ve been told — he’d guard my crib. He would be around me, watching over me in his own silent way. Not aggressive, just protective. That... leaves a mark, even if you don’t realize it at the time.</p>

            <p><strong>Devika:</strong> That’s surreal. And the fact that you see it as more than a coincidence — it speaks volumes about how deeply this connection is rooted. So that was your subconscious beginning?</p>

            <p><strong>Aakash:</strong> Yeah, I think that’s where it all began. That imprint — it stayed.</p>

            <p><strong>Devika:</strong> So, when did that love become something you wanted to turn into a career?</p>

            <p><strong>Aakash:</strong> That’s where it gets interesting. See, I come from a very academically-driven family. We’ve got doctors, engineers, even scientists. The usual path was clear: finish education, pursue a “respectable” profession.</p>
            <p>So, being a dog behaviourist? That wasn’t even on the map. It was seen as more of a hobby, a quirky passion, not something you build a career on.</p>

            <p><strong>Devika:</strong> Totally get that. It’s unconventional.</p>

            <p><strong>Aakash:</strong> Exactly. But around 13–14 years ago, that changed. It started with my dog, Sweetie — the one who shifted everything. She was rescued by a relative near a temple. They said, “You love dogs so much, take her.” I was already feeding strays around that time, buying those mildly sweet dog biscuits — basically human biscuits with less sugar — and just playing with them.</p>

            <p><strong>Devika:</strong> You must’ve been really young.</p>

            <p><strong>Aakash:</strong> Yeah, around 11 or 12. And they probably thought, “Okay, he’s old enough now.” So Sweetie came home. But one day, she had a minor accident — a scooter ran over her paw. The injury wasn’t serious, but the trauma was huge. She stopped stepping out. Wouldn’t even leave the house. We were clueless.</p>
            <p>Before that, I used to watch dog training videos on YouTube — we’d just gotten internet. I had this belief that dogs talk. Not like us, but in their own way. And I was obsessed with figuring that out.</p>

            <p><strong>Devika:</strong> That’s such a pure curiosity. Most kids would stop at “cute dog,” but you were trying to decode language.</p>

            <p><strong>Aakash:</strong> Haha, exactly! And with Sweetie’s trauma, I knew I had to do something. We tried trainers — one used a stick to force her to walk. They didn’t hit her, but it was fear-based training. It made things worse.</p>

            <p><strong>Devika:</strong> Oh no. That’s heartbreaking.</p>

            <p><strong>Aakash:</strong> It was. I now understand that pressure and release are part of the process — but fear? Never. Another trainer came, from a reputed place. But they gave up, saying she wasn’t food-motivated and might never improve. They suggested medication — antidepressants for a four-month-old puppy. And my parents, being doctors, said no way. I agreed.</p>
            <p>I had this image — walking her, running with her on this new jogging track near our home, having a social life with her. And now she wouldn’t even walk.</p>
            <p>So I started researching, hunting for alternatives. I didn’t find much at first. But one day, at my cousin’s house in Mumbai, we were randomly watching a video on aggressive dog breeds. And there he was — Cesar Millan.</p>
            <p><strong>Devika:</strong> The Dog Whisperer himself!</p>
            <p><strong>Aakash:</strong> Yup! The episode was about the world’s most aggressive breeds. But at the end, Cesar appears and says something that has stayed with me forever: <em>“No breed is aggressive. It’s the human behind it all.”</em> That one line? It hit different. And that’s where this journey truly took shape.</p>

            <p><strong>Devika:</strong> Wow. That must’ve been a seismic shift for you — mentally, emotionally...</p>
            <p><strong>Aakash:</strong> It really was. It turned my entire perspective upside down. I remember watching that episode and thinking — What is this person even saying? It was radical.</p>

            <p><strong>Devika:</strong> And I’m guessing no one around you was talking about this kind of stuff?</p>
            <p><strong>Aakash:</strong> Not at all. Back then — especially in India — the entire conversation around dogs was, “The dog has to behave,” or “The dog needs to be trained.” No one was talking about our role as humans — how we were miscommunicating, how unfulfilled needs were being ignored, how pack dynamics work, how dogs teach and regulate each other. That one video sent me down the rabbit hole. I spent the next 8 to 10 months completely immersed in research. I downloaded everything I could find — Cesar’s workshops, articles, case studies — and just absorbed.</p>

            <p><strong>Devika:</strong> That’s remarkable. You were just a kid at this point?</p>
            <p><strong>Aakash:</strong> Yeah, I was still a teen. No formal training. Just curiosity and commitment. I began testing the theories myself — I started volunteering locally. Walking dogs. Observing them. Taking notes. Trying to see if what I was learning actually aligned with real behaviour. And slowly... the pieces began falling into place.</p>

            <p><strong>Devika:</strong> And you saw the missing puzzle piece was… another dog?</p>
            <p><strong>Aakash:</strong> Exactly. Sweetie, my first dog, had hit a psychological dead end. I realized she needed a pack influence — another dog to model behaviour and help her heal. So I brought in Lucky.</p>

            <p><strong>Devika:</strong> That’s such a beautiful name.</p>
            <p><strong>Aakash:</strong> He really was lucky for us. A friend’s Labrador had a litter. Back then, I didn’t know what I now do about ethical breeding and temperament testing. But I intuitively knew what energy I was looking for. Sweetie was medium to high energy and a little sensitive. So I chose a pup who was calm, playful, gentle. The moment they met, there was hesitation, sure. But also curiosity. And within two weeks… best friends.</p>

            <p><strong>Devika:</strong> That’s incredible.</p>
            <p><strong>Aakash:</strong> Yeah. Like they were meant to meet. It was as if she found emotional safety in him. Within four to five months of Lucky’s arrival… something magical happened. Sweetie stepped outside.</p>

            <p><strong>Devika:</strong> Wait — she literally started walking again?</p>
            <p><strong>Aakash:</strong> Yes! She started enjoying her walks. I tethered her leash to his, and together they’d walk. He’d lead the way. She’d follow. I was just holding the other end of the leash, quietly witnessing this transformation.</p>

            <p><strong>Devika:</strong> That’s a love story in itself.</p>
            <p><strong>Aakash:</strong> It is. A silent one — but profound. And people in our neighbourhood started noticing. They had seen me struggle with her. Suddenly, they saw Sweetie walking freely beside another dog. They came up to me: “What did you do?”</p>

            <p><strong>Devika:</strong> And this is when people started seeing you as… someone who could actually help?</p>
            <p><strong>Aakash:</strong> Yeah. They saw a transformation they didn’t think was possible. And I realized — it wasn’t about training tools, it was about approach. She didn’t need correction — she needed companionship. And when I couldn’t be that for her emotionally, Lucky stepped in.</p>

            <p><strong>Devika:</strong> That’s so moving, Aakash. Truly. And through that, your journey as a behaviourist truly began?</p>
            <p><strong>Aakash:</strong> Absolutely. Though I did try reaching out to professionals in India at the time — but almost everyone had a fixed mindset. They were dismissive of Cesar Millan. I don’t follow one ideology blindly even today. But I didn’t appreciate how quickly they shut it down. That didn’t sit well with me.</p>

            <p><strong>Devika:</strong> So you’ve always been more open-minded — taking what works and discarding what doesn’t?</p>
            <p><strong>Aakash:</strong> Yes. Even now, if someone from a completely different school of thought comes to me with a valid idea, I’ll try it. If it works, I integrate it. Because at the end of the day, it’s not about ego — it’s about what helps the dog.</p>

            <p><strong>Devika:</strong> And that — that right there — is what makes your journey so different. You’re not just a dog trainer. You’re a listener. A translator. A bridge between species.</p>
            <p><strong>Aakash:</strong> Thank you. That means a lot. Because honestly, I feel like we don’t “train” dogs. We just rebuilt trust.</p>

            <p><strong>Devika:</strong> So, Aakash — that beautiful transformation with Sweetie… is that when people started reaching out for help?</p>
            <p><strong>Aakash:</strong> Absolutely. That’s when people began asking, “What did you do?”, “Whom did you approach?” And the number one issue people brought up — and still bring up — is leash pulling. Most pet parents don’t know how to walk their dogs properly. They think it’s just about putting on a leash and heading out. But if the dog is constantly pulling, it creates discomfort, not just physically but mentally. Especially in high-traffic areas, this constant tug creates agitation, opposition reflex, and confusion.</p>
            <p><strong>Devika:</strong> And people don’t realize that even tools like harnesses, if used incorrectly, can add to the problem, right?</p>
            <p><strong>Aakash:</strong> Exactly. Harnesses can actually amplify the dog’s pulling behaviour if the communication isn’t right. And that’s what I began helping people understand — all on a pro bono basis, by the way. No formal business, no fees. I was still just a teenager. I just… loved doing it.</p>

            <p><strong>Devika:</strong> That’s amazing. You were literally walking into people’s homes saying, “Your dog’s barking — want me to help?”</p>
            <p><strong>Aakash:</strong> Haha, yes! I was just this 13- or 14-year-old kid. Some people were sceptical. But most were like, “Let the kid try.” And many of them saw results.</p>

            <p><strong>Aakash:</strong> Soon, I started volunteering with local NGOs during school vacations. That gave me even more hands-on experience. But professionally, I was pursuing something else entirely — I went to college for hotel management.</p>

            <p><strong>Devika:</strong> Oh wow, that’s a sharp turn!</p>
            <p><strong>Aakash:</strong> Yeah. I was about to join the Oberoi’s management training program when lockdown hit. Everything came to a standstill. The offer was paused indefinitely.</p>

            <p><strong>Aakash:</strong> I was home, passing time, watching Netflix, not knowing what to do with myself. My nani — who was living with us — looked at me one day and said, “Do something with your time. What about that page you had on Facebook — 'Aggressive Dog’?”</p>

            <p><strong>Aakash:</strong> She remembered it! I used to do small consultations there, charging ₹500 to ₹1000. She told me, “Start it again.” And I did.</p>

            <p><strong>Devika:</strong> And that’s how Dog Mantra was born?</p>
            <p><strong>Aakash:</strong> Yes! I rebranded the page as Dog Mantra, launched a fresh Instagram profile, and restarted the journey.</p>

            <p><strong>Aakash:</strong> Then came another wave of learning. I spent the rest of the lockdown diving deep again — reading the latest research, watching new training models, brushing up on global trends. I had a lot of older footage and content I had documented, so I began creating YouTube videos, posts, and started offering online consultations.</p>

            <p><strong>Devika:</strong> And people were open to online dog training?</p>
            <p><strong>Aakash:</strong> Surprisingly, yes. At that point, everyone was desperate for solutions — and most were willing to try anything.</p>

            <p><strong>Aakash:</strong> I had no experience with online training, but I knew this: dog training is really about people training. And that I could do via video call.</p>

            <p><strong>Aakash:</strong> So I’d sit like this — just like we’re talking — and guide them step-by-step. As long as they had a stable internet connection and were open to learning, we made it work.</p>

            <p><strong>Devika:</strong> That’s so resourceful — and brave, honestly. And when did it become officially official?</p>
            <p><strong>Aakash:</strong> As the lockdowns eased, I started going for in-person sessions again. Then came the second lockdown, and again we pivoted to online. Finally, in 2021, I decided to formalize everything. We got Dog Mantra registered under the Government of Maharashtra. And in 2022, we earned professional membership with the International Association of Canine Professionals (IACP). That’s when it became clear — I wasn’t doing this on the side anymore. This was my life’s work.</p>

            <p><strong>Devika:</strong> What was your family’s reaction? Were they supportive of the switch?</p>
            <p><strong>Aakash:</strong> They were always supportive in their own way — never pressurizing me into something. But of course, as parents — and me being an only child — they had their concerns. It’s not a conventional career path, especially in India. But once they saw that I was not only passionate, but also earning and building a reputation, they relaxed. Now they’re completely on board.</p>

            <p><strong>Devika:</strong> Love that. Okay — so tell us… what does a typical day in Aakash’s life look like?</p>
            <p><strong>Aakash:</strong> That depends on whether I’m training or creating content. When I’m in Bombay, a regular training day starts early — around 5 or 6 AM — if I have morning sessions. I used to do 5–6 sessions a day, but now I’ve limited it to 3–4 because each one lasts around 2 hours or more. I plan my travel based on geography — like grouping all South Bombay sessions together if I’m coming from Thane, where I live. Meals are unpredictable — sometimes I miss lunch if sessions run long. I usually return by 7 or 8 PM, have dinner, and wind down.</p>

            <p><strong>Devika:</strong> And your non-training days?</p>
            <p><strong>Aakash:</strong> Those are our creative and planning days. We start a little later, around 9–10 AM. We shoot content till about 3–4 PM — videos, reels, educational posts. Then comes ideation, client reviews, and assessments. I work closely with my partner, Pucci, who handles the backend. We sit together to review pending sessions, new leads, and analyse client-submitted videos to customize our training approaches. By 7 or 8 PM, we wrap.</p>

            <p><strong>Devika:</strong> Aakash, this has been such a journey already. But I have to ask — what’s one of the most memorable or challenging cases you’ve ever dealt with?</p>
            <p><strong>Aakash:</strong> There are two that really stand out. One of them still hurts — not in a regretful way, but in that emotional ache kind of way. Because it left both physical and psychological marks. It happened in 2015. I was working closely with an NGO called My Pal Club, run by Aditi Nair — who, honestly, came into my life like an angel. She trusted me, mentored me, and allowed me to step into more serious roles — not just with dogs, but with people. That was rare.</p>

            <p><strong>Devika:</strong> That’s incredible — that kind of trust, especially at a young age.</p>
            <p><strong>Aakash:</strong> Absolutely. She believed in me when I was still just managing, not even officially consulting as a behaviourist. So one day, we visited a family who had a Lab-Golden Retriever mix. A beautiful dog, but extremely hyper, even as a 3- or 4-month-old pup. I warned the family at the time: “If you don’t curb this hyperactivity now, you’re going to see territorial and reactive behaviour very soon.”</p>

            <p><strong>Aakash:</strong> Six months later, the call came. “He’s become aggressive.”</p>

            <p><strong>Devika:</strong> Oh no.</p>
            <p><strong>Aakash:</strong> And I had no structured intake system back then — no proper screening process. I just showed up at their place.It was a typical Mumbai chawl — small house, big dog, zero stimulation. No walks, no play, no outlet. He was surrounded by street dogs outside and never stepped out.
When I walked in, he was already on edge. I ignored him initially, like we always teach — let the dog observe, sniff, process. I sat on the couch. That… was mistake number one.
</p>
<p><strong>Devika:</strong> Oh god. What happened next?</p>
            <p><strong>Aakash:</strong> He jumped onto my lap, not in a friendly way. The moment he stood there, I sensed it. That gut-level instinct: “Something’s off.” I knew if I moved, he’d bite. So instead of turning my face or flinching, I grabbed his collar with both hands — and took the bite with my forearms.</p>

            <p><strong>Devika:</strong> Whoa. That’s the scar on your hand?</p>
            <p><strong>Aakash:</strong> Yeah. This (points to scar) — this is from that day. His canines went in deep. The flesh was torn out. But I didn’t feel pain immediately. The adrenaline was too high... </p>

            <p><strong>Devika:</strong> And did you go back to work with that dog?</p>
            <p><strong>Aakash:</strong> I did. I brought him to a neutral location. Tried to reintroduce new behaviour patterns. But the family was too busy... He had potential. But he needed time and commitment.</p>

            <p><strong>Devika:</strong> And what about the second case — the one you said became your first YouTube video?</p>
            <p><strong>Aakash:</strong> Ah, yes. That dog was from Sawantwadi... He had become territorial and deeply frustrated. Constantly tied up. Wouldn’t let anyone near. But I could feel it — he wasn’t dangerous. He was just asking for help... And eventually… he melted.</p>

            <p><strong>Devika:</strong> What do you think that connection was? Was it just energy?</p>
            <p><strong>Aakash:</strong> I truly believe dogs see you as energy. They don’t care where you studied, what you wear, how many followers you have... That’s why we say in this field — “The power of intention is everything.”</p>

            <p><strong>Devika:</strong> That’s profound.</p>
            <p><strong>Aakash:</strong> It’s what I live by... Aggression isn’t the problem — it’s a symptom. The real issue is emotional stress, unmet needs, fear, and frustration...</p>

            <p><strong>Devika:</strong> And you gave it to him.</p>
            <p><strong>Aakash:</strong> I tried... Even when I look back at that old YouTube video — which my team often tells me to delete — I keep it there. Because that’s my origin story.</p>

            <p><strong>Devika:</strong> So that first video — the one with the racket — tell us more about what was really happening there.</p>
            <p><strong>Aakash:</strong> That video was the first proper case I recorded... I used the racket as a safety buffer — not as a threat. It let the dog know how close he could come. His reactions were rooted in nervousness, not true aggression.</p>

            <p><strong>Devika:</strong> And that’s when his “nose opened up,” as you put it earlier?</p>
            <p><strong>Aakash:</strong> Exactly. Under stress, dogs rely on sight and hearing... But when a dog starts sniffing again, it’s a neurological shift. The common sense returns. The dog begins to process the world calmly again.</p>

            <p><strong>Devika:</strong> That’s incredible. Now let me ask you this — what would you say is the most rewarding part of your work?</p>
            <p><strong>Aakash:</strong> Without a doubt — the moment when a pet parent smiles... And on the dog’s side — when you see them move from fear and resistance to joy and surrender… that shift? That’s priceless.</p>

            <p><strong>Devika:</strong> So let’s talk about Dog Mantra as a community now. How do you engage with your audience?</p>
            <p><strong>Aakash:</strong> It’s been a very organic journey... We’ve always kept complete transparency. Each session, we post 8 to 10 story updates, showing the actual progress. Not filtered, not glamorized. Just the real work. Clients appreciate that. It builds trust.</p>
            <p><strong>Devika:</strong> And that’s rare — especially in today’s curated world.</p>
            <p><strong>Aakash:</strong> Exactly. People weren’t just watching my content — they were connecting with it. It became part information, part inspiration. A little entertainment, but always with value. Now, we’ve started exploring reel-based storytelling too — some reels purely for fun, others deeply educational.</p>

            <p><strong>Devika:</strong> When did you feel like… okay, this is working, we’re growing, maybe even influencing?</p>
            <p><strong>Aakash:</strong> The first real milestone was crossing 10K followers. That gave me a sense of, “Okay, we’re creating impact.” But the game-changing moment was this one reel — it’s still pinned on our page. Two beautiful dogs. Incredible pet parents. The dogs had started fighting, and the mother in the house got badly bitten while trying to break it up. We recorded that first interaction — me walking into the house, lowering my energy, placing my scent, backing away. All pressure-relieving techniques. And guess what? After just a few minutes, both dogs stepped out of their corners. Calm. Curious. Receptive.</p>

            <p><strong>Devika:</strong> That’s powerful.</p>
            <p><strong>Aakash:</strong> That reel brought us 70,000 followers.</p>

            <p><strong>Devika:</strong> Wow.</p>
            <p><strong>Aakash:</strong> And it wasn’t even dramatic or controversial. Just raw, real, calming energy — and dogs responding to it. It cracked the algorithm. Since then, some reels have hit 32 million views — but this one was the soul-stirring one. We got hundreds of positive, funny comments. And I pinned one of mine that said: “Hey guys, keep it coming. This is fun.”</p>

            <p><strong>Devika:</strong> Do you still get time to personally interact with followers?</p>
            <p><strong>Aakash:</strong> I do — mainly through comments and Instagram stories. DMs are mostly managed by the team now. But I always answer questions through Q&As, story replies, and post captions. We used to do live sessions more often — haven’t had the time lately, but I want to bring them back soon.</p>

            <p><strong>Devika:</strong> So, Aakash, let’s step outside the dog world for a minute. What are some of your other hobbies?</p>
            <p><strong>Aakash:</strong> This — working with dogs — started out as a hobby. But apart from that, I’ve always loved theatre and acting. I’ve done quite a bit of stage work. And I’ve also completed my Visharad Level 1 in tabla.</p>

            <p><strong>Devika:</strong> No way! That’s amazing.</p>
            <p><strong>Aakash:</strong> Yeah! And honestly, I think that creative side has helped me a lot with content creation. When I’m shooting fun reels or storytelling through videos, I get to blend both worlds — my love for animals and my passion for performance.</p>

            <p><strong>Devika:</strong> Looking back… what’s the biggest transformation you see in yourself?</p>
            <p><strong>Aakash:</strong> I’ve become more humble — and I want to stay that way. Back in college, I had a very different mindset. But this journey, especially working with dogs, taught me the value of silence, observation, and surrender. And a big part of that transformation came from understanding Cesar Millan’s work.</p>

            <p><strong>Devika:</strong> You've mentioned him a few times. What is it about his story that resonated so deeply?</p>
            <p><strong>Aakash:</strong> It’s not just his work with dogs — it’s his story. How he crossed the Mexican border, how he came to the U.S. with nothing, how he grew as a person and a brand… the humility he maintained through it all. That deeply moved me. In fact, I’ve had the privilege of interacting with people close to him. I even did a podcast with his head trainer, Steve, on his channel. It was surreal. Cesar’s approach isn’t without controversy. But for me, it’s his journey as a human being that left a mark. It taught me to be more open-minded, more grounded, and more willing to learn — from anyone and anything.</p>

            <p><strong>Devika:</strong> So how do you define success today?</p>
            <p><strong>Aakash:</strong> Honestly? I don’t know how to define it. Because the moment you define success as a fixed point, it limits growth. To me, success is continued learning. If you’ve stopped growing, if you’ve stopped being curious — that’s the opposite of success.</p>

            <p><strong>Devika:</strong> I love that. So it’s a cycle, not a destination.</p>
            <p><strong>Aakash:</strong> Exactly. Keep learning, keep evolving. That’s the real win.</p>

            <p><strong>Devika:</strong> So what’s next for Dog Mantra?</p>
            <p><strong>Aakash:</strong> Right now, Dog Mantra remains an active platform on Instagram. But I’ve taken a bit of a strategic break — city life and constant sessions were getting overwhelming. I needed some creative space. So we’re working on three key projects: A mobile app, which will bring dog psychology, training support, and behavioural guidance to people’s phones in a user-friendly format. A boarding and training centre — a space where dogs can heal, learn, and grow in a calm, open environment. A tech-driven pet care platform — we’re still developing this, so I can’t reveal too much, but it’s going to be a game-changer.</p>

            <p><strong>Devika:</strong> That’s fantastic. You’re literally building an ecosystem.</p>
            <p><strong>Aakash:</strong> That’s the goal. Not just to be an influencer, but a true impact-maker in the pet care world.</p>

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
          Rapid Fire with Aakash
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
            src="/aakashShuklaArticleVideo.mp4" // <-- use your vertical video file
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




            <h5 className="text-primary mt-4">Rapid Fire Round</h5>
            <p><strong>Devika:</strong> Dogs or puppies?</p>
            <p><strong>Aakash:</strong> Puppies.</p>

            <p><strong>Devika:</strong> Favourite dog breed?</p>
            <p><strong>Aakash:</strong> I’d say… Indian.</p>

            <p><strong>Devika:</strong> City life or countryside?</p>
            <p><strong>Aakash:</strong> Countryside — no question.</p>

            <p><strong>Devika:</strong> One dog movie you love?</p>
            <p><strong>Aakash:</strong> Air Bud.</p>

            <p><strong>Devika:</strong> Leash or no leash?</p>
            <p><strong>Aakash:</strong> Ideally, no leash. (But professionally — please use a leash, folks!)</p>

            <p><strong>Devika:</strong> Favourite comfort food?</p>
            <p><strong>Aakash:</strong> Can’t sleep without it — don’t judge!</p>
            <p><strong>Devika:</strong> One piece of advice for dog parents?</p>
            <p><strong>Aakash:</strong> Don’t just fall for a cute face or breed hype. Choose a dog whose personality and energy match your lifestyle. That’s the true foundation for a lasting bond.</p>

            <p><strong>Devika:</strong> Training session or content creation?</p>
            <p><strong>Aakash:</strong> They merge! My content is born during sessions.</p>

            <p><strong>Devika:</strong> Netflix show you're watching?</p>
            <p><strong>Aakash:</strong> Adolescence. Started it, paused it. Will finish once I’m back.</p>

            <p><strong>Devika:</strong> Three things always in your bag?</p>
            <p><strong>Aakash:</strong> I don’t carry a bag! But I always keep a bottle of spirit for disinfecting post-bite situations.</p>

            <p><strong>Devika:</strong> A cause close to your heart?</p>
            <p><strong>Aakash:</strong> Human-dog conflict resolution in India. We’re actively working on this.</p>

            <p><strong>Devika:</strong> Favourite travel destination?</p>
            <p><strong>Aakash:</strong> Goa. And Sawantwadi — my hometown.</p>

            <p><strong>Devika:</strong> What’s your life mantra?</p>
            <p><strong>Aakash:</strong> Keep learning. And from Dog Mantra: Guide. Direct. Motivate.</p>

            <p><strong>Devika:</strong> Looking back — what’s the biggest transformation you’ve experienced?</p>
            <p><strong>Aakash:</strong> I’ve become more humble. Understanding Cesar Millan’s journey — not just professionally, but as a human being — shifted me. His life, struggles, and mindset opened me up to being more grounded and open-minded. That, for me, is the biggest growth — and I want to keep it that way.</p>

            <p><strong>Devika:</strong> How do you define success?</p>
            <p><strong>Aakash:</strong> I actually… don’t. Because success, to me, is learning that never stops. The moment you define a finish line, you close the door to possibility.</p>

            <p><strong>Devika:</strong> What’s next for Dog Mantra?</p>
            <p><strong>Aakash:</strong> Dog Mantra will continue on Instagram — but we’re building more: <br />
              A mobile app to support dog parents in real time <br />
              A boarding and behavior center <br />
              And a soon-to-be-launched tech-driven project for the pet care space <br />
              This break I’ve taken is giving me the space to think beyond daily sessions and towards something scalable and sustainable.
            </p>

            <p><strong>Devika:</strong> Before we wrap — any message you’d like to share with our community?</p>
            <p><strong>Aakash:</strong> Just this: We live in a world full of divisions — dog lovers, non-dog lovers… us vs them. Let’s move past those. Let’s be on the side of humanity. <br />
              We grew up with the motto: Nurture nature for a better future. And yet, we’ve strayed from it. <br />
              As influencers, creators, and media professionals, we must use our platforms not just for entertainment but for awareness. Drama fades. Value stays. <br />
              If we don’t take action now, a hundred years from now, we might leave future generations with nothing.
            </p>

            <p><strong>Devika:</strong> And lastly, what was your experience like with Global Influencers Hub?</p>
            <p><strong>Aakash:</strong> Honestly… it was seamless. Even with my delays, the whole process felt warm, real, and engaging. I didn’t feel like I was meeting someone for the first time. <br />
              Your profile, your platform — what you’re doing is beautiful. You’re giving people space to be seen, not just showcased. That will help a lot of lives. And I’m grateful I could be a part of it.
            </p>

            <p><strong>Devika:</strong> Thank you so much, Aakash. Wishing you all the very best — and we’ll definitely stay in touch.</p>
            <p><strong>Aakash:</strong> Definitely, ma’am. It’s been a pleasure.</p>
            <p><strong>Devika:</strong> Bye-bye, take care — have a great day!</p>
            <p><strong>Aakash:</strong> You too. Bye!</p>

    
















      









           
           
    </Container>
           
            </Card.Body>
          
    </>
  );
};

export default AakashShukla ;
