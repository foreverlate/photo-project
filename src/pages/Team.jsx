import React from 'react';
    import './Team.css';

    const teamMembers = [
      {
        name: 'John Doe',
        role: 'Lead Photographer',
        image: 'https://placekitten.com/200/200',
        bio: 'John is an experienced photographer with a passion for capturing stunning moments.',
      },
      {
        name: 'Jane Smith',
        role: 'Assistant Photographer',
        image: 'https://placekitten.com/201/201',
        bio: 'Jane is a talented assistant photographer with a keen eye for detail.',
      },
      {
        name: 'Peter Jones',
        role: 'Editor',
        image: 'https://placekitten.com/202/202',
        bio: 'Peter is a skilled editor who brings out the best in every photo.',
      },
    ];

    function Team() {
      return (
        <div className="team-container">
          <h2>Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default Team;
