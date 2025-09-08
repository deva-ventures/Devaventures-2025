import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const Rachna = () => {
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
              My mantra is—whatever happens, happens for a reason. Don’t resist it. Accept the situation, learn from it, and move forward.
              </q>{" "}
              – <strong>Rachna Kal Kal</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/rachnaArticle.png" // <-- second image here
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
      src="/rachnaConvo.jpg" // replace with your image path
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
            Rachna Kal Kal, a determined athlete with an unshakable spirit, recently joined Devika Majumder, Co-founder of Global Influencers Hub, for a heartfelt and inspiring conversation. Known for her consistent victories on the track and her unwavering focus on individual excellence, Rachna opened up about her journey from an energetic child to a fiercely committed athlete. Her story isn’t just about medals and milestones—it’s about grit, injuries, family support, and the deep desire to chase a dream. From sprinting across school fields to navigating the hurdles of injuries, her life is a powerful reminder that the race is often more mental than physical.
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
      src="/rachnaArticleVideo.mp4"
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
              

    <p><strong>Devika Majumder:</strong> Welcome, Rachna, to Global Influencers Hub. Here, we explore the life stories of influencers and changemakers from across the globe. Let’s deep dive into yours—right from the beginning. What kind of kid were you?</p>

            <p><strong>Rachna Kal Kal:</strong> I was always an active kid—especially when it came to sports. I still remember, back in 2nd standard during the annual sports meet, I came first. And from that moment until 12th standard, I consistently came first in sports every year. Our school’s sports teacher introduced me to Kho-Kho, and I really enjoyed it. But somewhere along the way, I realised team games weren’t for me. I felt individual games gave me a better chance to show my potential without depending on others. So, I started gravitating more toward solo sports.</p>

            <p><strong>Devika:</strong> That’s such a strong sense of clarity at a young age! How did your parents respond to your passion for sports?</p>

            <p><strong>Rachna:</strong> My family has always been supportive—my mother, father, and even my brother. They never stopped me from doing anything I wanted. Their only request was to balance my education alongside sports. When I reached 10th standard, they asked me to focus on studies because it was board exams. They promised me that if I scored well, they would send me abroad after 10th. So, during 9th and 10th, I didn’t play much. But after 10th, they kept their word and sent me to a hostel to focus on sports. That’s when my real journey began.</p>

            <p><strong>Devika:</strong> That’s amazing to hear. A strong foundation at home can make all the difference. Did you have any childhood inspirations?</p>

            <p><strong>Rachna:</strong> Yes, P.T. Usha ma’am. My parents used to talk about her a lot and would often say, “We want to see you become like her.” That thought stayed with me. And since I already preferred individual sports, running felt like the natural path. I was good at it too, so I began to focus all my energy there.</p>

            <p><strong>Devika:</strong> Wonderful. Every athlete faces their own set of challenges—what were some of the major life hurdles you've had to overcome?</p>

            <p><strong>Rachna:</strong> Challenges are a part of everyone’s life, and for me, the toughest has been injuries. It’s still something I’m dealing with—it’s not like it’s all behind me. The hardest part is when you’re giving your 100%, staying focused, doing all the right things, and yet the injuries keep coming. It can really shake your spirit. There are days when you wonder, “What more can I do?”</p>

            <p><strong>Devika:</strong> That sounds incredibly tough.</p>

            <p><strong>Rachna:</strong> Yes, but I’m grateful that my family never told me to stop—not even once. They never said, “Take a break” or “Maybe it’s time to quit.” There were misunderstandings sometimes, of course—that happens in every family—but nothing that didn’t get resolved with time. The injuries have been intense, not minor ones—they take months to heal.</p>

            <p><strong>Devika:</strong> What does a typical day in your life look like? Walk us through your daily routine.</p>

            <p><strong>Rachna:</strong> Our training depends on the season. I usually have at least two sessions a day. As a middle-distance runner—my main event is 800 meters—we have more training sessions than sprinters. There are three main phases in our training cycle: off-season, mid-season, and field season. During the off-season, we stay off the track completely. We train on grass and only push ourselves as much as our body allows. Mid-season is my favorite—it’s not too intense, but it’s all about body control. We do workouts on grassy grounds and keep our power in check. After all, if we exhaust all our strength in training, we won’t have anything left for competition day. Then comes field season, where we train on the track—using shoes, spikes, doing jumps, hurdles, everything. That’s when the real grind begins.</p>

            <p><strong>Devika:</strong> That’s a well-structured approach. Now tell us—what’s been your proudest moment so far?</p>

            <p><strong>Rachna:</strong> My proudest moment was winning an individual bronze medal in the SAF Junior Championship. It was in the 100-meter race, and it was my first-ever international tournament, held in Colombo, Sri Lanka. Winning in a relay is great—but when it’s an individual event, the feeling hits differently. And to top it off, when I returned, my entire family came to receive me at the airport. That moment is still fresh in my mind.</p>

            <p><strong>Devika:</strong> That must’ve been so emotional. What’s your message for young girls who dream of following in your footsteps?</p>

            <p><strong>Rachna:</strong> My biggest advice is—just start. Especially in small towns or middle-class families, dreams related to sports often feel out of reach. But if you get even the smallest opportunity, grab it. Girls today are excelling in every field—there’s no limit. If I could come from a small village, with limited resources and just a little support from my family, and still reach here, then anyone can. Don’t wait for the perfect moment. Take that first step, step out of your comfort zone—you won’t regret it.</p>

            <p><strong>Devika:</strong> Beautifully said. Now shifting gears a bit—how did your social media journey begin?</p>

            <p><strong>Rachna:</strong> My first coach encouraged me to get on social media. He told me, “You don’t use it much, but you should—your story can inspire so many others.” Back then, mobile phones and platforms weren’t as popular. I only started using social media in 2019—this was after I had already completed my first international tournaments in 2018. Then came a major injury phase. After recovering, I competed in the Junior Nationals and met the record in the 800-meter event. That’s when my coach insisted I start sharing my journey online. And soon after, COVID and lockdown happened—and suddenly, everyone was on social media. But during competition phases, it's tough to stay active online. Like right now—I have a knee injury—but when I return to track training, I’ll be completely offline again. We just don’t get the time to be on our phones then.</p>

            <p><strong>Devika:</strong> Makes complete sense. Tell us a little about your nutrition and food habits.</p>

            <p><strong>Rachna:</strong> During competition prep, our diet becomes extremely strict. No cheat meals—none. Even if there’s a six-month prep period, we stay completely off junk food throughout. There are no shortcuts. If we mess up during prep, the regret comes later—“If only I hadn’t eaten that,” or “If only I had stuck to the plan.” We usually have 5 to 6 meals a day, and every meal is clean. Only during the off-season do we allow ourselves a few extra calories—but otherwise, it's full discipline.</p>

            <p><strong>Devika:</strong> So, when you finally get a chance to enjoy a cheat meal, what do you like to indulge in?</p>

            <p><strong>Rachna:</strong> (smiles) I absolutely love chaat papdi. That’s my go-to comfort food.</p>

            <p><strong>Devika:</strong> Ah, a classic favorite! If you weren’t an athlete, what would you have pursued instead?</p>

            <p><strong>Rachna:</strong> If not an athlete, I think I would’ve become either a police officer or a teacher. But most likely, I would have gone down the path of becoming a police officer.</p>

            <p><strong>Devika:</strong> Oh wow, that’s quite a shift from sports! Who’s your role model—someone you’d love to meet someday?</p>
            <p><strong>Rachna:</strong> Honestly, there isn’t anyone in particular. I truly want to become a role model myself... and someday, I’d love to meet the version of me that I aspire to be. (laughs)</p>

            <p><strong>Devika:</strong> That’s such a powerful thought. What’s your life mantra?</p>
            <p><strong>Rachna:</strong> My mantra is—whatever happens, happens for a reason. Don’t resist it. Accept the situation, learn from it, and move forward. Everything works out eventually. After all, it’s said—time and tide wait for none.</p>

            <p><strong>Devika:</strong> Very well said. If you had to describe your journey in one word, what would it be?</p>
            <p><strong>Rachna:</strong> I don’t think I can describe it in just one word. My journey has had many ups and downs. Maybe one day, when I finally achieve what I’ve set out to, I’ll be able to give you that one word. But for now, the struggle continues.</p>

            <p><strong>Devika:</strong> That’s fair. Now let’s talk about the mental side of training. How do you prepare yourself mentally before a competition? Any rituals or superstitions?</p>
            <p><strong>Rachna:</strong> I usually meditate. And during competition phases, I love listening to music—especially motivational songs in Hindi or Haryanvi. Music really helps calm my nerves and builds the right mindset.</p>

            <p><strong>Devika:</strong> Any specific songs that get you pumped?</p>
            <p><strong>Rachna:</strong> Oh, definitely! The Chak De! India title track is a big one for me. Then there are two songs from Dangal—both are super motivating. And of course, Zinda from Bhaag Milkha Bhaag. These songs are so powerful that even someone who’s feeling completely low will feel inspired to get up and do something.</p>

            <p><strong>Devika:</strong> So true. Tell me—what’s that one piece of advice your coach gave you that’s stayed with you through everything?</p>
            <p><strong>Rachna:</strong> One thing my coach always tells me is, “You can do it.” Sometimes, no matter how hard we try, the body just doesn’t respond the way we want it to. On days like those, he reminds me that I have the potential, that there's nothing I can’t do. He’s constantly motivating me—especially when I’m at my lowest.</p>
            <p><strong>Rachna:</strong> Even now, when I’ve been off track for months—no running, no training—he still calls to check in and tells me, “You’ll be fine. You’ve got this.” And somehow, when he says it, it really reaches me. I start believing it too. I feel like, yes, there really is something in me. His words have that power.</p>

            <p><strong>Devika:</strong> Of course. That kind of belief and support can really make a difference.</p>
            <p><strong>Rachna:</strong> Absolutely. His words have become a big source of inspiration for me. Now, I’ve started telling myself the same thing: This time will pass. I can do it.</p>

            <p><strong>Devika:</strong> As the saying goes, “This too shall pass.”</p>
            <p><strong>Rachna:</strong> Yes, definitely. That thought keeps me going.</p>

            <p><strong>Devika:</strong> Thank you so much, Rachna. It was absolutely lovely having you on Global Influencers Hub. Wishing you all the best for everything ahead.</p>
            <p><strong>Rachna:</strong> Thank you so much.</p>
            <p><strong>Devika:</strong> Take care, and goodbye!</p>
            <p><strong>Rachna:</strong> Bye!</p>

















      









           
           
    </Container>
           
            </Card.Body>
          
    </>
  );
};

export default Rachna ;
