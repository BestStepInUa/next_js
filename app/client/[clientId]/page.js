// client/:id

export default function ClientId({ params }) {
  return (
    <div>
      <h1>ClientId сторінка</h1>
      <p>ClientId: {params.clientId}</p>
    </div>
  );
}
