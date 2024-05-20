import { Parallax } from 'react-parallax'

const Cover = ({ bgimg, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={bgimg}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase cinzel-700">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;