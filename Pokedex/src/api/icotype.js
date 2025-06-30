// Primero, crea un objeto con los iconos para cada tipo
const typeIcons = {
  normal: '⭐',
  fire: '🔥',
  water: '💧',
  electric: '⚡',
  grass: '🌿',
  ice: '❄️',
  fighting: '🥊',
  poison: '☠️',
  ground: '🏜️',
  flying: '🦅',
  psychic: '🔮',
  bug: '🐛',
  rock: '🪨',
  ghost: '👻',
  dragon: '🐉',
  dark: '🌑',
  steel: '⚙️',
  fairy: '🧚',
  // Agrega más tipos según sea necesario
};

// Luego modifica tu componente
<div className={css.type_color}>
  {itemPokemon.types?.map((ti, index) => {
    const typeName = ti.type.name;
    return (
      <h6
        key={index}
        className={`color-${typeName} ${css.color_type}`}>
        {typeIcons[typeName] || '❓'} {/* Icono por defecto si el tipo no está en el objeto */}
        {typeName}
        <div className={`ico-${css.ico_type}`}></div>
      </h6>
    );
  })}
</div>