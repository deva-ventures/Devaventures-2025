import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const Gotha = () => {
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
              I believe all children are emotionally intelligent by nature. Our role as parents is to preserve that by not shaming or minimizing their feelings.
              </q>{" "}
              – <strong>Gotha Hari Priya</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/gothaArticle.png" // <-- second image here
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
    href="https://youtu.be/xRje6s3CKR0"
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
    window.open("https://youtu.be/xRje6s3CKR0", "_blank");
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
    window.open("https://youtu.be/xRje6s3CKR0", "_blank");
  }}
>
  ▶
</Button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col xs={12} md={5} className="text-center">
          <a
  href="https://youtu.be/xRje6s3CKR0"
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
      src="/gothaConvo.jpg" // replace with your image path
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
            Gotha Hari Priya, a thoughtful entrepreneur, devoted mother, and an emerging voice in the parenting space, recently sat down with Devika Majumder, Co-founder of Global Influencers Hub, for a heartfelt and candid conversation. Known for her empathetic parenting style, grounded approach to leadership, and her honest takes on motherhood, Priya brings a refreshing perspective to the modern-day parenting narrative.
            From binge-watching Tamil thrillers during rare me-time moments to being her children's "safe space," Priya’s story is a beautiful balance of discipline, warmth, and understanding. In this conversation, she opens up about the little things that shape her day, her favorite parenting mantras, and what her ideal kids-free day looks like. Here’s a slice of their engaging conversation:
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
      src="/gothaArticleVideo.mp4"
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
              

    <p><strong>Devika Majumder:</strong> Welcome, Priya. Welcome to Global Influencers Hub. Here, we talk about the real-life journeys of social media influencers—changemakers like yourself. We’re so excited to dive into your story, revisit your childhood, and learn what shaped the path you're on today. So tell me—how did it all begin?</p>

            <p><strong>Gotha Hari Priya:</strong> I grew up in a very traditional, orthodox, and conventional family in Coimbatore. I have an elder brother, and we were raised in a joint family—with my grandmother also playing an active role in our upbringing. It was a fairly “normal” childhood on the surface. But even as a child, I began noticing a sense of unfairness in the way adults interacted with children.</p>

            <p><strong>Devika:</strong> Very true. I think many of us felt that growing up...</p>

            <p><strong>Priya:</strong> Yes, absolutely. I would often think to myself—if only they had spoken to me more kindly, with more understanding, things would have felt easier. I often felt like a misfit, like I wasn’t being understood. That feeling stuck with me, and looking back, I realize it became the foundation of the work I do today. That need for empathy and respect in communication—especially with children—was something I longed for.</p>

            <p><strong>Devika:</strong> That’s such a powerful insight. So tell me a little bit about your schooling and how things unfolded after that.</p>

            <p><strong>Priya:</strong> I attended the same school for twelve years, and I went on to do my college in Coimbatore as well. So really, my entire life—birth, schooling, college—happened in the same city. I found school to be relatively easy because I was good academically. The education system tends to reward children who can grasp things quickly, and I became the so-called “good girl” simply because I could perform well in studies.</p>

            <p><strong>Devika:</strong> And how was it for your brother?</p>

            <p><strong>Priya:</strong> That’s where I really started noticing the gaps. My elder brother wasn’t academically inclined—he just wasn’t interested in studies, and he found it tough. I saw how differently he was treated compared to me, and that left a lasting impact on me. The pressure that children face when they can't perform academically—it's huge. That contrast really motivated me to question the system and, eventually, inspired the work I do today.</p>

            <p><strong>Devika:</strong> So what did you pursue in college?</p>

            <p><strong>Priya:</strong> I studied civil engineering and went on to complete my master’s as well. I specialized in structural engineering. I did work in the field briefly—just for about six to eight months—before I got married. But after marriage, my in-laws weren’t supportive of me working under someone else. They wanted me to start something of my own. But at that point, I wasn’t confident enough to go solo. You know how it is in fields like engineering—it’s like being a doctor. You need that mentorship and hands-on experience before you can really stand on your own.</p>

            <p><strong>Devika:</strong> That’s completely understandable. So how did you find your way into parenting and coaching?</p>

            <p><strong>Priya:</strong> Over time, I realized I was deeply drawn to parenting, child psychology, and relationships. After my child was born, I started having conversations with other parents—casually at first—about ideas like conscious parenting. I began hosting small discussions in my city, and gradually, the interest grew. I later got certified in the field, but the start was very organic. I began sharing my thoughts on Facebook, and eventually shifted to Instagram. And that’s how this journey really began.</p>

            <p><strong>Devika:</strong> That’s such an inspiring shift. What kind of parenting did you experience growing up?</p>

            <p><strong>Priya:</strong> Mine was a very strict, traditional, and conventional style of parenting.</p>

            <p><strong>Devika:</strong> Was there a particular moment that made you think—“I need to do things differently”?</p>

            <p><strong>Priya:</strong> There were many such moments. I remember being punished, misunderstood, and often feeling completely unseen. I used to think to myself—when I become a parent, I want to do things differently. Of course, I didn’t know how at the time. It was only later, in my early twenties—around 22 or 23—that I started gaining clarity. But even then, I didn’t have a name for what I was seeking.</p>

            <p><strong>Devika:</strong> And when did you find the language for it?</p>

            <p><strong>Priya:</strong> When I was pregnant. I wasn’t on social media then—so my only source of information was Google. I kept searching for alternative parenting styles. That’s when I stumbled upon the term respectful parenting. And when I read about it, I thought—This is it. This is exactly what I’ve been trying to express. It resonated so deeply with me and everything I believed about relationships and raising children.</p>

            <p><strong>Devika:</strong> That’s amazing. I relate to that. I also come from a strict household, and I remember thinking as a child—I won’t be that kind of parent. It’s so interesting how those early experiences shape us. So would you say your journey is what ultimately led you to become a parenting coach?</p>

            <p><strong>Priya:</strong> Definitely. And it wasn’t just my own family—I would notice how my friends’ parents treated them. Some of them were so open, so respectful, so liberal in their approach. Even back then, those little things stood out to me. All of that stayed with me and became little sparks that lit the path I walk today.</p>

            <p><strong>Devika:</strong> When did you know this was more than just an interest—when did it become your purpose?</p>

            <p><strong>Priya:</strong> After my child was born, for sure. That’s when I began talking to parents and sharing my thoughts more actively. And I realized that every time I engaged in this work, I felt these sparks of joy in my heart. That’s when I knew—this is what I want to pursue seriously.</p>

            <p><strong>Devika:</strong> That’s beautiful. Now, how would you describe your parenting style in three words?</p>

            <p><strong>Priya:</strong> Real. Respectful. Understanding. But if I had to pick one that stands out for me—it’s realness.</p>

            <p><strong>Devika:</strong> What does realness look like in your parenting?</p>
            <p><strong>Priya:</strong> It means my children see the full version of me. I don't hide my emotions or pretend everything’s okay just because I'm following “gentle parenting.” If I’m angry, I tell them—“I’m feeling very angry right now. I need a moment to cool down. It’s not about you—I’m just feeling big emotions.” They’ve seen me upset. They’ve seen me cry. They’ve seen me break down. They’ve seen me have disagreements with other adults. They’ve seen me make mistakes. And I think that’s important.</p>

            <p><strong>Devika:</strong> So they see your vulnerable side too.</p>

            <p><strong>Priya:</strong> Exactly. That’s what I mean by being real. I don’t want to model perfection—I want to model humanity.</p>

            <p><strong>Devika:</strong> So how do you define a healthy parent-child relationship in today’s digital age?</p>

            <p><strong>Priya:</strong> A healthy parent-child relationship, to me, is one where the adult fully embraces their role as the adult—taking responsibility for holding space, emotionally and physically, for the child. It’s about creating a nurturing environment where the child feels deeply loved, seen, and safe enough to be their authentic self. When a child knows—truly knows—that they are the center of their parent’s world, it shows in how they respond, trust, and grow. And this isn't about grand gestures; it's communicated through presence, words, and small everyday actions.</p>

            <p><strong>Devika:</strong> Beautifully said. What do you think most parents misunderstand about modern child behavior?</p>

            <p><strong>Priya:</strong> There’s a major misconception about gentle or respectful parenting. Many people confuse it with permissiveness—thinking it’s okay to let the child do whatever they want. Some parents believe that being their child's friend is enough. But being friendly is not the same as being a friend. We are still the adults in the relationship. It’s our role to hold boundaries and provide structure.</p>

            <p><strong>Devika:</strong> Absolutely. Boundaries are such an important part of parenting. Could you elaborate more on that?</p>

            <p><strong>Priya:</strong> Sure. Real respect in any relationship comes with boundaries, even more so with our children. Setting boundaries doesn’t mean we’re being controlling—it means we care. For example, if I know something isn’t good for my child in the long run, I will firmly but respectfully hold that boundary. My child may be upset, and that’s okay. I’ll sit with them through their emotions without changing the boundary just to make them feel better.</p>

            <p><strong>Priya:</strong> Earlier, boundaries were imposed without space for the child’s emotional response. We were expected to follow rules and be cheerful about it. But today, it’s about saying, “Yes, I know this is hard for you. I see your upset. And I’m here with you… but the boundary still stands.”</p>

            <p><strong>Devika:</strong> That’s such an evolved perspective. Many times, I’ve seen parents try to convince their children endlessly to accept the boundary. What do you think about that?</p>

            <p><strong>Priya:</strong> That’s something I observe a lot too. Parents often believe that respectful parenting means they must keep explaining until the child agrees happily. But that’s not always practical. Children don’t need to fully agree or understand in that moment. What they need is clarity, consistency, and emotional support to deal with their disappointment.</p>

            <p><strong>Devika:</strong> So in your approach, you clearly communicate the boundary, allow space for their emotions, and move forward?</p>

            <p><strong>Priya:</strong> Exactly. Let me give you a simple example. If we’re at a park and it’s time to go home, I give a heads-up: “Five more minutes.” But even then, when I say it's time, my child will often resist. They may cry or protest. I’ve had to carry my child back to the car many times while they’re crying. That’s part of the process. The boundary is upheld, but I still honor their emotions around it.</p>

            <p><strong>Devika:</strong> Got it. And do you think that this kind of approach reduces tantrums in the long run?</p>

            <p><strong>Priya:</strong> Not necessarily. Tantrums are a normal part of child development. They’re related to brain growth, temperament, and how a child is wired. Even with the most respectful parenting, tantrums will still occur until at least the age of seven or eight. It's not about eliminating tantrums—it's about creating a safe space for children to move through them without shame or fear.</p>

            <p><strong>Devika:</strong> That’s such an important distinction. So in this fast-paced world, what are your tips for raising emotionally intelligent children?</p>

            <p><strong>Priya:</strong> I believe all children are emotionally intelligent by nature. Our role as parents is to preserve that by not shaming or minimizing their feelings. Just allowing them to feel and express without labeling their emotions too early helps a lot. When they’re young, all they understand is feeling good or bad. Around six or seven, we can slowly start labeling basic emotions. By the time they’re nine or older, they’ll naturally begin to explore the nuances themselves. We tend to overcomplicate it too early.</p>

            <p><strong>Devika:</strong> So well put. Let’s do something fun now. I’ll give you a parenting scenario and you give your quick advice. Ready?</p>

            <p><strong>Priya:</strong> Let’s do it!</p>

            <p><strong>Devika:</strong> A four-year-old throws a tantrum in public.</p>
            <p><strong>Priya:</strong> I would calmly remove the child from the public space—maybe to the car or a quiet corner—so they can express their emotions in privacy, without the pressure of onlookers or judgment. It also helps the parent feel less overwhelmed.</p>

            <p><strong>Devika:</strong> A ten-year-old says, “I hate you” because the parent denied screen time.</p>
            <p><strong>Priya:</strong> I’d respond with, “I understand you're upset. Let’s talk about it.” That statement usually comes from a place of not knowing how to handle big emotions.</p>

            <p><strong>Devika:</strong> A teen refuses to talk and slams the door.</p>
            <p><strong>Priya:</strong> With teens, giving them space is key. Let them cool off and come back when they’re ready. It's a very common behavior due to brain and hormonal changes. I’d also let them know gently that I’m here and I understand—it’s not easy for them.</p>

            <p><strong>Devika:</strong> That’s very relatable. What are some daily practices that you feel really help strengthen the parent-child bond?</p>
            <p><strong>Priya:</strong> Sharing at least one screen-free meal a day together as a family. It might sound simple, but it’s incredibly grounding. It reinforces a sense of unity, belonging, and opens space for communication—something we’re losing in today’s fast-paced life.</p>

            <p><strong>Devika:</strong> So true. My mother always emphasized that, and I now see how valuable that advice was. As a family life coach, what are the core areas you focus on when working with your clients?</p>
            <p><strong>Priya:</strong> One of the most important aspects I focus on is the individual’s inner work—especially their mental health. I’m deeply passionate about it. Because at the end of the day, everything boils down to how we're doing on the inside.</p>

<p><strong>Devika:</strong> That’s a powerful starting point. How would you explain the impact of an adult’s mental health on family dynamics?</p>

<p><strong>Priya:</strong> Let me give you a simple example. Imagine a family going on vacation. Everyone’s excited—the parents, the kids. Now, if a child throws a tantrum during the trip, parents usually brush it off. It doesn’t trigger them much because their mindset is relaxed. But take the same child doing the same thing on the last evening of the trip—when everyone’s exhausted and there’s work the next day. That same tantrum suddenly becomes a big deal.</p>

<p><strong>Devika:</strong> So true. Same situation, different responses.</p>

<p><strong>Priya:</strong> Exactly. Our responses are tied to our mental state. If I’m feeling good, positive, rested—I’ll respond with patience. But if I’m feeling low or anxious, I might snap. That’s why I always say: once you become a parent, your mental health becomes the most important factor in how you show up for your child.</p>

<p><strong>Devika:</strong> Absolutely. So what kind of tips or tools do you offer parents to help them prioritize their own well-being?</p>

<p><strong>Priya:</strong> I encourage them to take time out—just ten or fifteen minutes a day—for something that sparks joy. In our fast-paced, hustle-driven lives, parents—especially mothers—often put themselves last. Their emotional, physical, and mental wellness gets sidelined. So I constantly remind them: taking care of yourself isn’t selfish, it’s essential.</p>

