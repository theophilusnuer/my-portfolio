import SocialMediaIcons from "../socialmedia";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <section className="bg-black">
            <div className="flex flex-inbetween">
               <h1 className="text-white ml-5 mt-5 mb-4 text-8xl">Let's Connect</h1>
               <div className=""><SocialMediaIcons/></div>
            </div>
            <div className="container text-center text-white mx-auto mb-5 mt-2">
                <p className="pb-4">Copyright &copy; {currentYear}. Theophilus Nuer. All rights reserved.</p>
            </div>
        </section>
    );
}