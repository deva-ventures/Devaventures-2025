import React from "react";
import { Container, Row, Col, Card,Image,Button } from "react-bootstrap";

const Yaashi = () => {
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
              – <strong>Yaashi Jain </strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/yaashiArticle.png" // <-- second image here
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
      src="/yaashiConvo.jpg" // replace with your image path
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
            Yaashi Jain, a trailblazing mountaineer, shared her inspiring journey in an engaging conversation with Devika Majumder, co-founder of Global Influencers Hub. From discovering her passion for the mountains to scaling some of the world's highest peaks, including Mount Everest, Yaashi opened up about the challenges, motivations, and spiritual connections that have defined her remarkable path. Here's a glimpse into their conversation:




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
      src="/yaashiTeaser.mp4"
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
    <p><strong>Devika Majumder:</strong> Scaling mountains – was it always your passion?</p>

<p><strong>Yaashi Jain:</strong> Initially, no. When I started mountaineering, it was more of an infatuation with the mountains. I didn’t realize how deeply I would fall in love with them. It began with curiosity—I did my basic mountaineering course just to see how I felt about it. And through that process, I discovered my passion for the mountains. It wasn’t easy in the beginning, but as I gained more experience, my love grew stronger. Another driving force for me was proving to people—and myself—that there are no boundaries to what we can achieve, regardless of gender.</p>

<p><strong>Devika:</strong> That’s incredible! You mentioned a mountaineering course earlier. Can you tell us more about it? This could be helpful for aspiring mountaineers who might be listening.</p>

<p><strong>Yaashi:</strong> Absolutely! I started with the basic mountaineering course, which is essential for anyone wanting to pursue this path. Then, I went on to complete the advanced mountaineering course. Both courses were from institutes in Uttarkashi, which are excellent for anyone looking to learn about mountaineering. My advice to anyone interested in this field is to begin with the basics before diving into climbing mountains directly. The process is as important as the goal.</p>

<p><strong>Devika:</strong> Wonderful advice. You were just 17 when you started. How did you convince your parents?</p>

<p><strong>Yaashi:</strong> I was fortunate to have very supportive parents. They always encouraged my younger sister and me to explore extracurricular activities alongside academics, so we could discover what truly inspired us. When I expressed my interest in mountaineering, they were understanding, though naturally, my mother was a bit worried. But ultimately, their support made all the difference.</p>

<p><strong>Devika:</strong> What is it about mountaineering that keeps you going back for more?</p>

<p><strong>Yaashi:</strong> Living in the mountains is incredibly challenging, but it’s also incredibly calming. Compared to the chaos of city life, the mountains provide a unique sense of peace. Even in their toughest moments, there’s something about the mountains that makes me feel connected to who I truly am. That connection is what keeps pulling me back.</p>

<p><strong>Devika:</strong> Was there a specific climb or summit that made you realize this was your life’s calling?</p>

<p><strong>Yaashi:</strong> Yes, I’d say it was the Everest Base Camp trek. After completing my basic and advanced mountaineering courses, I decided to test my determination by trekking to Everest Base Camp. It was during that journey, standing at the foot of Mount Everest, that I felt a deep connection with the mountain. That’s when I knew I wanted to pursue the goal of climbing the highest peaks on all seven continents, with Everest at the top of my list.</p>

<p><strong>Devika:</strong> That’s such a profound realization. You mentioned forming a relationship with the mountains—can you expand on that?</p>

<p><strong>Yaashi:</strong> Certainly. For me, climbing isn’t just a physical challenge—it’s deeply spiritual. There’s a sense of calm and connection that comes when you stand before a mountain you’re about to climb. Despite the risks and hardships, there’s an inner peace that drives you forward. It feels like the mountain itself is guiding you. It’s hard to explain, but I think anyone who’s truly experienced the mountains would understand.</p>

<p><strong>Devika:</strong> Speaking of mindset, how do you keep your mental focus during grueling climbs?</p>

<p><strong>Yaashi:</strong> My mindset on the mountain is simple: “One step at a time.” Climbs can last 8 to 14 hours, which is physically and mentally exhausting. But instead of focusing on how far I still have to go, I concentrate on taking just the next step. It’s about breaking down the challenge into smaller, manageable pieces.</p>

<p><strong>Devika:</strong> That’s a powerful approach. Now, I’d like to know if there are any particular life experiences that have shaped your mindset?</p>

<p><strong>Yaashi:</strong> Definitely. In 2021, I attempted Mount Everest but had to turn back at 8,000 meters because of bad weather. I was just 850 meters away from the summit—it was heartbreaking. That season, I tried twice but couldn’t make it. Coming back after that was tough; I even struggled with depression. But over time, I realized it wasn’t my fault, and being alive to try again was a blessing in itself. That experience changed me profoundly. It taught me to focus on the journey, not just the destination.</p>

<p><strong>Devika:</strong> That’s such a valuable lesson. How did you overcome the self-doubt that followed?</p>

<p><strong>Yaashi:</strong> It wasn’t easy. I took on another challenge—climbing Mount Kilimanjaro—in October 2022. Even though it’s less demanding than Everest, I was filled with self-doubt after my earlier failure. But I pushed through, and reaching the summit renewed my confidence. It showed me that setbacks are a necessary part of success.</p>

<p><strong>Devika:</strong> You’re absolutely right. It’s inspiring to hear how you turned that failure into a stepping stone. Now, what’s your “why”? What drives you to keep taking on these challenges?</p>

<p><strong>Yaashi:</strong> It’s a mix of things. First, there’s the thrill of pushing my limits—it gives me an adrenaline rush like nothing else. But more than that, I want to make my parents proud. Their support has been my foundation, and I want to honor them by achieving my dreams.</p>

<p><strong>Devika:</strong> That’s beautiful. Finally, what’s one thing about mountaineering that you feel no one talks about?</p>

<p><strong>Yaashi:</strong> People often overlook the emotional rollercoaster of being in the mountains. It’s not just about the physical effort—you go through loneliness, self-doubt, exhilaration, and even moments of pure joy. The hardships, like living in minus 40-degree conditions or surviving on limited food, are also rarely discussed. Yet, all of these elements make the experience incredibly profound.</p>

<p><strong>Devika Majumder:</strong> So, Yaashi, do you have any unique rituals that you follow before starting a climb? Something consistent that you always do before you head out?</p>

<p><strong>Yaashi Jain:</strong> Yes, absolutely. Before starting any climb, we seek permission from the mountain god. It's something we hold dear. You see, the mountains are like a sacred space, and the mountain god decides whether we will succeed or fail. Whether we will return in one piece or not. So, we always begin with a Puja ceremony to worship the mountain god and ask for permission to climb. It’s important because we’re stepping into another world, and it’s essential to have respect for the territory we’re entering.</p>

<p><strong>Devika Majumder:</strong> That’s fascinating! Now, many say the mountains teach us a lot. What would you say is the biggest lesson you’ve learned from your climbs?</p>
<p>
            <strong>Yaashi Jain:</strong> I would say the biggest lesson the mountains have taught me is patience. It’s not about the summit, it’s about the journey. You learn to be patient in all situations, especially in harsh conditions. There are mountain passes that create situations that only you can deal with, and through it all, patience is key. You just have to go with the flow.
          </p>

          <p>
            <strong>Devika Majumder:</strong> That sounds like such a profound lesson. Now, I’m sure you’ve had your fair share of challenging moments. What would you say has been your scariest experience in mountaineering?
          </p>

          <p>
            <strong>Yaashi Jain:</strong> My scariest moment came last year when I attempted Everest in 2023. I had already climbed another 8,000-meter peak before Everest. After summiting Everest on the 17th, I went down to camp 4, and then straight away attempted Mount Lhotse, the fourth highest peak in the world. Imagine, climbing 8,000 meters on Everest, and then deciding to go straight for another 8,000-meter climb back-to-back. It was exhausting, and I was unsure I could take the next step. There were moments where I felt I might not make it, but you have to push past those thoughts. It was a battle between the negative and positive sides of my mind, but in the end, my belief in myself helped me keep going.
          </p>

          <p>
            <strong>Devika Majumder:</strong> That sounds incredibly intense. The physical and mental endurance needed for such climbs is mind-boggling! How do you prepare yourself, both physically and mentally?
          </p>

          <p>
            <strong>Yaashi Jain:</strong> Well, for me, training for Everest was like a 5 to 9 job. My routine was all about physical fitness. I’d wake up at 5 AM, go for a run, do some cardio, followed by a yoga session. In the evening, I would go cycling or swimming. Then came strength and endurance training. I made sure to increase the distance and difficulty every day, whether it was running or stair climbing with a 10-15 kg weight. And the mental part of the training? On days when I didn’t feel like doing anything, I pushed myself even harder. Mental fitness is crucial. If your mind is strong, you can push through anything, no matter how hard it gets.
          </p>

          <p>
            <strong>Devika Majumder:</strong> It seems like you really have to force yourself, especially on the tough days. That’s an incredible mindset! What would you say is more important—physical or mental fitness?
          </p>

          <p>
            <strong>Yaashi Jain:</strong> Mental fitness is definitely the most important. Physical fitness can be trained, but if your mind isn’t in the right place, nothing will work. I’ve experienced this firsthand. For example, when I was climbing Everest, I came down with a fever and tonsillitis. I was struggling to walk, and yet the only thing that kept me going was my mental strength. My mind focused on the next step, and that’s how I managed to push through.
          </p>

          <p>
            <strong>Devika Majumder:</strong> Wow, that’s inspiring! Now, mountaineering requires such intense focus and commitment. Is there any "hack" you’ve discovered that helps you in these extreme conditions?
          </p>

          <p>
            <strong>Yaashi Jain:</strong> There’s no real hack in mountaineering. It’s all about preparation, training, and mindset. But one thing I can say is that there’s no shortcut to success. It’s about persistence and determination every single day.
          </p>

          <p>
            <strong>Devika Majumder:</strong> That’s so true. Now, when you’re out there in the mountains, what does your survival kit look like? What can’t you live without?
          </p>

          <p>
            <strong>Yaashi Jain:</strong> The most essential item in my survival kit is water. It’s crucial for acclimatization. Without proper hydration, you can’t survive up there. Then, there’s a knife and rope. You never know when you might need them, especially when there’s a chance of falling or if you have to make an emergency move. The rope is tied to our harnesses for safety, and the knife is for all sorts of practical uses.
          </p>

          <p>
            <strong>Devika Majumder:</strong> It sounds like your survival kit is quite minimal but crucial. Moving forward, what’s next for you in your mountaineering journey?
          </p>

          <p>
            <strong>Yaashi Jain:</strong> Everyone always asks me that, and to be honest, it’s difficult for me to answer. I’ve always achieved what I set out to do, and that’s enough for me. I don’t plan too far ahead. I believe in living in the moment and achieving whatever I set my mind to.
          </p>

          <p>
            <strong>Devika Majumder:</strong> That’s an interesting approach! How do you see the future of mountaineering evolving?
          </p>

          <p>
            <strong>Yaashi Jain:</strong> Mountaineering has definitely grown since I started. It’s gaining more recognition, and people are getting more curious about it. As a sport, mountaineering teaches us so much about nature and our own limits. It’s a great way to stay grounded, both physically and mentally. I think as the world evolves, more people will turn to mountaineering to connect with themselves and nature, especially with the rising challenges we face in society today.
          </p>

          <p>
            <strong>Devika Majumder:</strong> That’s a great perspective. Now, as a role model for many, what message do you have for young boys and girls, especially women, who look up to you?
          </p>

          <p>
            <strong>Yaashi Jain:</strong> For the youth, especially those who may be drifting toward negative influences, I’d say, find something you’re passionate about. Focus on that, and it will help you steer your life in a better direction. For me, that passion has always been mountaineering. If you love what you do, it drives you. And for women, I want to say that when you decide to do something, people may try to bring you down, but you must stay strong. Keep pushing forward, because what truly matters is what you want to achieve. Stay focused on your goal, no matter what obstacles come your way.
          </p>

          <p>
            <strong>Devika:</strong> So now this is another fun question. Who would you love to take on a climb with you, dead or alive?
          </p>

          <p>
            <strong>Yaashi:</strong> Not on the plan, but I would like to take my family—my mom, dad, or my sister. It’s my dream to have them experience what I’ve experienced while climbing.
          </p>

          <p>
            <strong>Devika:</strong> Oh, that's nice. Very nice. Now, favorite view, sunrise or sunset?
          </p>

          <p>
            <strong>Yaashi:</strong> Sunsets.
          </p>
          <p><strong>Yaashi Jain:</strong> I would say the biggest lesson the mountains have taught me is patience. It’s not about the summit, it’s about the journey. You learn to be patient in all situations, especially in harsh conditions. There are mountain passes that create situations that only you can deal with, and through it all, patience is key. You just have to go with the flow.</p>

      <p><strong>Devika Majumder:</strong> That sounds like such a profound lesson. Now, I’m sure you’ve had your fair share of challenging moments. What would you say has been your scariest experience in mountaineering?</p>

      <p><strong>Yaashi Jain:</strong> My scariest moment came last year when I attempted Everest in 2023. I had already climbed another 8,000-meter peak before Everest. After summiting Everest on the 17th, I went down to camp 4, and then straight away attempted Mount Lhotse, the fourth highest peak in the world. Imagine, climbing 8,000 meters on Everest, and then deciding to go straight for another 8,000-meter climb back-to-back. It was exhausting, and I was unsure I could take the next step. There were moments where I felt I might not make it, but you have to push past those thoughts. It was a battle between the negative and positive sides of my mind, but in the end, my belief in myself helped me keep going.</p>

      <p><strong>Devika Majumder:</strong> That sounds incredibly intense. The physical and mental endurance needed for such climbs is mind-boggling! How do you prepare yourself, both physically and mentally?</p>

      <p><strong>Yaashi Jain:</strong> Well, for me, training for Everest was like a 5 to 9 job. My routine was all about physical fitness. I’d wake up at 5 AM, go for a run, do some cardio, followed by a yoga session. In the evening, I would go cycling or swimming. Then came strength and endurance training. I made sure to increase the distance and difficulty every day, whether it was running or stair climbing with a 10-15 kg weight. And the mental part of the training? On days when I didn’t feel like doing anything, I pushed myself even harder. Mental fitness is crucial. If your mind is strong, you can push through anything, no matter how hard it gets.</p>

      <p><strong>Devika Majumder:</strong> It seems like you really have to force yourself, especially on the tough days. That’s an incredible mindset! What would you say is more important—physical or mental fitness?</p>

      <p><strong>Yaashi Jain:</strong> Mental fitness is definitely the most important. Physical fitness can be trained, but if your mind isn’t in the right place, nothing will work. I’ve experienced this firsthand. For example, when I was climbing Everest, I came down with a fever and tonsillitis. I was struggling to walk, and yet the only thing that kept me going was my mental strength. My mind focused on the next step, and that’s how I managed to push through.</p>

      <p><strong>Devika Majumder:</strong> Wow, that’s inspiring! Now, mountaineering requires such intense focus and commitment. Is there any "hack" you’ve discovered that helps you in these extreme conditions?</p>

      <p><strong>Yaashi Jain:</strong> There’s no real hack in mountaineering. It’s all about preparation, training, and mindset. But one thing I can say is that there’s no shortcut to success. It’s about persistence and determination every single day.</p>

      <p><strong>Devika Majumder:</strong> That’s so true. Now, when you’re out there in the mountains, what does your survival kit look like? What can’t you live without?</p>

      <p><strong>Yaashi Jain:</strong> The most essential item in my survival kit is water. It’s crucial for acclimatization. Without proper hydration, you can’t survive up there. Then, there’s a knife and rope. You never know when you might need them, especially when there’s a chance of falling or if you have to make an emergency move. The rope is tied to our harnesses for safety, and the knife is for all sorts of practical uses.</p>

      <p><strong>Devika Majumder:</strong> It sounds like your survival kit is quite minimal but crucial. Moving forward, what’s next for you in your mountaineering journey?</p>

      <p><strong>Yaashi Jain:</strong> Everyone always asks me that, and to be honest, it’s difficult for me to answer. I’ve always achieved what I set out to do, and that’s enough for me. I don’t plan too far ahead. I believe in living in the moment and achieving whatever I set my mind to.</p>

      <p><strong>Devika Majumder:</strong> That’s an interesting approach! How do you see the future of mountaineering evolving?</p>

      <p><strong>Yaashi Jain:</strong> Mountaineering has definitely grown since I started. It’s gaining more recognition, and people are getting more curious about it. As a sport, mountaineering teaches us so much about nature and our own limits. It’s a great way to stay grounded, both physically and mentally. I think as the world evolves, more people will turn to mountaineering to connect with themselves and nature, especially with the rising challenges we face in society today.</p>

      <p><strong>Devika Majumder:</strong> That’s a great perspective. Now, as a role model for many, what message do you have for young boys and girls, especially women, who look up to you?</p>

      <p><strong>Yaashi Jain:</strong> For the youth, especially those who may be drifting toward negative influences, I’d say, find something you’re passionate about. Focus on that, and it will help you steer your life in a better direction. For me, that passion has always been mountaineering. If you love what you do, it drives you. And for women, I want to say that when you decide to do something, people may try to bring you down, but you must stay strong. Keep pushing forward, because what truly matters is what you want to achieve. Stay focused on your goal, no matter what obstacles come your way.</p>

      <p><strong>Devika:</strong> So now this is another fun question. Who would you love to take on a climb with you, dead or alive?</p>

      <p><strong>Yaashi:</strong> Not on the plan, but I would like to take my family—my mom, dad, or my sister. It’s my dream to have them experience what I’ve experienced while climbing.</p>

      <p><strong>Devika:</strong> Oh, that's nice. Very nice. Now, favorite view, sunrise or sunset?</p>

      <p><strong>Yaashi:</strong> Sunsets.</p>

      <p><strong>Devika:</strong> Wonderful. First thing you do when you reach the summit?</p>
      <p><strong>Yaashi:</strong> Like, take a picture. That’s the most important thing. The first thing you have to do is capture the moment of having reached the summit. And apart from that, just enjoy the view, be in the moment, and take it all in.</p>

<p><strong>Devika:</strong> One word to describe how it feels when you reach the top?</p>

<p><strong>Yaashi:</strong> Sukoon.</p>

<p><strong>Devika:</strong> I knew it! It had to be "Sukoon." It’s the perfect word for that feeling of peace, right?</p>

<p><strong>Yaashi:</strong> Yes, exactly.</p>

<p><strong>Devika:</strong> Solo climbs or team expeditions?</p>

<p><strong>Yaashi:</strong> I guess team expeditions.</p>

<p><strong>Devika:</strong> Snowy peaks or rocky terrain?</p>

<p><strong>Yaashi:</strong> Snowy peaks.</p>

<p><strong>Devika:</strong> Is there a favorite climbing buddy you have?</p>

<p><strong>Yaashi:</strong> Yes. There’s a brother of mine, not a real brother, but we’ve climbed four or five mountains together. He supports and motivates me a lot. It feels much easier in negative situations because of his support. He’d be my favorite buddy.</p>

<p><strong>Devika:</strong> That’s wonderful. Tea or coffee in the morning?</p>

<p><strong>Yaashi:</strong> Can we choose hot chocolate?</p>

<p><strong>Devika:</strong> Of course! Hot chocolate is always a good choice. Alright, best advice you’ve ever received?</p>

<p><strong>Yaashi:</strong> I guess the best advice came from my father. He always says, "I’m here for you. You don’t need to worry about anything; we are here to support you at any point in time." That’s the biggest thing anyone could say to someone they love.</p>

<p><strong>Devika:</strong> Absolutely. Knowing that someone has your back is incredibly reassuring. It gives you peace on your journey.</p>

<p><strong>Yaashi:</strong> Yes, truly.</p>

<p><strong>Devika:</strong> Now, the craziest weather you’ve ever experienced on a climb?</p>

<p><strong>Yaashi:</strong> That would be in 2021 when I experienced two cyclones back-to-back. I was in the mountains, and we had to walk back in that crazy weather. It was the most intense experience I’ve ever had.</p>

<p><strong>Devika:</strong> Wow. That sounds terrifying. Best place to unwind after a tough climb?</p>

<p><strong>Yaashi:</strong> I guess, for most people, they’d say they want to go back to the mountains, but for me, after coming back from the mountains, my home is where I feel most peaceful. Sometimes, a bike ride through my city is also really calming.</p>

<p><strong>Devika:</strong> That’s nice. What’s scarier, heights or isolation?</p>

<p><strong>Yaashi:</strong> Isolation.</p>

<p><strong>Devika:</strong> Biggest misconception people have about mountaineering?</p>

<p><strong>Yaashi:</strong> People think it looks easy and fun, that you just go, climb, and come back. But there’s so much more to it, so much preparation and challenges in between.</p>

<p><strong>Devika:</strong> What is your favorite downtime activity when you're not climbing?</p>

<p><strong>Yaashi:</strong> I’m a person who sleeps a lot. So, when I’m not climbing, relaxing and resting is my priority. After an expedition, I’m exhausted, and I just need a lot of sleep to recover.</p>

<p><strong>Devika:</strong> That makes sense. Now, who’s the most inspiring person you've met on a climb?</p>

<p><strong>Yaashi:</strong> Recently, I met a lady who climbed Everest. She was with me in 2023, but for some reasons, she couldn’t complete the climb that year. However, she did it the next year and set a record, achieving it at almost 55 years of age. That’s incredibly inspiring to me.</p>

<p><strong>Devika:</strong> Wow, that’s truly remarkable! Yoga or strength training?</p>

<p><strong>Yaashi:</strong> Strength training, specifically deadlifts.</p>

<p><strong>Devika:</strong> Lovely. Climbing in silence or with music?</p>

<p><strong>Yaashi:</strong> Silence.</p>

<p><strong>Devika:</strong> One mountain you'd love to climb over and over again?</p>

<p><strong>Yaashi:</strong> I guess Everest.</p>

<p><strong>Devika:</strong> Very good. Now, if you could name a mountain after yourself, what would you call it?</p>

<p><strong>Yaashi:</strong> I would call it "Yash." The reason is that my name, Yash, means success, and also, it’s deep from the heart. So, I would name the mountain "Yash" to reflect that sense of deep passion and success.</p>

<p><strong>Devika:</strong> Beautiful. Now, if your life were made into a movie, what would the title be?</p>

<p><strong>Yaashi:</strong> That’s a difficult question. Let me think... I would say, "What you dream of, you can achieve." I think that reflects my journey and philosophy.</p>

<p><strong>Devika:</strong> Absolutely, that’s so fitting. Whatever you dream, you can indeed achieve! We’ve almost covered a lot, Yashi. We’d like some pictures from you for the article and the snippets.</p>

<p><strong>Yaashi:</strong> Sure, I’d be happy to share some expedition pictures.</p>

<p><strong>Devika:</strong> Great! We’re in the prelaunch phase of our global influencers hub, and we’re highlighting influencers globally. We’ll definitely keep you posted when the interview goes live.</p>

<p><strong>Yaashi:</strong> It’s been an honor to speak with you, Devika. I really enjoyed answering your questions.</p>
<p>
            <strong>Devika:</strong> It was such a pleasure. Thank you for sharing
            your insights with us. We’ll reach out if we have any further questions.
          </p>

          <p>
            <strong>Yaashi:</strong> Definitely, anytime. Thank you so much for having me.
          </p>

          <p>
            <strong>Devika:</strong> You’re welcome, all the best with your future climbs!
          </p>

           
            
           

            
            
            
            
            
            
    



           

        
            
            
            
            
            
           
            
          
            

            
           
    </Container>
           
            </Card.Body>
          
    </>
  );
};

export default Yaashi ;
