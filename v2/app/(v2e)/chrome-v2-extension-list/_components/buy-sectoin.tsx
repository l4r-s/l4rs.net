const BuySection = ({ url, showPH }: { url: string, showPH: boolean }) => {
  return (
    <div className='max-w-48 justify-center items-center mx-auto block'>
      <div className="flex items-center space-x-2 mt-4 mx-auto justify-center">
        <span className="bg-gray-300 line-through text-sm font-semibold px-2 py-1 rounded-md text-gray-500">
          $29.99
        </span>
        <span className="bg-[#ffce42] text-gray-800 text-2xl font-bold px-3 py-1 rounded-md shadow-lg">
          $14.99
        </span>
      </div>
      <div className="mt-4 mx-auto justify-end">
        <a href={url} target="_blank">
          <button className="w-full bg-[#4988f5] text-white py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300 block">
            Don't miss out 🚀
          </button>
        </a>
        {showPH && (
          <div className="flex mx-auto justify-center mt-2">
            <a href="https://www.producthunt.com/posts/v2-chrome-extension-list?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-v2-chrome-extension-list" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=481039&theme=light" alt="V2 Chrome Extension List - Discover outdated Chrome extensions that need to be rebuilt | Product Hunt" style={{ width: '250px', height: '54px' }} /></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuySection;