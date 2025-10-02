import './ScientistCard.css';

export default function ScientistCard({ name, image, profession, awards, awardsList, discovery }) {
  return (
    <div className="card-container">
      <h3 style={{ marginBottom: "1rem" }}>{name}</h3>
      <div style={{ display: "flex", gap: 10 }}>
        <img
          src={image}
          alt={name}
          className="profile-img"
          width={70}
          height={70}
        />
        <ul style={{ margin: 0 }}>
          <li><b>Profesión:</b> {profession}</li>
          <li>
            <b>Premios: {awards}</b> ({awardsList.join(', ')})
          </li>
          <li>
            <b>Descubrió:</b> {discovery}
          </li>
        </ul>
      </div>
    </div>
  );
}