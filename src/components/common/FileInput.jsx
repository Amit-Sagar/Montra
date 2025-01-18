import assets from "../../assets";

const FileInput = ({
  label,
  onChange,
  textChange,
  rounded,
  filled,
  inputRef,
}) => {
  // const fileRef = useRef(null);
  // const openFileInput = () => {
  //   fileRef.current.click();
  // };

  return (
    <div
      className={
        "mt-4 bg-transparent border-2 border-dashed border-[#DFDFDF] bg-gray-100 py-6 mb-7 rounded-lg"
      }
      // onClick={() => {
      //   if (textChange) {
      //     openFileInput();
      //   }
      // }}
    >
      <div className="w-[90%] mx-auto flex flex-col items-center rounded-full">
        <label className="bg-white/[0.05] p-3 rounded-full my-1">
          {/* <Upload /> */}
          <img src={assets.icons.uploadIcon} alt="/" />
        </label>
        <label htmlFor="input" className={` text-[#6938EF] text-center `}>
          Click to upload
        </label>
        <input
          ref={inputRef}
          type="file"
          id="input"
          className={`w-40 text-center hidden`}
          onChange={onChange}
        />
        <div className="text-center mt-1">
          <p className={`text-gray-400 text-xs text-center `}>{label}</p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default FileInput;
