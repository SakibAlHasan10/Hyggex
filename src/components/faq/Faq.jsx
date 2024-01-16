const Faq = () => {
  return (
    <div className="w-[848px]">
        <h1 className="text-5xl mb-12 font-bold bg-gradient-to-b text-center from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text">FAQ</h1>
      <div className="join join-vertical w-full">
        <div className="collapse mb-8 collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4"/>
          <div className="collapse-title text-xl font-medium">
            Can education flashcards be used for all age groups?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse mb-8 collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How do education flashcards work?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse mb-8 collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can education flashcards be used for test preparation?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
