
function CARD({BlogData}) {
  // const filterdata = list.filter((data) => data.category === "free");

  return (
    <div id="free-book" className="flex flex-wrap justify-evenly items-center md:mt-2">
      {BlogData ?  BlogData.map((p) => (
        <div className="card bg-base-100 w-96 shadow-xl md: mt-8">
          <figure>
            <img src={p.image} alt="Shoes" id="book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {p.title}
              <div className="badge badge-secondary">FREE</div>
            </h2>
            <p>{p.description}</p>
            <div className="card-actions justify-end">
               <button className="btn bg-pink-500 text-white">Read Book</button>
            </div>
          </div>
        </div>
      )):<h1>arry is empty</h1>}
    </div>
  );
}

export default CARD;
