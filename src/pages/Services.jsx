const Services = () => {
  return (
    <section
      id="services"
      className="lg:h-auto bg-sky-600 pb-10 text-white p-10 pt-10 lg:w-[100%]"
    >
      <div className="bg-neutral-800 rounded-lg lg:h-auto pb-10 sm:justify-center -mx-5">
        <h3 className="lg:text-4xl text-3xl font-bold lg:pl-10 flex justify-center pt-7 pb-5">
          Services
        </h3>
        <div className="lg:flex md:flex">
          <ul className="lg:pl-10 lg:text-2xl mb-7 px-5 max-[1024px]:text-lg">
            <li>• Master Plant Planning</li>
            <li>• Architectural and Civil layouts</li>
            <li>• Preparation of sizing of utility & Plant layout</li>
            <li>• Budgeting costs and constructability review</li>
            <li>• Structural Analysis and Design</li>
            <li>• 3D Tekla structural Modeling / Fabrication Drawings</li>
            <li>• Preparing shop drawings / Fabrication Drawings</li>
            <li>• Third party review</li>
          </ul>
          <ul className="lg:text-1xl lg:pl-40 px-5 max-[1024px]:ml-0">
            <li className="pl-0 lg:text-2xl text-lg mb-2 ">
              • BIM Implementation Strategies
            </li>
            <ol className="ml-5 lg:text-lg">- BIM Modeling</ol>
            <ol className="ml-5 lg:text-lg">
              - BIM Coordination Design Services
            </ol>
            <ol className="ml-5 lg:text-lg">- Clash analysis and execution.</ol>
            <ol className="ml-5 lg:text-lg">- Quantities and BOQ Analysis</ol>
            <ol className="ml-5 pb-5 lg:text-lg">
              - Construction documents and shop drawings.
            </ol>
            <li className="pl-0 lg:text-2xl text-lg mb-2">• BIM Consultancy</li>
            <ol className="ml-5 lg:text-lg">- CAD to BIM conversion.</ol>
            <ol className="ml-5 lg:text-lg">- Establishing BIM standards.</ol>
            <ol className="ml-5 lg:text-lg">- Execution plan for BIM</ol>
            <ol className="ml-5 lg:text-lg">
              - Managing Autodesk Construction Cloud
            </ol>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
