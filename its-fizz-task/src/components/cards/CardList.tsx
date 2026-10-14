import Card from "./Card";

type stat = {
  id : number,
  value : string,
  description : string
}

const stats : stat[] = [
  { id : 1, value: "58%", description: "More memorable brand moments" },
  { id : 2, value: "23%", description: "Less time spent searching" },
  { id : 3, value: "27%", description: "More reasons to take a break" },
  { id : 4, value: "40%", description: "More fizz in everyday life" },
];

const bgColors : string[] = [
  "bg-yellow-200/40",
  "bg-orange-300/25",
  "bg-white/90",
  "bg-stone-200/70"
]


const CardList = () => {
  return (
    <div  className="mx-auto grid w-full max-w-7xl grid-cols-1 items-stretch gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 mt-10 ">
      {stats.map((stat, index)=>(
        <Card key={stat.id} stat={stat} bgColor={bgColors[index]}/>
      ))}
    </div>
  )
}

export default CardList
