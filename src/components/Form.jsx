const FormInput = ({ inputValue, onInputChange, onGenerateQrCode }) => {
  return (
    <form
      onSubmit={onGenerateQrCode}
      className="flex flex-col md:flex-row gap-2"
    >
      <input
        className="px-2 py-2 border border-slate-300 rounded-lg flex-1 focus:outline-blue-400 font-semibold"
        placeholder="Enter URL or text..."
        value={inputValue}
        onChange={onInputChange}
        type="text"
      />
      <button
        type="submit"
        className="bg-blue-400 text-white font-semibold rounded-lg px-5 py-2"
      >
        Generate
      </button>
    </form>
  );
};

export default FormInput;
