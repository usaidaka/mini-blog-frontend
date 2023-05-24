const SetImage = () => {
  return (
    <div className="columns-1 border-2 border-green-500 flex justify-center items-center">
      <input
        type="image"
        src="https://source.unsplash.com/random?orientation=landscape&category=nature&size=200x200"
        alt=""
        className="rounded-full"
      />
    </div>
  );
};

export default SetImage;
