import CountUp from "react-countup";
import "./contribution-counter.scss";

export const ContributionCounter = () => {
  // TODO: connects to /stats/count using react-query

  const stats = {
    changes: 327892,
    users: 227,
    projects: 173,
  };

  return (
    <section className="contribution-counter">
      <div className="contribution-counter__changes">
        <CountUp start={stats.changes * 0.5} end={stats.changes} delay={0}>
          {({ countUpRef }) => (
            <span>
              <span ref={countUpRef} /> Post Changes
            </span>
          )}
        </CountUp>
      </div>
      <div className="contribution-counter__users">
        <CountUp start={stats.users * 0.5} end={stats.users} delay={0}>
          {({ countUpRef }) => (
            <span>
              by <span ref={countUpRef} /> Users
            </span>
          )}
        </CountUp>
      </div>
      <div className="contribution-counter__projects">
        <CountUp start={stats.projects * 0.5} end={stats.projects} delay={0}>
          {({ countUpRef }) => (
            <span>
              via <span ref={countUpRef} /> Projects
            </span>
          )}
        </CountUp>
      </div>
    </section>
  );
};
