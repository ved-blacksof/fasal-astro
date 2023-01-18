export default function HeadAtom({
  label,
  title_1,
  title_2,
  title_3,
  des,
  theme,
  className
}: {
  label: string;
  title_1: string;
  title_2?: string;
  title_3?: string;
  des?: string;
  theme?: string;
  className: string;
}) {
  return (
    <div className={`${className}`}>
      {theme === 'light' ? (
        <div>
          <h6 className="h6 opacity-50 font-medium text-white ">{label}</h6>
          <h3 className="h1 font-bold text-white mt-2 leading-tight">
            {title_1} <span className="text-yellow">{title_2}</span>
            {title_3}
          </h3>
          <h3 className="h5 text-white leading-snug md:mt-6 mt-4">{des}</h3>
        </div>
      ) : (
        <div>
          <h6 className="h6 opacity-50 font-medium ">{label}</h6>
          <h3 className="h1 font-bold text-black mt-2 leading-tight">
            {title_1} <span className="text-green">{title_2}</span>
            {title_3}
          </h3>
          <h3 className="h5 text-black leading-snug md:mt-6 mt-4">{des}</h3>
        </div>
      )}
    </div>
  );
}
