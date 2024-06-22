import React from 'react';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Python', 'Git'];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;