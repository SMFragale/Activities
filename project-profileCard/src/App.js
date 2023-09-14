import "./App.css";

const skills = {
  html: { color: "orange", name: "HTML" },
  java: { color: "orangered", name: "Java" },
  cSharp: { color: "#9F55A7", name: "C#" },
  react: { color: "#007099", name: "React" },
  javaScript: { color: "#FFEC5C", name: "JavaScript" },
};

const data = [
  {
    img: "https://t4.ftcdn.net/jpg/03/69/19/81/360_F_369198116_K0sFy2gRTo1lmIf5jVGeQmaIEibjC3NN.jpg",
    name: "Andrew Bear",
    profile:
      "Full-stack web developer and architect. Design is as Thanos is 'inevitable', the only way to go fast is to go well.",
    skills: [
      skills.html,
      skills.java,
      skills.cSharp,
      skills.react,
      skills.javaScript,
    ],
  },
];

function App() {
  return (
    <div>
      <ProfileCard profile={data[0]} />
    </div>
  );
}

function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <img src={profile.img} alt="programmer" />
      <div className="profile-card-data">
        <h2>{profile.name}</h2>
        <p>{profile.profile}</p>
        <div className="skills">
          {profile.skills.map((skill) => {
            return (
              <span className="skill" style={{ backgroundColor: skill.color }}>
                {skill.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
