type HeadingProps = {
    title: string;
    description: string;
    total?:number
  };
  
  const Heading = ({ title, description, total }: HeadingProps) => {
    return (
      <div>
        <h2 className="text-3xl font-bold tracking-tighter ">{title}</h2>
        <p className="text-sm text-muted-foreground">{description} <span className="text-xl font-bold text-primary">{total}</span></p>
      </div>
    );
  };
  
  export default Heading;
  