import { Link } from "react-router";

const AboutPreview = () => {
    return (
        <section className="mt-12 p-10 flex flex-col items-center gap-8 md:flex-row bg-gray-900">
            <img src="images/profile.jpg" alt="profile" className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"/>
            <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                    About me
                </h2>
                <p className="text-gray-200 mb-4 max-w-4xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt pariatur optio repellat at. Dolorum, ab.
                </p>
                <Link to ="/about" className="inline-block text-blue-400 hover:underline">
                  About me
                </Link>
            </div>
        </section>
    );
}

export default AboutPreview;