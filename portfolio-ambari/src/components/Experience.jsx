import React from 'react';

const Experience = () => {
  const experiences = [
    { company: 'Company A', position: 'Software Developer', duration: '2020 - Present' },
    { company: 'Company B', position: 'Junior Developer', duration: '2018 - 2020' },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold">{exp.position}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;