<p><strong>Devika:</strong> That really resonates. Do you use any specific tools or techniques in your coaching?</p>

<p><strong>Priya:</strong> Yes, several. I often incorporate grounding exercises, meditation, and Emotional Freedom Technique (EFT). I also emphasize the importance of spiritual connection—inviting guidance and support from a higher power. That divine connection is integral to my coaching modules.</p>

<p><strong>Devika:</strong> That’s a beautiful blend of inner work and emotional tools. Now coming to your social media journey—how did that take off?</p>

<p><strong>Priya:</strong> It happened organically. I began creating content from the child’s perspective. That really struck a chord with people. Many parents messaged me saying, “I never thought about how this would feel for my child.” It helped them pause, reflect, and develop more compassion and understanding.</p>

<p><strong>Devika:</strong> Was there a specific post or video where you felt—this is gaining momentum?</p>

<p><strong>Priya:</strong> Yes, my series called "Why Da? Why?" really took off. In those videos, I’d question societal norms and the hypocrisy in the way we treat children. Like, when adults express big emotions, it’s acceptable—but when a child does it, they’re labeled as stubborn or difficult. That double standard resonated with a lot of people.</p>

<p><strong>Devika:</strong> It really makes people reflect. Do you engage with your followers often?</p>

<p><strong>Priya:</strong> Very often—through Q&As, comments, and especially DMs.</p>

