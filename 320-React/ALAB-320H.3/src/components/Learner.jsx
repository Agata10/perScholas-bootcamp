import Score from './Score';
const Learner = ({ learner }) => {
  console.log(learner);
  return (
    <div>
      <h3>Name: {learner.name}</h3>
      <h5>Bio: {learner.bio}</h5>
      {learner.scores.map((s) => (
        <Score key={s.date} score={s} />
      ))}
    </div>
  );
};

export default Learner;
