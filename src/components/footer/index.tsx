import SocialMediaIcons from "../socialmedia";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <section className=" mt-10">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                <h1 className="text-white ml-5 mt-5 mb-4 text-4xl sm:text-8xl text-center sm:text-left">Let's Connect</h1>
                <div className="flex justify-center sm:mr-11 mt-5 sm:mt-0">
                    <SocialMediaIcons />
                </div>
            </div>
            <div className="container text-center text-white mx-auto  mt-2">
                <p className="pb-4 text-base sm:text-lg">Copyright &copy; {currentYear}. Theophilus Nuer. All rights reserved.</p>
            </div>
        </section>
    );
}