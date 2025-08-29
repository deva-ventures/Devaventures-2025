import React from 'react';
import { Container, Row, Col, Card , Image} from 'react-bootstrap';

const Pratul = () => {
  return (
    < >
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
              If we could all step back and understand that our troubles are not the end of the world, we would be able to live with more compassion and less emotional burden.
              </q>{" "}
              – <strong>Pratul Vishera</strong>
            </p>
          {/* </Col> */}

          {/* Right Side - Complete Image */}
          <Col xs={12} md={6} className="text-center text-md-start">
            <Image
              src="/pratulArticle.png" // <-- second image here
              alt="Preetha Athrey"
              fluid
              style={{ maxWidth: "100%", height: "auto" }}
            />
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
            Pratul Vishera is not just an astrologer—he is a seeker, a storyteller, and a scientist of the soul. Born under the open skies of Agra and raised with questions too big for textbooks, Pratul’s journey from a curious child chasing starlight to a TEDx speaker and modern mythologist is a tale of inner fire, fearless inquiry, and quiet rebellion. Every chapter of his life reads like a cosmic dialogue—between logic and faith, tradition and transformation, music and meaning.

In this exclusive conversation, Devika Majumder, Co-founder of Global Influencer Hub, sits down with Pratul to unravel the tapestry of a life driven by wonder. From childhood rooftop stargazing to composing for Bollywood, from decoding karma to challenging outdated notions of astrology, Pratul shares how he carved an unconventional path rooted in depth, discipline, and discovery. With clarity, humour, and radical honesty, he opens up about loss, legacy, and the importance of questioning everything—even the stars themselves.
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
      src="/pratulArticleVideo.mp4"
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




    
          <Container className='pt-5'>
          <p>
                <strong>Devika Majumder:</strong> Welcome, Pratul, to Global
                Influencer Hub. We’re thrilled to have you here. This is where
                we talk about the life journeys of social media influencers, and
                I honestly can’t wait to dive into yours. And when I say “dive”,
                I mean we’re going all the way back—childhood, mythology,
                astrology, the whole cosmic package. So, tell us: who was little
                Pratul?
              </p>

              <p>
                <strong>Pratul Vishera:</strong> Thank you, Devika. It’s great
                to be here. So, let’s go way back. I was born in Agra — the land
                of Ghalib and Tansen. Even as a kid, I was fascinated by the
                stars. I remember actually hoping for power cuts just so I could
                run up to the rooftop and look at the night sky. That used to be
                the best time — watching the stars and the moon in their full
                glory.
              </p>

              <p>
                <strong>Devika:</strong> That’s such a beautiful image — waiting
                for darkness so the sky could light up. What were those moments
                like for you?
              </p>

              <p>
                <strong>Pratul:</strong> They were magical. I used to ask my dad
                all sorts of questions: “Why do stars twinkle?” “Is the moon a
                plate or a sphere?” I must have been around five, but I
                wouldn’t stop. My dad used to say, “Stop eating my brain! We
                don’t have all the answers.” And my mom? She was like, “Just put
                him in school, let someone else handle all this curiosity!”
              </p>

              <p>
                <strong>Devika:</strong> Sounds like you were a handful — in the
                best way.
              </p>

              <p>
                <strong>Pratul:</strong> Oh, totally. I’ve always been that way.
                Curious about everything. Whether it was how a photocopy machine
                works or now, something like nail art design — I want to know it
                all. How does the machine work? How is the black colour applied?
                What makes something shiny? I’ve always had this unquenchable
                thirst for knowledge.
              </p>

              <p>
                <strong>Devika:</strong> And it’s not just about surface-level
                knowledge, right? You want to know the “why” behind things —
                even the emotional, philosophical side of life.
              </p>

              <p>
                <strong>Pratul:</strong> Exactly! And that curiosity wasn’t
                limited to the cosmos. Like most kids, I dreamt of becoming an
                astronaut. My mom used to say, “The baby’s future is visible in
                the cradle.” For me, that meant pointing at the moon and saying,
                “I want to know what that is.”
              </p>

              <p>
                <strong>Devika:</strong> Love that! So when did music enter the
                picture?
              </p>

              <p>
                <strong>Pratul:</strong> That was later, but when I discovered
                music, it hit me like a wave. It was so emotionally powerful. I
                remember thinking, “This is deeper than science.” Music gave me
                a language for emotions I couldn’t explain. And yet, the
                questions never stopped — Why is life the way it is? Why are
                some people born into privilege while others suffer? Why are
                some born with disabilities? These things haunted me.
              </p>

              <p>
                <strong>Devika:</strong> So the questions only evolved — from
                stars and science to society and self.
              </p>

              <p>
                <strong>Pratul:</strong> Exactly. And often, I was told, “Go
                find the answers yourself.” So that’s what I’ve been doing —
                finding meaning wherever I can. That hunger to understand… it’s
                never gone away.
              </p>

              <p>
                <strong>Devika:</strong> Pratul, the way you frame your
                questions about life — it’s so rare and profound. Not everyone
                walks around with these deep, existential thoughts. Most people
                don’t even have those answers themselves!
              </p>

              <p>
                <strong>Pratul:</strong> Exactly. That’s what I felt too. Not
                everyone has answers ready — but I promised myself, I’ll have
                answers ready for my son when he grows up. I won’t just brush
                things off. I remember wondering — Why is someone rich and
                another poor? Why does one person suffer and another thrive?
                There has to be a reason behind it all, right?
              </p>

              <p>
                <strong>Devika:</strong> And I guess when those answers didn’t
                come easily, you went looking for them?
              </p>

              <p>
                <strong>Pratul:</strong> Yes! One day, I remember thinking, Let
                me try being the intellectual for a day. I followed my mom
                around, determined to outsmart her with my questions. And she
                just calmly said, “We carry the karma of our past lives. What
                you experience today is the fruit of your previous birth’s
                deeds.” So then I started thinking — Wait, I’m watching TV right
                now because of my birth’s karma? I’m enjoying these comforts
                because of my father’s actions in a past life?
              </p>

              <p>
                <strong>Devika:</strong> That’s such a huge thought to process
                for a kid…
              </p>

              <p>
                <strong>Pratul:</strong> It was! And it hit me like — wow, this
                is deep. But it didn’t stop there. My parents, understandably,
                couldn’t always answer these kinds of questions. But my
                curiosity didn’t let up. Then something happened in school that
                really changed the course of my thinking.
              </p>

              <p>
                <strong>Devika:</strong> What was it?
              </p>

              <p>
                <strong>Pratul:</strong> It was during a random extra class. The
                teacher wasn’t even supposed to be there — they were filling in
                for someone else. So, just to pass the time, they threw out a
                question to us seventh graders. They asked: “If God says
                everything happens by His will — like it says in the Gita, where
                Krishna tells Arjuna even your breath is taken by my will — then
                how are bad things still happening in the world? If everything
                is God’s will, either He isn’t truly God, or what’s written is
                wrong.”
              </p>

              <p>
                <strong>Devika:</strong> Whoa. That’s a heavy philosophical
                contradiction to throw at a bunch of 12-year-olds!
              </p>

              <p>
                <strong>Pratul:</strong> Exactly! While most kids were busy
                wondering where to find wild Pokémon, I was sitting there
                absolutely stunned. That question set a fire inside me. If this
                is true… how do we explain the suffering, the injustice, the
                randomness of life? I couldn’t get it out of my head.
              </p>

              <p>
                <strong>Devika:</strong> So what did you do with that fire?
              </p>

              <p>
                <strong>Pratul:</strong> I went looking for answers. That
                question became an obsession. I read whatever I could —
                mythology, philosophy, scriptures. I explored every angle. It
                took me years — four or five at least. But somewhere around
                Class 11 or 12, I found clarity. I finally understood the deeper
                layers behind that contradiction. And that’s when I began
                writing — putting those thoughts, realizations, and reflections
                into words.
              </p>

              <p>
                <strong>Devika:</strong> Wow, Pratul… you really became a seeker
                — a complete seeker. That’s so powerful. It’s actually what
                ancient India has always been about, right? A land of seekers.
                So, you walked that path — and it took you, what, five years to
                finally get the answer to a question that was almost painful to
                carry. What kind of journey was that for you? Was it
                frustrating? Or was it more about constantly moving forward?
              </p>

              <p>
                <strong>Pratul:</strong> It was beautiful — but also
                never-ending. I mean, when I was in Class 7, I thought I’d find
                the answer in a book, like a straightforward explanation. But
                soon I realized the school books — they weren’t designed for
                questions like mine. It felt like those books were meant for
                memorization, not for seeking. It was like they were written for
                people who don’t question.
              </p>

              <p>
                <strong>Devika:</strong> That’s such a bold realization to have
                at such a young age.
              </p>

              <p>
                <strong>Pratul:</strong> Yeah. But then I discovered something
                deeper. The ancient texts — the truly meaningful ones — they
                don’t give answers on a plate. They ask you to think. To feel
                between the lines. You have to sit with the words, churn them.
                The meaning isn’t obvious. You have to be ready to unlock it.
              </p>

              <p>
                <strong>Devika:</strong> Exactly. It’s like they speak in layers
                — only revealing what you’re ready to understand.
              </p>
          <p><strong>Pratul:</strong> Absolutely. It’s not limited to the Geeta or Mahabharat. Even those simple stories in NCERT books — they used to fascinate me. I remember reading them and dreaming about them...</p>

            <p><strong>Devika:</strong> That’s such a powerful way of engaging with stories. And you mentioned Mahabharat — what is it about that epic that you keep returning to?</p>

            <p><strong>Pratul:</strong> Mahabharat is everything. It’s a complete mirror of life. Every possible human emotion and situation has been described in it...</p>

            <p><strong>Devika:</strong> And if you could have a conversation with your younger self — your Class 7 version — what would you tell him? Something that would absolutely shock him?</p>

            <p><strong>Pratul:</strong> Oh, I’d just walk up and say, “You’re going to become an astrologer.” That would blow his mind...</p>

            <p><strong>Devika:</strong> That’s such an organic evolution. Speaking of dreams, what kind of music were you into back then?</p>

            <p><strong>Pratul:</strong> I was deeply into classical music. I wasn’t limited to any one genre — I enjoyed everything...</p>

            <p><strong>Devika:</strong> That’s incredible — congratulations! That’s a major milestone.</p>

            <p><strong>Pratul:</strong> Thank you! But you know, it was never about fame for me. I never wanted to be in the spotlight...</p>

            <p><strong>Devika:</strong> So true. What a refreshing way to live. You really just chose your path and followed it with honesty. From Vedic astrology to a TEDx talk — that’s an incredibly unique journey! Tell us a bit about how the TEDx talk came into your life.</p>

            <p><strong>Pratul:</strong> To be honest, I never imagined myself giving a TEDx talk — not even in my wildest dreams...</p>

            <p><strong>Devika:</strong> That must’ve been surreal. Were you nervous?</p>

            <p><strong>Pratul:</strong> Nervous would be an understatement! Everyone there had rehearsed lines, dramatized pauses...</p>

            <p><strong>Devika:</strong> What did you speak about? You mentioned your ideas were unconventional?</p>

            <p><strong>Pratul:</strong> Yeah, I spoke about gemstones and matchmaking in astrology — but not the way it’s usually presented...</p>

            <p><strong>Devika:</strong> That’s a big moment — from music to astrology consultations, just like that.</p>

            <p><strong>Pratul:</strong> Exactly. I never intended to become “an astrologer.” At the time, I was working as a music producer...</p>

            <p><strong>Devika:</strong> You really lived that passion fully.</p>

            <p><strong>Pratul:</strong> Well, not just passion — it was purpose. Honestly, I didn’t grow up with this pressure of “you have to become something.”...</p>

            <p><strong>Devika:</strong> So, when did that shift happen for you?</p>

            <p><strong>Pratul:</strong> During COVID. I lost my job like so many others. But astrology kept going...</p>

            <p><strong>Devika:</strong> So now that you’re in the world of astrology — a space so often associated with predictions — I have to ask, have you ever made any prediction about yourself that came true?</p>

            <p><strong>Pratul:</strong> Never. I’ve never read a full prediction for myself. I haven’t deeply analysed my own chart...</p>

            <p><strong>Devika:</strong> That’s fascinating. You know, I’ve had my own personal experiences with astrology growing up...</p>

            <p><strong>Pratul:</strong> Exactly! I totally understand what you’re saying — and this is such a personal and important point...</p>

            <p><strong>Devika:</strong> Yes, tell people what they can do — not what they should fear.</p>

            <p><strong>Pratul:</strong> Exactly. And to be honest, in today’s world, it’s easier to find a good girlfriend than a good astrologer!...</p>

            <p><strong>Devika:</strong> That’s a big misconception — that astrology is all ritual, all blind belief.</p>

            <p><strong>Pratul:</strong> Absolutely. Real astrology is deeply scientific. If you open my books, you’ll see formulas involving cosine theta...</p>

            <p><strong>Devika:</strong> It’s mind-blowing how precise those tools are, even by today’s standards.</p>

            <p><strong>Pratul:</strong> Exactly. But ask a person today, “Where’s the sun right now?” and they’ll just Google it...</p>

            <p><strong>Devika:</strong> So you believe that astrology has a strong scientific foundation?</p>

            <p><strong>Pratul:</strong> Yes, absolutely. There is so much science in astrology...</p>

            <p><strong>Devika:</strong> That’s an interesting point, Pratul. You also mentioned something about remedies and whether they can truly alter a person’s fate. I’m curious to hear your thoughts on that.</p>

            <p><strong>Pratul:</strong> Ah, the concept of remedies—people often think that wearing gemstones or performing rituals will change their destiny...</p>

            <p><strong>Devika:</strong> So you’re saying there is no real way to change the course of one’s destiny with gemstones or similar remedies?</p>

            <p><strong>Pratul:</strong> Exactly. Some things, like your parents or where you were born, cannot be changed...</p>

            <p><strong>Devika:</strong> That’s a refreshing take. Now, when it comes to gemstones, there’s a huge market around them. Many people believe that wearing specific gemstones can bring prosperity or good fortune. What’s your take on this business?</p>

            <p><strong>Pratul:</strong> The gemstone industry has become a massive business...</p>

            <p><strong>Devika:</strong> So, you would say that the true power lies in the knowledge of astrology itself, rather than relying on external remedies?</p>

            <p><strong>Pratul:</strong> Exactly. True astrology isn’t about selling gemstones or chanting mantras for a quick fix...</p>

            <p><strong>Devika Majumder:</strong> Welcome, Pratul, to Global Influencer Hub. We’re thrilled to have you here...</p>

            <p><strong>Pratul Vishera:</strong> Thank you, Devika. It’s great to be here. So, let’s go way back...</p>

            <p><strong>Devika:</strong> That’s such a beautiful image — waiting for darkness so the sky could light up...</p>

            <p><strong>Pratul:</strong> They were magical. I used to ask my dad all sorts of questions...</p>

            <p><strong>Devika:</strong> Sounds like you were a handful — in the best way.</p>

            <p><strong>Pratul:</strong> Oh, totally. I’ve always been that way. Curious about everything...</p>

            <p><strong>Devika:</strong> And it’s not just about surface-level knowledge, right? You want to know the “why” behind things — even the emotional, philosophical side of life.</p>

            <p><strong>Pratul:</strong> Exactly! And that curiosity wasn’t limited to the cosmos...</p>

            <p><strong>Devika:</strong> Love that! So when did music enter the picture?</p>

            <p><strong>Pratul:</strong> That was later, but when I discovered music, it hit me like a wave...</p>

            <p><strong>Devika:</strong> So the questions only evolved — from stars and science to society and self.</p>

            <p><strong>Pratul:</strong> Exactly. And often, I was told, “Go find the answers yourself.”...</p>

            <p><strong>Devika:</strong> Pratul, the way you frame your questions about life — it’s so rare and profound...</p>

            <p><strong>Pratul:</strong> Exactly. That’s what I felt too. Not everyone has answers ready...</p>

            <p><strong>Devika:</strong> And I guess when those answers didn’t come easily, you went looking for them?</p>

            <p><strong>Pratul:</strong> Yes! One day, I remember thinking, Let me try being the intellectual for a day...</p>

            <p><strong>Devika:</strong> That’s such a huge thought to process for a kid…</p>

            <p><strong>Pratul:</strong> It was! And it hit me like — wow, this is deep...</p>

            <p><strong>Devika:</strong> What was it?</p>

            <p><strong>Pratul:</strong> It was during a random extra class...</p>

            <p><strong>Devika:</strong> Whoa. That’s a heavy philosophical contradiction to throw at a bunch of 12-year-olds!</p>

            <p><strong>Pratul:</strong> Exactly! While most kids were busy wondering where to find wild Pokémon, I was stunned...</p>

            <p><strong>Devika:</strong> So what did you do with that fire?</p>

            <p><strong>Pratul:</strong> I went looking for answers. That question became an obsession...</p>

            <p><strong>Devika:</strong> Wow, Pratul… you really became a seeker — a complete seeker...</p>

            <p><strong>Pratul:</strong> It was beautiful — but also never-ending...</p>

            <p><strong>Devika:</strong> That’s such a bold realization to have at such a young age.</p>

            <p><strong>Pratul:</strong> Yeah. But then I discovered something deeper...</p>

            <p><strong>Devika:</strong> Exactly. It’s like they speak in layers — only revealing what you’re ready to understand.</p>

            <p><strong>Pratul:</strong> Absolutely. At one point, I remember thinking...</p>

            <p><strong>Devika:</strong> Like opening one door just leads to more doors?</p>

            <p><strong>Pratul:</strong> Yes! That’s when I realized — the question I had wasn’t a full stop, it was more like a Raktabeej.</p>

            <p><strong>Devika:</strong> Wait, like the demon from mythology? The one where every drop of blood gives rise to another demon?</p>

            <p><strong>Pratul:</strong> Exactly. That’s the metaphor!...</p>

            <p><strong>Devika:</strong> That’s such a poetic way to describe it. So the journey never really ended?</p>

            <p><strong>Pratul:</strong> Nope. Still hasn’t...</p>

            <p><strong>Devika:</strong> So tell me — was it books or meditation that guided you through this inner quest?</p>

            <p><strong>Pratul:</strong> Honestly? Meditation was never really my thing...</p>

            <p><strong>Devika:</strong> So it was knowledge, not silence, that pulled you in?</p>

            <p><strong>Pratul:</strong> Exactly! I was hungry for knowledge...</p>

            <p><strong>Devika:</strong> And yet, it’s wild to think — you never set out to become an astrologer or a mythology expert, right?</p>

            <p><strong>Pratul:</strong> Never in my wildest dreams...</p>

            <p><strong>Devika:</strong> Were you ever into the typical stuff as a kid? Like comics or cartoons?</p>

            <p><strong>Pratul:</strong> Of course! I was crazy about Pokémon. Obsessed with cricket...</p>

            <p><strong>Devika:</strong> So a typical childhood… but with this deeper undercurrent of curiosity?</p>

            <p><strong>Pratul:</strong> Exactly. Even while doing regular kid things, there was always this little voice...</p>

            <p><strong>Devika:</strong> You had to know the “why” behind everything?</p>

            <p><strong>Pratul:</strong> Always. Even in class...</p>

            <p><strong>Devika:</strong> That kind of curiosity must’ve driven your teachers crazy!</p>

            <p><strong>Pratul:</strong> It did! They’d tell me to stop asking so many questions...</p>

            <p><strong>Devika:</strong> Yeah, I totally get what you’re saying. It really hits home...</p>

            <p><strong>Pratul:</strong> Absolutely. Look, I understand schools are important...</p>

            <p><strong>Devika:</strong> Exactly! The whole point of creativity is being able to think independently...</p>

            <p><strong>Pratul:</strong> Right! And it’s not just about careers or academic success...</p>

            <p><strong>Devika:</strong> So for you, life itself became a canvas for exploration?</p>

            <p><strong>Pratul:</strong> Exactly. I’ve always felt like I was born under this Earth...</p>

            <p><strong>Devika:</strong> So fascinating, honestly...</p>

            <p><strong>Pratul:</strong> Yes, exactly! That’s how the universe works. Nothing is random...</p>

            <p><strong>Devika:</strong> It really is. I love that. So tell me, who was your favourite mythological hero or goddess?</p>

            <p><strong>Pratul:</strong> That’s a tough one...</p>

            <p><strong>Devika:</strong> I love that. It’s like they weren’t just stories — they became a framework for how to live.</p>
            <p><strong>Pratul:</strong> Exactly. And what they taught me was this: being the right person matters more than anything. It’s not just about having morals — it’s about living them, even when it’s hard.</p>
            <p><strong>Pratul:</strong> There are two kinds of people in life — those who choose between right and wrong, and those who choose between easy and difficult. I always try to choose right and wrong, regardless of whether it’s easy or hard.</p>
            <p><strong>Pratul:</strong> Because what’s right might be difficult — but it’s still right. And that choice defines you.</p>

            <p><strong>Devika:</strong> Wow, it’s clear that these mythological stories and philosophies have deeply influenced your journey in such a profound way. And what I find beautiful is that you still look for inspiration in everyday life.</p>

            <p><strong>Pratul:</strong> Absolutely. It’s not limited to the Geeta or Mahabharat. Even those simple stories in NCERT books — they used to fascinate me. I remember reading them and dreaming about them. One story that stuck with me was about a student who discovers a strong man is actually a tree. Those metaphors — they had such beauty.</p>
            <p><strong>Pratul:</strong> See, for me, knowledge was never about where it came from. It could be a stone, a tree, a tale — everything had something to teach. I just kept digging, like, “What is the reason behind this story?” I didn’t just read it, I tried to extract meaning from it. Everyone has their own way of learning, right? But for me, the magic was in understanding what wasn’t written directly.</p>

            <p><strong>Devika:</strong> That’s such a powerful way of engaging with stories. And you mentioned Mahabharat — what is it about that epic that you keep returning to?</p>

            <p><strong>Pratul:</strong> Mahabharat is everything. It’s a complete mirror of life. Every possible human emotion and situation has been described in it — jealousy, righteousness, betrayal, duty, dharma. It’s like a handbook for life. Every city, every turn in my life, I find echoes of Mahabharat. It’s like all of life’s questions are embedded in its verses — already lived, already answered.</p>

            <p><strong>Devika:</strong> And if you could have a conversation with your younger self — your Class 7 version — what would you tell him? Something that would absolutely shock him?</p>

            <p><strong>Pratul:</strong> Oh, I’d just walk up and say, “You’re going to become an astrologer.” That would blow his mind. Because honestly, I never even dreamt of this path. I didn’t imagine becoming anything. I just wanted to learn. That was my only goal.</p>

            <p><strong>Devika:</strong> That’s such an organic evolution. Speaking of dreams, what kind of music were you into back then?</p>

            <p><strong>Pratul:</strong> I was deeply into classical music. I wasn’t limited to any one genre — I enjoyed everything. But I appreciated the depth of melody. The emotion it brings, that subtle message — I could feel all that. I loved listening to greats like Khan Saheb. And now, believe it or not, I’ve actually fulfilled another dream — I’ve become a music composer in Bollywood!</p>

            <p><strong>Devika:</strong> That’s incredible — congratulations! That’s a major milestone.</p>

            <p><strong>Pratul:</strong> Thank you! But you know, it was never about fame for me. I never wanted to be in the spotlight. I just wanted to compose. Create. For me, music was sacred. Like — I don’t want to be chased by fans while I’m eating golgappa. I just want the freedom to be. I never wanted to “beat” anyone, or prove anything. I just wanted to do meaningful work, quietly.</p>
            <p><strong>Pratul:</strong> And you know what? I get bored easily — if I sit idle, I get restless. After making music for a while, I started diving into astrology. It was like, “Okay, I’ve expressed myself through sound, now let me understand life through the stars.” Then I’d return to music again. Or go deep into mythology. That rhythm — it kept me alive.</p>
            <p><strong>Pratul:</strong> I never really partied or wasted time. I once read — out of a 70-year life, we sleep for around 35 years. So what’s left? If I’m going to spend that on distractions, then what’s the point? If I can spend it acquiring knowledge — then that excites me.</p>

            <p><strong>Devika:</strong> So true. What a refreshing way to live. You really just chose your path and followed it with honesty. From Vedic astrology to a TEDx talk — that’s an incredibly unique journey! Tell us a bit about how the TEDx talk came into your life.</p>

            <p><strong>Pratul:</strong> To be honest, I never imagined myself giving a TEDx talk — not even in my wildest dreams. I used to watch TEDx videos! Around 2015–16, I had just started coming across them regularly. I thought, “Wow, look at these people — such powerful speakers, so inspirational.” But me? I was just writing my astrology articles, sharing thoughts that weren’t exactly conventional — especially not by textbook astrology standards.</p>
            <p><strong>Pratul:</strong> One of those posts ended up going viral within the small astrology community. A guy from the TEDx team noticed it and reached out. He said, “Your post really opened my mind — would you be interested in being a TEDx speaker?” And I swear, my heart dropped. I was like, “Me? TEDx?” I couldn’t believe it until I was literally at the venue.</p>

            <p><strong>Devika:</strong> That must’ve been surreal. Were you nervous?</p>

            <p><strong>Pratul:</strong> Nervous would be an understatement! Everyone there had rehearsed lines, dramatized pauses — they knew exactly when to cry, when to smile. I had none of that. I hadn’t even written a script. I just asked the organizing team, “Bhai, bata do — kis din hai talk? I’ll book my ticket.” They were like, “Sir, we’ll send you the flight ticket.” And I was just stunned — “This poor guy is getting flight tickets?” [laughs]</p>
            <p><strong>Pratul:</strong> It all felt like a dream. Even when I reached the venue, I was in disbelief. They said, “Sir, we’ll pick you up.” I’m like, “How much will that cost? Should I just take an auto?” That whole experience was out of my league — but somehow, I was there.</p>

            <p><strong>Devika:</strong> What did you speak about? You mentioned your ideas were unconventional?</p>

            <p><strong>Pratul:</strong> Yeah, I spoke about gemstones and matchmaking in astrology — but not the way it’s usually presented. I gave my honest views, grounded in reality. Nothing sensational, just facts. But because it broke the typical narrative, people found it fresh and eye-opening. After that, a lot of people started reaching out to me for consultations, saying they’d seen my TEDx video.</p>

            <p><strong>Devika:</strong> That’s a big moment — from music to astrology consultations, just like that.</p>

            <p><strong>Pratul:</strong> Exactly. I never intended to become “an astrologer.” At the time, I was working as a music producer with a radio company. And I was super content — like, my big weekend joy was buying a new pair of earphones. That was my treat. My 24-year-old self felt like he had conquered the world with that.</p>
            <p><strong>Pratul:</strong> I was making music for companies like Indigo, SpiceJet — that was already a dream! I’d analyze film background scores for fun. That was my homework. I thought I had made it. Music was never a “side chick” — it was my first and only love.</p>

            <p><strong>Devika:</strong> You really lived that passion fully.</p>

            <p><strong>Pratul:</strong> Well, not just passion — it was purpose. Honestly, I didn’t grow up with this pressure of “you have to become something.” I didn’t even know astrology could be a profession. Back then, being an astrologer didn’t exist as a modern, established career. Just like no one thought of being a stand-up comedian 10 years ago.</p>

            <p><strong>Devika:</strong> So, when did that shift happen for you?</p>

            <p><strong>Pratul:</strong> During COVID. I lost my job like so many others. But astrology kept going. Slowly, consultations picked up. Money started trickling in. I didn’t push it — it just grew on its own. And eventually, it hit me — I was already an astrologer. That’s when I told myself, “Okay. I’m not going to do Bhojpuri music projects just for the sake of work. From now on, I’ll do only two things — the ones that I genuinely want to do.” And that’s how it all settled.</p>

            <p><strong>Devika:</strong> So now that you’re in the world of astrology — a space so often associated with predictions — I have to ask, have you ever made any prediction about yourself that came true?</p>

            <p><strong>Pratul:</strong> Never. I’ve never read a full prediction for myself. I haven’t deeply analysed my own chart. I mean, yes, I’ve glanced at the basics — okay, this placement is alright, nothing too problematic — but I never went into it thinking, “What will my future be like?”</p>
            <p><strong>Pratul:</strong> When I first started learning astrology, my teacher told me something that stayed with me: If you leave me and come back only to ask, ‘Who will I marry?’ or ‘How much money will I make?’ — then don’t come back at all. He said, If you truly want to become a jyotish, you have to rise above these questions. That was powerful. So, no — I’ve never used astrology for personal predictions. I’ve always kept that boundary.</p>

            <p><strong>Devika:</strong> That’s fascinating. You know, I’ve had my own personal experiences with astrology growing up. My parents used to consult astrologers when I was very young — and I remember one telling them I’d leave the country at a very early age. That actually did come true. But over time, I also noticed how some astrologers would start putting very detailed, sometimes dark ideas into people’s heads — like, “This period will be terrible for you,” or “Your bad time is starting soon.”</p>
            <p><strong>Devika:</strong> And honestly, I feel that kind of fear sticks. Like, someone hears “bad times are coming,” and they start attracting that energy. Every little thing feels like evidence of a coming doom — even a tire puncture starts to feel like destiny.</p>

            <p><strong>Pratul:</strong> Exactly! I totally understand what you’re saying — and this is such a personal and important point. In fact, you’re right — so many people come to me with that very complaint: “This astrologer scared me,” or “They said something that shook me for years.”</p>
            <p><strong>Pratul:</strong> See, a good astrologer isn’t someone who never tells you about the challenges. It’s like a good doctor. Imagine going to a doctor and hearing, “Oh wow, I’ve never seen such a terrible blood report — what a disaster!” That’s not helpful! A real professional — whether doctor or astrologer — should be able to talk about the issue and offer guidance.</p>

            <p><strong>Devika:</strong> Yes, tell people what they can do — not what they should fear.</p>

            <p><strong>Pratul:</strong> Exactly. And to be honest, in today’s world, it’s easier to find a good girlfriend than a good astrologer! I was lucky. I had good teachers. I didn’t realize how much distortion was happening in the outside world until people started coming to me with their horror stories.</p>
            <p><strong>Pratul:</strong> The sad part is, many so-called astrologers are actually pandits — priests with only surface-level knowledge of astrology. There’s a huge difference. A priest performs rituals and may know of astrology, but an astrologer is more like a scientist.</p>
            <p><strong>Pratul:</strong> Imagine this — a chemist knows which medicine treats fever, but you wouldn’t call him a doctor, right? Same logic. Many people just give ₹51 to an astrologer, thinking they’ve received life-changing guidance. But a true astrologer — the kind who understands astronomy, physics, even trigonometry — is rare and often unaffordable for the common person.</p>

            <p><strong>Devika:</strong> That’s a big misconception — that astrology is all ritual, all blind belief.</p>

            <p><strong>Pratul:</strong> Absolutely. Real astrology is deeply scientific. If you open my books, you’ll see formulas involving cosine theta, longitude, time zones — it’s full of math and physics. In fact, go to Jaipur sometime — behind Hawa Mahal, you’ll find the Jantar Mantar. That’s not a tourist maze — it’s an observatory for astrologers.</p>
            <p><strong>Pratul:</strong> People don’t realize that these gigantic structures were built centuries ago to calculate time, planetary movement, and star positions — without modern technology! Jantar Mantar in Delhi too — it’s a scientific marvel. The instruments there were used to track celestial bodies before watches or smartphones ever existed.</p>

            <p><strong>Devika:</strong> It’s mind-blowing how precise those tools are, even by today’s standards.</p>

            <p><strong>Pratul:</strong> Exactly. But ask a person today, “Where’s the sun right now?” and they’ll just Google it. We’ve forgotten how to tell directions by looking at the sky. Real astrology — the kind I believe in — connects you to the cosmos, to science, and to your own karma. Not superstition, not fear. The problem is that at a very superficial level, people are labeling themselves as astrologers, when in reality, they have no real knowledge of the science behind astrology. You see, astrology is much more than what meets the eye. It involves deep mathematical calculations, analysis of planetary positions, and an understanding of ancient texts. But today, many have commercialized it into a business where anyone can claim to be an astrologer, even if they don’t truly understand the intricate details. It’s become a business of fear—people think they can get rich by selling remedies and gemstones, but they don’t realize the complexity behind the practice.</p>

            <p><strong>Devika:</strong> So you believe that astrology has a strong scientific foundation?</p>

            <p><strong>Pratul:</strong> Yes, absolutely. There is so much science in astrology. If you look at the ancient Vedic texts, you’ll find that no other subject is as scientifically rigorous as astrology. The kind of mathematics involved in astrology can be overwhelming. And the reason Indian astrologers, especially, are so revered is that they have an extremely deep understanding of these sciences. Take the example of a respected astrologer or even an IAS officer—they wouldn’t have achieved their positions without a clear understanding of such disciplines.</p>

            <p><strong>Devika:</strong> That’s an interesting point, Pratul. You also mentioned something about remedies and whether they can truly alter a person’s fate. I’m curious to hear your thoughts on that.</p>

            <p><strong>Pratul:</strong> Ah, the concept of remedies—people often think that wearing gemstones or performing rituals will change their destiny. But I’ll ask you this: Can you change your skin tone? Your height? Your parents? Your siblings? These are things that are beyond your control, right? Similarly, there are certain things in life—your birth chart, for instance—that cannot be changed. These are your “firm karmas”—things like your parents, your siblings, where and when you’re born. These are fixed, and no remedy can change them.</p>

            <p><strong>Devika:</strong> So you’re saying there is no real way to change the course of one’s destiny with gemstones or similar remedies?</p>
            <p><strong>Pratul:</strong> Exactly. Some things, like your parents or where you were born, cannot be changed. However, certain aspects of your life, such as how you react to situations, can be influenced. Remedies, like gemstones, may give you a psychological boost, but they don’t have the power to change your inherent destiny. There are, of course, some things that can be modified, but those changes are often limited and should not be treated as a cure-all.</p>

<p><strong>Devika:</strong> That’s a refreshing take. Now, when it comes to gemstones, there’s a huge market around them. Many people believe that wearing specific gemstones can bring prosperity or good fortune. What’s your take on this business?</p>

<p><strong>Pratul:</strong> The gemstone industry has become a massive business, and while there might be a slight influence on some people’s lives, it’s mostly a psychological effect. Let’s take the example of a village farmer. In the past, only kings and royal families had access to gemstones, and they wore them because they believed in their power. But for a common person, these stones aren’t likely to bring about any magical transformation. There’s a lot of marketing around gemstones today, and people get swept up in the idea that these stones will change their fate. But, as I said, the reality is quite different.</p>

<p><strong>Devika:</strong> So, you would say that the true power lies in the knowledge of astrology itself, rather than relying on external remedies?</p>

<p><strong>Pratul:</strong> Exactly. True astrology isn’t about selling gemstones or chanting mantras for a quick fix. It’s about understanding the complexities of the birth chart and helping people navigate their life’s journey with wisdom. If someone is struggling in a particular area, like their career or relationships, astrology can offer insights, but it’s not about promising quick fixes. It’s about being grounded in reality and understanding that some things are just beyond our control.</p>

<p><strong>Devika:</strong> It’s interesting that you brought up the idea of karmic influences. You mentioned that some aspects of life are firmly set, like the relationships with your parents or siblings. Can you explain this further?</p>

<p><strong>Pratul:</strong> Certainly. Karma plays a huge role in astrology. There are three types of karma: strong, medium, and weak. Some karmas are so strong that they cannot be altered in this lifetime. For example, your relationship with your parents or siblings—this is something that cannot be changed, no matter how hard you try. These are firm karmas, and they’re a part of your life’s blueprint. What you can change, however, is how you respond to them. You may not be able to change the fact that you were born into a particular family, but you can change how you interact with those people and how you deal with challenges.</p>

<p><strong>Devika:</strong> That’s a really profound way of looking at it. So, when it comes to astrology, you don’t just focus on predicting the future, but on helping people understand and navigate the challenges they face?</p>

<p><strong>Pratul:</strong> Exactly. Astrology isn’t about predicting your lottery win or giving you a one-size-fits-all solution. It’s about understanding the nuances of your life and helping you make informed decisions. And while I’m always honest with my clients, I also tell them that they need to work hard, stay focused, and not rely on external factors to shape their destiny.</p>

<p><strong>Devika:</strong> That’s a great note, Pratul. Astrologers who claim expertise without truly understanding the science behind it. What’s your take on that?</p>

<p><strong>Pratul:</strong> Yes, it’s a frustrating trend. Many people today label themselves as astrologers without any real knowledge or understanding of the subject. It’s become more of a business, really. Astrology has been commercialized to such an extent that it’s no longer about the profound science behind it—it’s just a way to make money. This is where it all starts going wrong. People use gemstones, make fake predictions, and create unnecessary remedies. The truth is, astrology is deeply rooted in mathematics and science, something most people overlook. The Indian wisdom contained in astrology is scientifically rich, and it’s unfortunate that many fail to see it.</p>

<p><strong>Devika:</strong> That’s an interesting perspective. So, do you believe astrology is truly scientific?</p>

<p><strong>Pratul:</strong> Absolutely. If you look at ancient texts, you’ll be amazed at the level of mathematics and calculation involved in astrology. It’s not just a spiritual practice; it’s based on rigorous scientific methods. The ancient astrologers were masters of astronomy and math. This is something many people don’t understand. It’s a blend of both the spiritual and the scientific, with deep insights into human nature and cosmic alignments.</p>

<p><strong>Devika:</strong> That’s a fascinating way to look at it. You also mentioned that astrology is often misused in the context of remedies, especially with gemstones. Can you elaborate on that?</p>

<p><strong>Pratul:</strong> Gemstones have become a huge business, and people often believe they can fix their problems with them. But think about it—can you change your height, your parents, or the city you were born in? No, you can’t. There are things in life that are fixed. You can’t change your karma just by wearing a gemstone. The reality is that certain things, like your family or the place you’re born, are beyond your control. They’re part of your ‘firm karma.’ For example, if you have a strained relationship with your father, wearing a gemstone won’t fix it. It’s all about understanding what you can change and what you can’t.</p>

<p><strong>Devika:</strong> So, what’s your take on the whole idea of astrological remedies? Are they completely ineffective?</p>

<p><strong>Pratul:</strong> Remedies, like gemstones or rituals, do have a place, but they should not be seen as magic fixes. What people don’t realize is that astrology is not about quick solutions. It’s about understanding yourself better, knowing your strengths and weaknesses, and making informed decisions. It’s not about hoping a gemstone will change your life overnight. The focus should always be on self-awareness and personal growth. If gemstones help mentally or spiritually, fine. But they are not the be-all and end-all.</p>

<p><strong>Devika:</strong> That makes sense. Now, let’s move to something else you’ve mentioned—the popular myth of matchmaking. A lot of people believe astrology can predict the success of a marriage. What do you think about that?</p>

<p><strong>Pratul:</strong> Matchmaking is one of the most misunderstood aspects of astrology. People believe that by matching horoscopes, they can ensure a successful marriage. But the truth is, matchmaking is more about ensuring basic compatibility and longevity—whether both individuals will survive together. It’s not about guaranteeing happiness. If you expect astrology to tell you that your marriage will be perfect, you’re misunderstanding the purpose of it. True compatibility is about understanding each other, compromising, and growing together. The 36-point matching system is often taken too literally, especially in North India. But it’s not the ultimate indicator of happiness or success.</p>

<p><strong>Devika:</strong> So, are there any other misconceptions about astrology that bother you?</p>

<p><strong>Pratul:</strong> Yes, a lot of people think astrology is just about predicting things like winning the lottery or avoiding disasters. But astrology is more profound than that. It’s about understanding the cosmic influences in your life and how they align with your actions. It’s about karma and the choices we make. People expect astrology to tell them everything about their future in a concrete way, but it’s not like that. It’s more of a guidance system, not a roadmap. There’s also this obsession with gemstones, mantras, and other “quick fixes,” which is dangerous. People think they can solve all their problems by buying a gemstone or chanting a mantra, but that’s just a shortcut to real self-understanding.</p>

<p><strong>Devika:</strong> That’s incredibly enlightening. So, what’s one personal lesson you’ve learned from your years of practice—something no astrology chart or mythological story could teach?</p>

<p><strong>Pratul:</strong> The biggest lesson I’ve learned is to stop being a slave to your emotions. Emotions are powerful, but they can also deceive us. We often think that our emotions define who we are, but they’re just temporary states. Take a moment to reflect—when you’re hungry, all you can think about is food. Similarly, emotions cloud our judgment and cause us to make decisions we later regret. True wisdom comes from detaching from emotions and seeing the bigger picture. As the poet says, all relationships will end when life ends, so why let emotions control your actions? Life is transient, and we need to learn to accept that.</p>

<p><strong>Devika:</strong> That’s profound. It really changes the way we view both astrology and life itself. Thank you, Pratul, for such a deep and thought-provoking conversation.</p>

<p><strong>Pratul:</strong> Thank you, Devika. It’s always a pleasure to share and discuss these ideas. Life is about learning and evolving—astrology is just a tool to help us understand that journey better.</p>

<p><strong>Devika:</strong> The idea that we become slaves to our emotions. Can you elaborate on what you mean by that?</p>

<p><strong>Pratul:</strong> Emotions are powerful, and most of the time, we allow them to control us, to dictate how we feel, how we act, and even how we view life. It’s natural to feel emotional about things, but we must learn not to let emotions overwhelm us. If you’re feeling hungry, all you can think about is food. Similarly, when you’re emotionally burdened, you might only think about that emotion, letting it consume you. The trick is to acknowledge the emotion, process it, but not let it dominate your actions. Emotions, just like hunger, are temporary—they’ll fade away eventually.</p>

<p><strong>Devika:</strong> That’s an insightful way of looking at emotions. So you’re saying that we shouldn’t let them control us, but rather allow them to pass?</p>

<p><strong>Pratul:</strong> Exactly. Emotions are fleeting. Think of it like thirst. When you’re thirsty, you only think about water, but once you drink, the thirst is gone. Emotions are similar—when we experience them, they feel all-consuming, but in reality, they will pass. If you’ve gone through a breakup, you might feel like you can’t live without that person, but eventually, that feeling will fade. The key is to live through the emotion, experience it fully, but don’t let it define you. Don’t make permanent decisions based on temporary feelings.</p>

<p><strong>Devika:</strong> That’s so true. But processing emotions isn’t always easy, especially during times of loss. You’ve spoken about the grief of losing loved ones. Can you tell us more about how you personally dealt with loss? Because losing someone close to you, like a parent, is one of the hardest things to go through. I remember one of my close friends shared that when she lost her mother, she was completely overwhelmed. She couldn’t process it, and she completely shut down. She gave up music—her first love—for over two years. Music was something that had always brought her peace, but after her mother’s death, she couldn’t bring herself to listen to a single note. It was as if she couldn’t bear the emotional weight.</p>

<p>But time and her spiritual journey helped her to heal. Connecting with Shiva and Shakti on a deeper level gave her the strength she needed to move forward. It’s not easy, but spirituality helped her see the bigger picture and understand that grief, like all emotions, would pass. Now, after twelve years, she has come to a place of peace. She doesn’t fear much anymore because she has already faced the greatest loss of her life. If she can live through that, she knows she can handle anything else that comes her way. That’s incredibly powerful. It’s amazing how spirituality can offer such profound healing. And I love how you brought up the idea of time as a healer—everything changes over time, right?</p>

<p><strong>Pratul:</strong> Absolutely. Time is one of the most important aspects of healing. People think they will never recover from a breakup or a loss, but the reality is that time gives you the space to process and reflect. Emotions are like waves—they come, they crash, and they fade. They don’t stay forever. And this is where spirituality and self-awareness come into play. If you can rise above your emotions and see them for what they are—temporary states—you will experience peace.</p>

<p><strong>Devika:</strong> That’s a beautiful way to look at it. Now, moving beyond emotions, you mentioned that one of your big dreams is to receive the Padmashree award for your work in astrology. Can you tell us why this is so important to you?</p>

<p><strong>Pratul:</strong> The Padmashree award is a significant recognition in India, especially in the field of astrology. If you look back, Surya Narayan Vyas was the last astrologer to receive such an honour over fifty years ago. Since then, there has been no formal recognition of astrologers from the government, which I find quite disheartening. My goal isn’t just for personal recognition, though it does matter to me—it’s about giving the profession the respect it deserves. Astrology has always been considered a sacred and important science in India, but over the years, it has been marginalized.</p>

<p>Receiving the Padmashree would bring attention to the work of astrologers and acknowledge the importance of astrology as both a science and a spiritual practice. It would inspire the younger generation of astrologers to take their craft seriously and give them the recognition they deserve. My dream is to elevate astrology to its rightful place in society, and this award would be a step toward that goal.</p>

<p><strong>Devika:</strong> It’s clear that your passion for astrology goes far beyond personal achievement. You want to uplift the profession and give it the respect it deserves. That’s admirable.</p>

<p><strong>Pratul:</strong> Yes, that’s exactly it. I don’t have a personal agenda—I’m not doing this for fame or wealth. My true motivation is to ensure that astrology is recognized as an important part of our cultural and scientific heritage. By earning this recognition, I hope to pave the way for future generations of astrologers to be respected for their knowledge and contributions.</p>

<p><strong>Devika:</strong> That’s truly inspiring, Pratul. Before we end, what is one last piece of advice you would give to people struggling with their emotions or seeking guidance in life?</p>

<p><strong>Pratul:</strong> Don’t become a slave to your emotions. They are not who you are. You are much more than that. Understand that whatever you’re going through—whether it’s heartbreak, loss, or stress—it’s only temporary. Time will heal you. Learn to live through your emotions, but never let them control you. And remember, no matter how hard life gets, you have the power to rise above it and move forward.</p>

<p><strong>Devika:</strong> Thank you, Pratul. Your words are deeply moving and full of wisdom. I’m sure our readers will take a lot away from this conversation.</p>

<p><strong>Pratul:</strong> Thank you, Devika. It’s always a pleasure to share these insights and be part of a conversation that helps people grow and heal.</p>

<p><strong>Devika:</strong> It’s clear that you believe astrology, as a profession, deserves more recognition from the government. Could you elaborate on why you think official awards and recognition are crucial for astrologers?</p>
<p><strong>Pratul:</strong> Absolutely, Devika. What I’m trying to emphasize is that astrology is not just about wearing gemstones or being a shoulder to cry on. It’s about offering predictions that can guide people toward better decisions and a more fulfilled life. If the government starts recognizing astrologers with awards like the Padmashree or Padma Bhushan, it would send a powerful message that astrologers are important for society, not just as spiritual guides but as professionals contributing meaningfully to the world.</p>

            <p><strong>Pratul:</strong> Right now, many astrologers are ignored or overlooked, despite the value they offer. For instance, K.N. Rao is a legend in the field, and yet he hasn’t received the Padmashree yet. It’s high time that the government acknowledges such contributions. Personally, if the opportunity arises, I would love to see astrology being recognized at that level.</p>

            <p><strong>Devika:</strong> It’s inspiring to see how passionate you are about getting astrology the recognition it deserves. And I agree, it’s about giving the profession the respect it has earned. Now, if you were to create a “cosmic vision board” for the next five years, what’s the one thing you’d love to see happen?</p>

            <p><strong>Pratul:</strong> That’s a very interesting question! For me, the cosmic vision board would be about shifting people’s perspectives on life. We often get caught up in our own problems, thinking that our issues are the biggest. The truth is, every person faces challenges, and no one is immune to pain. If we could all step back and understand that our troubles are not the end of the world, we would be able to live with more compassion and less emotional burden.</p>

            <p><strong>Pratul:</strong> I would love to see a world where people realize that their emotions don’t define them. If the world could collectively come out of this mindset of being slaves to emotions, it would be a much healthier and happier place. I hope that more people can see beyond their own sorrow and recognize that there’s so much more to life.</p>

            <p><strong>Devika:</strong> That’s a beautiful vision. Shifting the focus from personal struggles to a more collective understanding of life’s challenges could truly bring more peace to the world. Now, if someone wanted to pursue a journey like yours—blending astrology, public speaking, and mythology—what advice would you give them?</p>

            <p><strong>Pratul:</strong> First and foremost, they need to study hard. Astrology is not something you can dabble in casually—it requires deep knowledge and dedication. If you can’t commit to studying and understanding it thoroughly, then it’s better not to pursue it. You can’t guide people with half-baked knowledge. If you give inaccurate predictions or make hasty claims, it will backfire on you.</p>

            <p><strong>Pratul:</strong> I’ve seen many astrologers who don’t have complete knowledge of the subject, and they end up giving wrong advice, which affects their credibility. Just like a doctor, if an astrologer offers consultations without proper knowledge, it can hurt both their professional reputation and their personal life. Always be truthful about what you know and admit when you don’t have the answers. If you’re uncertain about something, take the time to study and revisit it.</p>

            <p><strong>Devika:</strong> That’s excellent advice. Integrity and a commitment to learning seem to be the foundation of building trust as an astrologer. It’s also so important to be honest about what you don’t know.</p>

            <p><strong>Pratul:</strong> Exactly. You need to be honest with yourself first. If you don’t know something, don’t pretend that you do. This is a field where people’s lives and decisions are affected by the guidance you provide. If you take shortcuts, it will backfire, just like in medicine. You wouldn’t trust a doctor who isn’t fully equipped to treat you, and the same applies to astrology. Treat your clients with the utmost care, and only offer advice when you’re fully confident in your knowledge.</p>

            <p><strong>Devika:</strong> Such valuable insights, Pratul. Your approach to astrology not only highlights the importance of knowledge but also emphasizes the responsibility astrologers have to their clients and to the profession.</p>

            <p><strong>Pratul:</strong> Thank you, Devika. I believe that with respect, study, and honesty, anyone can make a positive impact in the world of astrology. It’s all about keeping your integrity intact and always striving to improve.</p>


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
          Rapid Fire with Pratul
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
            src="/pratulArticleVideo.mp4" // <-- use your vertical video file
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















            <p><strong>Devika:</strong> Let’s dive into a rapid-fire round! What’s your favorite planet in astrology and why?</p>
            <p><strong>Pratul:</strong> Venus, because it’s the planet of art, and I absolutely love art. I don’t think deep conversations can truly happen without art, because art is an expression of deep emotions and knowledge.</p>

            <p><strong>Devika:</strong> Cool! I think Librans are guided by Venus.</p>
            <p><strong>Pratul:</strong> Yes, exactly! Librans are guided by Venus. And honestly, I don’t think only astrologers have knowledge—music and dance are also forms of knowledge. Anyone who wants to find knowledge can do so in many different ways.</p>

            <p><strong>Devika:</strong> I said that because I’m a Libra, haha! And Venus also has that curly hair, right? It’s personified like that.</p>
            <p><strong>Pratul:</strong> Haha, yes, exactly!</p>

            <p><strong>Devika:</strong> Now, if you could choose one superpower, what would it be?</p>
            <p><strong>Pratul:</strong> To change the minds of people! I want the power of Professor X from X-Men. His ability to read and influence minds would be amazing.</p>

            <p><strong>Devika:</strong> That’s fantastic! Now, what’s your zodiac sign, and do you think the traits of your sign align with who you are?</p>
            <p><strong>Pratul:</strong> First of all, calculating zodiac signs based on birthdates is wrong. You should never follow that! Just go to any Vedic website and put your details, and they will give you your moon sign and lagna (ascendant). I’m a Sagittarius.</p>

            <p><strong>Devika:</strong> So, do you think you have the traits of a Sagittarius?</p>
            <p><strong>Pratul:</strong> Yes, completely! I’m very Sagittarian.</p>

            <p><strong>Devika:</strong> If your life were a movie, which actor would play you?</p>
            <p><strong>Pratul:</strong> Oh, I never thought that big! But I think Abhishek Bachchan would be the best choice.</p>

            <p><strong>Devika:</strong> One word to describe your connection with the stars?</p>
            <p><strong>Pratul:</strong> Thirst. I feel like my thirst will only be quenched by the fire of the stars.</p>

            <p><strong>Devika:</strong> Very cool! Would you rather be able to talk to animals or read minds?</p>
            <p><strong>Pratul:</strong> I’d choose to read minds. It’s always been there; we just need a pure heart to understand it.</p>

            <p><strong>Devika:</strong> Very true. What’s a fun fact about you that people don’t know?</p>
            <p><strong>Pratul:</strong> There are many, but here’s one: I take a shower in just 5 minutes, and the rest of the time is spent playing with ducks in the water and making bubbles or splashing water around. It’s a quirky thing I do.</p>

            <p><strong>Devika:</strong> Nice! Now tell me what your guilty pleasure TV show is.</p>
            <p><strong>Pratul:</strong> Shin Chan! I still watch cartoons, especially that one.</p>

            <p><strong>Devika:</strong> What’s the first thing you do every morning?</p>
            <p><strong>Pratul:</strong> To be honest, I check my phone first thing to see the messages I missed overnight.</p>

            <p><strong>Devika:</strong> And finally, what’s one thing that always makes you laugh, no matter what?</p>
            <p><strong>Pratul:</strong> PJ’s (Poor Jokes). I absolutely love them! It’s my kind of humour.</p>

            <p><strong>Devika:</strong> Haha, great answers, Pratul! This was a lot of fun. Thank you for sharing these little nuggets about yourself!</p>
            <p><strong>Pratul:</strong> Thanks, Devika! I had a blast.</p>

            <p><strong>Devika:</strong> It’s always a good thing to hear! Now, tell us a little bit about your social media. How do you interact with your followers?</p>
            <p><strong>Pratul:</strong> So, I have this basic habit of checking my DMs every day. I receive about 40 to 50 new messages daily, and whenever I get time, I make sure to read all of them.</p>

            <p><strong>Devika:</strong> Do you handle your own social media or does someone else manage it for you?</p>
            <p><strong>Pratul:</strong> I have a team, but most of it is handled by me. They help with things like research, trends, and growth strategies. Interaction with my followers is mostly mine. I personally believe in replying to everyone if possible. I even do live sessions, answer questions, and post reels. I always check my messages—it’s not just about replying to visitors, it’s a habit of mine. I feel bad when someone messages and doesn’t get a reply for years, so I make it a point to respond to everyone.</p>

            <p><strong>Devika:</strong> That’s really impressive! So, what’s your favourite follower or fan moment?</p>
            <p><strong>Pratul:</strong> Oh, fan moments are interesting! So, many people don’t know this, but I’m a musician too. I’m very funky, cool, and outgoing, but I don’t show that side much because people often don’t expect it. When I was at a concert once, I had my Jack Daniel’s in hand and funky lights all around me. One follower came up and called me “Pratul Sir,” all polite, thinking that was my only side. I was like, “Do you think I go to a cemetery every night for austerity?” People have this image that astrologers are supposed to be one way, but I don’t fit into that stereotype. Even girls I go on dates with tell me, “You don’t look like an astrologer,” and I just laugh, like, do I have to wear a dhoti all the time?</p>

            <p><strong>Devika:</strong> Haha, that’s a great pickup line! “Let me see your hand.”</p>
            <p><strong>Pratul:</strong> Haha, exactly! It’s funny how people have these fixed images of someone based on their profession.</p>

            <p><strong>Devika:</strong> So wonderful! I think we’ve covered most of it. It’s been such a beautiful conversation. I really enjoyed talking to you!</p>
            <p><strong>Pratul:</strong> Thank you so much for inviting me! I really had fun.</p>

            <p><strong>Devika:</strong> If I’ve missed anything, my team will be in touch, and I’ll personally ping you about certain things. We’ll be good to go.</p>
            <p><strong>Pratul:</strong> Thank you, Devika. I really enjoyed this session. Honestly, the questions you asked were great. I’ve done interviews with places like Times of India, but no one has asked me questions like this—not just about me, but even about astrology. Your team came up with such good questions. I was actually excited about this interview because of the questions!</p>

            <p><strong>Devika:</strong> I’m glad to hear that! It was an absolute pleasure having this conversation. We wish we had more time to chat, but we’ll stay in touch. Thank you so much, and keep spreading what you’re doing. All the very best!</p>
            <p><strong>Pratul:</strong> Thank you! And best wishes to you too. You guys are doing great—your questions and research are fantastic.</p>

            <p><strong>Devika:</strong> Thank you! All the best!</p>
           
                </Container>
           
           
           
            </Card.Body>
         
       
      
    </>
  );
};

export default Pratul;
