
interface CardProps {
  stat:{
    value : string,
    description : string
  },
  bgColor : string
}

const Card = ({stat, bgColor} : CardProps) => {
  return (
    <div className={`animated-card flex flex-col gap-2 min-w-24 p-3 rounded ${bgColor}`}>
      <h2 className="text-2xl">{stat.value}</h2>
      <p className="text-md">{stat.description}</p>
    </div>
  )
}

export default Card
