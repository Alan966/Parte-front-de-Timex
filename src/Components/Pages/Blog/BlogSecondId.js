import { useParams } from "react-router-dom";
import images from "../../Templates/images";
import "../../../ComponentsCss/Pages/Blog/BlogSecondid.css";

const BlogSecondId = () => {

    const {id, url } = useParams();


    if(id === "COLLABS & INFLUENCERS"){
        return(
            <main className="Blog_Second">
                <h1>The Timex Blog</h1>
                <h3>{id}</h3>
                <h2>ANNOUNCING THE FIRST ROUND OF WATCHES FROM THE OFFICIAL TIMEKEEPER OF UFC</h2>
                <p className="parrafo_one">
                Known for over a century for crafting some of the toughest watches in the industry, Timex®
                is entering the Octagon® as the first-ever Official Timekeeper and Watch Partner of UFC®. We’re 
                kicking off this incredible partnership with the launch of our first round of product: an 
                ultra-limited run of UFC-branded timepieces from two collaborative collections. 
                Expertly engineered with no-nonsense materials and best-in-class design, the 
                selection presents an unbeatably tough, sport-centric wearing experience for 
                fighters and fans alike.
                </p>
                <p className="parrafo_two">
                “Every fight fan knows the importance of time and clock management in this sport. 
                Every second counts, and the ticking clock adds to the drama and the fun of a 
                great UFC fight. Now Timex is going to be associated with UFC’s biggest 
                moments as they’re broadcast around the world. Timex is an iconic brand, and 
                we’re looking forward to having them as an official UFC partner.” – UFC 
                President Dana White
                </p>
                <p className="parrafo_three">
                This exclusive first look coincides with the 10th Annual UFC International 
                Fight Week™, a week-long celebration of all things combat sports. Whether 
                you’re catching the action from home or bearing witness to the excitement 
                in (where else but) Las Vegas—the entertainment capital of the world—now 
                you can do so with a tough and tenacious piece of gear by your side. Just 
                a small handful of styles from the TIMEX UFC Strength and Street collections
                 will be available while supplies last, but we have a stacked card up our 
                 sleeve. Come the fall, more well-rounded watches will be added to the 
                 roster, featuring the indestructible design and core timing features 
                 you need to compete at the highest level.
                <br />
                Here’s what to know:
                </p>
                <p className="parrafo_four">
                Comprised of multifunctional digital and analog-digital timepieces, the 
                Strength collection is built as tough as they come thanks to the rugged 
                case design, molded rubber straps, and ISO shock-resistant construction 
                of its standout styles. It’s a collection that’s going to tick a lot 
                of boxes for those with an affinity for high-performing watch design. 
                So, too, will its dapper counterpart, the Street collection: a series 
                of self-expressive watches directly inspired by the panache of UFC’s 
                reatest fighters. From the bold detailing on the dials and comfortable 
                straps, to the Octagon-shaped bezels and crowns, we’ve injected this 
                ready-to-wear capsule with an inimitable sense of character—something 
                that fans of both powerhouse brands will certainly recognize.
                </p>
                <p className="parrafo_five">
                Timex and UFC share a heritage of determination, ingenuity, and grit. 
                We’re honored to join the most innovative force in combat sports to 
                clock its greatest moments—and yours. Don’t miss your first chance 
                at getting the only watch tough enough for UFC, and join the email
                list to gain members-only access to the prizes, sweepstakes, and 
                product still to come.
                </p>
                <div className="contend_pages">
                    <img src={images.facebook} alt="Icono ce facebook" />
                    <img src={images.TwitterCard} alt="twitter" />
                </div>
            </main>
        )
    }else if(id === "CRAFTSMANSHIP"){
        return(
            <main className="Blog_Second">
                <h1>The Timex Blog</h1>
                <h3>{id}</h3>
                <h2>FROM WASTE TO WRIST, TIMEX LAUNCHES THE WATERBURY OCEAN COLLECTION</h2>
                <p className="parrafo_one">
                On World Ocean Day, we’re introducing the Waterbury Ocean collection, created using 
                upcycled, ocean-bound plastic, in partnership with award-winning organization, #tide™.
                This exciting release comes at a crucial time for our planet; the ocean is 
                suffocating due to plastic pollution, with an estimated 8 million tons of 
                waste finding its way into the sea every year. While the statistics 
                surrounding this global crisis are certainly staggering, they’re 
                unsurprising given the rate at which societies around the world both
                 produce and dispose of nonbiodegradable materials. Roughly 40% of the world’s 
                 ocean surface already consists of plastic, and without action, it’s predicted 
                 that there will be more plastic in the ocean than fish by 2050.
                </p>
                <p className="parrafo_two">
                This endemic is affecting marine life and harming ecosystems every day, 
                which is why Timex® is taking an important step in the direction 
                of sustainability. With Waterbury Ocean, we’re redesigning our past 
                to take care of our future by repurposing ocean-bound plastic 
                pollution for a cleaner tomorrow.
                </p>
                <div className="contend_img_parrafos">
                    <div className="contend_Parrafos">
                    <p className="parrafo_three">
                Featuring an upcycled case, bracelet, and dial, this remarkable 
                wristwatch is the first Timex of its kind. Our partnership with 
                #tide means that Waterbury Ocean’s circular journey from waste to 
                wrist begins with fishermen collecting plastic from the coastlines; 
                the waste is washed and shredded before making its way to Switzerland 
                via carbon-neutral transportation; and finally, it’s repurposed on-site, 
                resulting in a premium, sustainable material. Available in three colorways, 
                the stunning marine-inspired dial of the resulting wristwatch follows 
                suit in its responsible production, allowing for distinctive flakes 
                of shredded material to make the face of each timepiece gloriously unique.
                <br />
                </p>
                <p className="parrafo_four">
                Of course, it’s only fitting that the classic Waterbury construction 
                serves as the foundation of this wristwatch. Our story of unstoppable 
                innovation began nearly 170 years ago as the Waterbury Watch Company, 
                +and what better way to honor our rich legacy in traditional watchmaking 
                than through our eponymous collection? Like a true Timex, Waterbury Ocean 
                also incorporates the trusted functionality features you need to navigate
                uncharted waters ahead, like luminant hands and 30 meters of water resistance.
                </p>
                    </div>
                    <div className="contend_img_blog">
                        <img src={images.WaterButyOcean} alt="" />
                    </div>
                </div>
                <p className="parrafo_five">
                Over the course of recent decades, we’ve taken important measures to lessen 
                our environmental impact. We’ve converted facility lights from incandescent 
                to LED to save electricity; utilized wastewater recovery methods to save 
                millions of gallons of water; switched to variable speed motors in our 
                manufacturing facilities; and—with Waterbury Ocean and Expedition North 
                leading by example—launched exciting, new collections that focus on 
                sustainable manufacturing and product longevity. But this is only the 
                beginning.
                </p>
                <p className="parrafo_six">
                The watchmaking industry, like much of the world, has leaps and bounds 
                to go in the direction of renewability. As proud as we are of each 
                step taken so far, we know that taking proper care of our planet 
                means looking for additional ways to improve. It’s time to look 
                to the future and take care of our precious waters. From waste 
                to wrist, watch the clock, see the change.
                </p>
                <div className="contend_pages">
                    <img src={images.facebook} alt="Icono ce facebook" />
                    <img src={images.TwitterCard} alt="twitter" />
                </div>
                <div className="shop_the_story">
                    <div className="contend_grid">
                    <img src={images.WaterButyOceanTwo} alt="water ocean two" />
                    <p className="contend_title_story">
                        WATERBURY OCEAN 37MM RECYCLED PLASTIC BRACELET WATCH
                    </p>
                    </div>
                </div>
            </main>
        )
    }
}

export default BlogSecondId;