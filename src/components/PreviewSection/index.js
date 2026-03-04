import Card from '../Card';

function PreviewSection({ questions }) {
  return (
    <>
      {questions.map((question, index) => (
        <Card key={index} title={question.title} desc={question.desc}>
          Body
        </Card>
      ))}
    </>
  );
}

export default PreviewSection;
