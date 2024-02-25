interface EvolutionProps{
    label?: string;
    level?:string;
    image?:string;
}

export default function EvolucionCard(props:EvolutionProps) {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4">
        <div className="text-center">
            <img
                src={props.image}
                className="mx-auto mb-4 w-32 rounded-full"
                alt="Avatar" />
            <h5 className="mb-2 text-xl font-medium leading-tight">{props.label}</h5>
            <p className="text-neutral-500 dark:text-neutral-400">{props.level}</p>
        </div>
    </div>
  );
};

