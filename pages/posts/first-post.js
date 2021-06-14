import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
// import { noOpLoader } from '../../lib/image'

export default function FirstPost() {
    return (
        <div className="post-container">
            <Link href="/"><a>Home</a></Link>
            <Head>
                <title>Roger Federer</title>
            </Head>
            <h1 className="post-h1 post-heading"> Roger Federer</h1>
            <center>
            {/* Image optimization only kinda works since there is
                no build time optimization only can be optimized
                using CDN at runtime. This will require a basic script
                along with access to a CDN*/}
            {/* <Image */} 
            {/*     src="/Roger_Federer_Main.jpg" */}
            {/*     alt="Roger Federer at Wimbeldon" */}
            {/*     width={400} */}
            {/*     height={800} */}
            {/*     loader={noOpLoader} */}
                <img
                    src="/Roger_Federer_Main.jpg"
                    alt="Roger Federer at Wimbeldon"
                    width="400"
                    height="800"
                    loading="lazy"
                />
            {/* /> */}
            </center>
            <p className=".post-p">
Roger Federer is a Swiss professional tennis player. He is ranked No. 8 
in the world by the Association of Tennis Professionals (ATP). He has won
 20 Grand Slam men's singles titles, an all-time record shared with Rafael Nadal.
 Federer has been world No. 1 in the ATP rankings a total of 310 weeks 
including a record 237 consecutive weeks  and has finished as the year-end
 No. 1 five times. Federer has won 103 ATP singles titles, the second-most of
 all-time behind Jimmy Connors and including a record six ATP Finals. 
            </p>
            <p>
A versatile all-court player, Federer's perceived effortlessness has made
him highly popular among tennis fans. Originally lacking self-control as a 
junior, Federer transformed his on-court demeanor to become well-liked for
his general graciousness, winning the Stefan Edberg Sportsmanship Award 13 
times. He has also won the Laureus World Sportsman of the Year award a record 
five times. Outside of competing, he played an instrumental role in the creation 
of the Laver Cup team competition. Federer is also an active philanthropist. 
He established the Roger Federer Foundation, which targets impoverished children in southern Africa,
and has raised funds in part through the Match for Africa exhibition series. Federer
is routinely one of the top ten highest-paid athletes in any sport,
and ranked first among all athletes with $100 million in endorsement income in 2020.
            </p>
        </div>
    )
}