<p><strong>Devika:</strong> And what’s the most touching message you’ve received?</p>

<p><strong>Priya:</strong> The ones where parents say, “I think of you in my parenting struggles.” But what really touches me are the messages where someone confesses they hit or yelled at their child. It takes courage to admit that, especially when they know I stand against it. But they still trust me enough to share their worst parenting moment. That kind of trust—that belief that I’ll hold space without judgment—means everything to me.</p>

<p><strong>Devika:</strong> That really speaks volumes about the safe space you've created. On a lighter note—what’s something your kids do that makes you smile no matter what?</p>

<p><strong>Priya:</strong> Their random hugs and kisses—especially when I’m not expecting it. When they’re in the middle of doing something and just run to me for a hug—it melts everything away. That physical affection... it’s everything.</p>

<p><strong>Devika:</strong> The morning madness or bedtime chaos—which one’s more intense at your place?</p>

<p><strong>Priya:</strong> Definitely bedtime! I’m very particular about their sleep schedule. In the mornings, I’m a little more relaxed—we have a routine, and things usually flow. But at night, even a 15-20 minute delay gets to me. I become this “flight attendant” constantly announcing, “It’s bedtime, hurry up, let’s go!” It’s my most intense time of the day.</p>

<p><strong>Devika:</strong> (laughs) That’s so relatable! How old are your kids now?</p>

