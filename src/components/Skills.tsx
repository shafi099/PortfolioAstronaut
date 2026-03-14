import skills from "../data/skills";

export default function Skills() {

    return (

        <section className="py-28 max-w-4xl mx-auto px-6">

            <h2 className="text-4xl font-bold mb-12">
                Skills
            </h2>

            {skills.map(skill => (
                <div key={skill.name} className="mb-6">

                    <p className="mb-2">{skill.name}</p>

                    <div className="w-full bg-zinc-800 rounded">

                        <div
                            className="bg-blue-500 h-2 rounded"
                            style={{ width: `${skill.level}%` }}
                        ></div>

                    </div>

                </div>
            ))}

        </section>

    )
}