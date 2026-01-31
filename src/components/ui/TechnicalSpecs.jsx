const TechnicalSpecs = ({ specs, title = "Technical Specifications" }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-wg-border overflow-hidden">
      <div className="bg-wg-navy text-white px-6 py-4">
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="p-6">
        <table className="w-full">
          <tbody className="divide-y divide-wg-border">
            {specs.map((spec, index) => (
              <tr key={index}>
                <td className="py-3 text-wg-navy/70 font-medium pr-4">{spec.label}</td>
                <td className="py-3 text-wg-navy text-right">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechnicalSpecs;
