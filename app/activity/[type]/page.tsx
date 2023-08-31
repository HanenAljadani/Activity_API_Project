
const getActivity = async (type: string) => {
  
  const res = await fetch(`https://www.boredapi.com/api/activity?type=${type}`);
  return res.json();
};


interface Params {
  params: { type: string };
}


async function  Page({params}: Params) {
  const activityData = getActivity(params.type);
  const [activity] = await Promise.all([activityData]);

  return (
    
    <div className="h-screen bg-slate-300 w-full flex justify-center items-center">
      <div className="w-1/4 bg-gray-400 rounded-2xl p-12" >
      <h1 className="font-bold text-slate-700 pb-8">The Activity </h1> 
      
      
      {activity?.activity} 
  </div>
    </div>
  
  );
}
export default Page;

