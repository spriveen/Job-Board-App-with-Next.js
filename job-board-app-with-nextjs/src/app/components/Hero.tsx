    export default function Hero(){
    return (
        <section className="py-12">
        <h1 className="text- font-bold text-center">
         Find your next<br/> dream job
        </h1>
        <p className="text-center text-gray-700">
        Welcome to Job Board, your gateway to finding the perfect job opportunities that match your skills and aspirations. Our platform is designed to connect talented professionals with top employers across various industries. Whether you are looking for your next career move or the ideal candidate to join your team, Job Board is here to make the process seamless and efficient. Explore a world of possibilities and take the next step in your professional journey with us.
        </p>
        <form className="flex gap-2">
            <input 
            type="search"
             className="border border-gray-400 w-full py-2 px-3 rounded-md" 
             placeholder="Search Phrase..."/>
             <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
                Search
                </button>
        </form>
        </section>
    );
    }