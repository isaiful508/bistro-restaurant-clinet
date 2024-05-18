import chefimg from '../../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className="mb-20 bg-cover bg-no-repeat h-[576px] w-ull relative" 
        style={{ backgroundImage: `url(${chefimg})` }}
        >
           

            <div className='mb-20  cinzel-400 flex justify-center items-center flex-col border-2 h-[330px] w-[1096px] bg-white absolute mt-10 ml-[120px] p-16'  >
                <h2 className='text-5xl'>Bistro Boss</h2>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>

        </div>
    );
};

export default ChefService;