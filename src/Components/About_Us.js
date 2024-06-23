import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="bg-blue-100 p-3 m-5 shadow-md dark:bg-neutral-700">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl text-blue-950 dark:text-neutral-200">
          {title}
        </h1>
        <button
          className="font-bold w-14 h-7 m-2 rounded-sm bg-blue-700 text-white dark:bg-white dark:text-neutral-800"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? <span>Hide</span> : <span>Show</span>}
        </button>
      </div>
      {isVisible && (
        <p className="italic text-justify dark:text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
};

const AboutUs = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div className="h-screen m-srceen dark:bg-neutral-800">
      <h1 className="font-bold text-4xl p-4 dark:text-neutral-200">ABOUT US</h1>
      <Section
        title={"ABOUT FOODHUNT"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        isVisible={visibleSection == "About"}
        setIsVisible={() => setVisibleSection("About")}
      />
      <Section
        title={"OUR TEAM"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        isVisible={visibleSection == "Team"}
        setIsVisible={() => setVisibleSection("Team")}
      />
      <Section
        title={"OUR SERVICES"}
        description={
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        }
        isVisible={visibleSection == "Services"}
        setIsVisible={() => setVisibleSection("Services")}
      />
    </div>
  );
};

export default AboutUs;
