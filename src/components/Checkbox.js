import classNames from "classnames";

function Checkbox({ checked, onChange }) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden peer"
      />
      <div
        className={classNames(
          "w-6 h-6 border-2 border-[#7e9fe5] rounded-md flex items-center justify-center peer-checked:bg-[#7e9fe5] peer-checked:border-[#7e9fe5] transition-all duration-200 hover:border-[#7e9fe5]/80",
          {
            "bg-[#7e9fe5] text-white font-bold": checked,
          }
        )}
      >
        {checked ? <>&#10003;</> : null}
      </div>
    </label>
  );
}

export default Checkbox;