<p><strong>Priya:</strong> They’re nine and five.</p>

<p><strong>Devika:</strong> Oh, that’s a great age—especially for the kind of work you're doing. What would you say is your secret superpower as a mom and a coach?</p>

<p><strong>Priya:</strong> I think it’s my ability to pause in emotionally intense moments. I’m not saying I manage it every time, but more often than not, I do take a moment before reacting. That pause helps me a lot—both as a parent and as a coach.</p>

<p><strong>Devika:</strong> That’s a real superpower. Most of us tend to react in the heat of the moment. So, ever bribed your kids with chocolates or screen time?</p>

<p><strong>Priya:</strong> No, actually. That’s something I’ve been very conscious about. I don’t believe in rewarding or punishing. I avoid saying things like, “If you do this, I’ll give you that,” or “If you don’t behave, I’ll take this away.” That kind of control doesn’t sit right with me.</p>

<p><strong>Devika:</strong> So what do you do when your child is doing something you don’t like?</p>
<p><strong>Priya:</strong> I still make it clear that I don’t want them to do that. But if they continue, I’ll physically remove the object or take them away from the situation—while staying with them as they process those big emotions. I just don’t use threats or bribes. I feel those methods erode trust, which is the most crucial element in a parent-child relationship.</p>
            <p><strong>Devika:</strong> That’s a very unique way to look at it.</p>
            <p><strong>Priya:</strong> Think about it—we don’t do that with adults. We don’t say to our spouse or colleague, “If you don’t do this, I’ll take something away,” or “If you finish this, I’ll buy you a chocolate.” Why should we do it with children? It’s a form of control, and while it might work temporarily, in the long run, it chips away at the connection. I want my children to feel we’re on the same team.</p>
            <p><strong>Devika:</strong> So communication becomes the key?</p>
            <p><strong>Priya:</strong> Absolutely. It’s primary. Over the years, I’ve built a foundation where if I say something, they trust that it’s for their good. That doesn’t mean there are no meltdowns or whining—especially with the older one, who’s currently in the whining phase! But I try not to disrupt that natural trust between us by introducing external rewards or punishments.</p>
            <p><strong>Devika:</strong> That’s such a beautiful perspective. What would you say has been your funniest parenting phase?</p>
            <p><strong>Priya:</strong> Oh, that has to be my second child—she’s brutally honest. She has no filter! She’ll call me out in public, saying things like, “You told me not to use that tone—why are you being rude now?” It’s especially hilarious (and a bit embarrassing!) when she does this in front of people who know I advocate for conscious parenting.</p>
            <p><strong>Devika:</strong> (laughs) That must be quite a moment!</p>
            <p><strong>Priya:</strong> Yes! Once, we were out in a different city, at a restaurant with friends. She was running around near the wet bathroom floor, and I kept warning her she might slip. She wouldn’t listen, and I finally raised my voice—“Sara, no!” Then I turned around and someone said, “I actually follow you on Instagram.” I just stood there, smiling sheepishly. That was definitely an oops moment.</p>
            <p><strong>Devika:</strong> Parenting fails with an audience!</p>
            <p><strong>Priya:</strong> Exactly! I was like, “Great, just what I needed—an Instagram follower witnessing my not-so-proud moment.”</p>
            <p><strong>Devika:</strong> (laughs) That’s gold! So what’s next in your journey?</p>
            <p><strong>Priya:</strong> I’m working on launching more in-depth programs for parents. I’m also developing a product to help parents reduce their screen time.</p>
            <p><strong>Devika:</strong> That is so needed! I think every parent will thank you for that.</p>
            <p><strong>Priya:</strong> I hope so! It’s a simple product based on the idea of creating physical distance from our phones. Everything in our home has a designated space—except our phones, which seem to live on us. This product is about reclaiming that space and setting boundaries, especially when we’re with our children.</p>
            <p><strong>Devika:</strong> That sounds incredibly valuable. I’d definitely want one for myself!</p>
            <p><strong>Priya:</strong> Thank you, Devika. I’m really looking forward to its launch and hoping it reaches homes where it’s most needed.</p>
          
          

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
          Rapid Fire with Gotha
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
            src="/gothaRapid.mp4" // <-- use your vertical video file
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

           
           








          

          
          
            <p><strong>Devika:</strong> Absolutely—it’s going to be a game-changer. And with that, shall we move to the rapid-fire round?</p>




            
            <p><strong>Priya:</strong> Sure</p>
            <p><strong>Devika:</strong> One word your kids use to describe you?</p>
            <p><strong>Priya:</strong> I think… understanding.</p>
            <p><strong>Devika:</strong> Discipline or negotiation — which works better?</p>
            <p><strong>Priya:</strong> I think both work, depending on the situation.</p>
            <p><strong>Devika:</strong> Cool. What’s the last show you binge-watched?</p>
            <p><strong>Priya:</strong> There’s a Tamil series on Amazon Prime called Suzhal. I finished both seasons in one weekend!</p>
            <p><strong>Devika:</strong> Wonderful! That probably doubled as your best "me time" too.</p>
            <p><strong>Priya:</strong> Yeah, yeah.</p>
            <p><strong>Devika:</strong> Most used phrase in your home?</p>
            <p><strong>Priya:</strong> It happens. I get you.</p>
            <p><strong>Devika:</strong> Mom’s voice or silent stare — what’s more effective?</p>
            <p><strong>Priya:</strong> For me, definitely the voice. More than the stare, it's the voice that gets through… even before I realize it.</p>
            <p><strong>Devika:</strong> Weekend with the family — movie night or outdoor picnic?</p>
            <p><strong>Priya:</strong> Movie night.</p>
            <p><strong>Devika:</strong> Most overused parenting advice you’ve heard?</p>
            <p><strong>Priya:</strong> Discipline the child. Especially the belief that if a child isn't scared of their parents, they'll become a rotten adult. I think that's a very misunderstood idea in parenting.</p>
            <p><strong>Devika:</strong> Absolutely agree. I’d love to come back to that later. For now — one thing that instantly lifts your mood?</p>
            <p><strong>Priya:</strong> Good music.</p>
            <p><strong>Devika:</strong> Any favorite artist?</p>
            <p><strong>Priya:</strong> A.R. Rahman.</p>
            <p><strong>Devika:</strong> If your life were a children’s book, what would the title be?</p>
            <p><strong>Priya:</strong> The Magician.</p>

            <p><strong>Devika:</strong> I love that. Now say you get a surprise kids-free day — what would you do?</p>
            <p><strong>Priya:</strong> I’d sleep. A lot! Binge-watch shows I’ve been putting off, and read — I love reading.</p>

            <p><strong>Devika:</strong> If you had an extra ten minutes in a day, what would you do with it?</p>
            <p><strong>Priya:</strong> Honestly? I’d sleep. As a parent with a five-year-old and a nine-year-old, sleep is always on my wishlist. There's definitely a little sleep deprivation at times, and those extra ten minutes would go straight to rest.</p>

            <p><strong>Devika:</strong> If your child wrote a book about you, what would the title be?</p>
            <p><strong>Priya:</strong> I’d want it to be called My Safe Space.</p>

            <p><strong>Devika:</strong> That’s so sweet. Truly touching. I think we've covered most of the questions. If we need anything further, my team will reach out. But it’s been such a pleasure talking to you.</p>
            <p><strong>Priya:</strong> Thank you so much!</p>

            <p><strong>Devika:</strong> We’re really looking forward to the launch of the product you mentioned. Do you have a timeline?</p>
            <p><strong>Priya:</strong> Likely around June or July, once the management team is finalized.</p>

            <p><strong>Devika:</strong> That’s not too far off — very exciting. And lastly, how did you find this conversation?</p>
            <p><strong>Priya:</strong> I absolutely enjoyed it! The questions were so unique and thoughtful. Every time you asked something, I found myself thinking, “Oh wow, how did she even come up with that?” It was fun, deep, and really refreshing. I wish you all the best with your venture. This platform is truly important — a space where voices can come together meaningfully.</p>

            <p><strong>Devika:</strong> Thank you so much. It was a joy speaking with you. Wishing you the best, always.</p>
            <p><strong>Priya:</strong> Thank you for having me. Bye!</p>
            <p><strong>Devika:</strong> Bye!</p>
















      









           
           
    </Container>
           
            </Card.Body>
          
    </>
  );
};

export default Gotha ;
