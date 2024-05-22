import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-700 bg-opacity-70 pt-12 pb-20 px-36">
                <div>
                <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where I can get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus consequatur quo quisquam quos atque eveniet vero dolore placeat fugiat magnam laudantium, pariatur odio, iusto voluptate harum sint nihil asperiores commodi.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;