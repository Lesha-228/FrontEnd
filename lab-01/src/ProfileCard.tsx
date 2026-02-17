// 1. Импортируем твое фото из папки assets
import myAvatar from './assets/lesha228.jpg'; 

const ProfileCard = () => {
  const containerStyle = {
    width: "300px",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    textAlign: "center" as const,
    fontFamily: "Arial",
    backgroundColor: "#fff", // Добавил фон, чтобы карточку было лучше видно
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // Немного тени для красоты
    margin: "20px auto"
  };

  const imageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover" as const,
    marginBottom: "10px",
    border: "2px solid #4f46e5" // Ободок вокруг фото
  };

  const buttonStyle = {
    padding: "10px 16px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const name = "Alexey Khohklov";
  const bio = "Love music, game. Love Dark Souls.";

  return (
    <div style={containerStyle}>
      {/* 2. Заменяем ссылку на переменную myAvatar */}
      <img
        src={myAvatar} 
        alt="Profile"
        style={imageStyle}
      />
      <h2 style={{ color: "#333" }}>{name}</h2>
      <p style={{ color: "#666" }}>{bio}</p>
      <button style={buttonStyle}>Follow</button>
    </div>
  );
};

export default ProfileCard;