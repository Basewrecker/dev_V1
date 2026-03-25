const AboutPage = () => {
    return (
        <>
        <div className="max-w-5xl mx-auto px-6 py-16 bg-gray-900">
            <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
                <img src="/images/profile.jpg" alt="profile_main" className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"/>
                <h1 className = "text-3xl font-bold text-white mb-2">
               Lorem, ipsum.
                </h1>
                <p className="text-gray-300 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro labore esse fugit molestias provident expedita eum debitis dignissimos quo.
                </p>
            </div>
            <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">
                My Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus natus quae amet nam laudantium quod aliquam itaque, quis quos possimus atque non doloribus. Sapiente at esse sint quibusdam quia?
            </p>
        </div>

        <h2 className="text-2xl font-semibold text-white mb-4">
            Tech I use
        </h2>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
            
                {[
                    'React',
                    'typescript',
                    'javascript',
                    'tailwindcss',
                    'node.js',
                    'express',
                    'vite',
                    'framer-motion',
                    'html5',
                    'css3',
                    'git',
                    'redux',
                    'mongodb',
                    'next.js'
                ].map(tech => (
                    <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">{tech}</li>
                ))}
            
        </ul>
        </div>

        

        

        </>
    )
}

export default AboutPage;
